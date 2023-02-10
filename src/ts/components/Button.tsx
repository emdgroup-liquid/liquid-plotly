import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdButton } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdInput['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** Tab index of the input. */
  ldTabindex?: Components.LdInput['ldTabindex']
  /** CSS styles. */
  style?: React.CSSProperties
  /** The button type. */
  type?: Components.LdButton['type']
} & Omit<Components.LdButton, 'autofocus' | 'ldTabindex' | 'type'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-button/ LdButton}.
 */
const Button = (props: Props) => {
  const onClick = (ev) => {
    ev.preventDefault()
    props.setProps({ n_clicks: (props['n_clicks'] || 0) + 1 })
  }

  return (
    <LdButton onClick={onClick} {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdButton>
  )
}

export default Button
