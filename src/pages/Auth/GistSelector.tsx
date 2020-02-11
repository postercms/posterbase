import React from 'react';

export function GistSelector(props) {
  return props.gists.map(({ id, description }) => (
    <div key={id}>{description}</div>
  ));
}

export default GistSelector;
