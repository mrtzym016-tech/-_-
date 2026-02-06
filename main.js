const PASSWORD = "12345";
const container = document.getElementById("paidContainer");

paidTexts.forEach(t => {
  const div = document.createElement("div");
  div.className = "card locked";
  div.innerHTML = `<p>نص مدفوع</p>`;
  container.appendChild(div);
});

function unlock(){
  const val = document.getElementById("passwordInput").value;
  if(val !== PASSWORD) return alert("كلمة السر غير صحيحة");

  container.innerHTML = "";
  paidTexts.forEach(t=>{
    const div = document.createElement("div");
    div.className="card";
    div.innerHTML = `
      <small>${t.category}</small>
      <p>${t.part1}</p>
      <p>${t.part2}</p>
      <button onclick="navigator.clipboard.writeText('${t.part1} ${t.part2}')">نسخ</button>
    `;
    container.appendChild(div);
  });
}
