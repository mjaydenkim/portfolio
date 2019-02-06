import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  width: 1200px;
  
  iframe {
    width: 1200;
    height: 100vh;
    display:block;
    margin:auto;
    z-index: 10;
    overflow:auto;
  }
`;

class AboutMeIframe extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <StyledFrame>
        <iframe src="https://docs.google.com/a/lasdk8.org/document/d/e/2PACX-1vQjOzi2DhD7RDTZvwNE2KmXFpI4ZxR8TnUTY8rA1wDiYbONVekdssGDX52DHYByjpHkoBzdScR2G_vf/pub?embedded=true" width="1200"></iframe>
      </StyledFrame>
    );
  }
}
export default AboutMeIframe;
