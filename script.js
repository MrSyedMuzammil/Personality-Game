const emojiContainer = document.querySelector("#emoji-container");
const pushBtn = document.querySelector("#push-btn");
let emojiInput = document.querySelector("#emoji-input");

const myEmojis = ["📿", "🙌", "🍗", "🍔"];

for (const myEmoji of myEmojis) {
  const emoji = document.createElement("span");
  emoji.textContent = myEmoji;
  emojiContainer.append(emoji);
}

pushBtn.addEventListener("click", function () {
  emoji = emojiInput.value.trim();
  if (emojiInput.value) {
    myEmojis.push(emoji);
    emojiInput.value = "";
    console.log(myEmojis);
  } else {
    alert("Please input an emoji");
  }
});
