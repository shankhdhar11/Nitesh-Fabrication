// ================= CONTACT FORM + WHATSAPP =================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", () => {

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const nameErr = name.nextElementSibling;
    const phoneErr = phone.nextElementSibling;
    const msgErr = message.nextElementSibling;

    let valid = true;

    // NAME
    if (name.value.trim() === "") {
      nameErr.textContent = "Name is required";
      valid = false;
    } else {
      nameErr.textContent = "";
    }

    // PHONE
    if (phone.value.trim() === "") {
      phoneErr.textContent = "Phone number is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(phone.value.trim())) {
      phoneErr.textContent = "Enter valid 10 digit number";
      valid = false;
    } else {
      phoneErr.textContent = "";
    }

    // MESSAGE
    if (message.value.trim() === "") {
      msgErr.textContent = "Message is required";
      valid = false;
    } else {
      msgErr.textContent = "";
    }

    if (!valid) return;

    // ✅ WhatsApp redirect
    const whatsappNumber = "919662477669";

    const text = `New Contact Form Message 🚀

Name: ${name.value}
Phone: ${phone.value}
Message: ${message.value}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  });


  // ================= WHATSAPP BUTTON (LEFT SIDE) =================
  const whatsappBtn = document.getElementById("wb");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open("https://wa.me/919662477669", "_blank");
    });
  }

});
