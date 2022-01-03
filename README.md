<!--
SPDX-FileCopyrightText: 2021 Benedict Harcourt <ben.harcourt@harcourtprogramming.co.uk>
SPDX-License-Identifier: CC0-1.0
-->

# History Happened Everywhere

Inspired by [History Happened Everywhere](https://twitter.com/hhepodcast)
podcast, this is an automated tool for generating an area of historical
research by combining a location, time period, and a topic.

## Location

The map is based off the [blank Robinson map from Wikimedia](https://commons.wikimedia.org/wiki/File:WorldMap.svg),
with the monopath split out into distinct landmasses to make it easier to
navigate.
The list of regions was curated with the idea of finding a way to split
up the world into areas of similar historical populations with some bias
towards grouping cultural areas the authors new about together. An example
of this is how the UK is split -- Southern England has a broad cultural
theme, but in order to not have a heavy London bias when it is rolled,
the Thames Esturary is treated as a separate area.
This system means that major geographical features are likely to be regions:
a mountain range normally has a common historical thread regardless of the
people's who live around it, and major rivers that spawned early cities are
likely to have their own small regions.
Regions are allowed to overlap where that makes sense -- this might be enclaves,
or overlapping ranges of migratory societies, or even something as trivial as
the different ocean regions and island chains within them.

## Time Period

The time periods are procedurally generated, starting to 2000-2010 CE (a ten
year range) and then working backwards from there, each gap being 7% larger
than the previous one, reaching back to 4000 BCE.

## Topics

The list of topics is hardcoded in [template/script.js](template/script.js).
