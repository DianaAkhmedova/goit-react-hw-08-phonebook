import { useSelector, useDispatch } from 'react-redux';

import Form from 'shared/components/Form/Form';
import TextField from 'shared/components/TextField/TextField';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import fields from './fields';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ currentTarget: { value } }) =>
    dispatch(setFilter(value));

  return (
    <Form>
      <TextField
        value={filterValue}
        handleChange={handleChangeFilter}
        {...fields.contactName}
      />
    </Form>
  );
};

export default Filter;
