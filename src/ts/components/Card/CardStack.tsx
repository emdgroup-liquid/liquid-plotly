import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdCardStack } from '@emdgroup-liquid/liquid/dist/react'
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
  return <LdCardStack {...props}>{props.children}</LdCardStack>
}

export default CardStack
