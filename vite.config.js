const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
})
