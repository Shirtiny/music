#!/bin/sh

set -eu

# git submodule init; git submodule update --recursive
git submodule update --init --recursive

yarn
