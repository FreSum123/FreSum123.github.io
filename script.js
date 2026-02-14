let records = JSON.parse(localStorage.getItem("records")) || [];

function render() {
  const table = document.getElementById("records");
  table.innerHTML = "";

  records.forEach(r => {
    table.innerHTML += `
      <tr>
        <td>${r.item}</td>
        <td>${r.type}</td>
        <td>${r.desc}</td>
        <td>$${r.amount}</td>
      </tr>
    `;
  });
}

function addRecord() {
  const record = {
    item: document.getElementById("item").value,
    type: document.getElementById("type").value,
    desc: document.getElementById("desc").value,
    amount: document.getElementById("amount").value
  };

  records.push(record);
  localStorage.setItem("records", JSON.stringify(records));
  render();
}

render();
