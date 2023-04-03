import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";

const ContactPage = () => {
  return (
    <>
      <MainScreen title="Contact Us" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <p class="text-muted mt-2">
              Come and get your eats!!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="contact-details mb-4 mb-lg-0">
              <p class="mb-3">
                <i class="mdi mdi-email-outline align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">support@bonappetite.com</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-web align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">www.bonappetite.com</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-phone align-middle text-muted fs-20 me-2"></i>
                <span class="fw-medium">123-123-1234</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-hospital-building text-muted fs-20 me-2"></i>
                <span class="fw-medium">9:00 AM - 5:00 PM</span>
              </p>
              <p class="mb-3">
                <i class="mdi mdi-map-marker-outline text-muted fs-20 me-2"></i>
                <span class="fw-medium">369, Huntington Ave, Boston, MA</span>
              </p>
            </div>
          </div>
          <div class="col-lg-7">
            <form
              method="post"
              onsubmit="return validateForm()"
              class="contact-form"
              name="myForm"
              id="myForm"
            >
              <span id="error-msg"></span>
              <div class="row">
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Enter your name*"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="position-relative mb-3">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Enter your email*"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative mb-3">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative mb-3">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Enter your message*"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 text-end">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    class="btn btn-primary"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
