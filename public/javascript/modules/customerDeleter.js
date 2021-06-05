class CustomerDeleter {
  static async delete(customer_id) {
    fetch(`/customers/delete/${customer_id}`, {
      method: "DELETE",
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
