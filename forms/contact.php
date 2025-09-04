<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // FORM VERİLERİNİ AL
  $name    = $_POST['name'] ?? '';
  $email   = $_POST['email'] ?? '';
  $subject = $_POST['subject'] ?? 'İletişim Formu';
  $phone   = $_POST['phone'] ?? '';
  $message = $_POST['message'] ?? '';

  // ALICI ADRESİ (senin mailin)
  $to = 'rizabocoglu055@gmail.com';

  // E-POSTA İÇERİĞİ
  $email_content = "Ad: $name\n";
  $email_content .= "E-posta: $email\n";
  $email_content .= "Telefon: $phone\n\n";
  $email_content .= "Mesaj:\n$message\n";

  // BAŞLIK
  $headers = "From: $name <$email>";

  // E-POSTAYI GÖNDER
  if (mail($to, $subject, $email_content, $headers)) {
    echo "OK"; // JavaScript tarafından kontrol edilebilir yanıt
  } else {
    echo "Mesaj gönderilirken hata oluştu.";
  }
} else {
  echo "Geçersiz istek.";
}
?>
