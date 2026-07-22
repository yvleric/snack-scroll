import React, { useRef, useEffect } from 'react';
import './Home.css';

const MOCK_VIDEOS = [
    {
        id: 1,
        url: " ",
        storeName: "The Spicy Kitchen",
        description: "Come taste our brand new fire-roasted chicken! We use a special blend of 12 spices and herbs. It is absolutely delicious and you will want to come back for more every single day."
    },
    {
        id: 2,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        storeName: "Sweet Treats Bakery",
        description: "Freshly baked chocolate chip cookies coming right out of the oven. Nothing beats the smell of warm chocolate on a Sunday morning."
    },
    {
        id: 3,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        storeName: "Burger Joint",
        description: "Our classic double cheeseburger with secret sauce. Grab yours now!"
    }
];

const Home = () => {
    // We can use IntersectionObserver in the future to pause/play videos when they enter/leave the screen
    // For now, we'll let them play, or just rely on autoplay muted loop

    return (
        <div className="reels-container">
            {MOCK_VIDEOS.map((video) => (
                <div key={video.id} className="video-container">
                    <video
                        className="reel-video"
                        src={video.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>

                    <div className="video-overlay">
                        <div className="store-name">@{video.storeName}</div>
                        <div className="video-description">
                            {video.description}
                        </div>
                        <button className="visit-store-btn">
                            Visit Store
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
