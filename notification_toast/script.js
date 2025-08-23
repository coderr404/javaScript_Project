const firstChoice = document.querySelector("#first-choice");
const secondChoice = document.querySelector("#second-choice");
const thirdChoice = document.querySelector("#third-choice");
const showBtn = document.querySelector(".show-toast");
const toastContainer = document.querySelector(".toast-container");
const toatMsg = document.querySelector(".user-input input");
const durationInput = document.querySelector(".duration input");

showBtn.addEventListener("click", () => {
  if (
    firstChoice.options[firstChoice.selectedIndex].text.toLowerCase() ===
    "right"
  )
    toastContainer.classList.add("right");
  else toastContainer.classList.remove("right");
  if (
    secondChoice.options[secondChoice.selectedIndex].text.toLowerCase() ===
    "bottom"
  )
    toastContainer.classList.add("bottom");
  else toastContainer.classList.remove("bottom");

  console.log(name);

  const newTost = document.createElement("div");
  newTost.classList.add("toast");
  newTost.classList.add(
    thirdChoice.options[thirdChoice.selectedIndex].text.toLowerCase()
  );
  newTost.innerText = ` ${toatMsg.value}  `;
  toastContainer.append(newTost);

  const closeIcon = document.createElement("span");
  closeIcon.innerText = " ✕";
  newTost.append(closeIcon);
  // debugger

  if (
    firstChoice.options[firstChoice.selectedIndex].text.toLowerCase() == "right"
  ) {
    newTost.classList.add("from-right");
    function removeToast() {
      newTost.classList.add("to-right");
      setTimeout(() => {
        newTost.remove();
      }, 100);
    }

    closeIcon.addEventListener("click", () => {
      removeToast();
    });

    setTimeout(() => {
      removeToast();
    }, durationInput.value * 1000);
  } else {
    newTost.classList.add("form-left");
    function removeToast() {
      newTost.classList.add("to-left");
      setTimeout(() => {
        newTost.remove();
      }, 100);
    }

    closeIcon.addEventListener("click", () => {
      removeToast();
    });

    setTimeout(() => {
      removeToast();
    }, durationInput.value * 1000);
  }
});
