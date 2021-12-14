#!/usr/bin/env bash

main() {
    # Install all needed VS code extensions.
    install_extensions
    # Add custom user settings to VS code.
    configure_settings
}

function install_extensions() {
    code -v > /dev/null
    if [[ $? -eq 0 ]];then
        code --install-extension amatiasq.sort-imports
        code --install-extension bradgashler.htmltagwrap
        code --install-extension ChakrounAnas.turbo-console-log
        code --install-extension christian-kohler.npm-intellisense
        code --install-extension CoenraadS.bracket-pair-colorizer
        code --install-extension cssho.vscode-svgviewer
        code --install-extension dbaeumer.vscode-eslint
        code --install-extension deerawan.vscode-dash
        code --install-extension donjayamanne.githistory
        code --install-extension dsznajder.es7-react-js-snippets
        code --install-extension eamodio.gitlens
        code --install-extension EditorConfig.EditorConfig
        code --install-extension esbenp.prettier-vscode
        code --install-extension formulahendry.auto-close-tag
        code --install-extension formulahendry.auto-rename-tag
        code --install-extension miclo.sort-typescript-imports
        code --install-extension mikestead.dotenv
        code --install-extension Orta.vscode-jest
        code --install-extension pflannery.vscode-versionlens
        code --install-extension steoates.autoimport
        code --install-extension streetsidesoftware.code-spell-checker
        code --install-extension stylelint.vscode-stylelint
        code --install-extension whtouche.vscode-js-console-utils
        code --install-extension yzhang.markdown-all-in-one
        code --install-extension ZainChen.json
        fi
}

function configure_settings() {
    cp ./settings.json $HOME/Library/Application\ Support/Code/User/settings.json
}

main "$@"
