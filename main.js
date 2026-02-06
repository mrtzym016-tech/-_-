const PASSWORD = "12345"; // غيرها لاحقًا
const paidContainer = document.getElementById("paidContainer");

// عرض كل النصوص على شكل بطاقات مقفولة
paidTexts.forEach((text, index) => {
  const div = document.createElement("div");
  div.className = "card locked";
  div.innerHTML = `
    <h4>نص مدفوع ${index + 1}</h4>
    <pre>🔒 مقفول</pre>
  `;
  paidContainer.appendChild(div);
});

// فتح النصوص عند إدخال كلمة السر
function unlock() {
  const input = document.getElementById("passwordInput").value;

  if (input === PASSWORD) {
    document.getElementById("lockedInfo").style.display = "none";
    document.getElementById("passwordInput").style.display = "none";

    paidContainer.innerHTML = "";

    paidTexts.forEach((text, index) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h4>نص مدفوع ${index + 1}</h4>
        <pre>${text}</pre>
        <button class="copy-btn" onclick="copyText('${text}')">نسخ النص</button>
      `;
      paidContainer.appendChild(div);
    });
  } else {
    alert("❌ كلمة السر غير صحيحة");
  }
}

// وظيفة نسخ النصوص
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("تم نسخ النص!");
  });
}
