import "../pages.css";
import Carousel from "react-bootstrap/Carousel";
import { bike1, bike2, bike3, bike4, bike5 } from "../../assets/images/carasol";
import { Stack } from "@mui/material";
import AboutCard from "../../components/AboutCard";
const About = () => {
  return (
    <>
      <div className="AboutMain">
        <h1>ABOUT US</h1>
      </div>

      <div className="container">
        <Stack display={"flex"} flexDirection={"row"} mt={2} flexWrap={"wrap"}>
          <Stack className="aboutshadow" display={"flex"} flex={6}>
            <h1 className="About_head">Welcome to JH EV MOTORS</h1>
            <p className="About_headp">
              We are one of the emerging players in the Indian EV market and
              take the privilege of providing a wide range of two wheeler
              vehicles in the electric segment. We are passionate about
              revolutionizing the way people commute by offering eco-friendly,
              efficient, and reliable electric motor two-wheelers. We pride
              ourselves on providing innovative and reliable motor solutions. We
              take immense pride in our certifications from IATF, OHSAS, and
              EnMS, which have helped us earn the trust of our customers.
            </p>
          </Stack>

          <Stack display={"flex"} flex={4}>
            <Carousel interval={1500} className="col-12 rounded mt-2">
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4 ">
                  <img className="d-block w-80" src={bike1} alt="First slide" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike2}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike3}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike4}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike5}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Stack>
        </Stack>
        <br />
        <br />
        {/* eeeeeeeeeee */}
        <div className="bannerimg">
          <div className="headerbackground ">
            <h2 className="overview-heading   h2-heading-std">OUR VISION</h2>
          </div>
          <p className="sp-content">
            " BE THE FUTURE OF <span>MOBILITY</span> "
          </p>
        </div>
      </div>

      <div className="bannerimg">
        <div className="headerbackground ">
          <h2 className="overview-heading   h2-heading-std">OUR MISSION</h2>
        </div>
        <p className="sp-content2">
          At JH EV Motors, we are committed to customer satisfaction and
          providing exceptional service. Our team of experts is always available
          to help you choose the right EV two-wheeler for your needs and reply
          to all your queries. Our mission is not only to cater to the needs of
          Indian commuters but also we have a mission to change the way of
          commuting by the people worldwide by increasing the export of our
          products. We currently have two state-of-the-art plants in Pune, where
          we manufacture our electric bikes and scooters to meet the high demand
          for our electric vehicles worldwide and increase the supply chain. We
          have all the infrastructure to cater to the need-based demand.
        </p>
      </div>

      <div className="bannerimg">
        <div className="headerbackground ">
          <h2 className="overview-heading   h2-heading-std">OUR VALUES</h2>
        </div>
        <AboutCard />
      </div>

      <div className="container">
        <Stack display={"flex"} flexDirection={"row"} mt={2} flexWrap={"wrap"}>
          <Stack className="aboutshadow" display={"flex"} flex={6}>
            <h1 className="About_head">Designed for Indians</h1>
            <p className="About_headp">
              We are one of the emerging players in the Indian EV market and
              take the privilege of providing a wide range of two wheeler
              vehicles in the electric segment. We are passionate about
              revolutionizing the way people commute by offering eco-friendly,
              efficient, and reliable electric motor two-wheelers. We pride
              ourselves on providing innovative and reliable motor solutions. We
              take immense pride in our certifications from IATF, OHSAS, and
              EnMS, which have helped us earn the trust of our customers.
            </p>
          </Stack>

          <Stack display={"flex"} flex={4}>
            <Carousel interval={1500} className="col-12 rounded mt-2">
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4 ">
                  <img className="d-block w-80" src={bike1} alt="First slide" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike2}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike3}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike4}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-12 flex flex-col justify-center items-center my-4">
                  <img
                    className="d-block w-80"
                    src={bike5}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Stack>
        </Stack>
        <br />
        <br />
        {/* eeeeeeeeeee */}

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
                          <a href="Tel:+91-11-46044200">
                            +91-7055214323 +91-7055214134 +91-7055214515
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
      </div>
    </>
  );
};

export default About;
