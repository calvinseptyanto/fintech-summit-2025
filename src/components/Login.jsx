import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox,MDBTabs,MDBTabsItem,MDBTabsLink,MDBTabsContent,MDBTabsPane } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [fillActive, setFillActive] = useState('tab1');
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };
  
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow className="align-items-center">

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col="6" md="6" >
          <MDBTabs fill className='mb-3 '>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                Sign in as Company
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                Sign in as Service provider
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane open={fillActive === 'tab1'}>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol col='4' md='6'>

                  <div className="d-flex flex-row align-items-center justify-content-center">

                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    {/* <img src='/corppassICONnobg.png' className='img-fluid shadow-4' alt='...' /> */}
                    <a href="https://www.corppass.gov.sg/portal/" target="_blank" rel="noopener noreferrer">
                      <img src='/corppassICONnobg.png' className='bg-transparent' alt='CorpPass Icon' style={{ width: '120px', height: 'auto' }}  />
                    </a>

                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                  <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <div className='text-center text-md-start mt-4 pt-2'>
                    <MDBBtn className="mb-0 px-5" size='lg' onClick={() => navigate("/homepage")}>Login</MDBBtn>
                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger" onClick={() => navigate("/registration")}>Register</a></p>
                  </div>

                  {/* <div className='text-center text-md-start mt-4 pt-2'>
                    <p className="small fw-bold mt-2 pt-1 mb-2" 
                    style={{ fontSize: '20px', lineHeight: '1.5' }}>Sign in as  
                    <a href="#!" className="link-danger" onClick={() => navigate("/registration")}> Service Provider</a>?
                    </p>
                  </div> */}

                </MDBCol>
              </MDBRow>
            </MDBTabsPane>


            <MDBTabsPane open={fillActive === 'tab2'}>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol col='4' md='6'>
                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                  <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <div className='text-center text-md-start mt-4 pt-2'>
                    <MDBBtn className="mb-0 px-5" size='lg' onClick={() => navigate("/homepage_service")}>Login</MDBBtn>
                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger" onClick={() => navigate("/registration_service")}>Register</a></p>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>

        

        

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2025. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Login;