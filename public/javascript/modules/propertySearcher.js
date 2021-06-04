class PropertySearcher {
  constructor({ addButtonHandler }) {
    this.addButtonHandler = addButtonHandler;
  }

  search() {
    // stub
    const properties = [
      {
        id: "1",
        building_name: "Radiance",
        max_occupancy: 3,
      },
      { id: "2", building_name: "G Tower 2202", max_occupancy: 2 },
    ];

    const resultsTable = document.querySelector("#property-results tbody");

    const propertyRows = properties.map((property) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const maxOccupancyCell = document.createElement("td");
      const inputCell = document.createElement("tr");
      const hiddenInput = document.createElement("input");
      const addCell = document.createElement("tr");
      const addButton = document.createElement("button");

      nameCell.innerText = `${property.building_name}`;
      maxOccupancyCell.innerText = `${property.max_occupancy}`;

      hiddenInput.value = property.id;
      hiddenInput.type = "hidden";
      inputCell.appendChild(hiddenInput);
      inputCell.hidden = true;

      addButton.className = "btn--small btn--link";
      addButton.innerText = "Add";
      addCell.appendChild(addButton);

      row.appendChild(inputCell);
      row.appendChild(nameCell);
      row.appendChild(maxOccupancyCell);
      row.appendChild(addCell);

      addButton.onclick = this.addButtonHandler.bind(
        null,
        row,
        property.max_occupancy
      );

      return row;
    });

    resultsTable.innerHTML = "";

    propertyRows.forEach((propertyRow) => {
      resultsTable.appendChild(propertyRow);
    });
  }
}
