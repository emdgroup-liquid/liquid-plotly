import React from 'react'
import { DashComponentProps } from '../props'
import './LiquidPlotly.css'

type Props = {
  label: string
  value: string
} & DashComponentProps

/**
 * Component description
 */
const LiquidPlotly = (props: Props) => {
  const { id } = props
  return <div id={id}>Hello</div>
}

export default LiquidPlotly
