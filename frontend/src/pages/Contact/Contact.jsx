import "../pages.css";
import Form from "../../components/Form";
const Contact = () => {
  return (
    <>
      <div className="AboutMain">
        <h1>Contact Us</h1>
      </div>
      <Form />
      <div className="contactus">
        <div className="container">
          <div className="address-section">
            <div className="mapcon">
              <div id="map_container">
                <div className="corpaorateOffice">
                  <div className="contact-title">
                    <h1>
                      <b className="h3-heavy-heading-std">
                        Registered and Corporate Office
                      </b>
                    </h1>
                  </div>
                  <div className="white-line"></div>

                  <div className=" address-row">
                    <div className="address-divider">
                      <div className="address-col">
                        <i className="b2-text-std">Address :</i>
                      </div>
                      <div className="address-col-val">
                        <p className="b2-text-std">
                          Gat. No.118/1, Near Philips, Post - Vasuli, Tal -
                          Khed, Pune, Maharashtra- 410501
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="address-row">
                    <div className="under-line"></div>
                    <div className="address-divider">
                      <div className="address-col">
                        <i className="b2-text-std">Telephone :</i>{" "}
                      </div>
                      <div
                        className="address-col-val b2-text-std"
                        id="phoneNumber"
                      >
                        <a href="Tel:+91-7055214515"></a>
                      </div>
                      <div
                        className="address-col-val b2-text-std"
                        id="phoneNumber"
                      >
                        <a href="Tel:+91-7055214323">
                          Dealership Number: +91-7055214323
                        </a>
                      </div>
                      <div
                        className="address-col-val b2-text-std"
                        id="phoneNumber"
                      >
                        <a href="Tel:+91-7055214135 ">
                          Booking Number : +91-7055214135 , +91-7055214515
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="address-row">
                    <div className="under-line"></div>
                    <div className="address-divider">
                      <div className="address-col">
                        <i className="b2-text-std">Email :</i>{" "}
                      </div>
                      <div className="address-col-val b2-text-std">
                        enquiry@jhevmotors.com
                      </div>
                    </div>
                  </div>

                  <div className="empty-space"></div>

                  <div className="white-line"></div>

                  <div className="empty-space"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
