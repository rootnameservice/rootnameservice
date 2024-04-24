import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: (format) => `main.${format}.js`
    },
  },
  resolve: { 
    alias: { 
      src: resolve('src/') 
    } 
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
