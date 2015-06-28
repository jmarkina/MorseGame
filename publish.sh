#!/usr/bin/env bash
set -o errexit
set -o pipefail

git fetch
git push origin origin/master:gh-pages

url='http://jmarkina.github.io/MorseGame/'

# Find open util
open=$(which xdg-open)
if [[ ! -x $open ]]; then
    open=$(which open)
fi

# Open the link
if [[ -x $open ]]; then
    $open $url
fi

echo $url
