#!/usr/bin/env bash
echo "Start to publish..."
git add .
date=$(date '+%Y-%m-%d %H:%M:%S → moka')
msg=" msg → $1"
str=$date$msg
commit="git commit -am '"$str"'"
eval $commit
git pull origin master
git push origin master
git pull gaoyuan master
git push gaoyuan master
echo "Success"
