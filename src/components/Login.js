import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <MDBContainer fluid className="h-custom">
      {/* Form Container */}
      <div className="form-container">
        <MDBRow>
          {/* Left Image Section */}
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </MDBCol>

          {/* Right Form Section */}
          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
            <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg" onClick={() => navigate("/homepage")}>
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="#!" className="link-danger" onClick={() => navigate("/registration")}>
                  Register
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </div>

      {/* Footer Section */}
      <footer className="footer-custom">
        Copyright © 2020. All rights reserved.
        <div className="footer-icons">
          <a href="#!" aria-label="Facebook">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="#!" aria-label="Twitter">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="#!" aria-label="Google">
            <MDBIcon fab icon="google" />
          </a>
          <a href="#!" aria-label="LinkedIn">
            <MDBIcon fab icon="linkedin-in" />
          </a>
        </div>
      </footer>
    </MDBContainer>
  );
}

export default Login;
