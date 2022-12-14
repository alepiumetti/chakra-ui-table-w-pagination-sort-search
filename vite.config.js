import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/chakra-ui-table-w-pagination-sort-search/",
	plugins: [react()],
});
