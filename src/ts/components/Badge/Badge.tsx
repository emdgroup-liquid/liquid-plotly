import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** Size of the badge. Default is small. */
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
    <ld-badge
      class={props.className}
      {...props}
      aria-label={props.ariaLabel}
      size={props.size as Components.LdBadge['size']}
    >
      {props.children}
    </ld-badge>
  )
}

export default Badge
