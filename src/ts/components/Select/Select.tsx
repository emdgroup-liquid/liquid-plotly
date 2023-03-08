import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdSelect } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdSelect['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
  /** Tab index of the form control. */
  ldTabindex?: Components.LdSelect['ldTabindex']
  /** Readonly value prop. */
  value?: string[]
} & Omit<Components.LdSelect, 'autofocus' | 'ldTabindex'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-select/ LdSelect}.
 */
const Select = (props: Props) => {
  const { setProps, ariaLabel, ...other } = props

  const handleChange = (ev) => {
    setProps({ value: ev.detail })
  }

  return (
    <LdSelect
      onLdchange={(ev) => handleChange(ev)}
      {...other}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </LdSelect>
  )
}

export default Select
