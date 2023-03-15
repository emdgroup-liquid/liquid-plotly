import React from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdTab &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-tabs/ld-tab/ LdTab}.
 */
const Tab = (props: Props) => {
  const { setProps, className, ariaLabel, ...other } = props

  const onClick = (ev) => {
    setProps({ n_clicks: (props['n_clicks'] || 0) + 1 })
  }

  return (
    <ld-tab
      class={className}
      onClick={onClick}
      aria-label={ariaLabel}
      {...other}
    >
      {props.children}
    </ld-tab>
  )
}

export default Tab
