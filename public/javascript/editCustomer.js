document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("edit-customer").addEventListener("submit", (e) => {
    e.preventDefault();

    const customerId = document.getElementById("customer_id").value;

    // const deleteButton = document.getElementById("delete-customer-btn");
    // deleteButton.addEventListener("click", async () => {
    //   await CustomerDeleter.delete(customerId);
    // });

    const customerUpdater = new EntityUpdater({
      inputIds: ["first_name", "last_name", "email"],
      updateUrl: `/customers/${customerId}`,
    });

    customerUpdater.update();
  });
});
