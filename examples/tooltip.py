import liquid_plotly as ld


def example():
    return ld.Tooltip(
        className="mb-6",
        arrow=True,
        children=[
            ld.Typo(className="mb-0.5", variant="h4", children="Headline"),
            ld.Typo(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ),
        ],
    )
