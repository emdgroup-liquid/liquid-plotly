import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** Slot name. */
  slot?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdModal &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-modal/ LdModal}.
 */
const Modal = (props: Props) => {
  const { className, children, ...other } = props

  return (
    <ld-modal class={className} {...other}>
      {children}
    </ld-modal>
  )
}

export default Modal
