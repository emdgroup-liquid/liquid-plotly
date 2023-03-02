import liquid_plotly as ld
from dash import html


def example():
    return html.Div(
        className="mb-6",
        children=[
            ld.SrOnly(id="circ-progress-label", children="Progress"),
            ld.CircularProgress(
                ariaLabeledBy="circ-progress-label",
                ariaValueNow="25",
                children=[
                    ld.Typo(variant="b6", children="25%"),
                    ld.Typo(variant="label-s", children="complete"),
                ],
            ),
        ],
    )
