import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
h100        
`;


function NotFound (props) {
  const {} = props;
  
  return (
          <Container className="NotFound">
            <Link to={'/'} className="icon">
                <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false"><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill="#ffffff"></path></svg>
            </Link>

              <p>Hm, the page you were looking for doesn't seem to exist anymore.</p>

              <div className="btn-home">Back to Unsplash</div>

          </Container>
      )
}

export default NotFound;