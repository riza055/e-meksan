// EmailJS başlat
(function () {
    emailjs.init("shlBSii27myp15Gzc"); // 👈 Buraya kendi Public Key’ini yaz
})();

// Form gönderme işlemi
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consultation");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Form verilerini al
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Mail içeriğini oluştur
        const customContent = `
        Yeni bir danışmanlık talebi geldi:

        👤 Ad Soyad: ${{name}}
        📧 E-posta: ${{email}}
        📞 Telefon: ${{phone}}

        💬 Mesaj:
        ${{message}}
    `;

        // EmailJS gönderim verisi
        const templateParams = {
            name: name,
            email: email,
            title: 'Yeni bir danışmanlık talebi geldi:',
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
