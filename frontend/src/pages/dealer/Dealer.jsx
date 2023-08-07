import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { TbMapPinCode } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsPersonWorkspace,
} from "react-icons/bs";
import { useFormik } from "formik";
import { addBooking } from "../../features/Dummy/dummySlice";
import axios from "axios";
import { toggleLoading } from "../../features/loading/loadingSlice";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/baseUrl";
import { DistrictByState, States } from "../../constants/StateData";
// import { districtsByState, states } from "../../components/DropdownComponent";

const Dealer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };
  const { values, handleChange, handleSubmit, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        number: "",
        adress: "",
        state: "",
        city: "",
        pincode: "",
        occupation: "",
        currentBusiness: "",
        propertyDetails: "",
        propertySize: "",
        dealershipExperience: "",
        minimumInvestment: "",
        messagefield: "",
        dealerform: "",
      },
      onSubmit: async (values) => {
        dispatch(toggleLoading(true));
        try {
          const res = await axios.post(`${base_url}otp/send`, {
            email: values.email,
          });
          dispatch(addBooking(values));
          if (res.data.success) {
            toast.success(res.data);
            resetForm();
            navigate("/dealer/otp");
          } else {
            toast.error(res.data);
          }
        } catch (error) {
          toast.error(error.message);
        }
        dispatch(toggleLoading(false));
      },
    });
  const validatePinCode = (event) => {
    const pin = event.target.value;

    if (pin.split("").length <= 6) {
      setFieldValue("pincode", pin);
      const pinCodePattern = /^\d{6}$/;
      if (pinCodePattern.test(values.pincode)) {
        toast.success("Pin code is Valid")
      }
    }else{
      toast.error("Please enter valid pin")
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "number") {
      const numericValue = value.replace(/\D/g, ""); // Remove non-digits
      if (numericValue.length <= 10) {
        setInputValue(numericValue);
        handleChange(event); // Update formik values
      }
    } else {
      // For other fields, update the state normally
      setInputValue(value);
      handleChange(event); // Update formik values
    }
  };
  const handleStateChange = (event) => {
    const state = event.target.value;
    setFieldValue("state", state);
  };
  const handleDistrictChange = (event) => {
    const city = event.target.value;
    setFieldValue("city", city);
  };

  return (
    <>
      <div className="AboutMain">
        <h1>DEALERSHIP</h1>
        <p style={{ textAlign: "center", color: "white" }}>Become a Dealer</p>
      </div>

      <div className="container my-2">
        <div className="registermain">
          <Col>
            <Card className="bg-secondary shadow border-0 w-100 static h-fit">
              <CardBody
                className="px-lg-5 py-lg-5"
                style={{ background: "white" }}
              >
                <div className="text-center text-muted mb-4">
                  <medium
                    style={{
                      color: "orangered",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    We’d Love To Help You
                  </medium>
                  <br />
                  <p style={{ padding: "20px 40px" }}>
                    Please feel free to get in touch using the form below. We’d
                    love to hear your thoughts & answer any questions you may
                    have!
                  </p>
                </div>
                <Form role="form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <BsFillPersonFill />
                          </InputGroupText>

                          <Input
                            placeholder="Name"
                            type="text"
                            name="name"
                            required
                            onChange={handleChange}
                            value={values.name}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <MdEmail />
                          </InputGroupText>

                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                            value={values.email}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <BsTelephoneFill />
                          </InputGroupText>

                          <Input
                            placeholder="Mobile Number"
                            type="number"
                            name="number"
                            required
                            onChange={handleInputChange}
                            value={values.number}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <TbMapPinCode />
                          </InputGroupText>

                          <Input
                            placeholder="Address"
                            type="text"
                            name="adress"
                            required
                            onChange={handleChange}
                            value={values.adress}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <select
                        className="form-select mb-3"
                        name="state"
                        onChange={handleStateChange}
                        required
                      >
                        <option value="">Select state </option>
                        {States.map((itm, i) => (
                          <option key={i}>{itm}</option>
                        ))}
                      </select>
                    </Col>
                    <Col md="6">
                      <select
                        className="form-select mb-3"
                        name="city"
                        onChange={handleDistrictChange}
                        required
                      >
                        <option value="">Select District </option>
                        {values.state &&
                          DistrictByState[values.state].map(
                            (district, index) => (
                              <option key={index} value={district}>
                                {district}
                              </option>
                            )
                          )}
                      </select>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <TbMapPinCode />
                          </InputGroupText>

                          <Input
                            placeholder="Pincode"
                            type="number"
                            name="pincode"
                            required
                            onChange={validatePinCode}
                            value={values.pincode}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupText>
                            <BsPersonWorkspace />
                          </InputGroupText>
                          <Input
                            placeholder="Occupation"
                            type="text"
                            name="occupation"
                            required
                            onChange={handleChange}
                            value={values.occupation}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label style={{ color: "gray" }} for="propertyDetails">
                          Current Business
                        </Label>
                        <Input
                          placeholder="Current Business"
                          type="text"
                          name="currentBusiness"
                          required
                          onChange={handleChange}
                          value={values.currentBusiness}
                        />
                      </FormGroup>
                    </Col>
                    {/*  */}
                    <Col md="6">
                      <FormGroup>
                        <Label style={{ color: "gray" }} for="propertyDetails">
                          Property Details
                        </Label>
                        <Input
                          type="select"
                          name="propertyDetails"
                          id="propertyDetails"
                          required
                          onChange={handleChange}
                          value={values.propertyDetails}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Rental</option>
                          <option value="No">Owned</option>
                          <option value="No">Leased</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label style={{ color: "gray" }} for="propertySize">
                          Property Size
                        </Label>
                        <Input
                          type="select"
                          name="propertySize"
                          id="propertySize"
                          required
                          onChange={handleChange}
                          value={values.propertySize}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">600sqft-1000 sqft</option>
                          <option value="No">1000sqft-1500 sqft</option>
                          <option value="No">1500sqft-2000 sqft</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label
                          style={{ color: "gray" }}
                          for="dealershipExperience"
                        >
                          Previous Dealership Experience{" "}
                        </Label>
                        <Input
                          type="select"
                          name="dealershipExperience"
                          id="dealershipExperience"
                          required
                          onChange={handleChange}
                          value={values.dealershipExperience}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">NA</option>
                          <option value="No">1-5 Years</option>
                          <option value="No">5+ Years</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label
                          style={{ color: "gray" }}
                          for="minimumInvestment"
                        >
                          Minimum Investment
                        </Label>
                        <Input
                          type="select"
                          name="minimumInvestment"
                          id="minimumInvestment"
                          required
                          onChange={handleChange}
                          value={values.minimumInvestment}
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">15-20 LACS</option>
                          <option value="No">20-35 LACS</option>
                          <option value="No">36-50 LACS</option>
                          <option value="No">50+ LACS</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label style={{ color: "gray" }} for="propertyDetails">
                          Upload Filled Form
                        </Label>
                        <Input
                          placeholder="ENTER MESSAGE"
                          type="file"
                          name="dealerform"
                          id="dealerform"
                          onChange={handleFileInputChange}
                          value={values.dealerform}
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label style={{ color: "gray" }}>Message</Label>
                        <Input
                          placeholder="Current Business"
                          type="textarea"
                          name="messagefield"
                          required
                          onChange={handleChange}
                          value={values.messagefield}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <div
                    style={{
                      display: "flex !important",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Row></Row>
                    <Stack direction={"row"} alignItems={"center"} gap={2}>
                      <Stack display={"flex"} direction={"row"} gap={2}>
                        <input type="checkbox" required />
                        <p style={{ color: "#282825" }}>
                          I agree to the{" "}
                          <a
                            href="https://jhevmotors.com/terms-and-conditon"
                            target="blank"
                            style={{ fontWeight: "bold" }}
                          >
                            Terms & Conditions
                          </a>
                        </p>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <button type="submit" className="mt-4 btn-bg">
                        <p>Submit DealerShip Application</p>
                      </button>

                      <button className="mt-4 btn-bg" type="submit">
                        <a href="/Dealership Application Form.pdf" download>
                          DOWNLOAD DEALERSHIP FORM
                        </a>
                      </button>
                    </Stack>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Dealer;
