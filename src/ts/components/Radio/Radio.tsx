import React, { Component, useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdRadio } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdRadio['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdRadio, 'autofocus' | 'tone'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-radio/ LdRadio}.
 */
const Radio = (props: Props) => {
  const { setProps, ariaLabel, tone, ...other } = props

  const handleChange = (checked: boolean) => {
    setProps({ checked })
  }

  const handleMutation = (ev) => {
    const input = radioRef.current.shadowRoot.querySelector('input')
    if (!input.checked) {
      setProps({ checked: false })
    }
  }

  const radioRef = useRef<HTMLLdRadioElement>()

  useEffect(() => {
    const observer = new MutationObserver(handleMutation)
    observer.observe(radioRef.current.shadowRoot, {
      subtree: true,
      childList: false,
      attributes: true,
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <LdRadio
      onLdchange={(ev) => handleChange(ev.detail)}
      ref={radioRef}
      aria-label={ariaLabel}
      tone={tone as 'dark' | undefined}
      {...other}
    ></LdRadio>
  )
}

export default Radio
