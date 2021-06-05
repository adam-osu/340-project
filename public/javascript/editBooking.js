document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("property-search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const addButtonHandler = async (propertyEl, maxOccupancy) => {
        const property = propertyEl.cloneNode(true);
        const currentProperties = document.querySelector(
          "#current-property tbody"
        );
        const property_id = property.firstChild.firstChild.value;
        try {
          await BookingUpdater.updateProperty(property_id);
        } catch (error) {
          throw new Error();
        }

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

      const addButtonHandler = async (customerEl) => {
        console.log('here!')
        const customer = customerEl.cloneNode(true);
        const currentCustomers = document.querySelector(
          "#current-customers tbody"
        );

        const maxOccupancy = document.getElementById(
          "current-property-max-occupancy"
        ).value;
        // console.log(maxOccupancy)
        if (currentCustomers.children.length + 1 > parseInt(maxOccupancy)) {
          return;
        }

        let isAlreadyAdded = false;
        console.log(currentCustomers);

        [...currentCustomers.children].forEach((currentCustomer) => {
          const currentCustomerId = currentCustomer.firstChild.value;
          const addedCustomerId = customer.firstChild.firstChild.value;

          if (currentCustomerId === addedCustomerId) {
            isAlreadyAdded = true;
          }
        });
        console.log(isAlreadyAdded)
        if (isAlreadyAdded) {
          return;
        }

        const customer_id = customer.firstChild.firstChild.value;
        // console.log(customer.firstChild.firstChild.value)
        // Add customer
        try {
          await BookingUpdater.addCustomer(customer_id);
        } catch (error) {
          throw new Error();
        }

        currentCustomers.appendChild(customer);

        // replace add button with remove button
        const appendedCustomer =
          currentCustomers.children[currentCustomers.children.length - 1];
        const button = appendedCustomer.lastChild.firstChild;
        button.textContent = "Remove";

        const removeHandler = async () => {
          console.log('called remove')
          const targetCustomerId =
            button.parentElement.parentElement.firstChild.firstChild.value;
          [...currentCustomers.children].forEach(async (customerEl, index) => {
            const currentCustomerId = customerEl.firstChild.firstChild.value;
            console.log(
              button.parentElement.parentElement.firstChild.firstChild.value
            );
            console.log(customerEl.firstChild.firstChild.value);
            if (currentCustomerId === targetCustomerId) {
              try {
                await BookingUpdater.removeCustomer(customer_id);
                customerEl.remove();
              } catch (error) {
                throw new Error();
              }
            }
          });
        };
        button.onclick = removeHandler;
      };

      new CustomerSearcher({
        addButtonHandler,
      }).search();
    });

  document.getElementById("edit-booking").addEventListener("submit", (e) => {
    e.preventDefault();

    new BookingUpdater().update();
  });
});
