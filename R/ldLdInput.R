# AUTO GENERATED FILE - DO NOT EDIT

#' @export
ldLdInput <- function(label=NULL, updateValue=NULL, value=NULL) {
    
    props <- list(label=label, updateValue=updateValue, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LdInput',
        namespace = 'liquid_plotly',
        propNames = c('label', 'updateValue', 'value'),
        package = 'liquidPlotly'
        )

    structure(component, class = c('dash_component', 'list'))
}
