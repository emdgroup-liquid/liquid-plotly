import liquid_plotly as ld


def example():
    return ld.Accordion(
        className="mb-6",
        tone="dark",
        rounded="true",
        children=[
            ld.AccordionSection(
                expanded="true",
                children=[
                    ld.AccordionToggle("Fruits"),
                    ld.AccordionPanel(
                        ld.Typo(
                            variant="body-s",
                            style={
                                "padding": "var(--ld-sp-12) var(--ld-accordion-padding-x)"
                            },
                            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quisque lectus morbi mauris, tortor dictum elementum. Morbi volutpat senectus lacus sapien viverra quis volutpat. Mauris sed lacus ipsum dictumst egestas. Elit cras at interdum id porta magnis accumsan sit pulvinar. Mi dignissim gravida venenatis, nibh dignissim tincidunt enim. Lectus diam lobortis pharetra amet et nec. Est vitae vitae porttitor varius ac. Faucibus enim augue ac sollicitudin massa. Ipsum quis elementum amet tristique. A felis nunc iaculis maecenas id.",
                        )
                    ),
                ],
            ),
            ld.AccordionSection(
                children=[
                    ld.AccordionToggle("Vegetables"),
                    ld.AccordionPanel(
                        ld.Typo(
                            variant="body-s",
                            style={
                                "padding": "var(--ld-sp-12) var(--ld-accordion-padding-x)"
                            },
                            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quisque lectus morbi mauris, tortor dictum elementum. Morbi volutpat senectus lacus sapien viverra quis volutpat. Mauris sed lacus ipsum dictumst egestas. Elit cras at interdum id porta magnis accumsan sit pulvinar. Mi dignissim gravida venenatis, nibh dignissim tincidunt enim. Lectus diam lobortis pharetra amet et nec. Est vitae vitae porttitor varius ac. Faucibus enim augue ac sollicitudin massa. Ipsum quis elementum amet tristique. A felis nunc iaculis maecenas id.",
                        )
                    ),
                ]
            ),
            ld.AccordionSection(
                children=[
                    ld.AccordionToggle(disabled="true", children="Nuts"),
                    ld.AccordionPanel(
                        ld.Typo(
                            variant="body-s",
                            style={
                                "padding": "var(--ld-sp-12) var(--ld-accordion-padding-x)"
                            },
                            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quisque lectus morbi mauris, tortor dictum elementum. Morbi volutpat senectus lacus sapien viverra quis volutpat. Mauris sed lacus ipsum dictumst egestas. Elit cras at interdum id porta magnis accumsan sit pulvinar. Mi dignissim gravida venenatis, nibh dignissim tincidunt enim. Lectus diam lobortis pharetra amet et nec. Est vitae vitae porttitor varius ac. Faucibus enim augue ac sollicitudin massa. Ipsum quis elementum amet tristique. A felis nunc iaculis maecenas id.",
                        )
                    ),
                ]
            ),
        ],
    )
