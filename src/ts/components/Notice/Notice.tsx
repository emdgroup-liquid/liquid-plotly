import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
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
  const { className, children, ...other } = props

  return (
    <ld-notice class={className} {...other}>
      {children}
    </ld-notice>
  )
}

export default Notice
