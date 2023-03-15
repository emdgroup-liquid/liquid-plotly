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
} & Components.LdLoading &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-loading/ LdLoading}.
 */
const Loading = (props: Props) => {
  const { className, ...other } = props

  return <ld-loading class={className} {...other} />
}

export default Loading
