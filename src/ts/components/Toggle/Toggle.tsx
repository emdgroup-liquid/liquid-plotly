import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdToggle } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria disabled. */
  ariaDisabled?: boolean
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdToggle['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdToggle, 'autofocus' | 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-toggle/ LdToggle}.
 */
const Toggle = (props: Props) => {
  const { setProps, ariaLabel, ariaDisabled, ...other } = props

  const updateProps = (checked: boolean) => {
    setProps({ checked })
  }

  return (
    <LdToggle
      onLdchange={(ev) => updateProps(ev.detail)}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
      {...other}
    ></LdToggle>
  )
}

export default Toggle
