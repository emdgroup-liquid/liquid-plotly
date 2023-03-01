import liquid_plotly as ld
from dash import callback, html, Input, Output, ctx


def example():
    @callback(
        Output("modal", "open"),
        Input("modal-open", "n_clicks"),
        Input("modal-cancel", "n_clicks"),
        Input("modal-submit", "n_clicks"),
        prevent_initial_call=True,
    )
    def update_modal(_1, _2, _3):
        triggered_id = ctx.triggered_id
        if triggered_id == "modal-open":
            return True
        return False

    return html.Div(
        children=[
            ld.Button(
                id="modal-open",
                className="mb-6",
                children="Open modal",
            ),
            ld.Modal(
                id="modal",
                children=[
                    ld.Typo(slot="header", children="Hello"),
                    ld.Typo(className="text-center", children="I'm a modal dialog."),
                    ld.Button(
                        id="modal-cancel",
                        slot="footer",
                        style={"width": "8rem"},
                        mode="ghost",
                        children="Cancel",
                    ),
                    ld.Button(
                        id="modal-submit",
                        slot="footer",
                        style={"width": "8rem"},
                        children="Submit",
                    ),
                ],
            ),
        ],
    )
