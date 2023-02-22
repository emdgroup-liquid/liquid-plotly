import liquid_plotly as ld


def example():
    return ld.Breadcrumbs(
        className="mb-6",
        children=[
            ld.Crumb(href="components/", children="Components"),
            ld.Crumb(href="components/ld-breadcrumbs/", children="Breadcrumbs"),
        ],
    )
