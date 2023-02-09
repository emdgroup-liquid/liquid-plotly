// @ts-ignore
import liquidStyles from '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

const styleElement = document.createElement('style')
styleElement.innerText = liquidStyles
document.head.appendChild(styleElement)

// @ts-ignore
window.__LD_ASSET_PATH__ = `${window.location.origin}/liquid`

defineCustomElements()
