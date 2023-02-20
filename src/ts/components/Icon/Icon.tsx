import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdIcon } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdIcon &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-icon/ LdIcon}.
 */
const Icon = (props: Props) => {
  return (
    <LdIcon {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdIcon>
  )
}

export default Icon
