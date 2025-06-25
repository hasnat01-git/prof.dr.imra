document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = encodeURIComponent(this.querySelector('input[placeholder="Your Name"]').value.trim());
  const phone = encodeURIComponent(this.querySelector('input[placeholder="Phone Number"]').value.trim());
  const desc = encodeURIComponent(this.querySelector('textarea[placeholder="Describe your concern"]').value.trim());

  if (!name || !phone) {
    alert("Please enter your Name and Phone Number.");
    return;
  }

  // Use %0A for new lines in URL encoding
  const message =
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Description: ${desc}`;

  const whatsappNumber = "923214158026"; // Your WhatsApp number (no + sign)
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});

 function showPDF() {
    document.getElementById("pdfViewer").style.display = "block";
    // Optional: Scroll into view
    document.getElementById("pdfViewer").scrollIntoView({ behavior: 'smooth' });}

 document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const bookButton = document.getElementById("bookButton");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bookButton.classList.remove("visible");
        } else {
          bookButton.classList.add("visible");
        }
      },
      {
        root: null,       // viewport
        threshold: 0.1    // 10% visible
      }
    );

    if (header) {
      observer.observe(header);
    }
  });