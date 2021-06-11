import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Container } from 'reactstrap';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import { showSuccess } from '../../Helper/toast';

const OnBoardingView = React.lazy(() => import('./View'));
const OnBoardingForm = React.lazy(() => import('./Form'));

const initialInputs = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  profile: '',
  bio: '',
  bgColor: '',
};

const OnBoarding = (props) => {
  const [inputs, SetInputs] = useState(initialInputs);
  const [error, setError] = useState(initialInputs);
  const [readOnlyAccess, setReadOnlyAccess] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  /*
  --------------------
    Fetch User Data
 --------------------
 */
  const getUser = async () => {
    try {
      setIsLoading(true);
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}user/`)
        .then(function (response) {
          const { data } = response.data;
          SetInputs(data);
          setIsLoading(false);
        })
        .catch(function (error) {
          setIsLoading(false);
        });
    } catch (error) {}
  };

  /*
  --------------------------
    For Managing the states
 ---------------------------
 */
  const onInputChange = (e) => {
    const {
      target: { value, name },
    } = e;

    SetInputs({
      ...inputs,
      [name]: value,
    });
    if (name === 'phone') {
      validatePhone(value);
    }
    if (name === 'email') {
      validateEmail(value);
    }
  };

  /*
  --------------------------
    For Updating the data
 ---------------------------
 */
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      const { email, phone } = inputs;
      if (email === '' || phone === '') {
        validatePhone(phone);
        validateEmail(email);
        setIsLoading(false);
        return;
      }

      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}user/${inputs._id}`, {
          ...inputs,
        })
        .then(async (response) => {
          const { data } = response;
          const message = data.message;
          showSuccess(message);
          SetInputs(initialInputs);
          await onToggle();
        })
        .catch(function (error) {
          setError('');
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  };

  /*
  ----------------------------
    Function to validate email 
 -----------------------------
 */
  const validateEmail = (email) => {
    /* eslint-disable-next-line */
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase())
      ? setError({
          ...error,
          email: 'Enter valid email',
        })
      : setError({
          ...error,
          email: null,
        });
  };

  /*
  ------------------------------
    Function to validate phone 
 -------------------------------
 */
  const validatePhone = (phone) => {
    /* eslint-disable-next-line */
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return !re.test(phone)
      ? setError({
          ...error,
          phone: 'Enter valid phone number',
        })
      : setError({
          ...error,
          phone: null,
        });
  };

  /*
  ------------------------------------------
    Function to manage edit and read state 
 -------------------------------------------
 */
  const onToggle = async () => {
    setReadOnlyAccess(!readOnlyAccess);
    await getUser();
  };

  /*
  ------------------------------------
    Function to manage dropdown state 
 --------------------------------------
 */
  const onDropDownChange = (e) => {
    const {
      target: { value },
    } = e;
    SetInputs({
      ...inputs,
      bgColor: value,
    });
  };

  return (
    <Container>
      <Card
        style={{
          backgroundColor: inputs && inputs.bgColor ? inputs.bgColor : 'white',
          color:
            inputs && inputs.bgColor && inputs.bgColor !== 'white'
              ? 'white'
              : 'black',
        }}
      >
        <CardHeader>
          <CardTitle className='text-center mt-1'>
            <h1>On Boarding App</h1>
          </CardTitle>
        </CardHeader>
        <CardBody>
          {isLoading ? (
            /*
              -----------
                Loader 
              ------------
            */
            <Skeleton count={5} />
          ) : !readOnlyAccess ? (
            /*
              ------------------
                Update component 
             --------------------
            */
            <OnBoardingForm
              isLoading={isLoading}
              onSubmit={onSubmit}
              error={error}
              inputs={inputs}
              onInputChange={onInputChange}
              onToggle={onToggle}
              isDropDown={isDropDown}
              setIsDropDown={setIsDropDown}
              onDropDownChange={onDropDownChange}
            />
          ) : (
            /*
              ------------------
                View component 
             --------------------
            */
            <OnBoardingView
              inputs={inputs}
              isLoading={isLoading}
              onToggle={onToggle}
            />
          )}{' '}
        </CardBody>
      </Card>
    </Container>
  );
};

export default OnBoarding;
