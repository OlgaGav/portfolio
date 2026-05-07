import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkobelg");

  if (state.succeeded) {
    return (
      <div className="tab-container">
        <div className="alert alert-success" role="alert">
          Thank you for your message! I will get back to you soon.
        </div>
      </div>
    );
  }

  return (
    <div className="tab-container">
      <h2 className="mb-1">Contact</h2>
      <p style={{ color: "var(--brand-warm-gray)", marginBottom: "1.75rem", maxWidth: "520px" }}>
        Feel free to reach out on social media, by email, or via the form below — I will
        respond as soon as I can.
      </p>

      <div className="mb-4" style={{ fontSize: "0.95rem" }}>
        <p className="mb-2">
          <span style={{ color: "var(--brand-warm-gray)", fontWeight: 500 }}>LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/olga-gavrushenko/"
            className="contact-link"
          >
            linkedin.com/in/olga-gavrushenko
          </a>
        </p>
        <p className="mb-2">
          <span style={{ color: "var(--brand-warm-gray)", fontWeight: 500 }}>GitHub: </span>
          <a href="https://github.com/OlgaGav/" className="contact-link">
            github.com/OlgaGav
          </a>
        </p>
        <p className="mb-0">
          <span style={{ color: "var(--brand-warm-gray)", fontWeight: 500 }}>Email: </span>
          <a
            href="mailto:olga.gavrushenko@gmail.com?subject=[Portfolio]%20Contact"
            className="contact-link"
          >
            olga.gavrushenko@gmail.com
          </a>
        </p>
      </div>

      <div style={{ maxWidth: "520px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: "0.4rem", display: "block" }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="Jane Smith"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: "0.4rem", display: "block" }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="jane@example.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: "0.4rem", display: "block" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Your message…"
              rows={5}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="contact-button" disabled={state.submitting}>
            {state.submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
