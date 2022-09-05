import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';

const FilterPlateStyled = styled.section`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 16px;
`;

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

const Filter = function ({ filter, handleFilter }) {
  return (
    <FilterPlateStyled style={{ border: '0' }}>
      <Formik initialValues={{ filter: filter }}>
        <Form>
          <label>
            Find contacts by name
            <div>
              <Input
              type="text"
              name="filter"
              value={filter}
              onChange={e => {
                handleFilter(e.target.value);
              }}
            ></Input>
            </div>
          </label>
        </Form>
      </Formik>
    </FilterPlateStyled>
  );
};

Filter.Filter = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;