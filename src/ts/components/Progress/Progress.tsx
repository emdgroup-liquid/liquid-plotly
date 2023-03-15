import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria labeled by. */
  ariaLabeledBy?: string
  /** Aria value max. */
  ariaValueMax?: number
  /** Aria value min. */
  ariaValueMin?: number
  /** Aria value now. */
  ariaValueNow?: number
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
  const {
    className,
    ariaLabel,
    ariaLabeledBy,
    ariaValueMax,
    ariaValueMin,
    ariaValueNow,
    children,
    ...other
  } = props

  return (
    <ld-progress
      class={className}
      {...other}
      aria-label={ariaLabel}
      aria-labeled-by={ariaLabeledBy}
      aria-valuemax={ariaValueMax}
      aria-valuemin={ariaValueMin}
      aria-valuenow={ariaValueNow}
    >
      {children}
    </ld-progress>
  )
}

export default Progress
