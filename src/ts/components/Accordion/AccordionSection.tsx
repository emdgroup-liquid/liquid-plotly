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
} & Components.LdAccordionSection &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-accordion/ld-accordion-section/ LdAccordionSection}.
 */
const AccordionSection = (props: Props) => {
  return (
    <ld-accordion-section class={props.className} {...props}>
      {props.children}
    </ld-accordion-section>
  )
}

export default AccordionSection
