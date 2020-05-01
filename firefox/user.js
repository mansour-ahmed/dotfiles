// Any comment. You must start the file with a single-line comment!

// Always start in private mode
pref('browser.privatebrowsing.autostart', true);
// Blocks new requests asking to access microphone
pref('permissions.default.microphone', 2);
// Blocks new requests asking to access camera
pref('permissions.default.camera', 2);
// Blocks new requests asking to display notifications
pref('permissions.default.desktop-notification', 2);
// Blocks new requests asking to access location
pref('permissions.default.geo', 2);
// Blocks new requests asking to access VR devices
pref('permissions.default.xr', 2);
// Blocks autoplay of both video & audio
pref('media.autoplay.default', 5);

// Privacytools.io recommendations (https://www.privacytools.io/browsers/#about_config) START

// Isolates all browser identifier sources (e.g. cookies) to the first party domain, with the goal of preventing tracking across different domains
pref('privacy.firstparty.isolate', true);

// Makes Firefox more resistant to browser fingerprinting
pref('privacy.resistFingerprinting', true);

// Blocks Fingerprinting
pref('privacy.trackingprotection.fingerprinting.enabled', true);

// Blocks CryptoMining
pref('privacy.trackingprotection.cryptomining.enabled', true);

// Mozilla new built-in tracking protection
pref('privacy.trackingprotection.enabled', true);

// The attribute would be useful for letting websites track visitors clicks.
pref('browser.send_pings', false);

// Disable preloading of autocomplete URLs.
pref('browser.urlbar.speculativeConnect.enabled', false);

// Disable that websites can get notifications if you copy, paste, or cut something from a web page
pref('dom.event.clipboardevents.enabled', false);

// Disables playback of DRM-controlled HTML5 content, which, if enabled, automatically downloads the Widevine Content Decryption Module provided by Google
pref('media.eme.enabled', false);

// Disables the Widevine Content Decryption Module provided by Google
pref('media.gmp-widevinecdm.enabled', false);

// Doesnt allow websites to track the microphone and camera status of my device.
pref('media.navigator.enabled', false);

/** Disable cookies
 * 0 = Accept all cookies by default
 * 1 = Only accept from the originating site (block third-party cookies)
 * 2 = Block all cookies by default
 **/
pref('network.cookie.cookieBehavior', 1);

/**
 * Only send Referer header when the full hostnames match.
 *  0 = Send Referer in all cases
 * 1 = Send Referer to same eTLD sites
 * 2 = Send Referer only when the full hostnames match
 */
pref('network.http.referer.XOriginPolicy', 2);

/**
 * When sending Referer across origins, only send scheme, host, and port in the Referer header of cross-origin requests
 * 0 = Send full url in Referer
 * 1 = Send url without query string in Referer
 * 2 = Only send scheme, host, and port in Referer
 */
pref('network.http.referer.XOriginTrimmingPolicy', 2);

// WebGL is a potential security risk
pref('webgl.disabled', true);

/**
 * Controls when to store extra information about a session
 * 0 = Store extra session data for any site. (Default starting with Firefox 4.)
 * 1 = Store extra session data for unencrypted (non-HTTPS) sites only. (Default before Firefox 4.)
 * 2 = Never store extra session data
 */
pref('browser.sessionstore.privacy_level', 2);

// Disables sending additional analytics to web servers
pref('beacon.enabled', false);

// Prevents Firefox from sending information about downloaded executable files to Google Safe Browsing to determine whether it should be blocked for safety reasons
pref('browser.safebrowsing.downloads.remote.enabled', false);

// Disable Firefox prefetching pages it thinks I will visit next
pref('network.dns.disablePrefetch', true);
pref('network.dns.disablePrefetchFromHTTPS', true);
pref('network.predictor.enabled', false);
pref('network.predictor.enable-prefetch', false);
pref('network.prefetch-next', false);

// Not rendering IDNs as their Punycode equivalent leaves you open to phishing attacks that can be very difficult to notice
pref('network.IDN_show_punycode', true);

// Privacytools.io recommendations END

// ghackers-user.js (https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js) START

/* 0000: disable about:config warning
 * FF71-72: chrome://global/content/config.xul
 * FF73+: chrome://global/content/config.xhtml ***/
pref('general.warnOnAboutConfig', false); // XUL/XHTML version
pref('browser.aboutConfig.showWarning', false); // HTML version [FF71+]

/* 0101: disable default browser check
 * [SETTING] General>Startup>Always check if Firefox is your default browser ***/
pref('browser.shell.checkDefaultBrowser', false);
/* 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
 * [NOTE] Session Restore is not used in PB mode (0110) and is cleared with history (2803, 2804)
 * [SETTING] General>Startup>Restore previous session ***/
pref('browser.startup.page', 0);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Activity Stream (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
pref('browser.startup.homepage', 'about:blank');
/* 0104: set NEWTAB page
 * true=Activity Stream (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
pref('browser.newtabpage.enabled', false);
pref('browser.newtab.preload', false);

/* 0105: disable Activity Stream stuff (AS)
 * AS is the default homepage/newtab in FF57+, based on metadata and browsing behavior.
 *    **NOT LISTING ALL OF THESE: USE THE PREFERENCES UI**
 * [SETTING] Home>Firefox Home Content>...  to show/hide what you want ***/
/* 0105a: disable Activity Stream telemetry ***/
pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
pref('browser.newtabpage.activity-stream.telemetry', false);
/* 0105b: disable Activity Stream Snippets
 * Runs code received from a server (aka Remote Code Execution) and sends information back to a metrics server
 * [1] https://abouthome-snippets-service.readthedocs.io/ ***/
pref('browser.newtabpage.activity-stream.feeds.snippets', false);
pref('browser.newtabpage.activity-stream.asrouter.providers.snippets', '');
/* 0105c: disable Activity Stream Top Stories, Pocket-based and/or sponsored content ***/
pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);
pref(
  'browser.newtabpage.activity-stream.section.highlights.includePocket',
  false
);
pref('browser.newtabpage.activity-stream.showSponsored', false);
pref('browser.newtabpage.activity-stream.feeds.discoverystreamfeed', false); // [FF66+]

/* 0206: disable geographically specific results/search engines e.g. "browser.search.*.US"
 * i.e. ignore all of Mozilla's various search engines in multiple locales ***/
pref('browser.search.geoSpecificDefaults', false);
pref('browser.search.geoSpecificDefaults.url', '');

/* 0309: disable sending Flash crash reports ***/
pref('dom.ipc.plugins.flash.subprocess.crashreporter.enabled', false);

/* 0310: disable sending the URL of the website where a plugin crashed ***/
pref('dom.ipc.plugins.reportCrashURL', false);

/* 0320: disable about:addons' Recommendations pane (uses Google Analytics) ***/
pref('extensions.getAddons.showPane', false); // [HIDDEN PREF]

/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
pref('extensions.htmlaboutaddons.recommendations.enabled', false);

/* 0340: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
pref('datareporting.healthreport.uploadEnabled', false);

/* 0341: disable new data submission, master kill switch [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
pref('datareporting.policy.dataSubmissionEnabled', false);

/* 0342: disable Studies (see 0503)
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
pref('app.shield.optoutstudies.enabled', false);

/* 0343: disable personalized Extension Recommendations in about:addons and AMO [FF65+]
 * [NOTE] This pref has no effect when Health Reports (0340) are disabled
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
 * [1] https://support.mozilla.org/kb/personalized-extension-recommendations ***/
pref('browser.discovery.enabled', false);

/* 0350: disable Crash Reports ***/
pref('breakpad.reportURL', '');
pref('browser.tabs.crashReporting.sendReport', false); // [FF44+]
pref('browser.crashReports.unsubmittedCheck.enabled', false); // [FF51+]

/* 0351: disable backlogged Crash Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false); // [FF58+]

/* 0390: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy
 * [2] https://wiki.mozilla.org/Necko/CaptivePortal ***/
pref('captivedetect.canonicalURL', '');
pref('network.captive-portal-service.enabled', false); // [FF52+]

/* 0391: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
pref('network.connectivity-service.enabled', false);

/* 0401: enforce Firefox blocklist, but sanitize blocklist url
 * [NOTE] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 * [2] https://trac.torproject.org/projects/tor/ticket/16931 ***/
pref('extensions.blocklist.enabled', true); // [DEFAULT: true]
pref(
  'extensions.blocklist.url',
  'https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/'
);

/* 0517: disable Form Autofill
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses (FF74+)
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
 * [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome/ ***/
pref('extensions.formautofill.addresses.enabled', false); // [FF55+]
pref('extensions.formautofill.available', 'off'); // [FF56+]
pref('extensions.formautofill.creditCards.enabled', false); // [FF56+]
pref('extensions.formautofill.heuristics.enabled', false); // [FF55+]

/* 0605: disable link-mouseover opening connection to linked server
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
 * [2] https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/ ***/
pref('network.http.speculative-parallel-limit', 0);

/* 0606: disable "Hyperlink Auditing" (click tracking) and enforce same host in case
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
// pref('browser.send_pings', false); // [DEFAULT: false] DUPLICATE
pref('browser.send_pings.require_same_host', true);

/* 0701: disable IPv6
 * IPv6 can be abused, especially regarding MAC addresses. They also do not play nice
 * with VPNs. That's even assuming your ISP and/or router and/or website can handle it.
 * Firefox telemetry (April 2019) shows only 5% of all connections are IPv6
 * [NOTE] This is just an application level fallback. Disabling IPv6 is best done at an
 * OS/network level, and/or configured properly in VPN setups. If you are not masking your IP,
 * then this won't make much difference. If you are masking your IP, then it can only help.
 * [TEST] https://ipleak.org/
 * [1] https://github.com/ghacksuserjs/ghacks-user.js/issues/437#issuecomment-403740626
 * [2] https://www.internetsociety.org/tag/ipv6-security/ (see Myths 2,4,5,6) ***/
pref('network.dns.disableIPv6', true);

/* 0703: disable HTTP Alternative Services [FF37+]
 * [SETUP-PERF] Relax this if you have FPI enabled (see 4000) *AND* you understand the
 * consequences. FPI isolates these, but it was designed with the Tor protocol in mind,
 * and the Tor Browser has extra protection, including enhanced sanitizing per Identity.
 * [1] https://tools.ietf.org/html/rfc7838#section-9
 * [2] https://www.mnot.net/blog/2016/03/09/alt-svc ***/
pref('network.http.altsvc.enabled', false);
pref('network.http.altsvc.oe', false);

/* 0710: disable GIO as a potential proxy bypass vector
 * Gvfs/GIO has a set of supported protocols like obex, network, archive, computer, dav, cdda,
 * gphoto2, trash, etc. By default only smb and sftp protocols are accepted so far (as of FF64)
 * [1] https://bugzilla.mozilla.org/1433507
 * [2] https://trac.torproject.org/23044
 * [3] https://en.wikipedia.org/wiki/GVfs
 * [4] https://en.wikipedia.org/wiki/GIO_(software) ***/
pref('network.gio.supported-protocols', ''); // [HIDDEN PREF]

/* 0802: disable location bar domain guessing
 * domain guessing intercepts DNS "hostname not found errors" and resends a
 * request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
 * via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
 * as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
 * intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
 * and is a security risk (e.g. common typos & malicious sites set up to exploit this) ***/
pref('browser.fixup.alternate.enabled', false);

/* 0803: display all parts of the url in the location bar ***/
pref('browser.urlbar.trimURLs', false);

/* 0807: disable live search suggestions
/* [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Change these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
pref('browser.search.suggest.enabled', false);
pref('browser.urlbar.suggest.searches', false);

/* 0809: disable location bar suggesting "preloaded" top websites [FF54+]
 * [1] https://bugzilla.mozilla.org/1211726 ***/
pref('browser.urlbar.usepreloadedtopurls.enabled', false);

/* 0810: disable location bar making speculative connections [FF56+]
 * [1] https://bugzilla.mozilla.org/1348275 ***/
// pref('browser.urlbar.speculativeConnect.enabled', false); DUPLICATE

/* 0860: disable search and form history
 * [SETUP-WEB] Be aware thet autocomplete form data can be read by third parties, see [1] [2]
 * [NOTE] We also clear formdata on exit (see 2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
 * [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
 * [2] https://bugzilla.mozilla.org/381681 ***/
pref('browser.formfill.enable', false);

/* 0905: disable auto-filling username & password form fields
 * can leak in cross-site forms *and* be spoofed
 * [NOTE] Username & password is still available when you enter the field
 * [SETTING] Privacy & Security>Logins and Passwords>Autofill logins and passwords ***/
pref('signon.autofillForms', false);

/* 0909: disable formless login capture for Password Manager [FF51+] ***/
pref('signon.formlessCapture.enabled', false);

/* 1007: disable media cache from writing to disk in Private Browsing
 * [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB */
pref('browser.privatebrowsing.forceMediaMemoryCache', true); // [FF75+]
pref('media.memory_cache_max_size', 16384);

/* 1021: disable storing extra session data [SETUP-CHROME]
 * extra session data contains contents of forms, scrollbar positions, cookies and POST data
 * define on which sites to save extra session data:
 * 0=everywhere, 1=unencrypted sites, 2=nowhere ***/
// pref('browser.sessionstore.privacy_level', 2); DUPLICATE

/* 1030: disable favicons in shortcuts
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
 * If set to false then the shortcuts use a generic Firefox icon ***/
pref('browser.shell.shortcutFavicons', false);

/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
/* 1201: require safe negotiation
 * Blocks connections to servers that don't support RFC 5746 [2] as they're potentially
 * vulnerable to a MiTM attack [3]. A server *without* RFC 5746 can be safe from the attack
 * if it disables renegotiations but the problem is that the browser can't know that.
 * Setting this pref to true is the only way for the browser to ensure there will be
 * no unsafe renegotiations on the channel between the browser and the server.
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://tools.ietf.org/html/rfc5746
 * [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555 ***/
pref('security.ssl.require_safe_negotiation', true);

/* 1203: enforce TLS 1.0 and 1.1 downgrades as session only */
pref('security.tls.version.enable-deprecated', false);

/* 1204: disable SSL session tracking [FF36+]
 * SSL Session IDs are unique, last up to 24hrs in Firefox, and can be used for tracking
 * [SETUP-PERF] Relax this if you have FPI enabled (see 4000) *AND* you understand the
 * consequences. FPI isolates these, but it was designed with the Tor protocol in mind,
 * and the Tor Browser has extra protection, including enhanced sanitizing per Identity.
 * [1] https://tools.ietf.org/html/rfc5077
 * [2] https://bugzilla.mozilla.org/967977
 * [3] https://arxiv.org/abs/1810.07304 ***/
pref('security.ssl.disable_session_identifiers', true); // [HIDDEN PREF]

/* 1210: enable OCSP Stapling
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/ ***/
pref('security.ssl.enable_ocsp_stapling', true);
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
pref('security.OCSP.enabled', 1);

/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail [SETUP-WEB]
 * When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
 * Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
 * It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
 * could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html ***/
pref('security.OCSP.require', true);

/* 1220: disable or limit SHA-1 certificates
 * 0=all SHA1 certs are allowed
 * 1=all SHA1 certs are blocked
 * 2=deprecated option that now maps to 1
 * 3=only allowed for locally-added roots (e.g. anti-virus)
 * 4=only allowed for locally-added roots or for certs in 2015 and earlier
 * [SETUP-CHROME] When disabled, some man-in-the-middle devices (e.g. security scanners and
 * antivirus products, may fail to connect to HTTPS sites. SHA-1 is *almost* obsolete.
 * [1] https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/ ***/
pref('security.pki.sha1_enforcement_level', 1);

/* 1223: enforce strict pinning
 * PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict
 * [SETUP-WEB] If you rely on an AV (antivirus) to protect your web browsing
 * by inspecting ALL your web traffic, then leave at current default=1
 * [1] https://trac.torproject.org/projects/tor/ticket/16206 ***/
pref('security.cert_pinning.enforcement_level', 2);

/* 1240: disable insecure active content on https pages
 * [1] https://trac.torproject.org/projects/tor/ticket/21323 ***/
pref('security.mixed_content.block_active_content', true); // [DEFAULT: true]

/* 1241: disable insecure passive content (such as images) on https pages [SETUP-WEB] ***/
pref('security.mixed_content.block_display_content', true);

/* 1243: block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks [FF59+]
 * [1] https://bugzilla.mozilla.org/1190623 ***/
pref('security.mixed_content.block_object_subrequest', true);

/* 1271: control "Add Security Exception" dialog on SSL warnings
 * 0=do neither 1=pre-populate url 2=pre-populate url + pre-fetch cert (default)
 * [1] https://github.com/pyllyukko/user.js/issues/210 ***/
pref('browser.ssl_override_behavior', 1);

/* 1273: display "insecure" icon and "Not Secure" text on HTTP sites ***/
pref('security.insecure_connection_icon.enabled', true); // [FF59+] [DEFAULT: true FF70+]
pref('security.insecure_connection_text.enabled', true); // [FF60+]

/* 1408: disable graphite
 * Graphite has had many critical security issues in the past, see [1]
 * [1] https://www.mozilla.org/security/advisories/mfsa2017-15/#CVE-2017-7778
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL) ***/
pref('gfx.font_rendering.graphite.enabled', false);

/* 1404: disable rendering of SVG OpenType fonts
 * [1] https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this ***/
pref('gfx.font_rendering.opentype_svg.enabled', false);

/* 1603: CROSS ORIGIN: control when to send a referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * [SETUP-WEB] Known to cause issues with older modems/routers and some sites e.g vimeo, icloud ***/
// pref('network.http.referer.XOriginPolicy', 2); DUPLICATE

/* 1604: CROSS ORIGIN: control the amount of information to send [FF52+]
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
pref('network.http.referer.XOriginTrimmingPolicy', 2); // [DEFAULT: 0] // DUPLICATE

/* 1610: ALL: enable the DNT (Do Not Track) HTTP header
 * [NOTE] DNT is enforced with Enhanced Tracking Protection regardless of this pref
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Send websites a "Do Not Track" signal... ***/
pref('privacy.donottrackheader.enabled', true);

/* 1701: enable Container Tabs setting in preferences (see 1702) [FF50+]
 * [1] https://bugzilla.mozilla.org/1279029 ***/
pref('privacy.userContext.ui.enabled', true);

/* 1702: enable Container Tabs [FF50+]
 * [SETTING] General>Tabs>Enable Container Tabs ***/
pref('privacy.userContext.enabled', true);

/* 1803: disable Flash plugin
 * 0=deactivated, 1=ask, 2=enabled
 * ESR52.x is the last branch to *fully* support NPAPI, FF52+ stable only supports Flash
 * [NOTE] You can still override individual sites via site permissions
 * [1] https://www.ghacks.net/2013/07/09/how-to-make-sure-that-a-firefox-plugin-never-activates-again/ ***/
pref('plugin.state.flash', 0);

/* 2001: disable WebRTC (Web Real-Time Communication)
 * [SETUP-WEB] WebRTC can leak your IP address from behind your VPN, but if this is not
 * in your threat model, and you want Real-Time Communication, this is the pref for you
 * [1] https://www.privacytools.io/#webrtc ***/
pref('media.peerconnection.enabled', false);

/* 2002: limit WebRTC IP leaks if using WebRTC
 * In FF70+ these settings match Mode 4 (Mode 3 in older versions) (see [3])
 * [TEST] https://browserleaks.com/webrtc
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1189041,1297416,1452713
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy
 * [3] https://tools.ietf.org/html/draft-ietf-rtcweb-ip-handling-12#section-5.2 ***/
pref('media.peerconnection.ice.default_address_only', true);
pref('media.peerconnection.ice.no_host', true); // [FF51+]
pref('media.peerconnection.ice.proxy_only_if_behind_proxy', true); // [FF70+]

/* 2010: disable WebGL (Web Graphics Library)
 * [SETUP-WEB] When disabled, may break some websites. When enabled, provides high entropy,
 * especially with readPixels(). Some of the other entropy is lessened with RFP (see 4501)
 * [1] https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
 * [2] https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern ***/
// pref('webgl.disabled', true); DUPLICATE
pref('webgl.enable-webgl2', false);

/* 2012: limit WebGL ***/
pref('webgl.min_capability_mode', true);
pref('webgl.disable-fail-if-major-performance-caveat', true);
/* 2022: disable screensharing ***/
pref('media.getusermedia.screensharing.enabled', false);
pref('media.getusermedia.browser.enabled', false);
pref('media.getusermedia.audiocapture.enabled', false);

/* 2031: disable autoplay of HTML5 media if you interacted with the site [FF66+] ***/
pref('media.autoplay.enabled.user-gestures-needed', false);

/* 2201: prevent websites from disabling new window features ***/
pref('dom.disable_window_open_feature.close', true);
pref('dom.disable_window_open_feature.location', true); // [DEFAULT: true]
pref('dom.disable_window_open_feature.menubar', true);
pref('dom.disable_window_open_feature.minimizable', true);
pref('dom.disable_window_open_feature.personalbar', true); // bookmarks toolbar
pref('dom.disable_window_open_feature.resizable', true); // [DEFAULT: true]
pref('dom.disable_window_open_feature.status', true); // [DEFAULT: true]
pref('dom.disable_window_open_feature.titlebar', true);
pref('dom.disable_window_open_feature.toolbar', true);

/* 2202: prevent scripts from moving and resizing open windows ***/
pref('dom.disable_window_move_resize', true);

/* 2203: open links targeting new windows in a new tab instead
 * This stops malicious window sizes and some screen resolution leaks.
 * You can still right-click a link and open in a new window.
 * [TEST] https://ghacksuserjs.github.io/TorZillaPrint/TorZillaPrint.html#screen
 * [1] https://trac.torproject.org/projects/tor/ticket/9881 ***/
pref('browser.link.open_newwindow', 3);
pref('browser.link.open_newwindow.restriction', 0);

/* 2210: block popup windows
 * [SETTING] Privacy & Security>Permissions>Block pop-up windows ***/
pref('dom.disable_open_during_load', true);

/* 2212: limit events that can cause a popup [SETUP-WEB]
 * default is "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu" ***/
pref('dom.popup_allowed_events', 'click dblclick');

/* 2302: disable service workers [FF32, FF44-compat]
 * Service workers essentially act as proxy servers that sit between web apps, and the
 * browser and network, are event driven, and can control the web page/site it is associated
 * with, intercepting and modifying navigation and resource requests, and caching resources.
 * [NOTE] Service worker APIs are hidden (in Firefox) and cannot be used when in PB mode.
 * [NOTE] Service workers only run over HTTPS. Service workers have no DOM access.
 * [SETUP-WEB] Disabling service workers will break some sites. This pref is required true for
 * service worker notifications (2304), push notifications (disabled, 2305) and service worker
 * cache (2740). If you enable this pref, then check those settings as well ***/
pref('dom.serviceWorkers.enabled', false);

/* 2305: disable Push Notifications [FF44+]
 * Push is an API that allows websites to send you (subscribed) messages even when the site
 * isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
 * [NOTE] Push requires service workers (2302) to subscribe to and display, and is behind
 * a prompt (2306). Disabling service workers alone doesn't stop Firefox polling the
 * Mozilla Push Server. To remove all subscriptions, reset your userAgentID (in about:config
 * or on start), and you will get a new one within a few seconds.
 * [1] https://support.mozilla.org/en-US/kb/push-notifications-firefox
 * [2] https://developer.mozilla.org/en-US/docs/Web/API/Push_API ***/
pref('dom.push.enabled', false);

/* 2404: disable clipboard commands (cut/copy) from "non-privileged" content [FF41+]
 * this disables document.execCommand("cut"/"copy") to protect your clipboard
 * [1] https://bugzilla.mozilla.org/1170911 ***/
pref('dom.allow_cut_copy', false);

/* 2405: disable "Confirm you want to leave" dialog on page close
 * Does not prevent JS leaks of the page close event.
 * [1] https://developer.mozilla.org/docs/Web/Events/beforeunload
 * [2] https://support.mozilla.org/questions/1043508 ***/
pref('dom.disable_beforeunload', true);

/* 2414: disable shaking the screen ***/
pref('dom.vibrator.enabled', false);

/* 2601: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser
 * [1] https://support.mozilla.org/kb/accessibility-services ***/
pref('accessibility.force_disabled', 1);

/* 2602: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
// pref('beacon.enabled', false); // DUPLICATE

/* 2603: remove temp files opened with an external application
 * [1] https://bugzilla.mozilla.org/302433 ***/
pref('browser.helperApps.deleteTempFileOnExit', true);

/* 2605: block web content in file processes [FF55+]
 * [SETUP-WEB] You may want to disable this for corporate or developer environments
 * [1] https://bugzilla.mozilla.org/1343184 ***/
pref('browser.tabs.remote.allowLinkedWebInFileUriProcess', false);

/* 2606: disable UITour backend so there is no chance that a remote page can use it ***/
pref('browser.uitour.enabled', false);
pref('browser.uitour.url', '');

/* 2607: disable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 ***/
pref('devtools.chrome.enabled', false);

/* 2608: disable remote debugging
 * [1] https://trac.torproject.org/projects/tor/ticket/16222 ***/
pref('devtools.debugger.remote-enabled', false);

/* 2614: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
 * [NOTE] A low setting of 5 or under will probably break some sites (e.g. gmail logins)
 * To control HTML Meta tag and JS redirects, use an extension. Default is 20 ***/
pref('network.http.redirection-limit', 10);

/* 2616: remove special permissions for certain mozilla domains [FF35+]
 * [1] resource://app/defaults/permissions ***/
pref('permissions.manager.defaultsUrl', '');

/* 2617: remove webchannel whitelist ***/
pref('webchannel.allowObject.urlWhitelist', '');

pref('webchannel.allowObject.urlWhitelist', '');
/* 2619: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
 * Firefox has *some* protections, but it is better to be safe than sorry
 * [SETUP-WEB] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
pref('network.IDN_show_punycode', true);

/* 2622: enforce no system colors; they can be fingerprinted
 * [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors ***/
pref('browser.display.use_system_colors', false); // [DEFAULT: false]

/* 2623: disable permissions delegation [FF73+]
 * Currently applies to cross-origin geolocation, camera, mic and screen-sharing
 * permissions, and fullscreen requests. Disabling delegation means any prompts
 * for these will show/use their correct 3rd party origin
 * [1] https://groups.google.com/forum/#!topic/mozilla.dev.platform/BdFOMAuCGW8/discussion */
pref('permissions.delegation.enabled', false);

/* 2651: enforce user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
pref('browser.download.useDownloadDir', false);

/* 2652: disable adding downloads to the system's "recent documents" list ***/
pref('browser.download.manager.addToRecentDocs', false);

/* 2653: disable hiding mime types (Options>General>Applications) not associated with a plugin ***/
pref('browser.download.hide_plugins_without_extensions', false);

/* 2680: enforce CSP (Content Security Policy)
 * [WARNING] CSP is a very important and widespread security feature. Don't disable it!
 * [1] https://developer.mozilla.org/docs/Web/HTTP/CSP ***/
pref('security.csp.enable', true); // [DEFAULT: true]

/* 2684: enforce a security delay on some confirmation dialogs such as install, open/save
 * [1] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/ ***/
pref('security.dialog_enable_delay', 700);

/* 2701: disable 3rd-party cookies and site-data [SETUP-WEB]
 * 0=Accept cookies and site data, 1=(Block) All third-party cookies, 2=(Block) All cookies,
 * 3=(Block) Cookies from unvisited websites, 4=(Block) Cross-site and social media trackers (FF63+) (default FF69+)
 * [NOTE] You can set exceptions under site permissions or use an extension
 * [NOTE] Enforcing category to custom ensures ETP related prefs are always honored
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cookies ***/
// pref('network.cookie.cookieBehavior', 1); DUPLICATE
pref('browser.contentblocking.category', 'custom');

/* 2730: disable offline cache ***/
pref('browser.cache.offline.enable', false);

/* 2802: enable Firefox to clear items on shutdown (see 2803)
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes ***/
pref('privacy.sanitize.sanitizeOnShutdown', true);

/* 2803: set what items to clear on shutdown (if 2802 is true) [SETUP-CHROME]
 * [NOTE] If 'history' is true, downloads will also be cleared regardless of the value
 * but if 'history' is false, downloads can still be cleared independently
 * However, this may not always be the case. The interface combines and syncs these
 * prefs when set from there, and the sanitize code may change at any time
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings ***/
pref('privacy.clearOnShutdown.cache', true);
pref('privacy.clearOnShutdown.cookies', true);
pref('privacy.clearOnShutdown.downloads', true); // see note above
pref('privacy.clearOnShutdown.formdata', true); // Form & Search History
pref('privacy.clearOnShutdown.history', true); // Browsing & Download History
pref('privacy.clearOnShutdown.offlineApps', true); // Offline Website Data
pref('privacy.clearOnShutdown.sessions', true); // Active Logins
pref('privacy.clearOnShutdown.siteSettings', false); // Site Preferences

/* 2804: reset default items to clear with Ctrl-Shift-Del (to match 2803) [SETUP-CHROME]
 * This dialog can also be accessed from the menu History>Clear Recent History
 * Firefox remembers your last choices. This will reset them when you start Firefox.
 * [NOTE] Regardless of what you set privacy.cpd.downloads to, as soon as the dialog
 * for "Clear Recent History" is opened, it is synced to the same as 'history' ***/
pref('privacy.cpd.cache', true);
pref('privacy.cpd.cookies', true);
pref('privacy.cpd.formdata', true); // Form & Search History
pref('privacy.cpd.history', true); // Browsing & Download History
pref('privacy.cpd.offlineApps', true); // Offline Website Data
pref('privacy.cpd.passwords', false); // this is not listed
pref('privacy.cpd.sessions', true); // Active Logins
pref('privacy.cpd.siteSettings', false); // Site Preferences

/* 4501: enable privacy.resistFingerprinting [FF41+]
 * This pref is the master switch for all other privacy.resist* prefs unless stated
 * [SETUP-WEB] RFP can cause the odd website to break in strange ways, and has a few side affects,
 * but is largely robust nowadays. Give it a try. Your choice. Also see 4504 (letterboxing).
 * [1] https://bugzilla.mozilla.org/418986 ***/
// pref('privacy.resistFingerprinting', true); DUPLICATE

/* 4504: enable RFP letterboxing [FF67+]
 * Dynamically resizes the inner window (FF67; 200w x100h: FF68+; stepped ranges) by applying letterboxing,
 * using dimensions which waste the least content area, If you use the dimension pref, then it will only apply
 * those resolutions. The format is "width1xheight1, width2xheight2, ..." (e.g. "800x600, 1000x1000, 1600x900")
 * [SETUP-WEB] This does NOT require RFP (see 4501) **for now**, so if you're not using 4501, or you are but you're
 * not taking anti-fingerprinting seriously and a little visual change upsets you, then feel free to flip this pref
 * [WARNING] The dimension pref is only meant for testing, and we recommend you DO NOT USE it
 * [1] https://bugzilla.mozilla.org/1407366 ***/
pref('privacy.resistFingerprinting.letterboxing', true); // [HIDDEN PREF]

// ghackers-user.js END
