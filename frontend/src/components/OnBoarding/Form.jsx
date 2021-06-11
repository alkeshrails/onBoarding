import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

const OnBoardingForm = ({
  error,
  onSubmit,
  onInputChange,
  inputs,
  onToggle,
  isDropDown,
  setIsDropDown,
  onDropDownChange,
}) => {
  const {
    username = '',
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    bio = '',
    bgColor = '',
  } = inputs || {};

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Name:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='text'
                    placeholder='Enter user name'
                    name='username'
                    value={username}
                    onChange={onInputChange}
                  />
                </Col>
                <div className='validation-error'>
                  {error.firstName ? `${error.firstName} *` : ''}
                </div>
              </Row>{' '}
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>First Name:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='text'
                    placeholder='Enter first name'
                    name='firstName'
                    value={firstName}
                    onChange={onInputChange}
                  />
                </Col>

                <div className='validation-error'>
                  {error.firstName ? `${error.firstName} *` : ''}
                </div>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Last Name:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='text'
                    placeholder='Enter last name'
                    name='lastName'
                    value={lastName}
                    onChange={onInputChange}
                  />
                </Col>
                <div className='validation-error'>
                  {error.lastName ? `${error.lastName} *` : ''}
                </div>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Email:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                  <div className='validation-error'>
                    {error.email ? `${error.email} ` : ''}
                  </div>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Phone:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='text'
                    placeholder='Enter phone number'
                    name='phone'
                    value={phone}
                    onChange={onInputChange}
                  />
                  <div className='validation-error'>
                    {error.phone ? `${error.phone} ` : ''}
                  </div>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Bio:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Input
                    type='textarea'
                    placeholder='Enter Bio'
                    name='bio'
                    value={bio}
                    onChange={onInputChange}
                  />
                </Col>
                <div className='validation-error'>
                  {error.bio ? `${error.bio} *` : ''}
                </div>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <FormGroup>
              <Row>
                <Col md={3} xs={3} lg={3}>
                  <Label>Color:</Label>
                </Col>
                <Col md={9} xs={9} lg={9}>
                  <Dropdown
                    // direction='bottom'
                    isOpen={isDropDown}
                    color='primary'
                    toggle={() => {
                      setIsDropDown(!isDropDown);
                    }}
                  >
                    <DropdownToggle caret>{bgColor}</DropdownToggle>
                    <DropdownMenu onClick={(e) => onDropDownChange(e)}>
                      <DropdownItem value={'red'}>Red</DropdownItem>
                      <DropdownItem value={'white'}>White</DropdownItem>
                      <DropdownItem value={'blue'}>Blue</DropdownItem>
                      <DropdownItem value={'orange'}>Orange</DropdownItem>
                      <DropdownItem value={'green'}>Green</DropdownItem>
                      <DropdownItem value={'violet'}>Violet</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12} xs={12} lg={12}>
            <div className='toogle-wrap'>
              <Button
                className='cursor-pointer mr-2'
                color='primary'
                type='submit'
              >
                Update
              </Button>
              <span onClick={() => onToggle()} className='cursor-pointer'>
                <i className='fa fa-eye'></i>
              </span>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default OnBoardingForm;
