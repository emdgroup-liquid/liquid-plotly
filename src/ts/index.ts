import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

import BgCells from './components/BgCells'
import Button from './components/Button'
import Icon from './components/Icon'
import Input from './components/Input'
import InputMessage from './components/InputMessage'
import Label from './components/Label'
import Typo from './components/Typo'

import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

// @ts-ignore
window.__LD_ASSET_PATH__ = window.location.origin

defineCustomElements()

export { BgCells, Button, Icon, Input, InputMessage, Label, Typo }
