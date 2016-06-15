#! /bin/bash

#go onto desktop
cd ~/Documents

#install home brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#install node
brew install nodejs

#install npm
brew install npm


#install nodemon
npm install -g nodemon

#install express
npm install -g express

#clone the repo
git clone https://github.com/considine/mike_webapp 
