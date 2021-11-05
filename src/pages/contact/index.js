import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h2 className="font-size-9 text-center mb-11">Contact Us</h2>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
                  <ContactForm/>
                  <div className="mt-8">
                    <h3 className="font-size-4">Contact Information</h3>
                    <div className="media mb-2">
                      <div className="mr-6">
                        <i className="fas fa-envelope mt-2"></i>
                      </div>
                      <p className="font-size-4 mb-0">support@prhunter.io</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
