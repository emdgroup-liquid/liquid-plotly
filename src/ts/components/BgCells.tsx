import React, { Component } from 'react'
import { type Components } from '@emdgroup-liquid/liquid/dist/types/components'
import { LdBgCells } from '@emdgroup-liquid/liquid/dist/react'
import { DashComponentProps } from '../props'

type Props = {
  /** Animate the pattern. */
  animated?: Components.LdBgCells['animated']
  /** CSS classes. */
  className?: string
  /** CSS styles. */
  style?: React.CSSProperties
  /** Use 3 color layers. */
  threeLayers?: Components.LdBgCells['threeLayers']
  /** Cells pattern. */
  type?: Components.LdBgCells['type']
} & Omit<Components.LdBgCells, 'animated' | 'threeLayers' | 'type'> &
  DashComponentProps

/**
 * {@link https://liquid.merck.design/liquid/components/ld-bg-cells/ LdBgCells}.
 */
const BgCells = (props: Props) => {
  return <LdBgCells {...props} />
}

export default BgCells
