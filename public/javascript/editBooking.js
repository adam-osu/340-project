document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("property-search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      new PropertySearcher({
        addButtonHandler: () => console.log("coolio"),
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
});
