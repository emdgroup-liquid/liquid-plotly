import liquid_plotly as ld
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    ld.Input(
        id='input',
        value='',
    ),
    ld.Typo(
        id='output',
        children='''
        '''
    ),
    ld.Icon(name='placeholder'),
])


@callback(
    Output(component_id='output', component_property='children'),
    Input(component_id='input', component_property='value')
)
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
