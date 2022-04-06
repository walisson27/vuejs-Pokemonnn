import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import host from 'vite-plugin-host'

export default defineConfig({
  plugins: [
    vue(), 
    VitePWA({
      name: 'Pokedex-vite',
      themeColor: '#DF0101',
      msTileColor: '#BDBDBD',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: '#DF0101',
      iconPaths: {
        favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
        appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'img/icons/safari-pinned-tab.svg',
        msTileImage: 'img/icons/mstile-150x150.png'
      },
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/registerServiceWorker.js',
        
      }
    }),
    host()
  ],
})
