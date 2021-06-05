class CustomerSearcher {
  constructor({ addButtonHandler }) {
    this.addButtonHandler = addButtonHandler;
  }

  search() {
    const searchTerms = document
      .getElementById("customer-search")
      .value.split(" ");

    let url;

    if (searchTerms.length === 0) {
      return;
    } else if (searchTerms.length === 1) {
      url = `/customers/search?first_name=${searchTerms[0]}`;
    } else if (searchTerms.length >= 2) {
      url = `/customers/search?first_name=${searchTerms[0]}&last_name=${searchTerms[1]}`;
    }

    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((customers) => {

          const resultsTable = document.querySelector(
            "#customer-results tbody"
          );

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
            addButton.className = "btn--small btn--link";
            addButton.innerText = "Add";
            addCell.appendChild(addButton);

            row.appendChild(inputCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(addCell);

            addButton.onclick = this.addButtonHandler.bind(null, row);

            return row;
          });

          resultsTable.innerHTML = "";

          customerRows.forEach((customerRow) => {
            resultsTable.appendChild(customerRow);
          });
        });
      })
      .catch((e) => console.error(e));
  }
}
