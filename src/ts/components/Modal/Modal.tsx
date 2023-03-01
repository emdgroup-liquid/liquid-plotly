import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdModal } from '@emdgroup-liquid/liquid/dist/react'
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
  return <LdModal {...props}>{props.children}</LdModal>
}

export default Modal
