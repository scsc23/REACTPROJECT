import React from 'react';
import styled from 'styled-components'

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${asdf => asdf.color};
    border-radius: 50%
`;

export default Circle;
