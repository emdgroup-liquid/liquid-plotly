import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** Size of the button. Default is medium. */
  size?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdCard, 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-card/ LdCard}.
 */
const Card = (props: Props) => {
  return (
    <ld-card
      class={props.className}
      {...props}
      size={props.size as Components.LdCard['size']}
    >
      {props.children}
    </ld-card>
  )
}

export default Card
