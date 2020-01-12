#!/bin/bash

if [ -z $1 ]
then
    echo "ERROR: Missing release version argument"
    exit 1
fi

echo "Releasing DeathCount v$1..."

sed  -i /version/s/\"[^\"]*\",$/\"$1\",/ package.json
git commit -a -m "Release v$1"
git tag v$1

echo "Done. Don't forget to push!"