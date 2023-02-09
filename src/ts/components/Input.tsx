import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdInput } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'
import '../utils/init'

type Props = {
  tone?: string
  autofocus?: boolean
} & Omit<Omit<Components.LdInput, 'tone'>, 'autofocus'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-input/ LdInput}.
 */
const Input = (props: Props) => {
  // @ts-ignore
  return <LdInput {...props} />
}

export default Input
