import liquid_plotly as ld


def example():
    return ld.CardStack(
        className="mb-6",
        children=[
            ld.Card(ld.Typo("Card A")),
            ld.Card(ld.Typo("Card B")),
            ld.Card(ld.Typo("Card C")),
            ld.Card(ld.Typo("Card D")),
            ld.Card(ld.Typo("Card E")),
        ],
    )
