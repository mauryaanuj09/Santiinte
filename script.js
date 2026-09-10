const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");
if (menuBtn) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// EDIT THESE TWO VALUES when the exact office address is available.
const officeAddress = "Shanti Interior, Raebareli, Uttar Pradesh, India";
const mapQuery = "Shanti Interior Raebareli Uttar Pradesh";

const addressEl = document.getElementById("officeAddress");
const mapLink = document.getElementById("mapLink");
if (addressEl) addressEl.textContent = officeAddress;
if (mapLink) mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapQuery);

// On GitHub Pages, Netlify Forms will not process the form.
// Keep the site usable by offering a WhatsApp fallback after submit.
const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", function(e) {
    if (!window.location.hostname.endsWith("netlify.app") && !window.location.hostname.includes("netlify")) {
      e.preventDefault();
      const data = new FormData(form);
      const msg = `Hello Shanti Interior, I have a project enquiry.%0AName: ${encodeURIComponent(data.get("name"))}%0APhone: ${encodeURIComponent(data.get("phone"))}%0ACity: ${encodeURIComponent(data.get("city"))}%0AService: ${encodeURIComponent(data.get("service"))}%0ARequirement: ${encodeURIComponent(data.get("message") || "")}`;
      window.open("https://wa.me/919807752627?text=" + msg, "_blank");
    }
  });
}
