import React from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Styled from 'styled-components';

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };


const LineAnimation = () => {
    return (
        <Container className="container">
        <svg version="1.1" id="Layer_1" x="0px" height = "500px" width="300px"
                viewBox="0 0 155.9 684.4">
                <motion.path
                    d="M88.5,31.5c-97,135-47,228,18,331c56.4,89.3,42,244-90,301"
                    fill="transparent"
                    strokeWidth="1"
                    stroke="rgba(255, 255, 255, 0.69)"
                    strokeLinecap="round"
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 180 }}
                    transition={transition}
                />
            </svg>

      </Container>
    );
}

export default LineAnimation;

export const Container = Styled.div`
    background: black;
`;