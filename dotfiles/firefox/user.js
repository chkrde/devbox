// Firefox user preferences
// user_pref("<item>", "<value>");

// Downloads
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.useDownloadDir", false);

// New Page settings
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.enabled", false);

// Language specific
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.region", "DE");

// Undo closed windows
user_pref("browser.sessionstore.max_windows_undo", "10");

// Blank startup page
user_pref("browser.startup.homepage", "	about:blank");
user_pref("browser.startup.page", "3");

// Tab settings
user_pref("browser.tabs.extraDragSpace", true);
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.warnOnClose", false);

// No phone home
user_pref("datareporting.healthreport.uploadEnabled", false);

// Dont use ff password manager
user_pref("signon.rememberSignons", false);
