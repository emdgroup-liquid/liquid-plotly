import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("select-output", "children"),
        Input("select-input", "value"),
        prevent_initial_call=True,
    )
    def handle_select(values):
        return "Your pick: " + ", ".join(values)

    @callback(
        Output("select-multi-output", "children"),
        Input("select-multi-input", "value"),
        prevent_initial_call=True,
    )
    def handle_select_multi(values):
        if len(values) == 0:
            return ""
        return "Your pick: " + ", ".join(values)

    return html.Div(
        className="w-full",
        children=[
            ld.Label(
                className="mb-2 w-full",
                children=[
                    "Single select",
                    ld.Select(
                        id="select-input",
                        className="w-full",
                        placeholder="Pick a fruit",
                        name="fruit",
                        children=[
                            ld.Option(value="🍏", children="Apple"),
                            ld.Option(value="🍌", children="Banana"),
                            ld.Option(value="🍓", children="Strawberry"),
                        ],
                    ),
                ],
            ),
            ld.Typo(className="mb-6", id="select-output", children=[""]),
            ld.Label(
                className="mb-2 w-full",
                children=[
                    "Multi select",
                    ld.Select(
                        id="select-multi-input",
                        className="w-full",
                        placeholder="Pick some vegetables",
                        name="fruit",
                        multiple=True,
                        children=[
                            ld.Option(value="🥔", children="Potato"),
                            ld.Option(value="🥦", children="Broccoli"),
                            ld.Option(value="🥕", children="Carrot"),
                            ld.Option(value="🫑", children="Paprica"),
                            ld.Option(value="🍅", children="Tomato"),
                        ],
                    ),
                ],
            ),
            ld.Typo(className="mb-6", id="select-multi-output", children=[""]),
        ],
    )
