import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(Output("checkbox-output", "children"), Input("my-checkbox", "checked"))
    def checkbox(checked):
        return "Sold! 👹" if checked else ""

    return html.Div(
        className="w-full mb-6",
        children=[
            ld.Label(
                className="w-full mb-2",
                children=[
                    "I agree to sell my privacy",
                    ld.Checkbox(id="my-checkbox", tone="dark", name="hello"),
                ],
            ),
            ld.Typo(id="checkbox-output", children=[""]),
        ],
    )
