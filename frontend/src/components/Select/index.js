import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ options, onChange }) => (
  <select className='select' onChange={onChange}>
    <option value={null}>Select Move...</option>
    {options.map(option =>
        <option key={option.id} value={option.id}>{option.name}</option>
      )
    }
  </select>
);

Select.defaultProps = {
  options: []
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select;

