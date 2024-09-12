// WhatsApp redirection when clicking Lets Talk button
const whatsappBtn = document.querySelector("#whatsappBtn");

whatsappBtn.addEventListener("click", () => {
  const phoneNumber = "919363878198";

  const message = encodeURIComponent("Hey! How are you doing?");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  //try opening in a new tab
  try {
    const newWindow = window.open(whatsappUrl, "_blank");

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      window.location.href = whatsappUrl;
    }
  } catch (e) {
    window.location.href = whatsappUrl;
  }
});

// Typing Animation Function
function typeText(element, text, speed, callback) {
  let index = 0;
  const length = text.length;
  const typingInterval = setInterval(() => {
    if (index < length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, speed);
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const h1Element = document.querySelector("#typing-h1");
  const h3Element = document.querySelector("#typing-h3");

  const h1Text = "Hi! I'm Abineshkumar";
  const h3Text = "An Aspiring Web Developer";

  typeText(h1Element, h1Text, 100, () => {
    typeText(h3Element, h3Text, 100);
  });
});
