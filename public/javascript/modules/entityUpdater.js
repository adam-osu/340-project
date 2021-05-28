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
        // Referenced from here https://stackoverflow.com/questions/39735496/redirect-after-a-fetch-post-call
        // fetch has a response object that contains a url if the server indicated to redirect.
        if (res.redirected) {
          window.location.href = res.url;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
