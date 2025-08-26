const emojiContainer = document.querySelector("#emoji-container");
const pushBtn = document.querySelector("#push-btn");
let emojiInput = document.querySelector("#emoji-input");
const unshiftBtn = document.querySelector("#unshift-btn");

const myEmojis = ["📿", "🙌", "🍗", "🍔"];

function renderEmojis() {
  for (const myEmoji of myEmojis) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmoji;
    emojiContainer.append(emoji);
  }
}

pushBtn.addEventListener("click", function () {
  emoji = emojiInput.value.trim();
  if (emojiInput.value) {
    myEmojis.push(emoji);
    emojiInput.value = "";
    emojiInput.innerHTML = "";
    renderEmojis();
  } else {
    alert("Please input an emoji");
  }
});

unshiftBtn.addEventListener("click", function () {
  emoji = emojiInput.value.trim();

  if (emojiInput.value) {
    myEmojis.unshift(emoji);
    emojiInput.value = "";
    emojiInput.innerHTML = "";
    renderEmojis();
  } else {
    alert("Please input an emoji");
  }
});
