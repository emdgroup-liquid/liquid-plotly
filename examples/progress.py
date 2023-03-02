import liquid_plotly as ld
from dash import html


def example():
    return html.Div(
        className="mb-6",
        children=[
            ld.SrOnly(id="progress-label", children="Progress"),
            ld.Progress(
                ariaLabeledBy="progress-label",
                ariaValueNow="25",
            ),
        ],
    )
