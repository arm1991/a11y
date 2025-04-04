const hiddenRadioInputs = document.querySelectorAll(".hidden.radio");
const inputLabels = document.querySelectorAll(".radio-label");

const radioButtons = document.querySelectorAll(
  '[data-selector="custom-radio-btn"]'
);

const handleClickEvent = (targetButton) => {
  const targetInput = document.getElementById(targetButton.dataset.inputId);

  radioButtons.forEach((btn) => {
    btn.setAttribute("aria-checked", "false");
    btn.setAttribute("tabindex", "-1");
  });
  hiddenRadioInputs.forEach((input) => {
    input.removeAttribute("checked");
  });

  targetInput.setAttribute("checked", "");
  targetButton.setAttribute("aria-checked", "true");
  targetButton.setAttribute("tabindex", "0");
};

inputLabels.forEach((label) => {
  label.addEventListener("click", (e) => {
    e.preventDefault();
    const targetButton = document.querySelector(
      `[data-input-id="${label.getAttribute("for")}"]`
    );
    handleClickEvent(targetButton);
  });
});

radioButtons.forEach((btn) => {
  btn.addEventListener("focus", () => {
    handleClickEvent(btn);
  });

  btn.addEventListener("keydown", (e) => {
    const index = [...radioButtons].findIndex(
      (el) => el.dataset.inputId === btn.dataset.inputId
    );
    const nextIndex = index + 1 === radioButtons.length ? 0 : index + 1;
    const prevIndex = index - 1 < 0 ? radioButtons.length - 1 : index - 1;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      radioButtons[nextIndex].focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      radioButtons[prevIndex].focus();
    }
  });
});
