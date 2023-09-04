import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ["template.ts"],
    splitting: false,
    sourcemap: true,
    clean: true,
    format: ['esm'],
    publicDir: 'template'
})