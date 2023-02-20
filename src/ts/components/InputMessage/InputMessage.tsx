import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdInputMessage } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdInputMessage &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-input-message/ LdInputMessage}.
 */
const InputMessage = (props: Props) => {
  return (
    <LdInputMessage {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdInputMessage>
  )
}

export default InputMessage
