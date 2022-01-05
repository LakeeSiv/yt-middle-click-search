setTimeout(() => {
  const searchButton = document?.querySelector("button.ytd-searchbox");

  searchButton?.addEventListener("mousedown", (e: Event) => {
    const event = <MouseEvent>e;

    if (event.button == 1 || event.buttons == 4) {
      const inputElement = document?.querySelector(
        "input.ytd-searchbox"
      ) as HTMLInputElement;

      const text = inputElement.value;
      const url = "https://www.youtube.com/results?search_query=" + text;
      chrome.tabs.create({ url: url, active: false });
    }
  });
}, 200);
