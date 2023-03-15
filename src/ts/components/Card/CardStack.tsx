import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdCardStack &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-card/ld-card-stack/ LdCardStack}.
 */
const CardStack = (props: Props) => {
  const { className, children, ...other } = props

  return (
    <ld-card-stack class={className} {...other}>
      {children}
    </ld-card-stack>
  )
}

export default CardStack
