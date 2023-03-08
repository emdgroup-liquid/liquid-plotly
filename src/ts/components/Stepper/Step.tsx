import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdStep } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdStep &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-stepper/ld-step/ LdStep}.
 */
const Step = (props: Props) => {
  const { setProps, ariaLabel, ...other } = props

  const onClick = (ev) => {
    ev.preventDefault()
    setProps({ n_clicks: (props['n_clicks'] || 0) + 1 })
  }

  return (
    <LdStep onClick={onClick} {...other} aria-label={ariaLabel}>
      {props.children}
    </LdStep>
  )
}

export default Step
