# AUTO GENERATED FILE - DO NOT EDIT

export ld_liquidplotly

"""
    ld_liquidplotly(;kwargs...)

A LiquidPlotly component.
Component description
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `label` (String; required)
- `value` (String; required)
"""
function ld_liquidplotly(; kwargs...)
        available_props = Symbol[:id, :label, :value]
        wild_props = Symbol[]
        return Component("ld_liquidplotly", "LiquidPlotly", "liquid_plotly", available_props, wild_props; kwargs...)
end

