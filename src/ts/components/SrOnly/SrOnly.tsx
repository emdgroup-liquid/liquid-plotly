import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdSrOnly } from '@emdgroup-liquid/liquid/dist/react'
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
} & Omit<Components.LdSrOnly, 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-sr-only/ LdSrOnly}.
 */
const SrOnly = (props: Props) => {
  return (
    <LdSrOnly {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdSrOnly>
  )
}

export default SrOnly
