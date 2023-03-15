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
  /** Size of the tooltip. Default is medium. */
  size?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdTooltip, 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-tooltip/ LdTooltip}.
 */
const Tooltip = (props: Props) => {
  return (
    <ld-tooltip
      class={props.className}
      {...props}
      aria-label={props.ariaLabel}
      size={props.size as Components.LdTooltip['size']}
    >
      {props.children}
    </ld-tooltip>
  )
}

export default Tooltip
