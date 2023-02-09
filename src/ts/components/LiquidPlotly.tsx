import React from 'react'
import { DashComponentProps } from '../props'
import './LiquidPlotly.css'

type Props = {
  /** The label */
  label: string
  /** The value */
  value: string
} & DashComponentProps

/**
 * Component description
 */
const LiquidPlotly = (props: Props) => {
  const { id } = props
  return (
    <div className="foo" id={id}>
      Hello
    </div>
  )
}

export default LiquidPlotly
