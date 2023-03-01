import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdLoading } from '@emdgroup-liquid/liquid/dist/react'
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
  return <LdLoading {...props} />
}

export default Loading
