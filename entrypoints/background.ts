const contentMatch = new MatchPattern(CONTENT_SCRIPT_MATCHES);

async function actionListener(tab: Browser.tabs.Tab) {
  if (tab.id && tab.url && contentMatch.includes(tab.url)) {
    const res = await browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["/content-scripts/content.js"],
    });
    console.log(res);
    const markdown = res[0].result as string[];
    const md = markdown.join("\n\n");
    const dataUrl =
      "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    browser.downloads.download(
      {
        url: dataUrl,
        filename: "chatgpt.md",
        saveAs: true,
      },
      (id) => {
        if (browser.runtime.lastError) {
          console.error("download error:", browser.runtime.lastError.message);
        }
      }
    );
  }
}

export default defineBackground(() => {
  (browser.action ?? browser.browserAction).onClicked.addListener(
    actionListener
  );
});
