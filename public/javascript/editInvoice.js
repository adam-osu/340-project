document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("edit-invoice").addEventListener("submit", (e) => {
    e.preventDefault();

    const invoiceId = document.getElementById("invoice_id").value;

    const invoiceUpdater = new EntityUpdater({
      inputIds: ["amount_paid", "total_due"],
      updateUrl: `/invoices/${invoiceId}`,
    });

    invoiceUpdater.update();
  });
});
