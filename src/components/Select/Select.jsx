import React from 'react';

import {
  SelectContainer,
  Select as StyledSelect,
} from './styles';

function Select(props) {
  return (
    <SelectContainer>
      <StyledSelect {...props} />
    </SelectContainer>
  );
}

export default Select;
