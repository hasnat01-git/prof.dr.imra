document.addEventListener("DOMContentLoaded", () => {
  // ✅ Form Submission to WhatsApp
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
      const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
      const desc = form.querySelector('textarea[placeholder="Describe your concern"]').value.trim();

      if (!name || !phone) {
        alert("Please enter your Name and Phone Number.");
        return;
      }

      const message = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nDescription: ${desc}`);
      const whatsappURL = `https://wa.me/923214158026?text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  }

  // ✅ Sticky "Book Appointment" Button
  const header = document.querySelector("header");
  const bookButton = document.getElementById("bookButton");
  if (header && bookButton) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        bookButton.classList.toggle("visible", !entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(header);
  }

  // ✅ Toggle Service Details
  const toggleBtn = document.getElementById("toggleDetailsBtn");
  const detailSection = document.getElementById("service-details");

  if (toggleBtn && detailSection) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = detailSection.style.display === "none" || !detailSection.style.display;
      detailSection.style.display = isHidden ? "block" : "none";
      toggleBtn.textContent = isHidden
        ? "Hide Full Service Details"
        : "Show Full Service Details";
    });
  }

  // ✅ Lazy YouTube Facade Loader
  document.querySelectorAll(".youtube-facade").forEach((div) => {
    const videoId = div.dataset.id;
    if (!videoId) return;

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const img = new Image();
    img.src = thumbnail;
    img.alt = "YouTube Thumbnail";
    img.loading = "lazy";
    div.appendChild(img);

    const playBtn = document.createElement("div");
    playBtn.className = "play-button";
    div.appendChild(playBtn);

    div.addEventListener("click", () => {
      div.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                title="YouTube Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>
      `;
    });
  });
});

// ✅ Show embedded PDF
function showPDF() {
  const viewer = document.getElementById("pdfViewer");
  if (viewer) {
    viewer.style.display = "block";
    viewer.scrollIntoView({ behavior: "smooth" });
  }
}
