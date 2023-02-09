import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

import Icon from './components/Icon'
import Input from './components/Input'
import Typo from './components/Typo'

import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

// @ts-ignore
window.__LD_ASSET_PATH__ = window.location.origin

defineCustomElements()

export { Icon, Input, Typo }
