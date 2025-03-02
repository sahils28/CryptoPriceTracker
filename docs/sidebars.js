// @ts-check

/**
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: "category",
      label: "Crypto Tracker Docs",
      collapsed: false, // Keeps the category expanded by default
      items: [
        "setup-guide",
        "api-integration",
        "state-management",
        "challenges-solutions",
      ],
    },
  ],
};

export default sidebars;