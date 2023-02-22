import liquid_plotly as ld


def example():
    return ld.CardStack(
        className="mb-6",
        children=[
            ld.Card("Card A"),
            ld.Card("Card B"),
            ld.Card("Card C"),
            ld.Card("Card D"),
            ld.Card("Card E"),
        ],
    )
