document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-booking").addEventListener("submit", (e) => {
    e.preventDefault();

    new BookingCreator().create();
  });
});
