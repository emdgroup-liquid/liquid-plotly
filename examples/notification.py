import liquid_plotly as ld
from dash import callback, html, Input, Output


def example():
    @callback(
        Output("notification", "event"),
        Input("notification-trigger", "n_clicks"),
        prevent_initial_call=True,
    )
    def show_notification(n_clicks):
        ev = {
            "name": "ldNotificationAdd",
            "detail": {
                "content": "Yay! A notification! 🥳",
                "type": "info",
            },
        }
        return ev

    return html.Div(
        children=[
            ld.Button(
                id="notification-trigger",
                className="mb-6",
                children="Show notification",
            ),
            ld.Notification(id="notification", placement="bottom"),
        ],
    )
