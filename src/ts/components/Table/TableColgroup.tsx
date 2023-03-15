import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
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
} & Components.LdTableColgroup &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-table/ld-table-colgroup/ LdTableColgroup}.
 */
const TableColgroup = (props: Props) => {
  return (
    <ld-table-colgroup
      class={props.className}
      {...props}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </ld-table-colgroup>
  )
}

export default TableColgroup
