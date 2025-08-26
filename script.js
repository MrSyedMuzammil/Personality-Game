const emojiContainer = document.querySelector("#emoji-container");

const myEmojis = ["📿", "🙌", "🍗", "🍔"];

for (const myEmoji of myEmojis) {
  const emoji = document.createElement("span");
  emoji.textContent = myEmoji;
  emojiContainer.append(emoji);
}
