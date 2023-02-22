import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdBreadcrumbs } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdBreadcrumbs &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-breadcrumbs/ LdBreadcrumbs}.
 */
const Breadcrumbs = (props: Props) => {
  return (
    <LdBreadcrumbs {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdBreadcrumbs>
  )
}

export default Breadcrumbs
