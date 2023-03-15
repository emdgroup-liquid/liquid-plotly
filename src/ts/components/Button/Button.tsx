import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdButton['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdButton, 'autofocus'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-button/ LdButton}.
 */
const Button = (props: Props) => {
  const { setProps, ariaLabel, ...other } = props

  const onClick = (ev) => {
    ev.preventDefault()
    setProps({ n_clicks: (props['n_clicks'] || 0) + 1 })
  }

  return (
    <ld-button
      class={props.className}
      onClick={onClick}
      {...other}
      aria-label={ariaLabel}
    >
      {props.children}
    </ld-button>
  )
}

export default Button
