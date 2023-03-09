import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTable } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdTable &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-table/ LdTable}.
 */
const Table = (props: Props) => {
  return (
    <LdTable {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTable>
  )
}

export default Table
