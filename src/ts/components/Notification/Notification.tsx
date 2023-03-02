import React, { Component, useEffect } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdNotification } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
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
  useEffect(() => {
    const ev = props.event
    if (!ev) return
    dispatchEvent(new CustomEvent(ev.name, { detail: ev.detail }))
  }, [props.event])

  return <LdNotification {...props}>{props.children}</LdNotification>
}

export default Notification
