import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chakra-ui-table-w-pagination-sort-search/",
  build: {
    lib: {
      entry: path.resolve("src", "components/PaginationTable.jsx"),
      name: "table-pagination-chakra-ui",
      fileName: (format) => `table-pagination-chakra-ui.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
