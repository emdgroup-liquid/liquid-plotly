import React, { useEffect, useRef } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { DashComponentProps } from '../../props'

type Props = {
  /** Aria label. */
  ariaLabel?: string
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
} & Components.LdPagination &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-pagination/ LdPagination}.
 */
const Pagination = (props: Props) => {
  const { setProps, className, ariaLabel, ...other } = props

  const paginationRef = useRef<HTMLLdPaginationElement>()

  useEffect(() => {
    paginationRef.current.addEventListener('ldchange', handleChange)
    return () => {
      paginationRef.current.removeEventListener('ldchange', handleChange)
    }
  })

  const handleChange = (ev: CustomEvent<number>) => {
    updateProps(ev.detail)
  }

  const updateProps = (selectedIndex: number) => {
    setProps({ selectedIndex })
  }

  return (
    <ld-pagination
      class={className}
      ref={paginationRef}
      aria-label={ariaLabel}
      {...other}
    />
  )
}

export default Pagination
