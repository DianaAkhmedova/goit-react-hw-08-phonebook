import { Input } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div>
      <label>
        {label} <Input onChange={handleChange} {...props} />
      </label>
    </div>
  );
};

export default TextField;
