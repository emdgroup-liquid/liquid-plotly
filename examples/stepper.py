import liquid_plotly as ld


def example():
    return ld.Stepper(
        className="mb-6",
        children=[
            ld.Step(done=True, children="Billing"),
            ld.Step(done=True, children="Shipping"),
            ld.Step(current=True, next=True, lastActive=True, children="Payment"),
            ld.Step(disabled=True, children="Summary"),
            ld.Step(disabled=True, children="Confirmation"),
        ],
    )
