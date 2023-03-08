import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("switch-output", "children"),
        Input("switch-input", "value"),
        prevent_initial_call=True,
    )
    def handle_switch(value):
        return "Your pick: " + value

    return html.Div(
        children=[
            ld.Switch(
                id="switch-input",
                className="mb-2",
                legend="Chemical compound",
                name="chemical-compound",
                children=[
                    ld.SwitchItem(value="🥃", children="Alcohol", checked=True),
                    ld.SwitchItem(value="💧", children="Water"),
                ],
            ),
            ld.Typo(className="mb-6", id="switch-output", children=[""]),
        ],
    )
