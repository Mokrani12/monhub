// Codes premium fixes (optionnels). Les codes générés (PREMIUM-XXXXXX) sont aussi acceptés.
const PREMIUM_CODES = [
  "PREMIUM-2024",
  "MONHUB-VIP",
  "ACCES-OR",
];

const KEY = "monhub_premium";

function isValidCode(code) {
  if (PREMIUM_CODES.includes(code)) return true;
  // Accepte tout code au format PREMIUM-XXXXXX (généré par tools/codegen.html)
  return /^PREMIUM-[A-Z2-9]{6}$/.test(code);
}

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
    if (isValidCode(code) || localStorage.getItem(KEY) === "1") {
      localStorage.setItem(KEY, "1");
      premium.style.display = "block";
      msg.style.display = "none";
    } else {
      msg.style.display = "block";
      msg.textContent = "Code invalide. Achetez un accès pour obtenir un code.";
    }
  });
});
