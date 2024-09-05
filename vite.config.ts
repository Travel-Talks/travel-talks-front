import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg?react',
        }),
        tsconfigPaths(),
        visualizer({
            filename: './build/report.html',
            open: true,
            brotliSize: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        devSourcemap: true,
    },
    /** TODO: build vite config 추가 생성 필요 */
    server: {
        port: 3000,
    },
})
