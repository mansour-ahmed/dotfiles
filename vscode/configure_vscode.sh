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
        # Javascript
        code --install-extension dsznajder.es7-react-js-snippets    
        code --install-extension jpoissonnier.vscode-styled-components
        code --install-extension eg2.tslint
        code --install-extension dbaeumer.vscode-eslint
        code --install-extension esbenp.prettier-vscode
        code --install-extension Orta.vscode-jest
        code --install-extension CoenraadS.bracket-pair-colorizer
        code --install-extension whtouche.vscode-js-console-utils
        code --install-extension chakrounanas.turbo-console-log
        code --install-extension orta.vscode-jest
        # Typescript
        code --install-extension miclo.sort-typescript-imports
        # Env
        code --install-extension mikestead.dotenv
        code --install-extension EditorConfig.EditorConfig
        # Chrome debugger
        code --install-extension msjsdiag.debugger-for-chrome
        # Docker
        code --install-extension PeterJausovec.vscode-docker
        # HTML
        code --install-extension bradgashler.htmltagwrap
        code --install-extension formulahendry.auto-close-tag
        code --install-extension formulahendry.auto-rename-tag
        # Utils
        code --install-extension christian-kohler.npm-intellisense
        code --install-extension streetsidesoftware.code-spell-checker
        code --install-extension cssho.vscode-svgviewer
        code --install-extension steoates.autoimport
        code --install-extension donjayamanne.githistory
        code --install-extension eamodio.gitlens
        code --install-extension zainchen.json
        code --install-extension pflannery.vscode-versionlens
        code --install-extension coenraads.bracket-pair-colorizer
        code --install-extension editorconfig.editorconfig
        code --install-extension yzhang.markdown-all-in-one
        # Theme
        code --install-extension johnpapa.winteriscoming

        # Vue
        # code --install-extension sdras.vue-vscode-snippets
        # code --install-extension octref.vetur
        fi
}

function configure_settings() {
    cp ./settings.json $HOME/Library/Application\ Support/Code/User/settings.json
}

main "$@"
