const card = document.getElementById("secret-card");
const secretText = document.getElementById("secret-text");
const secretUser = document.getElementById("secret-user");

let loading = false;

async function loadSecret() {
  if (loading) {
    return;
  }

  loading = true;

  try {
    const response = await fetch("/api/secret");

    if (!response.ok) {
      throw new Error("Failed to load secret");
    }

    const data = await response.json();
    secretText.textContent = data.secret;
    secretUser.textContent = `@${data.user}`;
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
}

card.addEventListener("mouseenter", loadSecret);