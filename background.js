// Avoid newsfeeds on: linkedin, twitter
const redirects = {
    "https://www.linkedin.com/": "https://www.linkedin.com/messaging/thread/new",
    "https://www.linkedin.com/feed/": "https://www.linkedin.com/messaging/thread/new",
    "https://x.com/": "https://www.x.com/messages",
    "https://x.com/home": "https://www.x.com/messages",
};

chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        const redirectUrl = redirects[details.url];
        if (redirectUrl) {
            chrome.tabs.update(details.tabId, { url: redirectUrl });
        }
    },
    { url: Object.keys(redirects).map(url => ({ urlEquals: url })) }
);
