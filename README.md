# Deployment Ready Environment

This is just a ready to use deployment environment. Clone this repository, run few commands and you are good to go with your deployment ready Heroku environment.

### Pre-requisites

- heroku account
- nodejs, npm

### Steps to follow
1. clone this repo
2. enter the project directory and run `rm -rf .git`
3. Initialize the Git repository with `git init`
4. run `heroku create ${your app/website name}`
5. run `git add .`
6. run `git commit -m "${you message goes here}"`
7. run `git push heroku master`
8. run `heroku open`