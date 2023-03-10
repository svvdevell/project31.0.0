import PropTypes from "prop-types";

const Title = ({ name }) => {
  return <h1>{name}</h1>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;