import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTabpanel } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdTabpanel &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-tabs/ld-tabpanel/ LdTabpanel}.
 */
const TabPanelList = (props: Props) => {
  return (
    <LdTabpanel {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTabpanel>
  )
}

export default TabPanelList
