import PropTypes from 'prop-types';


const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props;
  
    return (
      <div className="card">
        <img src={picture} alt={`${firstName} ${lastName}`} />
        <div className="info">
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Height:</strong> {height} cm</p>
          <p><strong>Birth:</strong> {birth.toDateString()}</p>
        </div>
      </div>
    );
  }

  IdCard.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    birth: PropTypes.instanceOf(Date).isRequired,
    picture: PropTypes.string.isRequired,
  };
  export default IdCard;
  