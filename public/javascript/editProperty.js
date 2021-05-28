document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("edit-property").addEventListener("submit", (e) => {
    e.preventDefault();

    const propertyId = document.getElementById("property_id").value;

    const propertyUpdater = new EntityUpdater({
      entityId: propertyId,
      inputIds: ["building_name", "address", "rate", "max_occupancy"],
      updateUrl: `/properties/${propertyId}`,
    });

    propertyUpdater.update();
  });
});
