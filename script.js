function generateCard() {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !message) {
    alert("Please enter both name and message.");
    return;
  }

  document.getElementById("cardName").textContent = name;
  document.getElementById("cardMessage").textContent = message;
  document.getElementById("card").classList.remove("hidden");
}
