// 1️⃣ Load saved records
let records = JSON.parse(localStorage.getItem("records")) || [];

// 2️⃣ Display records on page
function render() {
  const table = document.getElementById("records");
  table.innerHTML = "";

  records.forEach(r => {
    const row = `
      <tr>
        <td>${r.date || ""}</td>
        <td>${r.item}</td>
        <td>${r.type}</td>
        <td>${r.desc}</td>
        <td>$${r.amount}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

// 3️⃣ Save new record
function addRecord() {
  const item = document.getElementById("item").value;
  const type = document.getElementById("type").value;
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;

  if (!desc || !amount) {
    alert("Please fill description and amount");
    return;
  }

  const record = {
    item,
    type,
    desc,
    amount,
    date: new Date().toLocaleDateString()
  };

  records.push(record);
  localStorage.setItem("records", JSON.stringify(records));
  function render() {
  const table = document.getElementById("records");
  if (!table) return;

  table.innerHTML = "";

  records.forEach(r => {
    const date = r.date ? r.date : "";

    table.innerHTML += `
      <tr>
        <td>${date}</td>
        <td>${r.item}</td>
        <td>${r.type}</td>
        <td>${r.desc}</td>
        <td>$${r.amount}</td>
      </tr>
    `;
  });
}

