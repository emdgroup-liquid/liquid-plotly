import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** Automatically focus the form control when the page is loaded. */
  autofocus?: Components.LdSelect['autofocus']
  /** CSS classes. */
  className?: string
  /** The actual content of the element. */
  children?: string | JSX.Element
  /** CSS styles. */
  style?: React.CSSProperties
  /** Tab index of the form control. */
  ldTabindex?: Components.LdSelect['ldTabindex']
} & Omit<Components.LdSelect, 'autofocus' | 'ldTabindex'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-select/ LdSelect}.
 */
const Select = (props: Props) => {
  const { setProps, className, ariaLabel, ...other } = props

  const selectRef = useRef<HTMLLdSelectElement>()

  const handleChange = (ev: CustomEvent<string | string[]>) => {
    setProps({ value: ev.detail })
  }

  useEffect(() => {
    selectRef.current.addEventListener('ldchange', handleChange)
    return () => {
      selectRef.current.removeEventListener('ldchange', handleChange)
    }
  }, [])

  return (
    <ld-select
      ref={selectRef}
      class={className}
      aria-label={ariaLabel}
      {...other}
    >
      {props.children}
    </ld-select>
  )
}

export default Select
