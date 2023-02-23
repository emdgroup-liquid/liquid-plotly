import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdHeader } from '@emdgroup-liquid/liquid/dist/react'
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
    <LdHeader {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdHeader>
  )
}

export default Header
