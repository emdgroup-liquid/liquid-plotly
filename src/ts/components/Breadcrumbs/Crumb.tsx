import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdCrumb } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdCrumb &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-breadcrumbs/ld-crumb/ LdCrumb}.
 */
const Crumb = (props: Props) => {
  return (
    <LdCrumb {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdCrumb>
  )
}

export default Crumb
