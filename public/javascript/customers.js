document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");
  [...tableBody.children].forEach((row) => {

    const customerId = row.children[0].textContent;
    
    const deleteButton = row.children[row.children.length - 1].firstChild

    deleteButton.addEventListener("click", async () => {
      await CustomerDeleter.delete(customerId);
    });
  });
});
