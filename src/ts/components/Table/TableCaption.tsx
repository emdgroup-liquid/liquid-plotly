import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTableCaption } from '@emdgroup-liquid/liquid/dist/react'
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
} & Components.LdTableCaption &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-table/ld-table-caption/ LdTableCaption}.
 */
const TableCaption = (props: Props) => {
  return (
    <LdTableCaption {...props} aria-label={props.ariaLabel}>
      {props.children}
    </LdTableCaption>
  )
}

export default TableCaption
