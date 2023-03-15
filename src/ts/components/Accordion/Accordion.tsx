import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdAccordion, 'tone'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-accordion/ LdAccordion}.
 */
const Accordion = (props: Props) => {
  return (
    <ld-accordion
      class={props.className}
      {...props}
      tone={props.tone as 'dark' | undefined}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </ld-accordion>
  )
}

export default Accordion
