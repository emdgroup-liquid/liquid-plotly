import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdInput } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'
import '../utils/init'

type Props = {
  tone?: string
  autofocus?: Components.LdInput['autofocus']
  ldTabindex?: Components.LdInput['ldTabindex']
  type?: Components.LdInput['type']
} & Omit<Components.LdInput, 'tone' | 'autofocus' | 'ldTabindex' | 'type'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-input/ LdInput}.
 */
const Input = (props: Props) => {
  const onInput = (ev: CustomEvent<string>) => {
    props.setProps({ value: ev.detail })
  }

  return (
    <LdInput
      {...props}
      onLdinput={onInput}
      tone={props.tone as 'dark' | undefined}
    />
  )
}

export default Input
