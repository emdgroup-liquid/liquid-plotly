import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdLabel } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Align input message with input position. */
  alignMessage?: Components.LdLabel['alignMessage']
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** Relative position to labeled element. Default is top. */
  position?: Components.LdLabel['position']
  /** Size of the label. Default is small. */
  size?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdLabel, 'alignMessage' | 'position' | 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-label/ LdLabel}.
 */
const Label = (props: Props) => {
  return (
    <LdLabel
      {...props}
      aria-label={props.ariaLabel}
      size={props.size as Components.LdLabel['size']}
    >
      {props.children}
    </LdLabel>
  )
}

export default Label
