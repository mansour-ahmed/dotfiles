#!/bin/bash

c () {
   clear
}

catchup () {
    open -a slack
    open -a microsoft\ teams
    open -a thunderbird
}

dc-fresh () {
    docker-compose build --no-cache $*
}

docker-prune () {
   docker system prune --all --force --volumes
}

git-log () {
    clear; and git log --oneline $*
}

update-all () {
    sudo softwareupdate --install --all
    brew update
    brew upgrade
    mas upgrade
    brew upgrade --cask
    brew outdated --cask --greedy --verbose | ack --invert-match latest | awk '{print $1;}' | xargs brew upgrade --cask
    brew cleanup
    brew doctor
}

sync-brew () {
    set --local TAP  ~/dotfiles/brew/Brewfile_tap
    set --local BREW ~/dotfiles/brew/Brewfile_brew
    set --local CASK ~/dotfiles/brew/Brewfile_cask
    set --local BREWFILE ~/dotfiles/brew/Brewfile

    cat $TAP $BREW $CASK $MAS > $BREWFILE
    brew bundle cleanup --file=$BREWFILE --force
}
    