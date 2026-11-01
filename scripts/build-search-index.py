#!/usr/bin/env python3
"""Refresh the static draft's local search index; Python 3, no packages required."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class PageText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_main = False
        self.in_title = False
        self.in_paragraph = False
        self.skip = 0
        self.title = []
        self.text = []
        self.paragraph = []
        self.paragraphs = []

    def handle_starttag(self, tag, attrs):
        if tag == 'main':
            self.in_main = True
        if tag == 'title':
            self.in_title = True
        if tag in ('script', 'style'):
            self.skip += 1
        if tag == 'p' and self.in_main:
            self.in_paragraph = True
            self.paragraph = []

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip = max(0, self.skip - 1)
        if tag == 'title':
            self.in_title = False
        if tag == 'p' and self.in_paragraph:
            self.paragraphs.append(' '.join(' '.join(self.paragraph).split()))
            self.in_paragraph = False
        if tag == 'main':
            self.in_main = False

    def handle_data(self, value):
        if self.skip:
            return
        if self.in_title:
            self.title.append(value)
        if self.in_main:
            self.text.append(value)
            if self.in_paragraph:
                self.paragraph.append(value)


def main():
    pages = []
    for path in sorted(ROOT.rglob('*.html')):
        relative = path.relative_to(ROOT)
        if set(relative.parts) & {'archive', '.git', 'node_modules'}:
            continue
        if path.name == 'website-design-standards.html':
            continue
        page = PageText()
        page.feed(path.read_text(encoding='utf-8'))
        if not page.text:
            continue
        title = ' '.join(page.title).split(' | ')[0].strip()
        title = re.sub(r' — Design.*', '', title)
        if relative.as_posix() == 'index.html':
            title = 'Denver Rescue Mission — Home'
        description = next((p for p in page.paragraphs if len(p) > 55), f'Explore {title}.')
        if len(description) > 190:
            description = description[:187].rsplit(' ', 1)[0] + '…'
        pages.append({
            'path': relative.as_posix(),
            'title': title,
            'description': description,
            'text': ' '.join(' '.join(page.text).split())[:22000],
        })
    output = ROOT / 'assets' / 'search-index.json'
    output.write_text(json.dumps(pages, ensure_ascii=False, separators=(',', ':')) + '\n', encoding='utf-8')
    print(f'Indexed {len(pages)} pages.')


if __name__ == '__main__':
    main()
