#!/usr/bin/env bash

main() {
    configure_default_settings
}

function configure_default_settings() {
    DEFAULT_PROFILE=$(find $HOME/Library/Application\ Support/Firefox/Profiles -maxdepth 1 -type d -name '*default*' -print)
    cp "./user.js" "$DEFAULT_PROFILE/user.js"
}

main "$@"
