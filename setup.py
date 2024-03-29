import json
import os
from setuptools import setup


with open("package.json") as f:
    package = json.load(f)

package_name = "liquid_plotly"

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    install_requires=[],
    classifiers=[
        "Framework :: Dash",
    ],
)
