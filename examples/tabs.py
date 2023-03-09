import liquid_plotly as ld


def example():
    return ld.Tabs(
        className="mb-6",
        children=[
            ld.Tablist(
                [
                    ld.Tab(selected=True, children="Fruits"),
                    ld.Tab("Vegetables"),
                    ld.Tab("Nuts"),
                ]
            ),
            ld.Tabpanellist(
                [
                    ld.Tabpanel(
                        [
                            ld.Typo(className="mt-1", children="Apple, orange, banana"),
                        ]
                    ),
                    ld.Tabpanel(
                        [
                            ld.Typo(
                                className="mt-1", children="Potato, cucumber, tomato"
                            ),
                        ]
                    ),
                    ld.Tabpanel(
                        [
                            ld.Typo(
                                className="mt-1",
                                children="Walnut, chestnut, strawberry",
                            ),
                        ]
                    ),
                ]
            ),
        ],
    )
