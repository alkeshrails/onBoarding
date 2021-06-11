import React from 'react';

const OnBoardingForm = React.lazy(() => import('./onBoardingForm'));

const OnBoarding = (props) => {
  return (
      <OnBoardingForm />
  );
};

export default OnBoarding;
