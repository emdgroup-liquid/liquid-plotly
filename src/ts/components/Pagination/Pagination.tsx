import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdPagination } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdPagination &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-pagination/ LdPagination}.
 */
const Pagination = (props: Props) => {
  const updateProps = (ev) => {
    props.setProps({ selectedIndex: ev.detail })
  }

  return (
    <LdPagination
      onLdchange={updateProps}
      {...props}
      aria-label={props.ariaLabel}
    />
  )
}

export default Pagination
