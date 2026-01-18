import React from 'react';
import './RocketAnimation.scss';
const baseUrl = import.meta.env.BASE_URL;

export const RocketAnimation: React.FC = () => {
    return (
        <div className="rocket-container">
            <div className="rocket">
                <img className="rocket-img" src={`${baseUrl}/rocket.png`} alt="Rocket" />
                <img className="flame-img" src={`${baseUrl}/rocket-flame.png`} alt="Flame" />
            </div>
        </div>
    );
};
