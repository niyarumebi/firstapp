import React, { useState, useEffect } from 'react';

function UserIcon (props) {

  const {
      src
  } = props;

  return (
      <img src={src || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu4OXvz-ae0nUgYrD5TymZqMhJdgtQbNaYxRR-DEe9m6ZQouJ8w&s'} alt=""  className="UserIcon"/>
      )
}

export default UserIcon;