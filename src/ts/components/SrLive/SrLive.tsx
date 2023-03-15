import React, { Component, useEffect } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The live event to be dispatched. */
  event?: {
    name: 'ldSrLiveInfo' | 'ldSrLiveAlert'
    detail: string
  }
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdSrLive &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-sr-live/ LdSrLive}.
 */
const SrLive = (props: Props) => {
  const { className, ...other } = props

  useEffect(() => {
    const ev = props.event
    if (!ev) return
    dispatchEvent(new CustomEvent(ev.name, { detail: ev.detail }))
  }, [props.event])

  return <ld-sr-live class={className} {...other} />
}

export default SrLive
