import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  .react-player {
    border-radius: 12px;
  }
`;

const VideoPlayer = ({ url, title }) => {
  return (
    <VideoContainer>
      <ReactPlayer
        url={url}
        width="100%"
        height="400px"
        controls
        className="react-player"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload'
            }
          }
        }}
      />
      {title && <p style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>{title}</p>}
    </VideoContainer>
  );
};

export default VideoPlayer;