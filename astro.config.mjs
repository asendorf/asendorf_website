import { defineConfig } from 'astro/config';

function linksOpenInNewTabs() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        node.properties = {
          ...node.properties,
          target: '_blank',
          rel: 'noopener noreferrer'
        };
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }

      if (node.type === 'element' && node.tagName === 'p' && isStandaloneLink(node)) {
        const className = node.properties?.className ?? node.properties?.class;
        const classes = Array.isArray(className)
          ? className
          : typeof className === 'string'
            ? className.split(/\s+/).filter(Boolean)
            : [];

        node.properties = {
          ...node.properties,
          class: [...classes, 'action-link'].join(' ')
        };
      }
    };

    visit(tree);
  };
}

function isStandaloneLink(node) {
  const meaningfulChildren = node.children.filter((child) => {
    return child.type !== 'text' || child.value.trim() !== '';
  });

  return meaningfulChildren.length === 1
    && meaningfulChildren[0].type === 'element'
    && meaningfulChildren[0].tagName === 'a';
}

export default defineConfig({
  site: 'https://asendorf.github.io',
  base: '/asendorf_website',
  markdown: {
    rehypePlugins: [linksOpenInNewTabs]
  }
});
