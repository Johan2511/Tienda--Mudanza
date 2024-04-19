import React from 'react';

const Video = () => {
    console.log("El componente Video se está renderizando");
  return (
    <div>
        <video autoPlay muted  loop width="100%">
            <source src="./concierto.mp4" type='video/mp4'/>
            <source src="./moving_renovation.ogg" type='video/ogg'/>
            <source src="./moving_renovation.webm" type='video/webm'/>

        </video>
    </div>
  );
};

export default Video;