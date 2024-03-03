import { defineConfig } from "vite"
import { resolve } from "path"
import Inspect from "vite-plugin-inspect"

export default () => {
    return defineConfig({
        root:'src',
        resolve:{
            alias:{
                '@': resolve(__dirname,'src'),
                '@assets': resolve(__dirname,'src/assets'),
                '@components': resolve(__dirname,'src/components'),
                '@commons': resolve(__dirname,'src/components/commons'),
                '@composes': resolve(__dirname,'src/components/composes'),
                '@views': resolve(__dirname,'src/views'),
                '@layouts': resolve(__dirname,'src/layouts'),
                '@styles': resolve(__dirname,'src/styles')
            }
        },
        plugins: [
            Inspect()
        ],
        build:{
            outDir: resolve(__dirname,'dist'),
            rollupOptions:{
                input:resolve(__dirname,'index.html')
            }
        }
    })
}