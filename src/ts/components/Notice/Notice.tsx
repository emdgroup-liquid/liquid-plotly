import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdNotice } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdNotice &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-notice/ LdNotice}.
 */
const Notice = (props: Props) => {
  return <LdNotice {...props}>{props.children}</LdNotice>
}

export default Notice
