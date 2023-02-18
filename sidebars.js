/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  gettingStarted: [
    'getting-started/introduction',
    'getting-started/installation',
    'getting-started/your-first-toolchain',
    'getting-started/examples',
  ],
  cliDsl: [
    'cli-dsl-reference/overview',
    'cli-dsl-reference/toolchain',
    'cli-dsl-reference/subcommands',
    'cli-dsl-reference/constants',
    'cli-dsl-reference/parameters',
    'cli-dsl-reference/command-template',
    'cli-dsl-reference/javascript',
    'cli-dsl-reference/documenting-toolchains',
    'cli-dsl-reference/comments',
    // {
    //   type: 'category',
    //   label: 'Keywords',
    //   items: [
    //     'cli-dsl-reference/keywords/overview',
    //     'cli-dsl-reference/keywords/action',
    //     'cli-dsl-reference/keywords/aliases',
    //     'cli-dsl-reference/keywords/arg',
    //     'cli-dsl-reference/keywords/children',
    //     'cli-dsl-reference/keywords/const',
    //     'cli-dsl-reference/keywords/flag',
    //     'cli-dsl-reference/keywords/override-default',
    //     'cli-dsl-reference/keywords/scope-params',
    //   ]
    // }
  ]
   
};

module.exports = sidebars;
