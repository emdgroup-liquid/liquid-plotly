import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Since b* and xb* variants are uppercase, screen readers need to be served a (non-uppercase) aria-label (otherwise they will read out the heading letter by letter). If you're using a b* or xb* variant, an aria-label will be set automatically on the element. The component will use the inner HTML for the label implicitly. If you want to set an aria-label explicitly (such as when you have inner HTML that should not be part of the label), you can use this property. */
  ariaLabel?: Components.LdTypo['ariaLabel']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdTypo, 'ariaLabel'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-typo/ LdTypo}.
 */
const Typo = (props: Props) => {
  return (
    <ld-typo class={props.className} {...props} aria-label={props.ariaLabel}>
      {props.children}
    </ld-typo>
  )
}

export default Typo
