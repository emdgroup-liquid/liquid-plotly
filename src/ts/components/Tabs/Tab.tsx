import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdTab } from '@emdgroup-liquid/liquid/dist/react'
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
  const { setProps, ariaLabel, ...other } = props

  const onClick = (ev) => {
    setProps({ n_clicks: (props['n_clicks'] || 0) + 1 })
  }

  return (
    <LdTab onClick={onClick} aria-label={ariaLabel} {...other}>
      {props.children}
    </LdTab>
  )
}

export default Tab
