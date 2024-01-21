import PropTypes from "prop-types";

const Greetings = ({ lang, name }) => {
  let greetingText = "";

  switch (lang) {
    case "de":
      greetingText = `Hallo ${name}!`;
      break;
    case "en":
      greetingText = `Hello ${name}!`;
      break;
    case "es":
      greetingText = `¡Hola ${name}!`;
      break;
    case "fr":
      greetingText = `Bonjour ${name}!`;
      break;
    default:
      greetingText = `Hello ${name}!`;
  }

  return (
    <div className="container">
      <p className="text">
        {greetingText}, {name}
      </p>
    </div>
  );
};

Greetings.propTypes = {
  lang: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Greetings;
