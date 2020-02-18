import { configure, addDecorator, addParameters } from "@storybook/react";
import { setConsoleOptions } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

setConsoleOptions({
  panelExclude: []
});

addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: "TEST",
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: "https://google.com",
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * set add on panel position
     * @type {string}
     */
    panelPosition: "bottom",
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true // true by default
  }
});

const req = require.context("../src", true, /.stories.(tsx|js)$/);

addDecorator(withKnobs());
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
