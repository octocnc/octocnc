# coding=utf-8

########################################################################################################################

plugin_identifier = "octocnc"
plugin_package = "octocnc"
plugin_name = "OctoCNC"
plugin_version = "0.1.0"
plugin_description = """Control for CNC Lathe or Mill"""
plugin_author = "Andrew Mirsky"
plugin_author_email = "andrew@mirskytech.com"
plugin_url = "https://github.com/mirskytech/OctoCNC"
plugin_license = "AGPLv3"

plugin_requires = open("requirements.txt").read().split("\n")
plugin_additional_data = []
plugin_additional_packages = []
plugin_ignored_packages = []
additional_setup_parameters = {}

########################################################################################################################

from setuptools import setup

try:
	import octoprint_setuptools
except:
	print("Could not import OctoPrint's setuptools, are you sure you are running that under "
	      "the same python installation that OctoPrint is installed under?")
	import sys
	sys.exit(-1)

setup_parameters = octoprint_setuptools.create_plugin_setup_parameters(
	identifier=plugin_identifier,
	package=plugin_package,
	name=plugin_name,
	version=plugin_version,
	description=plugin_description,
	author=plugin_author,
	mail=plugin_author_email,
	url=plugin_url,
	license=plugin_license,
	requires=plugin_requires,
	additional_packages=plugin_additional_packages,
	ignored_packages=plugin_ignored_packages,
	additional_data=plugin_additional_data
)

if len(additional_setup_parameters):
	from octoprint.util import dict_merge
	setup_parameters = dict_merge(setup_parameters, additional_setup_parameters)

setup(**setup_parameters)
