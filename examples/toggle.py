import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(Output("toggle-output", "children"), Input("my-toggle", "checked"))
    def toggle(checked):
        return "Yes! 🧐" if checked else "No! 🤪"

    return html.Div(
        className="w-full mb-6",
        children=[
            ld.Label(
                className="w-full mb-2",
                children=[
                    "Are you serious?",
                    ld.Toggle(id="my-toggle"),
                ],
            ),
            ld.Typo(id="toggle-output", children=[""]),
        ],
    )
