const customCheckbox = document.querySelectorAll(
  '[data-selector="custom-checkbox-btn"]'
);

function handleKeyDown(e, checkbox) {
  if (e.code === "Space") {
    e.preventDefault();
    const targetInput = document.getElementById(checkbox.dataset.inputId);

    if (checkbox.getAttribute("aria-checked").includes("true")) {
      targetInput.removeAttribute("checked");
      checkbox.setAttribute("aria-checked", "false");
    } else {
      targetInput.setAttribute("checked", "");
      checkbox.setAttribute("aria-checked", "true");
    }
  }

  // checkbox.removeEventListener("keydown", handleKeyDownWrapper);
}

function handleKeyDownWrapper(e) {
  handleKeyDown(e, this);
}

customCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("focus", () => {
    checkbox.addEventListener("keydown", handleKeyDownWrapper);
  });
});
