import React, { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

const FullscreenVideo = ({ videoId, type }: { videoId: string; type: 'kinescope' | 'youtube' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (containerRef.current) {
            containerRef.current.requestFullscreen();
        }
    };

    return (
        <div ref={containerRef} className="video-container">
            <VideoPlayer videoId={videoId} type={type} />
            <button onClick={handleFullscreen}>Полноэкранный режим</button>
        </div>
    );
};

export default FullscreenVideo;
