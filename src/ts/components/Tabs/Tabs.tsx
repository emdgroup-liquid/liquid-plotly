import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTabs } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdTabs &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-tabs/ LdTabs}.
 */
const Tabs = (props: Props) => {
  return (
    <LdTabs {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTabs>
  )
}

export default Tabs
