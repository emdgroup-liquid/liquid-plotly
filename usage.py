import sys
import os
import liquid_plotly as ld
from dash import Dash, callback, html, Input, Output
from dash_svg import Svg, Path
from examples import accordion, badge, breadcrumbs, cardstack

script_path = os.path.abspath(__file__)
project_dir = os.path.dirname(script_path)
examples_dir = os.path.join(project_dir, "examples")
sys.path.append(examples_dir)

# Do not use Tailwind like this in production!
external_script = ["https://tailwindcss.com/", {"src": "https://cdn.tailwindcss.com"}]

app = Dash(__name__, external_scripts=external_script)
app.title = "Liquid – Sandbox App"
app.scripts.config.serve_locally = True

Main = html.Main(
    style={"minHeight": "80vh"},
    className="relative flex items-center",
    children=[
        ld.BgCells(className="block absolute inset-0"),
        html.Div(
            className="container mx-auto px-6 pt-10 pb-6 relative max-w-2xl",
            children=[
                ld.Typo(
                    style={"color": "var(--ld-thm-warning)"},
                    className="mb-10",
                    variant="b1",
                    children="Liquid for Plotly Sandbox App",
                ),
                ld.Card(
                    shadow="hover",
                    className="",
                    children=[
                        ld.Typo(className="mb-4", variant="h2", children="Hi there 👋"),
                        ld.Typo(
                            className="mb-5",
                            children=[
                                "This small sandbox app demonstrates ",
                                html.A(
                                    className="font-bold hover:underline",
                                    href="https://emdgroup-liquid.github.io/liquid/",
                                    rel="noreferrer",
                                    children="Liquid Oxygen",
                                    target="_blank",
                                ),
                                " used in combination with Plotly Dash and Tailwind CSS.",
                            ],
                        ),
                        # accordion.example(),
                        # badge.example(),
                        # breadcrumbs.example(),
                        # cardstack.example(),
                        ld.Label(
                            className="w-full mb-6",
                            children=[
                                "Enter your name",
                                ld.Input(
                                    id="input",
                                    value="",
                                ),
                                ld.InputMessage(
                                    id="input-message",
                                    mode="valid",
                                    children="This is a wonderful name!",
                                ),
                            ],
                        ),
                        ld.Button(id="button", children="Submit"),
                        ld.Typo(
                            className="mt-2",
                            id="click-counter",
                            children="Enter a value and press submit",
                        ),
                    ],
                ),
            ],
        ),
    ],
)

Footer = html.Footer(
    className="relative flex-grow",
    style={"backgroundColor": "var(--ld-thm-primary-active)"},
    children=[
        html.Div(
            className="container text-center mx-auto px-12 pt-20 pb-24 max-w-2xl flex flex-col items-center justify-center",
            children=[
                ld.Typo(
                    className="text-white mb-2",
                    children=[
                        "Checkout the source code on ",
                        html.A(
                            className="font-bold hover:underline",
                            href="https://github.com/emdgroup-liquid/liquid-plotly",
                            children=[
                                "GitHub ",
                                Svg(
                                    className="inline-block ml-1 h-4 -mt-1 relative",
                                    fill="none",
                                    role="presentation",
                                    viewBox="0 0 18 18",
                                    xmlns="http://www.w3.org/2000/svg",
                                    children=[
                                        Path(
                                            clipRule="evenodd",
                                            d="M8.97248 0C4.01835 0 0 4.13039 0 9.22266C0 13.2965 2.58716 16.7479 6.11009 17.9927C6.55046 18.0493 6.7156 17.7664 6.7156 17.54C6.7156 17.3137 6.7156 16.7479 6.7156 15.9558C4.23853 16.5216 3.68807 14.711 3.68807 14.711C3.30275 13.636 2.69725 13.3531 2.69725 13.3531C1.87156 12.7873 2.75229 12.7873 2.75229 12.7873C3.63303 12.8438 4.12844 13.7491 4.12844 13.7491C4.95413 15.1636 6.22018 14.7676 6.7156 14.5413C6.77064 13.9189 7.04587 13.5228 7.26606 13.2965C5.2844 13.0702 3.19266 12.278 3.19266 8.71344C3.19266 7.69498 3.52294 6.90285 4.12844 6.22388C4.07339 6.05414 3.74312 5.09227 4.23853 3.84749C4.23853 3.84749 5.00917 3.62117 6.7156 4.80936C7.43119 4.58304 8.20183 4.52646 8.97248 4.52646C9.74312 4.52646 10.5138 4.63962 11.2294 4.80936C12.9358 3.62117 13.7064 3.84749 13.7064 3.84749C14.2018 5.09227 13.8716 6.05414 13.8165 6.28046C14.367 6.90285 14.7523 7.75156 14.7523 8.77002C14.7523 12.3346 12.6606 13.0702 10.6789 13.2965C11.0092 13.5794 11.2844 14.1452 11.2844 14.9939C11.2844 16.2387 11.2844 17.2006 11.2844 17.54C11.2844 17.7664 11.4495 18.0493 11.8899 17.9927C15.4679 16.7479 18 13.2965 18 9.22266C17.945 4.13039 13.9266 0 8.97248 0Z",
                                            fill="currentColor",
                                            fillRule="evenodd",
                                        )
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
                ld.Typo(
                    className="text-white opacity-60",
                    children=[
                        "Made with ",
                        ld.Icon(
                            className="transform translate-y-1",
                            name="tea-pot",
                            ariaLabel="lots of tea",
                        ),
                        " by the UX Strategy & Design Team at EMD Digital",
                    ],
                ),
            ],
        )
    ],
)

app.layout = html.Div(
    style={"minWidth": "20rem"},
    className="flex flex-col min-h-screen",
    children=[Main, Footer],
)


@callback(
    Output(component_id="input-message", component_property="children"),
    Input(component_id="input", component_property="value"),
)
def display_output(value):
    if value == "":
        return ""
    return "{} is a wonderful name!".format(value)


@callback(
    Output(component_id="input-message", component_property="style"),
    Input(component_id="input", component_property="value"),
)
def display_output(value):
    if value == "":
        return {"display": "none"}
    return {}


@callback(Output("click-counter", "children"), Input("button", "n_clicks"))
def update_output(n_clicks):
    if n_clicks == None:
        return ""
    if n_clicks == 1:
        return "Great! You've clicked the submit button. 👍"
    return "Great! You've clicked the submit button {} times. 👍".format(n_clicks)


if __name__ == "__main__":
    app.run_server(debug=True)
