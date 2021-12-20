#!/usr/bin/env sh

set -e

npm run generate

cd dist
# echo techtouch.jp > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:techtouch-inc/landing-page.git master:gh-pages

cd -