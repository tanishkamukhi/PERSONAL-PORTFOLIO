// Get the form and message container
const form = document.querySelector("form");
const messageBox = document.createElement("p"); 
messageBox.style.marginTop = "10px";
form.appendChild(messageBox);

// Listen for form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default reload

  // Collect form data
  let formData = new FormData(form);

  try {
    // Send request to Formspree
    let response = await fetch("https://formspree.io/f/xkgzdbbk", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      messageBox.textContent = "✅ Thank you! Your message has been sent.";
      messageBox.style.color = "green";
      form.reset(); // Clear form after submission
    } else {
      messageBox.textContent = "⚠️ Oops! Something went wrong. Please try again.";
      messageBox.style.color = "red";
    }
  } catch (error) {
    messageBox.textContent = "❌ Network error. Please try again later.";
    messageBox.style.color = "red";
  }
});
