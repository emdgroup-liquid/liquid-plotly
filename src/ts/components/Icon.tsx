import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdIcon } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'
import '../utils/init'

type Props = {
  /** The actual content of the element. */
  children?: string | JSX.Element
} & Components.LdIcon &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-typo/ LdIcon}.
 */
const Icon = (props: Props) => {
  return <LdIcon {...props}>{props.children}</LdIcon>
}

export default Icon
