#!/bin/bash

echo -e '\neval "$(starship init bash)"' | tee -a ~/.zshrc
echo -e '\nsource "$HOME/dotfiles/bash/functions.sh"' | tee -a ~/.zshrc