@echo off

REM Checks out or creates a gh-pages branch
set "GITBRANCH="
for /f "tokens=*" %%a in ('git branch --list ^| findstr /snip gh-pages') do set GITBRANCH=%%a
echo "%GITBRANCH%"

if "%GITBRANCH%"=="" (
git checkout -b gh-pages
) else (
git checkout gh-pages
)

REM Merge in new changes
git merge master --no-ff --strategy-option theirs --no-edit --allow-unrelated-histories

REM Run the build to get the latest in the dist/ folder
npm run build

REM The dist/ files are ignored by default in the .gitignore
REM --all ensures that deletions are taken into account
git add --force --all dist/

REM Show what's happening
git status

REM Need to commit these files since they aren't in the index by default during development
git commit --allow-empty -m "Updating gh-pages with latest code built on $(date)"

REM GitHub pages requires files to be in the root directory of the repo,
REM so subtree push forces the *contents* of the dist directory to become
REM the root only on gh-pages
REM Update: Using subtree split now to force changes onto gh-pages (https://gist.github.com/cobyism/4730490#gistcomment-1374989)
git push origin "git subtree split --prefix dist gh-pages":refs/heads/gh-pages --force

REM Return to previous branch
git checkout -

git branch -D gh-pages

echo "Success!"
pause
