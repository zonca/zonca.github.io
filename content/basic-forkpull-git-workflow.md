Title: Basic fork/pull git workflow
Date: 2013-04-06 07:52
Author: Andrea Zonca
Tags: git, github
Slug: basic-forkpull-git-workflow

<div dir="ltr">
 Typical simple workflow for a (github) repository with few users.
</div>
<div dir="ltr">
 <b>
  <br/>
 </b>
</div>
<div dir="ltr">
 <b>
  Permissions configuration:
 </b>
</div>
<div dir="ltr">
 Main developers have write access to the repository, occasional contributor are supposed to fork and create pull requests.
</div>
<div dir="ltr">
</div>
<a name="more">
</a>
<br/>
<div dir="ltr">
 <b>
  Main developer:
 </b>
 Small bug fix just go directly in master:
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  git  checkout master
  <br/>
  # update from repository, better use rebase in case there are unpushed commits
  <br/>
  git pull --rebase
  <br/>
  git commit -m "commit message"
  <br/>
  git push
 </span>
</div>
<div dir="ltr">
 <br/>
</div>
<div dir="ltr">
 More complex feature, better use a branch:
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  git checkout -b featurebranch
  <br/>
  git commit -am "commit message"
  <br/>
  # work and make several commits
  <br/>
  # backup and share to github
  <br/>
  git push origin featurebranch
 </span>
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<div dir="ltr">
 <span style="font-family: inherit;">
  When ready to merge (cannot push cleanly anymore after any rebasing):
 </span>
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
 <br/>
 <span style="font-family: inherit;">
  <br/>
 </span>
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  # reorder, squash some similar commits, better commit msg
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git rebase -i HEAD~10
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  # before merging move commits all together to the end of history
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git rebase master
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git checkout master
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git merge featurebranch
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git push
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  # branch is fully merged, no need to keep it
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git branch -d featurebranch
 </span>
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  git push origin --delete featurebranch
 </span>
</div>
<div dir="ltr">
 <br/>
</div>
<div dir="ltr">
 Optional, if the feature requires discussing within the team, better create a pull request.
 <br/>
 After cleanup and rebase, instead of merging to master:
 <br/>
 <span style="font-family: Courier New, Courier, monospace;">
  <br/>
 </span>
</div>
<div dir="ltr">
 <span style="font-family: Courier New, Courier, monospace;">
  # create new branch
  <br/>
  git checkout -b readyfeaturebranch
  <br/>
  git push origin readyfeaurebranch
 </span>
</div>
<div dir="ltr">
 Connect to github and create a pull request from the new branch to master (now github has a shortcut for creating a pull request from the last branch pushed).
</div>
<div dir="ltr">
 <br/>
</div>
<div dir="ltr">
 During the discussion on the pull request, any commit to the readyfeaturebranch is added to the pull request.
 <br/>
 When ready either automatically merge on github, or do it manually as previously.
</div>
<div dir="ltr">
 <br/>
</div>
<div dir="ltr">
 <b>
  For occasional developers:
 </b>
 Just fork the repo on github to their account, work on a branch there, and then create a pull request on the github web interface from the branch to master on the main repository.
</div>