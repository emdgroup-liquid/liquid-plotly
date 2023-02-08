
module LiquidPlotly
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.0.0"

include("jl/ld_liquidplotly.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "liquid_plotly",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "liquid_plotly.umd.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "liquid_plotly.umd.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
