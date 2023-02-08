# AUTO GENERATED FILE - DO NOT EDIT

#' @export
ldLiquidPlotly <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LiquidPlotly',
        namespace = 'liquid_plotly',
        propNames = c('id'),
        package = 'liquidPlotly'
        )

    structure(component, class = c('dash_component', 'list'))
}
