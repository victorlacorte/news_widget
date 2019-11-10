import React from 'react';

import { Ring, RingChild } from './styles';

function Loading() {
  return (
    <Ring>
      <RingChild />
      <RingChild />
      <RingChild />
      <RingChild />
    </Ring>
  );
}

export default Loading;
