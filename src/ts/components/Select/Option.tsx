import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdOption } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdOption &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-select/ld-option/ LdOption}.
 */
const Option = (props: Props) => {
  return (
    <LdOption {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdOption>
  )
}

export default Option
