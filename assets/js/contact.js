// EmailJS başlat
(function () {
    emailjs.init("shlBSii27myp15Gzc"); // 👈 Buraya kendi Public Key’ini yaz
})();

// Form gönderme işlemi
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Form verilerini al
        const name = document.getElementById("userName").value;
        const phone = document.getElementById("userPhone").value;
        const email = document.getElementById("userEmail").value;
        const title = document.getElementById("messageSubject").value;
        const message = document.getElementById("userMessage").value;

        // Mail içeriğini oluştur
        const customContent = `
        🔔 Yeni bir iletişim talebi alındı!

        👤 Ad Soyad: ${name}
        📞 Telefon: ${phone}
        📧 E-posta: ${email}

        💬 Mesaj:
        ${message}
    `;

        // EmailJS gönderim verisi
        const templateParams = {
            name: name,
            email: email,
            title: title,
            message: customContent
        };
        emailjs.send("service_924hx6h", "template_j30kwu1", templateParams)
            .then(function (response) {
                console.log("Gönderim başarılı ✅", response);
                document.getElementById("sent-message").style.display = 'block';
                document.getElementById("error-message").style.display = "none";
                form.reset();
            }, function (error) {
                console.error("Hata oluştu ❌", error);
                document.getElementById("error-message").textContent = "Gönderim başarısız. Lütfen tekrar deneyin.";
                document.getElementById("error-message").style.display = "block";
                document.getElementById("sent-message").style.display = 'none';
            });
    });
});
