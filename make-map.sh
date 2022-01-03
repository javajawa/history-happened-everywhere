#!/bin/sh
# SPDX-FileCopyrightText: 2021 Benedict Harcourt <ben.harcourt@harcourtprogramming.co.uk>
# SPDX-License-Identifier: CC0-1.0

{
	cat template/header.svg

	printf '<style text="text/css">\n'
	cat template/style.css
	printf '</style>\n'

	for FILE in $(find landmasses -type f -name '*.svg')
	do
		tail -n +8 "$FILE"
	done

	for FILE in $(find regions -type f -name '*.svg')
	do
		tail -n +8 "$FILE"
	done

	printf '<script type="text/javascript">\n'
	printf '//<![CDATA[\n'
	cat template/script.js
	printf '//]]>\n'
	printf '</script>\n'

	printf '</svg>\n'
} >map.svg
