// NOTHING USE THIS (CAN BE DELETED)

// function openModal(modalId) {
//   document.getElementById(modalId).classList.remove("hidden");
// }
// function closeModal(modalId) {
//   document.getElementById(modalId).classList.add("hidden");
// }
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     document
//       .querySelectorAll(".modal")
//       .forEach((modal) => modal.classList.add("hidden"));
//   }
// });
// document.querySelectorAll("a[href]").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     if (link.href.includes("course")) {
//       if (!confirm("Are you ready to start learning?")) e.preventDefault();
//     }
//   });
// });
// function toggleDarkMode() {
//   const toggle = document.getElementById("dark-mode-toggle");
//   document.body.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     toggle.classList.remove("fa-sun");
//     toggle.classList.add("fa-moon");
//     toggle.style.color = "#f1c40f";
//   } else {
//     toggle.classList.remove("fa-moon");
//     toggle.classList.add("fa-sun");
//     toggle.style.color = "#f59e0b";
//   }
//   localStorage.setItem(
//     "darkMode",
//     document.body.classList.contains("dark-mode")
//   );
// }
// if (localStorage.getItem("darkMode") === "true") {
//   document.body.classList.add("dark-mode");
//   const toggle = document.getElementById("dark-mode-toggle");
//   toggle.classList.remove("fa-sun");
//   toggle.classList.add("fa-moon");
//   toggle.style.color = "#f1c40f";
// }
// function searchCourses() {
//   const query = document.getElementById("search-bar").value.toLowerCase();
//   const courses = document.querySelectorAll(".course-card");
//   courses.forEach((course) => {
//     const title = course.querySelector("h3").textContent.toLowerCase();
//     const description = course.querySelector("p").textContent.toLowerCase();
//     if (title.includes(query) || description.includes(query)) {
//       course.style.display = "block";
//     } else {
//       course.style.display = "none";
//     }
//   });
// }
// document.getElementById("menu-toggle").addEventListener("click", () => {
//   document.getElementById("nav-menu").classList.toggle("hidden");
// });
