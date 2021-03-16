const fse = require('fs-extra');
const visit = require('unist-util-visit');
const toMarkdown = require('mdast-util-to-markdown');
const fromMarkdown = require('mdast-util-from-markdown');

const content = fse.readFileSync('./src/content/Complex.md', 'utf8');

// ast tree
const tree = fromMarkdown(content);

// visit the code nodes and find the example file
// visit(tree, 'code', (node: { value: any; meta: null; }) => {
visit(tree, 'code', node => {
  const json = JSON.parse(String(node.value));

  // read the contents
  const exampleContents = fse.readFileSync(json.react, 'utf8');
  if (exampleContents) {
    // if we have the contents, set the value
    // eslint-disable-next-line no-param-reassign
    node.value = exampleContents;
  }
});

// back to markdown
fse.writeFileSync('./src/content/Complex-full.md', toMarkdown(tree));
