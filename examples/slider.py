import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("slider-output", "children"),
        Input("slider-input", "value"),
        prevent_initial_call=True,
    )
    def handle_change(values):
        return "Values: " + ", ".join(map(str, values))

    return html.Div(
        className="w-full mb-6",
        children=[
            ld.Slider(
                id="slider-input",
                className="mb-2",
                value="40,90",
            ),
            ld.Typo(className="mb-6", id="slider-output", children=[""]),
        ],
    )
