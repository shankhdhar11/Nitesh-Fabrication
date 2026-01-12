const form = document.getElementById("contactForm");
const btn = form.querySelector("button");

btn.addEventListener("click", function () {
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

  if (valid) {
    alert("Message sent successfully ✅");
    form.reset();
  }
});

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || phone === "" || message === ""){
        return;
    }

    const whatsappNumber = "919662477669"; // 👉 yahan OWNER ka WhatsApp number daal (91 ke saath)

    const text = 
`New Contact Form Message 🚀

Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
});

