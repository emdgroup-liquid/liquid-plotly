import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTablist } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdTablist &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-tabs/ld-tablist/ LdTablist}.
 */
const TabPanelList = (props: Props) => {
  return (
    <LdTablist {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTablist>
  )
}

export default TabPanelList
