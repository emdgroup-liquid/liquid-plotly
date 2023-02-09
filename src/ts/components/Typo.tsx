import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTypo } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'
import '../utils/init'

type Props = {
  /** The rendered HTML tag. Overrides tag inferred from the variant. */
  tag?: Components.LdTypo['tag']
  /** The font style. Every variant has a default tag that it renders with. */
  variant?: Components.LdTypo['variant']
  /** Since b* and xb* variants are uppercase, screen readers need to be served a (non-uppercase) aria-label (otherwise they will read out the heading letter by letter). If you're using a b* or xb* variant, an aria-label will be set automatically on the element. The component will use the inner HTML for the label implicitly. If you want to set an aria-label explicitly (such as when you have inner HTML that should not be part of the label), you can use this property. */
  ariaLabel?: Components.LdTypo['ariaLabel']
  /** The actual content of the element. */
  children: string | JSX.Element | JSX.Element[]
} & Omit<Components.LdTypo, 'ariaLabel' | 'tag' | 'variant'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-typo/ LdTypo}.
 */
const Typo = (props: Props) => {
  return <LdTypo {...props}>{props.children}</LdTypo>
}

export default Typo
