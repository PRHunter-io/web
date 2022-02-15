import PageWrapper from '@/components/PageWrapper';

const Contact = () => {
  return (
    <>
      <PageWrapper>
        <div className="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <h3 className="font-size-9 text-center mb-11">Success!</h3>
                <div className="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
                  <div className="mt-8">
                    <p>
                      Thanks for reaching out, we promise to get back to you
                      asap.
                    </p>

                    <div className="text-lg-right">Your PRHunter team</div>
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
