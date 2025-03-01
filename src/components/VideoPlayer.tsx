import dynamic from 'next/dynamic';
import React from 'react';
import YouTube from 'react-youtube';

const KinescopePlayer = dynamic(() => import('@kinescope/react-kinescope-player'), { ssr: false });

interface Props {
    videoId: string;
    type: 'kinescope' | 'youtube';
}

const VideoPlayer: React.FC<Props> = ({ videoId, type }) => {
    if (type === 'kinescope') {
        return <KinescopePlayer videoId={videoId} />;
    } else if (type === 'youtube') {
        const opts = {
            width: '100%',
            height: '100%',
            playerVars: {
                autoplay: 1,
            },
        };

        return <YouTube videoId={videoId} opts={opts} />;
    }

    return null;
};

export default VideoPlayer;
