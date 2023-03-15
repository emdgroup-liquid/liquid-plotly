import React, { Component, useEffect } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The notification event to be dispatched. */
  event?: {
    name: 'ldNotificationAdd' | 'ldNotificationDismiss' | 'ldNotificationClear'
    detail?: {
      content: string
      type?: 'info' | 'alert'
      timeout?: number
    }
  }
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdNotification &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-notification/ LdNotification}.
 */
const Notification = (props: Props) => {
  const { className, ...other } = props

  useEffect(() => {
    const ev = props.event
    if (!ev) return
    dispatchEvent(new CustomEvent(ev.name, { detail: ev.detail }))
  }, [props.event])

  return <ld-notification class={className} {...other} />
}

export default Notification
