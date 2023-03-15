import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria disabled. */
  ariaDisabled?: boolean
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdSwitchItem, 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-switch/ld-switch-item/ LdSwitchItem}.
 */
const SwitchItem = (props: Props) => {
  const { setProps, className, ariaLabel, ariaDisabled, ...other } = props

  return (
    <ld-switch-item
      class={className}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
      {...other}
    >
      {props.children}
    </ld-switch-item>
  )
}

export default SwitchItem
