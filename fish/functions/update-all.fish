function update-all
    sudo softwareupdate --install --all
    brew update; brew upgrade; brew cask upgrade; brew prune; brew cleanup; brew doctor;
    yarn global upgrade --silent
end
