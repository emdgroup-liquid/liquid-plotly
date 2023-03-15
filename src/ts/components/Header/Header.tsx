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
  /** CSS styles. */
  style?: React.CSSProperties
  hidden?: Components.LdHeader['hidden']
} & Omit<Components.LdHeader, 'hidden'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-header/ LdHeader}.
 */
const Header = (props: Props) => {
  return (
    <ld-header class={props.className} {...props} aria-label={props.ariaLabel}>
      {props.children}
    </ld-header>
  )
}

export default Header
