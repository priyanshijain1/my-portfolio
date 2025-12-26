const modal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const contactBtnNav = document.getElementById("contactBtnNav");
const closeBtn = document.querySelector(".close");

// open modal
contactBtn.addEventListener("click", () => modal.classList.remove("hidden"));
contactBtnNav.addEventListener("click", () => modal.classList.remove("hidden"));

// close modal
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

modal.addEventListener("click", (e) => {
  if(e.target === modal) modal.classList.add("hidden");
});

document.addEventListener("keydown", e => {
  if(e.key === "Escape") modal.classList.add("hidden");
});
