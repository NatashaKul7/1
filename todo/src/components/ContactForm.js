const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8c154c0d-ccb4-40d7-8fbf-d841375833d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className="ContactBox">
      <form className="ContactForm" onSubmit={onSubmit}>
        <h2>Contact form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter your name"
            required
            name="name"
          />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="todo-input"
            placeholder="Enter your name"
            required
            name="email"

          />
        </div>
        <div className="input-box">
          <label>Your message</label>
          <textarea
            type="text"
            className="todo-input"
            placeholder="Enter your message"
            required
            name="message"

          />
        </div>

        <button className="todo-btn">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
