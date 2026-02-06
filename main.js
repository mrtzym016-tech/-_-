const PASSWORD = "12345"; // غيرها لاحقًا

const paidContainer = document.getElementById("paidContainer");

paidTexts.forEach(text => {
  const div = document.createElement("div");
  div.className = "card locked";
  div.innerHTML = `
    <pre>🔒 هذا النص مدفوع</pre>
  `;
  paidContainer.appendChild(div);
});

function unlock() {
  const input = document.getElementById("passwordInput").value;

  if (input === PASSWORD) {
    document.getElementById("lockedInfo").style.display = "none";
    document.getElementById("passwordInput").style.display = "none";

    paidContainer.innerHTML = "";

    paidTexts.forEach(text => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <pre>${text}</pre>
        <button onclick="navigator.clipboard.writeText('${text}')">
          نسخ النص
        </button>
      `;
      paidContainer.appendChild(div);
    });
  } else {
    alert("❌ كلمة السر غير صحيحة");
  }
}
