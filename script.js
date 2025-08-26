const emojiContainer = document.querySelector("#emoji-container");
const pushBtn = document.querySelector("#push-btn");
let emojiInput = document.querySelector("#emoji-input");
const unshiftBtn = document.querySelector("#unshift-btn");
const popBtn = document.querySelector("#pop-btn");
const shiftBtn = document.querySelector("#shift-btn");

const myEmojis = ["📿", "🙌", "🍗", "🍔"];

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (const myEmoji of myEmojis) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmoji;
    emojiContainer.append(emoji);
  }
}
renderEmojis();
pushBtn.addEventListener("click", function () {
  const emoji = emojiInput.value.trim();
  const characterCount = [...emoji].length;

  if (emoji && characterCount === 1) {
    myEmojis.push(emoji);
    emojiInput.value = "";
    renderEmojis();
  } else if (characterCount > 1) {
    alert("Please input only one emoji");
  } else {
    alert("Please input an emoji");
  }
});
unshiftBtn.addEventListener("click", function () {
  const emoji = emojiInput.value.trim();
  const characterCount = [...emoji].length;

  if (emoji && characterCount === 1) {
    myEmojis.unshift(emoji);
    emojiInput.value = "";
    renderEmojis();
  } else if (characterCount > 1) {
    alert("Please input only one emoji");
  } else {
    alert("Please input an emoji");
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  renderEmojis();
});
