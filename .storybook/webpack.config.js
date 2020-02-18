const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          propFilter: prop => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("node_modules");
            }
            return true;
          }
        }
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          parser: "typescript"
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
