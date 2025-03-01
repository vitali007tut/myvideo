// import React from 'react';
// import YouTube from 'react-youtube';
// // import KinescopePlayer from '@kinescope/react-kinescope-player';
// import dynamic from 'next/dynamic';
// const KinescopePlayer = dynamic(() => import('@kinescope/react-kinescope-player'), { ssr: false });

// interface Props {
//     videoId: string;
//     type: 'kinescope' | 'youtube';
// }

// const VideoPlayer: React.FC<Props> = ({ videoId, type }) => {
//     if (type === 'kinescope') {
//         return <KinescopePlayer videoId={videoId} />;
//     } else if (type === 'youtube') {
//         const opts = {
//             width: '100%',
//             height: '100%',
//             playerVars: {
//                 autoplay: 1,
//             },
//         };

//         return <YouTube videoId={videoId} opts={opts} />;
//     }

//     return null;
// };

// export default VideoPlayer;

import React from 'react';

import dynamic from 'next/dynamic';
const KinescopePlayer = dynamic(() => import('@kinescope/react-kinescope-player'), { ssr: false });
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type Props = {
    url: string;
    onStart?: () => void;
    onAlmostPlayed?: () => void;
};

const VideoPlayer = ({ url }: Props) => {
    const isKinescopeVideo = url.includes('kinescope.io');

    const extractKinescopeVideoId = (url: any) => {
        const regex = /kinescope\.io\/(.+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const videoId = isKinescopeVideo ? extractKinescopeVideoId(url) : null;

    return isKinescopeVideo && videoId ? (
        <KinescopePlayer videoId={videoId} />
    ) : (
        <ReactPlayer
            controls={true}
            url={url}
            width="100%"
            height="auto"
            config={{
                youtube: {
                    embedOptions: {
                        height: '400px',
                    },
                },
                vimeo: {
                    playerOptions: {
                        responsive: true,
                        colors: ['000000', '00ADEF', 'FFFFFF', '18171a'],
                    },
                },
            }}
        />
    );
};

export default VideoPlayer;