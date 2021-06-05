document.addEventListener("DOMContentLoaded", () => {
  const customerId = document.getElementById("customer-id").value;

  const deleteButton = document.getElementById("delete-customer-btn");

  deleteButton.addEventListener("click", async () => {
    await CustomerDeleter.delete(customerId);
  });
});
