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
} & Components.LdAccordionToggle &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-accordion/ld-accordion-toggle/ LdAccordionToggle}.
 */
const AccordionToggle = (props: Props) => {
  return (
    <ld-accordion-toggle class={props.className} {...props}>
      {props.children}
    </ld-accordion-toggle>
  )
}

export default AccordionToggle
