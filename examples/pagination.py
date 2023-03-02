import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("pagination-index", "children"),
        Input("pagination", "selectedIndex"),
        prevent_initial_call=True,
    )
    def update_index(selected_index):
        return str(selected_index)

    return html.Div(
        className="w-full mb-6",
        children=[
            ld.Pagination(
                id="pagination", className="mb-2 block", size="sm", length=15, offset=0
            ),
            ld.Typo(
                [
                    html.Span("Current pagination index: "),
                    html.Span(id="pagination-index", children="0"),
                ]
            ),
        ],
    )
