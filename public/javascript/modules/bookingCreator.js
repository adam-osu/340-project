class BookingCreator {
  constructor() {
    this.payload = null;

    this._initialize();
  }

  _initialize() {
    const start_date = document.getElementById("start_date").value;
    const end_date = document.getElementById("end_date").value;
    const property_id = document.querySelector(
      "#current-property tr td input"
    ).value; // only 1 property per booking
    // https://stackoverflow.com/questions/2600343/why-does-document-queryselectorall-return-a-staticnodelist-rather-than-a-real-ar
    // NodeLists can't be iterated over with .map but they can be spread into (turned into) an array and have map called on them
    const customer_ids = [
      ...document.querySelectorAll("#current-customers tr td input"),
    ].map((node) => node.value);

    this.payload = {
      start_date,
      end_date,
      property_id,
      customer_ids,
    };

    console.log(this.payload);
  }

  create() {
    fetch("/bookings/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.payload),
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
