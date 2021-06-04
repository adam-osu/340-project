document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("property-search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const addButtonHandler = (propertyEl) => {
        const property = propertyEl.cloneNode(true);
        const currentProperties = document.querySelector(
          "#current-property tbody"
        );
        currentProperties.innerHTML = "";
        currentProperties.appendChild(property);
        // remove add button
        const appendedProperty = currentProperties.children[0]
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

      new CustomerSearcher({
        addButtonHandler: () => console.log("coolio"),
      }).search();
    });

  document.getElementById("add-booking").addEventListener("submit", (e) => {
    e.preventDefault();

    new BookingCreator().create();
  });
});
