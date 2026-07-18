document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("links");
  if (!nav || !window.LINKS) return;
  window.LINKS.forEach((link) => {
    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("data-affiliate", link.affiliate ? "1" : "0");
    nav.appendChild(a);
  });
});
