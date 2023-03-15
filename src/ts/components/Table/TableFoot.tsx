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
} & Components.LdTableFoot &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-table/ld-table-foot/ LdTableFoot}.
 */
const TableFoot = (props: Props) => {
  return (
    <ld-table-foot
      class={props.className}
      {...props}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </ld-table-foot>
  )
}

export default TableFoot
