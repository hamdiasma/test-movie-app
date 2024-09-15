const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias `@` to point to the `src` folder
    },
    plugins: [new Dotenv()],
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Add necessary file extensions
  },
};
