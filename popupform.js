// ===== POPUP AFTER 5 SECONDS =====
window.addEventListener("load", () => {

    // Agar chahe ki ek hi baar aaye (optional)
    if (!sessionStorage.getItem("popupShown")) {
        setTimeout(() => {
            const popup = document.getElementById("popupOverlay");
            if (popup) {
                popup.style.display = "flex";
                sessionStorage.setItem("popupShown", "true");
            }
        }, 5000); // 5 seconds
    }
});

// Close popup
const closeBtn = document.getElementById("closePopup");
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.getElementById("popupOverlay").style.display = "none";
    });
}

// ===== FORM VALIDATION + WHATSAPP SEND =====
const sendBtn = document.getElementById("sendBtn");

if (sendBtn) {
    sendBtn.addEventListener("click", () => {

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        if (message === "") {
            alert("Please enter your message");
            return;
        }

        // WhatsApp message
        const whatsappMessage =
            `New Enquiry from Website 🚀\n\n` +
            `👤 Name: ${name}\n` +
            `📞 Phone: ${phone}\n` +
            `💬 Message: ${message}`;

        // Owner WhatsApp number
        const whatsappNumber = "919662477669";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        // Close popup after submit (optional)
        const popup = document.getElementById("popupOverlay");
        if (popup) popup.style.display = "none";

        // Reset form
        document.getElementById("contactForm").reset();
    });
}
