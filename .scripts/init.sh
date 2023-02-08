#!/bin/sh

set -eu

# git submodule init; git submodule update --recursive
git submodule update --init --recursive

cd ./packages/core && git checkout main
cd ../packages/utils && git checkout main
cd ../../

yarn
