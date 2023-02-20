import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdAccordionToggle } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
  /** Tab index of the toggle. */
  ldTabindex?: Components.LdAccordionToggle['ldTabindex']
} & Omit<Components.LdAccordionToggle, 'ldTabindex'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-accordion/ld-accordion-toggle/ LdAccordionToggle}.
 */
const Label = (props: Props) => {
  return <LdAccordionToggle {...props}>{props.children}</LdAccordionToggle>
}

export default Label
