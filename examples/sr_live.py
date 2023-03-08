import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("sr-live", "event"),
        Input("sr-live-trigger", "n_clicks"),
        prevent_initial_call=True,
    )
    def show_notification(n_clicks):
        ev = {
            "name": "ldSrLiveInfo",
            "detail": "Click count is " + str(n_clicks),
        }
        return ev

    return html.Div(
        children=[
            ld.Button(
                id="sr-live-trigger",
                className="mb-6",
                children="Announce click count",
            ),
            ld.SrLive(id="sr-live"),
        ],
    )
