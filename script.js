let records = JSON.parse(localStorage.getItem("records")) || [];

function render() {
  const table = document.getElementById("records");
  table.innerHTML = "";

  records.forEach(r => {
    const row = `
      <tr>
        <td>${r.item}</td>
        <td>${r.type}</td>
        <td>${r.desc}</td>
        <td>$${r.amount}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

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

  function render()

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

render();
