import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdBadge } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** Size of the Badge. Default is small. */
  size?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdBadge, 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-badge/ LdBadge}.
 */
const Badge = (props: Props) => {
  return (
    <LdBadge
      {...props}
      aria-label={props.ariaLabel}
      size={props.size as Components.LdBadge['size']}
    >
      {props.children}
    </LdBadge>
  )
}

export default Badge
