import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("radio-output", "children"),
        Input("radio-orange", "checked"),
        Input("radio-banana", "checked"),
        prevent_initial_call=True,
    )
    def radio(checked_orange, checked_banana):
        if checked_orange is True:
            return "Team chosen: Orange 🍊"
        if checked_banana is True:
            return "Team chosen: Banana 🍌"
        return ""

    return html.Div(
        className="w-full grid grid-cols-2 mb-6 gap-4",
        children=[
            ld.Label(
                position="right",
                size="m",
                children=[
                    "Orange",
                    ld.Radio(id="radio-orange", name="team", value="oragne"),
                    ld.InputMessage(
                        mode="info", children="You'll join the orange team."
                    ),
                ],
            ),
            ld.Label(
                position="right",
                size="m",
                children=[
                    "Banana",
                    ld.Radio(id="radio-banana", name="team", value="banana"),
                    ld.InputMessage(
                        mode="info", children="You'll join the banana team."
                    ),
                ],
            ),
            ld.Typo(className="col-span-2", id="radio-output", children=[""]),
        ],
    )
