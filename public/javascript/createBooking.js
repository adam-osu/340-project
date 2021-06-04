document.addEventListener("DOMContentLoaded", () => {
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
