document.addEventListener("DOMContentLoaded", () => {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const currentPage = parts[parts.length - 2];
  const menuLinks = document.querySelectorAll(".menu__item a");

  console.log("Aktualny folder:", currentPage);

  menuLinks.forEach(link => {
    const href = link.getAttribute("href");

    const hrefParts = href.split("/").filter(Boolean);
    const linkPage = hrefParts[hrefParts.length - 2];

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});