import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

import Accordion from './components/Accordion/Accordion'
import AccordionPanel from './components/Accordion/AccordionPanel'
import AccordionSection from './components/Accordion/AccordionSection'
import AccordionToggle from './components/Accordion/AccordionToggle'
import Badge from './components/Badge/Badge'
import BgCells from './components/BgCells/BgCells'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Button from './components/Button/Button'
import Crumb from './components/Breadcrumbs/Crumb'
import Icon from './components/Icon/Icon'
import Input from './components/Input/Input'
import InputMessage from './components/InputMessage/InputMessage'
import Label from './components/Label/Label'
import Typo from './components/Typo/Typo'

import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

// @ts-ignore
window.__LD_ASSET_PATH__ = window.location.origin

defineCustomElements()

export {
  Accordion,
  AccordionPanel,
  AccordionSection,
  AccordionToggle,
  Badge,
  BgCells,
  Breadcrumbs,
  Button,
  Crumb,
  Icon,
  Input,
  InputMessage,
  Label,
  Typo,
}
