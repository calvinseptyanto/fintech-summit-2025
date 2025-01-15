import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Add custom styles here

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate();
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Redefining Trust <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for onchain business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Credify transforms business verification with seamless government integration, decentralized data storage, and advanced AI. Our explainable AI empowers service providers with transparency while ensuring continuous trustworthiness updates and safeguarding privacy.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBInput wrapperClass='mb-4' label='Email' id='form4' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form5' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
              <MDBBtn className='w-100 mb-4' size='md' onClick={() => navigate("/")} >back to log in</MDBBtn>

              <MDBBtn className='w-100 mb-4' size='md' onClick={() => navigate("/")}>
                back to log in
              </MDBBtn>

              <MDBBtn
                className='w-100 mb-4 corppass-btn'
                size='md'
                onClick={() => window.location.href = 'https://www.corppass.gov.sg/portal/'}
              >
                <img
                  src="/Users/charlie/Downloads/corppass-logo.png"
                  alt="Sign in with Corppass"
                  style={{ marginRight: '10px', height: '20px' }}
                />
                Sign in with Corppass
              </MDBBtn>

              <a
                href="https://www.corppass.gov.sg/portal/"
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-link"
              >
                Feedback
              </a>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;