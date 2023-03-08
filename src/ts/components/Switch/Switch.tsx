import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdSwitch } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria disabled. */
  ariaDisabled?: boolean
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdSwitch['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdSwitch, 'autofocus' | 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-switch/ LdSwitch}.
 */
const Switch = (props: Props) => {
  const { setProps, ariaLabel, tone, ariaDisabled, children, ...other } = props

  const updateProps = (value: string) => {
    setProps({ value })
  }

  return (
    <LdSwitch
      onLdswitchchange={(ev) => updateProps(ev.detail)}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
      {...other}
    >
      {children}
    </LdSwitch>
  )
}

export default Switch
