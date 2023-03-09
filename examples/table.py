import liquid_plotly as ld


def example():
    return ld.Table(
        className="w-full mb-6",
        children=[
            ld.TableToolbar(
                slot="toolbar", children=[ld.TableCaption("Superheros and sidekicks")]
            ),
            ld.TableColgroup(
                children=[
                    ld.TableCol(""),
                    ld.TableCol(span="2", className="batman"),
                    ld.TableCol(span="2", className="flash"),
                ]
            ),
            ld.TableBody(
                [
                    ld.TableRow(
                        [
                            ld.TableCell(),
                            ld.TableHeader(scope="col", children="Batman"),
                            ld.TableHeader(scope="col", children="Robin"),
                            ld.TableHeader(scope="col", children="The Flash"),
                            ld.TableHeader(scope="col", children="Kid Flash"),
                        ]
                    ),
                ]
            ),
            ld.TableRow(
                [
                    ld.TableHeader(scope="row", children="Skill"),
                    ld.TableCell("Smarts"),
                    ld.TableCell("Dex, acrobat"),
                    ld.TableCell("Super speed"),
                    ld.TableCell("Super speed"),
                ]
            ),
        ],
    )
