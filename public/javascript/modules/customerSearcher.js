class CustomerSearcher {
  constructor({ addButtonHandler }) {
    this.addButtonHandler = addButtonHandler;
  }

  search() {
    // stub
    const customers = [
      {
        id: "1",
        first_name: "Adam",
        last_name: "Okasha",
        email: "kasho.dev@gmail.com",
      },
      { id: "2", first_name: "Hala", last_name: "B", email: "hala@mail.com" },
    ];

    const resultsTable = document.querySelector("#customer-results tbody");

    const customerRows = customers.map((customer) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const inputCell = document.createElement("tr");
      const hiddenInput = document.createElement("input");
      const addCell = document.createElement("tr");
      const addButton = document.createElement("button");

      nameCell.innerText = `${customer.first_name} ${customer.last_name}`;
      emailCell.innerText = `${customer.email}`;

      hiddenInput.value = customer.id;
      hiddenInput.type = "hidden";
      inputCell.appendChild(hiddenInput);
      inputCell.hidden = true;

      addButton.onclick = this.addButtonHandler;
      addButton.className = "btn--small btn--link";
      addButton.innerText = "Add";
      addCell.appendChild(addButton);

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(addCell);
      row.appendChild(inputCell);

      return row;
    });

    resultsTable.innerHTML = "";

    customerRows.forEach((customerRow) => {
      resultsTable.appendChild(customerRow);
    });
  }
}
