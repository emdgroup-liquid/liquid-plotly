import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Aria disabled. */
  ariaDisabled?: boolean
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdToggle['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Omit<Components.LdToggle, 'autofocus' | 'ariaDisabled'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-toggle/ LdToggle}.
 */
const Toggle = (props: Props) => {
  const { setProps, className, ariaLabel, ariaDisabled, ...other } = props

  const toggleRef = useRef<HTMLLdToggleElement>()

  const updateProps = (checked: boolean) => {
    setProps({ checked })
  }

  const handleChange = (ev: CustomEvent<boolean>) => {
    updateProps(ev.detail)
  }

  useEffect(() => {
    toggleRef.current.addEventListener('ldchange', handleChange)
    return () => {
      toggleRef.current.removeEventListener('ldchange', handleChange)
    }
  }, [])

  return (
    <ld-toggle
      ref={toggleRef}
      class={className}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled}
      {...other}
    ></ld-toggle>
  )
}

export default Toggle
