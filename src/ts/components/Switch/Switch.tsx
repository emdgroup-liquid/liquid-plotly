import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria disabled. */
  ariaDisabled?: boolean
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdSwitch['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdSwitch, 'autofocus' | 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-switch/ LdSwitch}.
 */
const Switch = (props: Props) => {
  const {
    setProps,
    className,
    ariaLabel,
    tone,
    ariaDisabled,
    children,
    ...other
  } = props

  const switchRef = useRef<HTMLLdSwitchElement>()

  const updateProps = (value: string) => {
    setProps({ value })
  }

  const handleChange = (ev: CustomEvent<string>) => {
    updateProps(ev.detail)
  }

  useEffect(() => {
    switchRef.current.addEventListener('ldswitchchange', handleChange)
    return () => {
      switchRef.current.removeEventListener('ldswitchchange', handleChange)
    }
  }, [])

  return (
    <ld-switch
      class={className}
      aria-label={ariaLabel}
      ref={switchRef}
      aria-disabled={ariaDisabled}
      {...other}
    >
      {children}
    </ld-switch>
  )
}

export default Switch
