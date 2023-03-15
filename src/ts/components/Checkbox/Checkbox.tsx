import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdCheckbox['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use `'dark'` on white backgrounds. Default is a light tone. Takes only effect in conjunction with neutral mode. */
  tone?: string
} & Omit<Components.LdCheckbox, 'autofocus' | 'tone'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-checkbox/ LdCheckbox}.
 */
const Checkbox = (props: Props) => {
  const { setProps, className, ariaLabel, tone, ...other } = props

  const checkboxRef = useRef<HTMLLdCheckboxElement>()

  useEffect(() => {
    checkboxRef.current.addEventListener('ldchange', handleChange)
    return () => {
      checkboxRef.current.removeEventListener('ldchange', handleChange)
    }
  })

  const handleChange = (ev: CustomEvent<boolean>) => {
    updateProps(ev.detail)
  }

  const updateProps = (checked: boolean) => {
    setProps({ checked })
  }

  return (
    <ld-checkbox
      ref={checkboxRef}
      class={className}
      aria-label={ariaLabel}
      tone={tone as 'dark' | undefined}
      {...other}
    ></ld-checkbox>
  )
}

export default Checkbox
