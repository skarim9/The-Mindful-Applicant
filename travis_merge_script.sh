if [ "$TRAVIS_BRANCH" != "feature_" ]; then 
    exit 0;
fi
export GIT_COMMITTER_EMAIL="<your-email>"
export GIT_COMMITTER_NAME="<your-name>"
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push @github.com/">https://${GITHUB_TOKEN}@github.com/skarim9/The-Mindful-Applicant.git