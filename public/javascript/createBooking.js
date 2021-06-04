document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("property-search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const addButtonHandler = (propertyEl, maxOccupancy) => {
        const property = propertyEl.cloneNode(true);
        const currentProperties = document.querySelector(
          "#current-property tbody"
        );
        currentProperties.innerHTML = "";
        currentProperties.appendChild(property);

        document.getElementById("current-property-max-occupancy").value =
          maxOccupancy;

        // remove add button
        const appendedProperty = currentProperties.children[0];
        appendedProperty.removeChild(appendedProperty.lastChild);
      };

      new PropertySearcher({
        addButtonHandler,
      }).search();
    });

  document
    .getElementById("customer-search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const addButtonHandler = (customerEl) => {
        const customer = customerEl.cloneNode(true);
        const currentCustomers = document.querySelector(
          "#current-customers tbody"
        );

        const maxOccupancy = document.getElementById(
          "current-property-max-occupancy"
        ).value;

        if (currentCustomers.children.length + 1 > parseInt(maxOccupancy)) {
          return;
        }

        let isAlreadyAdded = false;

        [...currentCustomers.children].forEach((currentCustomer) => {
          const currentCustomerId = currentCustomer.firstChild.firstChild.value;
          const addedCustomerId = customer.firstChild.firstChild.value;

          if (currentCustomerId === addedCustomerId) {
            isAlreadyAdded = true;
          }
        });

        if (isAlreadyAdded) {
          return;
        }

        // Add customer
        currentCustomers.appendChild(customer);

        // replace add button with remove button
        const appendedCustomer =
          currentCustomers.children[currentCustomers.children.length - 1];
        const button = appendedCustomer.lastChild.firstChild;
        button.textContent = "Remove";

        button.onclick = () => {
          const targetCustomerId =
            button.parentElement.parentElement.firstChild.firstChild.value;
          [...currentCustomers.children].forEach((customerEl, index) => {
            const currentCustomerId = customerEl.firstChild.firstChild.value;
            console.log(
              button.parentElement.parentElement.firstChild.firstChild.value
            );
            console.log(customerEl.firstChild.firstChild.value);
            if (currentCustomerId === targetCustomerId) {
              console.log(true);
              customerEl.remove();
            }
          });
        };
      };

      new CustomerSearcher({
        addButtonHandler,
      }).search();
    });

  document.getElementById("add-booking").addEventListener("submit", (e) => {
    e.preventDefault();

    new BookingCreator().create();
  });
});
