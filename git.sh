#!/usr/bin/env bash
echo "Start to publish..."
git add .
date=$(date '+%Y-%m-%d %H:%M:%S → moka') `"msg →" $1`
commit="git commit -am '"$date"'"
eval $commit
git pull origin master
git push origin master
git pull gaoyuan master
git push gaoyuan master
echo "Success"
