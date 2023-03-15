import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
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
const AccordionPanel = (props: Props) => {
  return (
    <ld-accordion-panel class={props.className} {...props}>
      {props.children}
    </ld-accordion-panel>
  )
}

export default AccordionPanel
