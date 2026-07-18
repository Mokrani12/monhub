// Liste des codes premium valides. Ajoutez vos codes ici (ceux que vous vendez).
const PREMIUM_CODES = [
  "PREMIUM-2024",
  "MONHUB-VIP",
  "ACCES-OR",
];

const KEY = "monhub_premium";

document.addEventListener("DOMContentLoaded", () => {
  const premium = document.getElementById("premium");
  const msg = document.getElementById("msg");
  const input = document.getElementById("code");
  const btn = document.getElementById("unlock");

  if (localStorage.getItem(KEY) === "1") {
    premium.style.display = "block";
  }

  btn.addEventListener("click", () => {
    const code = (input.value || "").trim().toUpperCase();
    if (PREMIUM_CODES.includes(code) || localStorage.getItem(KEY) === "1") {
      localStorage.setItem(KEY, "1");
      premium.style.display = "block";
      msg.style.display = "none";
    } else {
      msg.style.display = "block";
      msg.textContent = "Code invalide. Contactez le vendeur pour obtenir un accès.";
    }
  });
});
