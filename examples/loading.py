import liquid_plotly as ld
from dash import html


def example():
    return html.Div(
        className="flex items-center mb-6",
        children=[
            ld.Loading(className="mr-2"),
            ld.Typo("Still loading...", variant="label-s"),
        ],
    )
