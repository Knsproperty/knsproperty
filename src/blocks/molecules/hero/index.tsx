'use client'
import { usePathname } from "next/navigation"
import { FiChevronDown } from "react-icons/fi"
const Hero = () => {
    const pathname = usePathname()
    if (pathname !== "/") {
        return null
    }

    return (
        <div className="relative w-full h-[100vh] bg-black">
            <motion.button
                animate={{
                    y: [0, 50],
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }} className="absolute bottom-1/4 left-[calc(50%-31px)] transform -translate-x-1/2 text-white text-center z-40 bg-black bg-opacity-50 rounded-full p-5 ">
                <FiChevronDown
                    color="white"
                    size={22}
                    className="stroke-white " />
            </motion.button>
            <div className="absolute w-full h-full top-0 left-0 z-30  bg-black bg-opacity-40 _center flex-col">
                <div className="p-10 rounded-md max-w-[800px] bg-opacity-50">
                    <Parallax>
                        <h1 className="text-white md:text-3xl text-xl text-center font-heading mb-2">"To Build true long-term wealth. <br /> You must buy and hold real estate"</h1>
                    </Parallax>
                </div>
            </div>

            <video autoPlay muted loop className="absolute top-0 z-20 left-0 w-full h-full object-cover"  >
                <source src="video_new.mov" />
            </video>
        </div>
    )
}
export default Hero

import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
    useReducedMotion,
    easeIn,
} from "framer-motion";

type ParallaxProps = {
    children: ReactNode;
    offset?: number;
};

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useViewportScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useLayoutEffect(() => {
        const element: any = ref.current;
        const onResize = () => {
            setElementTop(
                element.getBoundingClientRect().top + window.scrollY ||
                window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};
