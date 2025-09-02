// script.js

document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("upload");
  const librarySection = document.getElementById("library");

  uploadInput.addEventListener("change", (event) => {
    const files = event.target.files;

    for (let file of files) {
      let fileCard = document.createElement("div");
      fileCard.classList.add("file-card");

      fileCard.innerHTML = `
        <h3>${file.name}</h3>
        <p>Size: ${(file.size / 1024).toFixed(2)} KB</p>
      `;

      librarySection.appendChild(fileCard);
    }
  });
});
