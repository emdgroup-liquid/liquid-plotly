import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdInput['autofocus']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
  /** Input tone. Use `'dark'` on white backgrounds. Default is a light tone. */
  tone?: string
} & Omit<Components.LdInput, 'tone' | 'autofocus'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-input/ LdInput}.
 */
const Input = (props: Props) => {
  const { setProps, className, ariaLabel, tone, ...other } = props

  const inputRef = useRef<HTMLLdInputElement>()

  useEffect(() => {
    inputRef.current.addEventListener('ldinput', handleInput)
    return () => {
      inputRef.current.removeEventListener('ldinput', handleInput)
    }
  })

  const handleInput = (ev: CustomEvent<string>) => {
    updateProps(ev.detail)
  }

  const updateProps = (value: string) => {
    setProps({ value })
  }

  return (
    <ld-input
      ref={inputRef}
      class={className}
      aria-label={ariaLabel}
      tone={tone as 'dark' | undefined}
      {...other}
    />
  )
}

export default Input
