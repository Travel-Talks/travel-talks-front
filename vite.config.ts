import react from '@vitejs/plugin-react'
import { resolve } from 'path'
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
        // visualizer({
        //     filename: './build/report.html',
        //     open: true,
        //     brotliSize: true,
        // }),
    ],
    resolve: {
        alias: {
            '@app': resolve(__dirname, 'src/app'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@widgets': resolve(__dirname, 'src/widgets'),
            '@features': resolve(__dirname, 'src/features'),
            '@entities': resolve(__dirname, 'src/entities'),
            '@shared': resolve(__dirname, 'src/shared'),
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
