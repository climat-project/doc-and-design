import siteConfig from '@generated/docusaurus.config';
export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism;
  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  // You can mutate PrismObject: registering plugins, deleting languages... As
  // long as you don't re-assign it
  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });

  PrismObject.languages.clidsl = {
    'const': {
      pattern: /(^|\s)const(^|\s)/,
      alias: 'keyword',
    },
    'action': {
      pattern: /(^|\s)action(^|\s)/,
      alias: 'keyword'
    },
    'children': {
      pattern: /(^|\s)children(^|\s)/,
      alias: 'keyword'
    },
    'flag': {
      pattern: /(^|\s)flag(^|\s)/,
      alias: 'keyword'
    },
    'arg': {
      pattern: /(^|\s)arg(^|\s)/,
      alias: 'keyword'
    },
    'sub': {
      pattern: /\bsub\b/,
      alias: 'keyword'
    },
    'aliases': {
      pattern: /\@aliases/,
      alias: 'builtin'
    },
    'alias': {
      pattern: /\@alias/,
      alias: 'builtin'
    },
    'comment': {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    'string': {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
  }

  delete globalThis.Prism;
}
