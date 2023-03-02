import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdProgress } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria labeled by. */
  ariaLabeledBy?: string
  /** Aria value max. */
  ariaValueMax?: string
  /** Aria value min. */
  ariaValueMin?: string
  /** Aria value now. */
  ariaValueNow?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdProgress &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-progress/ LdProgress}.
 */
const Progress = (props: Props) => {
  return (
    <LdProgress
      {...props}
      aria-label={props.ariaLabel}
      aria-labeled-by={props.ariaLabeledBy}
      aria-value-max={props.ariaValueMax}
      aria-value-min={props.ariaValueMin}
      aria-value-now={props.ariaValueNow}
    >
      {props.children}
    </LdProgress>
  )
}

export default Progress
