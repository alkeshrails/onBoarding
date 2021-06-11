import { Col, Row } from 'reactstrap';

const View = ({ inputs, onToggle }) => {
  const {
    username = '',
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    profile = '',
    bio = '',
    bgColor,
  } = inputs || {};
  return (
    <>
      <Row>
        <Col md={6} xs={12} lg={6}>
          <img src={profile} width='100px' alt={profile} />
        </Col>
        <Col md={6} xs={12} lg={6}>
          <ul>
            <li>User Name : {username}</li>
            <li>First Name : {firstName}</li>
            <li>Last Name : {lastName}</li>
            <li>Email : {email}</li>
            <li>Phone : {phone}</li>
            <li>Bio : {bio}</li>
          </ul>
        </Col>

        <Col md={12} xs={12} lg={12}>
          <div className='toogle-wrap'>
            <span onClick={() => onToggle()} className='cursor-pointer'>
              <i
                className='fa fa-pencil'
                style={{ color: bgColor !== 'white' ? bgColor : 'black' }}
              ></i>
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default View;
