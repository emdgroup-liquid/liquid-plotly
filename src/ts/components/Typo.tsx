import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTypo } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'
import '../utils/init'

type Props = {
  tag?: string
  variant?: Components.LdTypo['variant']
  ariaLabel?: string
  children: string | JSX.Element | JSX.Element[]
} & Omit<Components.LdTypo, 'ariaLabel' | 'tag' | 'variant'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-typo/ LdTypo}.
 */
const Typo = (props: Props) => {
  return <LdTypo {...props}>{props.children}</LdTypo>
}

export default Typo
