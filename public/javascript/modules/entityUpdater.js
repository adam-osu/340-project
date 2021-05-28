class EntityUpdater {
  constructor({ entityId, inputIds, updateUrl }) {
    this.entityId = entityId;
    this.inputIds = inputIds;
    this.updateUrl = updateUrl;
    this.updatePayload = null;

    this._initialize();
  }

  _initialize() {
    const inputEls = this.inputIds.map((id) => document.getElementById(id));

    const payload = {};

    inputEls.forEach((el) => {
      payload[el.id] = el.value;
    });

    this.updatePayload = payload;
  }

  update() {
    if (!this.updatePayload) {
      throw new Error("No elements to update");
    }

    fetch(this.updateUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.updatePayload),
    })
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
