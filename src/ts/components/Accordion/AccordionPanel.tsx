import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdAccordionPanel } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdAccordionPanel, 'size'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-accordion/ld-accordion-panel/ LdAccordionPanel}.
 */
const Label = (props: Props) => {
  return <LdAccordionPanel {...props}>{props.children}</LdAccordionPanel>
}

export default Label
