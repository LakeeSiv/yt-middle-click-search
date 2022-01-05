interface Message {
  url: string;
}
chrome.runtime.onMessage.addListener(({ url }: Message, _, sendResponse) => {
  chrome.tabs.create({ url: url, active: false });
});
