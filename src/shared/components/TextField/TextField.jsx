import PropTypes from 'prop-types';

import { FormLabel, FormInput } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div>
      <FormLabel>
        {label} <FormInput onChange={handleChange} {...props} />
      </FormLabel>
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
