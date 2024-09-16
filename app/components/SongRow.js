import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import default styles
import '/styles/globals.css'; // Your custom global styles
import './CustomAudioPlayer.css'; // Import custom styles for the audio player

const SongRow = ({ title, image, audio }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4 items-center">
      {/* Song Image */}
      <div className="col-span-1">
        <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Song Title and Audio Player */}
      <div className="col-span-2 flex flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        
        {/* React-H5-Audio-Player */}
        <AudioPlayer
          src={audio}
          className="custom-h5-audio-player mt-2"
          layout="horizontal-reverse"
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          autoPlayAfterSrcChange={false}
        />
      </div>
    </div>
  );
};

export default SongRow;
