import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';

import { createRemarkSelfClosingTagPlugin } from './createRemarkSelfClosingTagPlugin';

// Helper function to process markdown and get the resulting tree
const processMarkdown = (markdown: string, tagName: string) => {
  const processor = unified().use(remarkParse).use(createRemarkSelfClosingTagPlugin(tagName));

  const tree = processor.parse(markdown);
  return processor.runSync(tree);
};

describe('createRemarkSelfClosingTagPlugin', () => {
  const tagName = 'localFile';

  it('should replace a single self-closing tag (parsed as HTML) with a custom node', () => {
    const markdown = `<${tagName} name="test.txt" path="/path/to/test.txt" />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    const node = tree.children[0];
    expect(node.type).toBe(tagName);
    expect(node.data?.hProperties).toEqual({
      name: 'test.txt',
      path: '/path/to/test.txt',
    });
    expect(node.data?.hName).toBe(tagName);
  });

  it('should handle boolean attributes in a standalone tag', () => {
    const markdown = `<${tagName} name="docs" path="/path/to/docs" isDirectory />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    const node = tree.children[0];
    expect(node.type).toBe(tagName);
    expect(node.data?.hProperties).toEqual({
      name: 'docs',
      path: '/path/to/docs',
      isDirectory: true,
    });
    expect(node.data?.hName).toBe(tagName);
  });

  it('should handle tags surrounded by text (parsed within paragraph)', () => {
    const markdown = `Here is a file: <${tagName} name="report.pdf" path="report.pdf" /> Please review.`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');

    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(3);

    expect(paragraphChildren[0].type).toBe('text');
    expect(paragraphChildren[0].value).toBe('Here is a file: ');

    const tagNode = paragraphChildren[1];
    expect(tagNode.type).toBe(tagName);
    expect(tagNode.data?.hProperties).toEqual({
      name: 'report.pdf',
      path: 'report.pdf',
    });
    expect(tagNode.data?.hName).toBe(tagName);

    expect(paragraphChildren[2].type).toBe('text');
    expect(paragraphChildren[2].value).toBe(' Please review.');
  });

  it('should handle multiple tags within the same text block', () => {
    const markdown = `File 1: <${tagName} name="a.txt" path="a" /> and File 2: <${tagName} name="b.txt" path="b" isDirectory />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');

    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(4);

    expect(paragraphChildren[0].value).toBe('File 1: ');

    const tagNode1 = paragraphChildren[1];
    expect(tagNode1.type).toBe(tagName);
    expect(tagNode1.data?.hProperties).toEqual({ name: 'a.txt', path: 'a' });
    expect(tagNode1.data?.hName).toBe(tagName);

    expect(paragraphChildren[2].value).toBe(' and File 2: ');

    const tagNode2 = paragraphChildren[3];
    expect(tagNode2.type).toBe(tagName);
    expect(tagNode2.data?.hProperties).toEqual({
      name: 'b.txt',
      path: 'b',
      isDirectory: true,
    });
    expect(tagNode2.data?.hName).toBe(tagName);
  });

  it('should handle standalone tags with no attributes', () => {
    const markdown = `<${tagName} />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    const node = tree.children[0];
    expect(node.type).toBe(tagName);
    expect(node.data?.hProperties).toEqual({});
    expect(node.data?.hName).toBe(tagName);
  });

  it('should ignore tags with different names (parsed within a paragraph)', () => {
    const markdown = `<other_tag name="ignore_me" /> <${tagName} name="process_me" path="/p" />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');

    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(2);

    expect(paragraphChildren[0].type).toBe('text');
    expect(paragraphChildren[0].value).toBe('<other_tag name="ignore_me" /> ');

    const tagNode = paragraphChildren[1];
    expect(tagNode.type).toBe(tagName);
    expect(tagNode.data?.hProperties).toEqual({ name: 'process_me', path: '/p' });
    expect(tagNode.data?.hName).toBe(tagName);
  });

  it('should not modify markdown without the target tag', () => {
    const markdown = 'This is just regular text.';
    const tree = processMarkdown(markdown, tagName);
    const originalTree = unified().use(remarkParse).parse(markdown);

    expect(tree).toEqual(originalTree);
  });

  it('should work with a different tag name provided to the creator', () => {
    const otherTagName = 'customData';
    const markdown = `Data: <${otherTagName} id="123" value="abc" active />`;
    const tree = processMarkdown(markdown, otherTagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');
    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(2);

    expect(paragraphChildren[0].value).toBe('Data: ');

    const tagNode = paragraphChildren[1];
    expect(tagNode.type).toBe(otherTagName);
    expect(tagNode.data?.hProperties).toEqual({ id: '123', value: 'abc', active: true });
    expect(tagNode.data?.hName).toBe(otherTagName);
  });

  it('should handle tag at the beginning of the text', () => {
    const markdown = `<${tagName} name="start.log" path="/logs/start.log" /> Log started.`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');
    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(2);

    const tagNode = paragraphChildren[0];
    expect(tagNode.type).toBe(tagName);
    expect(tagNode.data?.hProperties).toEqual({ name: 'start.log', path: '/logs/start.log' });
    expect(tagNode.data?.hName).toBe(tagName);

    expect(paragraphChildren[1].type).toBe('text');
    expect(paragraphChildren[1].value).toBe(' Log started.');
  });

  it('should handle tag at the end of the text', () => {
    const markdown = `Log ended: <${tagName} name="end.log" path="/logs/end.log" />`;
    const tree = processMarkdown(markdown, tagName);

    expect(tree.children).toHaveLength(1);
    expect(tree.children[0].type).toBe('paragraph');
    const paragraphChildren = tree.children[0].children;
    expect(paragraphChildren).toHaveLength(2);

    expect(paragraphChildren[0].type).toBe('text');
    expect(paragraphChildren[0].value).toBe('Log ended: ');

    const tagNode = paragraphChildren[1];
    expect(tagNode.type).toBe(tagName);
    expect(tagNode.data?.hProperties).toEqual({ name: 'end.log', path: '/logs/end.log' });
    expect(tagNode.data?.hName).toBe(tagName);
  });

  it('should handle tag within a list item and generate snapshot', () => {
    const markdown = `
1. 文件名：飞机全书 一部明晰可见的历史.pdf
   - 路径1：<${tagName} name="飞机全书 一部明晰可见的历史.pdf" path="/Users/abc/Zotero/storage/ASBMAURK/飞机全书 一部明晰可见的历史.pdf" />
   - 路径2：/Users/abc/Downloads/测试 PDF/飞机全书 一部明晰可见的历史.pdf

这是一本 PDF 格式的书，并且在你的 Zotero 和 Downloads 文件夹里都能找到。如果需要进一步操作，比如阅读或者提取内容，可以告诉我
`;
    const tree = processMarkdown(markdown, tagName);
    expect(tree).toMatchSnapshot();
  });
});
