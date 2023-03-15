import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Since b* and xb* variants are uppercase, screen readers need to be served a (non-uppercase) aria-label (otherwise they will read out the heading letter by letter). If you're using a b* or xb* variant, an aria-label will be set automatically on the element. The component will use the inner HTML for the label implicitly. If you want to set an aria-label explicitly (such as when you have inner HTML that should not be part of the label), you can use this property. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdLink, 'ariaLabel'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-link/ LdLink}.
 */
const Link = (props: Props) => {
  return (
    <ld-link class={props.className} {...props} aria-label={props.ariaLabel}>
      {props.children}
    </ld-link>
  )
}

export default Link
