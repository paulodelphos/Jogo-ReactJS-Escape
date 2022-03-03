import { isAbsolute } from 'path/posix';
import React from 'react';
import {HEAD_OFFSET, TILE_SIZE} from '../../settings/constants';

import './index.css';

const Hero = () => {
    return (
        <div
        style={{
            position: 'absolute',
            bottom: TILE_SIZE * 5,
            left: TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/Hero.png) ",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: "hero-animation 1s steps(4) infinite"
        }}
        />

    )
}

export default Hero;