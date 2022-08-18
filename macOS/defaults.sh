#!/usr/bin/env bash

main() {
    configure_system
    configure_dock
    configure_finder
    configure_app_store
    configure_brave
    configure_3rd_party
}

function configure_system() {
    LOGIN_HOOK_PATH=~/dotfiles/macOS/login_hook_script.sh
    LOGOUT_HOOK_PATH=~/dotfiles/macOS/logout_hook_script.sh

    PRIMARY_CLOUDFLARE_DNS_ADDRESS="1.1.1.1"
    SECONDARY_CLOUDFLARE_DNS_ADDRESS="1.0.0.1"
    FIRST_REDUNDANT_CLOUDFLARE_DNS_ADDRESS="2606:4700:4700::1111"
    SECOND_REDUNDANT_CLOUDFLARE_DNS_ADDRESS="2606:4700:4700::1001"

    # Update DNS servers to Cloudflare's servers https://one.one.one.one/dns/
    networksetup -setdnsservers Wi-Fi $PRIMARY_CLOUDFLARE_DNS_ADDRESS $SECONDARY_CLOUDFLARE_DNS_ADDRESS $FIRST_REDUNDANT_CLOUDFLARE_DNS_ADDRESS $SECOND_REDUNDANT_CLOUDFLARE_DNS_ADDRESS

    # Enable tap to click
    defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true
    # Disable macOS startup chime sound
    sudo defaults write com.apple.loginwindow LoginHook $LOGIN_HOOK_PATH
    sudo defaults write com.apple.loginwindow LogoutHook $LOGOUT_HOOK_PATH
    # Configure keyboard repeat https://apple.stackexchange.com/a/83923/200178
    defaults write -g InitialKeyRepeat -int 15
    defaults write -g KeyRepeat -int 2
    # Disable auto-correct
    defaults write -g NSAutomaticSpellingCorrectionEnabled -bool false
    # Enable full keyboard access for all controls which enables Tab selection in modal dialogs
    defaults write NSGlobalDomain AppleKeyboardUIMode -int 3

    # Set DuckDuckGo as the search engine
    defaults write -g NSPreferredWebServices '{
        NSWebServicesProviderWebSearch = {
            NSDefaultDisplayName = DuckDuckGo;
            NSProviderIdentifier = "com.duckduckgo";
        };
    }'

    # Don't show Siri in the menu bar
    defaults write com.apple.Siri StatusMenuVisible -bool false

    # Show volume in the menu bar
    defaults write com.apple.systemuiserver "NSStatusItem Visible com.apple.menuextra.volume" -int 1

    # Show battery percentage in menu bar
    defaults write com.apple.systemuiserver "NSStatusItem Visible com.apple.menuextra.battery" -bool true
    defaults write com.apple.menuextra.battery '{ ShowPercent = YES; }'

    # Disable the “Are you sure you want to open this application?” dialog
    defaults write com.apple.LaunchServices LSQuarantine -bool false

    # Shows all files in finder
    defaults write com.apple.Finder AppleShowAllFiles true

    # Set the timezone; see 'sudo systemsetup -listtimezones' for other values
    sudo systemsetup -settimezone "Europe/Helsinki" > /dev/null

    # Disable crash reporter (the dialog which appears after an application crashes and prompts to report the problem to Apple)
    defaults write com.apple.CrashReporter DialogType none
}

function configure_dock() {
    # Don’t show recent applications in Dock
    defaults write com.apple.dock show-recents -bool false
    # Set the icon size of Dock items to 36 pixels
    defaults write com.apple.dock tilesize -int 36
    # Wipe all (default) app icons from the Dock
    defaults write com.apple.dock persistent-apps -array
    # Show only open applications in the Dock
    defaults write com.apple.dock static-only -bool true
    # Don’t animate opening applications from the Dock
    defaults write com.apple.dock launchanim -bool false
    # Disable Dashboard
    defaults write com.apple.dashboard mcx-disabled -bool true
    # Don’t show Dashboard as a Space
    defaults write com.apple.dock dashboard-in-overlay -bool true
    # Automatically hide and show the Dock
    defaults write com.apple.dock autohide -bool true
    # Remove the auto-hiding Dock delay
    defaults write com.apple.dock autohide-delay -float 0
    # Disable the Launchpad gesture (pinch with thumb and three fingers)
    defaults write com.apple.dock showLaunchpadGestureEnabled -int 0
    # Don’t automatically rearrange Spaces based on most recent use
    defaults write com.apple.dock mru-spaces -bool false

    ## Hot corners
    ## Possible values:
    ##  0: no-op
    ##  2: Mission Control
    ##  3: Show application windowss
    ##  4: Desktop
    ##  5: Start screen saver
    ##  6: Disable screen saver
    ##  7: Dashboard
    ## 10: Put display to sleep
    ## 11: Launchpad
    ## 12: Notification Center
    ## Top left screen corner → Nothing
    defaults write com.apple.dock wvous-tl-corner -int 0
    defaults write com.apple.dock wvous-tl-modifier -int 0
    ## Top right screen corner → Nothing
    defaults write com.apple.dock wvous-tr-corner -int 0
    defaults write com.apple.dock wvous-tr-modifier -int 0
    ## Bottom left screen corner → Nothing
    defaults write com.apple.dock wvous-bl-corner -int 0
    defaults write com.apple.dock wvous-bl-modifier -int 0
    defaults write com.apple.dock orientation -string "left"

    killall Dock
}

function configure_finder() {
    # Save screenshots to Downloads folder
    defaults write com.apple.screencapture location -string "${HOME}/Downloads"
    # Require password immediately after sleep or screen saver begins
    defaults write com.apple.screensaver askForPassword -int 1
    defaults write com.apple.screensaver askForPasswordDelay -int 0
    # Set Downloads as the default location for new Finder windows
    defaults write com.apple.finder NewWindowTarget -string "PfLo"
    defaults write com.apple.finder NewWindowTargetPath -string \
        "file://${HOME}/Downloads/"
    # disable status bar
    defaults write com.apple.finder ShowStatusBar -bool false
    # disable path bar
    defaults write com.apple.finder ShowPathbar -bool false
    # Display full POSIX path as Finder window title
    defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
    # Keep folders on top when sorting by name
    defaults write com.apple.finder _FXSortFoldersFirst -bool true
    # When performing a search, search the current folder by default
    defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"
    # Disable disk image verification
    defaults write com.apple.frameworks.diskimages \
        skip-verify -bool true
    defaults write com.apple.frameworks.diskimages \
        skip-verify-locked -bool true
    defaults write com.apple.frameworks.diskimages \
        skip-verify-remote -bool true
    # Use list view in all Finder windows by default
    # Four-letter codes for the other view modes: `icnv`, `clmv`, `Flwv`
    defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"
    # Disable the warning before emptying the Trash
    defaults write com.apple.finder WarnOnEmptyTrash -bool false
    # Stop Photos from opening automatically   
    defaults -currentHost write com.apple.ImageCapture disableHotPlug -bool true
    # Adding ‘Quit’ option to Finder 
    defaults write com.apple.finder QuitMenuItem -bool true; killall Finder
    # Display the file extensions in Finder
    defaults write NSGlobalDomain AppleShowAllExtensions -bool true; killall Finder
    # Disable the warning when changing a file extension
    defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false
    # Disable screenshot preview thumbnails
    defaults write com.apple.screencapture show-thumbnail -bool FALSE
    # Use column view in all Finder windows by default
    # Four-letter codes for the other view modes: 'icnv', 'clmv', 'Flwv'
    defaults write com.apple.finder FXPreferredViewStyle -string "clmv"
    # Avoid creating .DS_Store files on network or USB volumes
    defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
    defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true

    # Expose hidden files and Library folder in Finder:
    defaults write com.apple.finder AppleShowAllFiles -bool true
    chflags nohidden ~/Library
}

function configure_app_store() {
    # Check for software updates daily, not just once per week
    defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1

    # Download newly available updates in background
    defaults write com.apple.SoftwareUpdate AutomaticDownload -int 1

    # Install System data files & security updates
    defaults write com.apple.SoftwareUpdate CriticalUpdateInstall -int 1
}

function configure_brave() {
    # Disable back gesture
    defaults write com.brave.Browser AppleEnableSwipeNavigateWithScrolls -bool FALSE
}

function configure_3rd_party () {
    # Spotify - thinks it's super important and should always be started on login. Fuck that.
    mkdir -p ~/Library/Application\ Support/Spotify
    touch ~/Library/Application\ Support/Spotify/prefs
    echo 'app.autostart-mode="off"' >> ~/Library/Application\ Support/Spotify/prefs
    echo 'app.autostart-banner-seen=true' >> ~/Library/Application\ Support/Spotify/prefs
}

function security () {
sudo scutil --set ComputerName 💻
sudo scutil --set LocalHostName TheOne

sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setallowsigned off
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setallowsignedapp off

rm -rfv "~/Library/LanguageModeling/*" "~/Library/Spelling/*" "~/Library/Suggestions/*"
sudo chmod -R 000 ~/Library/LanguageModeling ~/Library/Spelling ~/Library/Suggestions
sudo chflags -R uchg ~/Library/LanguageModeling ~/Library/Spelling ~/Library/Suggestions

rm -rfv ~/Library/Assistant/SiriAnalytics.db

# ----------------------------------------------------------
# ---------Deactivate the Remote Management Service---------
# ----------------------------------------------------------
echo '--- Deactivate the Remote Management Service'
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -stop
# ----------------------------------------------------------


# ----------------------------------------------------------
# -----------Remove Apple Remote Desktop Settings-----------
# ----------------------------------------------------------
echo '--- Remove Apple Remote Desktop Settings'
sudo rm -rf /var/db/RemoteManagement
sudo defaults delete /Library/Preferences/com.apple.RemoteDesktop.plist
defaults delete ~/Library/Preferences/com.apple.RemoteDesktop.plist
sudo rm -r /Library/Application\ Support/Apple/Remote\ Desktop/ 
rm -r ~/Library/Application\ Support/Remote\ Desktop/
rm -r ~/Library/Containers/com.apple.RemoteDesktop
# ----------------------------------------------------------

# ----------------------------------------------------------
# --------------------Disable "Ask Siri"--------------------
# ----------------------------------------------------------
echo '--- Disable "Ask Siri"'
defaults write com.apple.assistant.support 'Assistant Enabled' -bool false
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------------Disable Siri voice feedback----------------
# ----------------------------------------------------------
echo '--- Disable Siri voice feedback'
defaults write com.apple.assistant.backedup 'Use device speaker for TTS' -int 3
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------Disable Siri services (Siri and assistantd)--------
# ----------------------------------------------------------
echo '--- Disable Siri services (Siri and assistantd)'
launchctl disable "user/$UID/com.apple.assistantd"
launchctl disable "gui/$UID/com.apple.assistantd"
sudo launchctl disable 'system/com.apple.assistantd'
launchctl disable "user/$UID/com.apple.Siri.agent"
launchctl disable "gui/$UID/com.apple.Siri.agent"
sudo launchctl disable 'system/com.apple.Siri.agent'
if [ $(/usr/bin/csrutil status | awk '/status/ {print $5}' | sed 's/\.$//') = "enabled" ]; then
    >&2 echo 'This script requires SIP to be disabled. Read more: https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection'
fi
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------Disable "Do you want to enable Siri?" pop-up-------
# ----------------------------------------------------------
echo '--- Disable "Do you want to enable Siri?" pop-up'
defaults write com.apple.SetupAssistant 'DidSeeSiriSetup' -bool True
# ----------------------------------------------------------


# ----------------------------------------------------------
# -----------------Hide Siri from menu bar------------------
# ----------------------------------------------------------
echo '--- Hide Siri from menu bar'
defaults write com.apple.systemuiserver 'NSStatusItem Visible Siri' 0
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----------------Hide Siri from status menu----------------
# ----------------------------------------------------------
echo '--- Hide Siri from status menu'
defaults write com.apple.Siri 'StatusMenuVisible' -bool false
defaults write com.apple.Siri 'UserHasDeclinedEnable' -bool true
# ----------------------------------------------------------


# ----------------------------------------------------------
# ------------Opt-out from Siri data collection-------------
# ----------------------------------------------------------
echo '--- Opt-out from Siri data collection'
defaults write com.apple.assistant.support 'Siri Data Sharing Opt-In Status' -int 2
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------Disable Internet based spell correction----------
# ----------------------------------------------------------
echo '--- Disable Internet based spell correction'
defaults write NSGlobalDomain WebAutomaticSpellingCorrectionEnabled -bool false
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------------Disable Remote Apple Events----------------
# ----------------------------------------------------------
echo '--- Disable Remote Apple Events'
sudo systemsetup -setremoteappleevents off
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----Do not store documents to iCloud Drive by default-----
# ----------------------------------------------------------
echo '--- Do not store documents to iCloud Drive by default'
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------------Do not show recent items on dock-------------
# ----------------------------------------------------------
echo '--- Do not show recent items on dock'
defaults write com.apple.dock show-recents -bool false
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------------Disable AirDrop file sharing---------------
# ----------------------------------------------------------
echo '--- Disable AirDrop file sharing'
defaults write com.apple.NetworkBrowser DisableAirDrop -bool true
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----------------Disable Spotlight indexing----------------
# ----------------------------------------------------------
echo '--- Disable Spotlight indexing'
sudo mdutil -i off -d /
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------------Enable application firewall----------------
# ----------------------------------------------------------
echo '--- Enable application firewall'
/usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
sudo defaults write /Library/Preferences/com.apple.alf globalstate -bool true
defaults write com.apple.security.firewall EnableFirewall -bool true
# ----------------------------------------------------------


# ----------------------------------------------------------
# -----------------Turn on firewall logging-----------------
# ----------------------------------------------------------
echo '--- Turn on firewall logging'
/usr/libexec/ApplicationFirewall/socketfilterfw --setloggingmode on
sudo defaults write /Library/Preferences/com.apple.alf loggingenabled -bool true
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------------------Turn on stealth mode-------------------
# ----------------------------------------------------------
echo '--- Turn on stealth mode'
/usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on
sudo defaults write /Library/Preferences/com.apple.alf stealthenabled -bool true
defaults write com.apple.security.firewall EnableStealthMode -bool true
# ----------------------------------------------------------


# Prevent automatically allowing incoming connections to signed apps
echo '--- Prevent automatically allowing incoming connections to signed apps'
sudo defaults write /Library/Preferences/com.apple.alf allowsignedenabled -bool false
# ----------------------------------------------------------


# Prevent automatically allowing incoming connections to downloaded signed apps
echo '--- Prevent automatically allowing incoming connections to downloaded signed apps'
sudo defaults write /Library/Preferences/com.apple.alf allowdownloadsignedenabled -bool false
# ----------------------------------------------------------


# Require a password to wake the computer from sleep or screen saver
echo '--- Require a password to wake the computer from sleep or screen saver'
sudo defaults write /Library/Preferences/com.apple.screensaver askForPassword -bool true
# ----------------------------------------------------------


# Initiate session lock five seconds after screen saver is started
echo '--- Initiate session lock five seconds after screen saver is started'
sudo defaults write /Library/Preferences/com.apple.screensaver 'askForPasswordDelay' -int 5
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----Disables signing in as Guest from the login screen----
# ----------------------------------------------------------
echo '--- Disables signing in as Guest from the login screen'
sudo defaults write /Library/Preferences/com.apple.loginwindow GuestEnabled -bool NO
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------Disables Guest access to file shares over AF-------
# ----------------------------------------------------------
echo '--- Disables Guest access to file shares over AF'
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server AllowGuestAccess -bool NO
# ----------------------------------------------------------


# ----------------------------------------------------------
# ------Disables Guest access to file shares over SMB-------
# ----------------------------------------------------------
echo '--- Disables Guest access to file shares over SMB'
sudo defaults write /Library/Preferences/com.apple.AppleFileServer guestAccess -bool NO
# ----------------------------------------------------------


# ----------------------------------------------------------
# -Disable remote login (incoming SSH and SFTP connections)-
# ----------------------------------------------------------
echo '--- Disable remote login (incoming SSH and SFTP connections)'
echo 'yes' | sudo systemsetup -setremotelogin off
# ----------------------------------------------------------


# ----------------------------------------------------------
# --------------Disable insecure TFTP service---------------
# ----------------------------------------------------------
echo '--- Disable insecure TFTP service'
sudo launchctl disable 'system/com.apple.tftpd'
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----------Disable Bonjour multicast advertising-----------
# ----------------------------------------------------------
echo '--- Disable Bonjour multicast advertising'
sudo defaults write /Library/Preferences/com.apple.mDNSResponder.plist NoMulticastAdvertisements -bool true
# ----------------------------------------------------------


# ----------------------------------------------------------
# -------------Disable insecure telnet protocol-------------
# ----------------------------------------------------------
echo '--- Disable insecure telnet protocol'
sudo launchctl disable system/com.apple.telnetd
# ----------------------------------------------------------


# ----------------------------------------------------------
# --Disable sharing of local printers with other computers--
# ----------------------------------------------------------
echo '--- Disable sharing of local printers with other computers'
cupsctl --no-share-printers
# ----------------------------------------------------------


# ----------------------------------------------------------
# -Disable printing from any address including the Internet-
# ----------------------------------------------------------
echo '--- Disable printing from any address including the Internet'
cupsctl --no-remote-any
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----------Disable remote printer administration-----------
# ----------------------------------------------------------
echo '--- Disable remote printer administration'
cupsctl --no-remote-admin
# ----------------------------------------------------------


# ----------------------------------------------------------
# ------------------Disable Captive portal------------------
# ----------------------------------------------------------
echo '--- Disable Captive portal'
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.captive.control.plist Active -bool false
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----------------Disable Firefox telemetry-----------------
# ----------------------------------------------------------
echo '--- Disable Firefox telemetry'
# Enable Firefox policies so the telemetry can be configured.
sudo defaults write /Library/Preferences/org.mozilla.firefox EnterprisePoliciesEnabled -bool TRUE
# Disable sending usage data
sudo defaults write /Library/Preferences/org.mozilla.firefox DisableTelemetry -bool TRUE
# ----------------------------------------------------------


# ----------------------------------------------------------
# ----Disable Microsoft Office diagnostics data sending-----
# ----------------------------------------------------------
echo '--- Disable Microsoft Office diagnostics data sending'
defaults write com.microsoft.office DiagnosticDataTypePreference -string ZeroDiagnosticData
# ----------------------------------------------------------


# ----------------------------------------------------------
# -----------------Uninstall Google update------------------
# ----------------------------------------------------------
echo '--- Uninstall Google update'
googleUpdateFile=~/Library/Google/GoogleSoftwareUpdate/GoogleSoftwareUpdate.bundle/Contents/Resources/ksinstall
if [ -f "$googleUpdateFile" ]; then
    $googleUpdateFile --nuke
    echo Uninstalled google update
else
    echo Google update file does not exist
fi
# ----------------------------------------------------------


# ----------------------------------------------------------
# ---------Disable Homebrew user behavior analytics---------
# ----------------------------------------------------------
echo '--- Disable Homebrew user behavior analytics'
command='export HOMEBREW_NO_ANALYTICS=1'
declare -a profile_files=("$HOME/.bash_profile" "$HOME/.zprofile")
for profile_file in "${profile_files[@]}"
do
    touch "$profile_file"
    if ! grep -q "$command" "${profile_file}"; then
        echo "$command" >> "$profile_file"
        echo "[$profile_file] Configured"
    else
        echo "[$profile_file] No need for any action, already configured"
    fi
done
# ----------------------------------------------------------


# ----------------------------------------------------------
# --------------Disable NET Core CLI telemetry--------------
# ----------------------------------------------------------
echo '--- Disable NET Core CLI telemetry'
command='export DOTNET_CLI_TELEMETRY_OPTOUT=1'
declare -a profile_files=("$HOME/.bash_profile" "$HOME/.zprofile")
for profile_file in "${profile_files[@]}"
do
    touch "$profile_file"
    if ! grep -q "$command" "${profile_file}"; then
        echo "$command" >> "$profile_file"
        echo "[$profile_file] Configured"
    else
        echo "[$profile_file] No need for any action, already configured"
    fi
done
# ----------------------------------------------------------


# ----------------------------------------------------------
# ------------Disable PowerShell Core telemetry-------------
# ----------------------------------------------------------
echo '--- Disable PowerShell Core telemetry'
command='export POWERSHELL_TELEMETRY_OPTOUT=1'
declare -a profile_files=("$HOME/.bash_profile" "$HOME/.zprofile")
for profile_file in "${profile_files[@]}"
do
    touch "$profile_file"
    if ! grep -q "$command" "${profile_file}"; then
        echo "$command" >> "$profile_file"
        echo "[$profile_file] Configured"
    else
        echo "[$profile_file] No need for any action, already configured"
    fi
done
# ----------------------------------------------------------


}

main "$@" 
