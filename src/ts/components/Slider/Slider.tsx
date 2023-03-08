import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdSlider } from '@emdgroup-liquid/liquid/dist/react'
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
  /** Tab index of the form control. */
  ldTabindex?: Components.LdSlider['ldTabindex']
} & Omit<Components.LdSlider, 'ldTabindex' | 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-slider/ LdSlider}.
 */
const Slider = (props: Props) => {
  const { setProps, ariaLabel, ariaDisabled, ...other } = props

  const handleChange = (ev) => {
    setProps({ value: ev.detail })
  }

  return (
    <LdSlider
      onLdchange={(ev) => handleChange(ev)}
      aria-disabled={ariaDisabled}
      aria-label={ariaLabel}
      {...other}
    />
  )
}

export default Slider
