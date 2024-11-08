// Avoid newsfeeds on: linkedin, twitter
const redirects = {
    "https://www.linkedin.com/": "https://www.linkedin.com/messaging/thread/new",
    "https://www.linkedin.com/feed/": "https://www.linkedin.com/messaging/thread/new",
    "https://x.com/": "https://www.x.com/messages",
    "https://x.com/home": "https://www.x.com/messages",
    "https://twitter.com/": "https://www.x.com/messages",
    "https://twitter.com/home": "https://www.x.com/messages"
};

chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.url) {
            const redirectUrl = redirects[changeInfo.url];
            if (redirectUrl) {
                chrome.tabs.update(tabId, { url: redirectUrl });
            }
        }
    }
);
