import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

import Accordion from './components/Accordion/Accordion'
import AccordionPanel from './components/Accordion/AccordionPanel'
import AccordionSection from './components/Accordion/AccordionSection'
import AccordionToggle from './components/Accordion/AccordionToggle'
import Badge from './components/Badge/Badge'
import BgCells from './components/BgCells/BgCells'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import CardStack from './components/Card/CardStack'
import Checkbox from './components/Checkbox/Checkbox'
import CircularProgress from './components/CircularProgress/CircularProgress'
import Crumb from './components/Breadcrumbs/Crumb'
import Header from './components/Header/Header'
import Icon from './components/Icon/Icon'
import Input from './components/Input/Input'
import InputMessage from './components/InputMessage/InputMessage'
import Label from './components/Label/Label'
import Link from './components/Link/Link'
import Loading from './components/Loading/Loading'
import Modal from './components/Modal/Modal'
import Notice from './components/Notice/Notice'
import SrOnly from './components/SrOnly/SrOnly'
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
  Card,
  CardStack,
  Checkbox,
  CircularProgress,
  Crumb,
  Header,
  Icon,
  Input,
  InputMessage,
  Label,
  Link,
  Loading,
  Modal,
  Notice,
  SrOnly,
  Typo,
}
