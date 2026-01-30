document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname

  if (currentPage === "/") {
    currentPage = ""
  }

  const menuLinks = document.querySelectorAll(".menu__item a")

  menuLinks.forEach(link => {
    let linkPage = link.getAttribute("href");

    if (linkPage === "/") {
      linkPage = ""
    }

    if (linkPage === currentPage) {
      link.classList.add("active")
      link.setAttribute("aria-current", "page")
    }
  })
})
