# AUTO GENERATED FILE - DO NOT EDIT

export ld_ldinput

"""
    ld_ldinput(;kwargs...)

A LdInput component.

Keyword arguments:
- `label` (String; optional)
- `value` (String; optional)
"""
function ld_ldinput(; kwargs...)
        available_props = Symbol[:label, :value]
        wild_props = Symbol[]
        return Component("ld_ldinput", "LdInput", "liquid_plotly", available_props, wild_props; kwargs...)
end

