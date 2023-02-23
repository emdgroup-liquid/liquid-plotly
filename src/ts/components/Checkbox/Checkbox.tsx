import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdCheckbox } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdCheckbox['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdCheckbox, 'autofocus' | 'tone'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-checkbox/ LdCheckbox}.
 */
const Checkbox = (props: Props) => {
  const { setProps, ariaLabel, tone, ...other } = props

  const updateProps = (checked: boolean) => {
    setProps({ checked })
  }

  return (
    <LdCheckbox
      onLdchange={(ev) => updateProps(ev.detail)}
      aria-label={ariaLabel}
      tone={tone as 'dark' | undefined}
      {...other}
    ></LdCheckbox>
  )
}

export default Checkbox
