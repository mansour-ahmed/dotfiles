#!/usr/bin/env bash

main() {
    # Install all needed VS code extensions.
    install_extensions
    # Add custom user settings to VS code.
    configure_settings
}

function install_extensions() {
    codium -v > /dev/null
    if [[ $? -eq 0 ]];then
        codium --install-extension formulahendry.auto-close-tag
        codium --install-extension steoates.autoimport
        codium --install-extension redwan-hossain.auto-rename-tag-clone
        codium --install-extension streetsidesoftware.code-spell-checker
        codium --install-extension mikestead.dotenv
        codium --install-extension EditorConfig.EditorConfig
        codium --install-extension dsznajder.es7-react-js-snippets
        codium --install-extension dbaeumer.vscode-eslint
        codium --install-extension donjayamanne.githistory
        codium --install-extension Orta.vscode-jest
        codium --install-extension yzhang.markdown-all-in-one
        codium --install-extension christian-kohler.npm-intellisense
        codium --install-extension esbenp.prettier-vscode
        codium --install-extension stylelint.vscode-stylelint
        codium --install-extension pflannery.vscode-versionlens
        
        fi
}

function configure_settings() {
    cp ./settings.json $HOME/Library/Application\ Support/VSCodium/User/settings.json
}

main "$@"
