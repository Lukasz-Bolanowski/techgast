document.addEventListener("DOMContentLoaded", () => {
  const parts = window.location.pathname.split("/").filter(Boolean);

  // jeśli "/" albo "index.html" → strona główna
  let currentPage;
  if (parts.length === 0 || parts[parts.length - 1].startsWith("index")) {
    currentPage = "index";
  } else {
    currentPage = parts[parts.length - 1]; // np. "offer", "aboutus"
  }

  const menuLinks = document.querySelectorAll(".menu__item a");

  menuLinks.forEach(link => {
    const href = link.getAttribute("href");
    const hrefParts = href.split("/").filter(Boolean);

    let linkPage;
    if (hrefParts.length === 0 || hrefParts[hrefParts.length - 1].startsWith("index")) {
      linkPage = "index";
    } else {
      linkPage = hrefParts[hrefParts.length - 2] || hrefParts[hrefParts.length - 1];
    }

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
