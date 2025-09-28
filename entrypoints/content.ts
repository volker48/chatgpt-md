import TurndownService from "turndown";

export default defineContentScript({
  registration: "runtime",
  async main() {
    const articles = document.querySelectorAll("article");
    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
    });
    turndownService.remove(["script", "style"]);
    const markdown = Array.from(articles).map((item) =>
      turndownService.turndown(item)
    );
    return markdown;
  },
});
