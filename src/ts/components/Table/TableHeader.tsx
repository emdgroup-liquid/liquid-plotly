import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTableHeader } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdTableHeader &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-table/ld-table-header/ LdTableHeader}.
 */
const TableHeader = (props: Props) => {
  return (
    <LdTableHeader {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTableHeader>
  )
}

export default TableHeader
