import React, { Component, useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
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
  const { setProps, ariaLabel, tone, name, ...other } = props

  const handleHydration = () => {
    hydrationObserver.disconnect()
    observer.observe(radioRef.current.shadowRoot, {
      subtree: true,
      childList: false,
      attributes: true,
    })
  }

  const handleMutation = (ev) => {
    const input = radioRef.current.shadowRoot.querySelector('input')
    if (!input.checked) {
      setProps({ checked: false })
    }
  }

  const hydrationObserver = new MutationObserver(handleHydration)
  const observer = new MutationObserver(handleMutation)

  const radioRef = useRef<HTMLLdRadioElement>()

  const handleChange = (ev: CustomEvent<boolean>) => {
    updateProps(ev.detail)
  }

  const updateProps = (checked: boolean) => {
    setProps({ checked })
  }

  useEffect(() => {
    radioRef.current.addEventListener('ldchange', handleChange)
    hydrationObserver.observe(radioRef.current, {
      subtree: false,
      childList: false,
      attributes: true,
    })
    return () => {
      observer.disconnect()
      radioRef.current.removeEventListener('ldchange', handleChange)
    }
  }, [])

  return (
    <ld-radio
      ref={radioRef}
      aria-label={ariaLabel}
      tone={tone as 'dark' | undefined}
      name={name || ''}
      {...other}
    ></ld-radio>
  )
}

export default Radio
