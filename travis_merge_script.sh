if [ "$TRAVIS_BRANCH" != "feature_" ]; then 
    exit 0;
fi
export GIT_COMMITTER_EMAIL="shihabkarim6@gmail.com"
export GIT_COMMITTER_NAME="Shihab Karim"
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git checkout main || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push @github.com/">https://${GITHUB_TOKEN}@github.com/skarim9/The-Mindful-Applicant.git