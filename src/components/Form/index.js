import React from "react";

import { FormWrapper } from "./styles";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkgqqeo"
        method="POST"
      >
        <FormWrapper>
          <label>Email:</label>
          <input type="email" name="email" />
          <label className="label2">Message:</label>
          <input className="input2" type="text" name="message" />
          {status === "SUCCESS" ? (
            <p>Thanks! We will reach you soon</p>
          ) : (
            <button>Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </FormWrapper>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
