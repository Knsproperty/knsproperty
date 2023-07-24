'use client'
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
function FadeIn({ children }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 100px -50px 0px" });

    const matches = useMediaQuery('(max-width: 768px)');
    if (matches) {
        return <>{children}</>
    }

    return (
        <div ref={ref}>
            <div style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                {children}
            </div>
        </div>
    );
}

export default FadeIn
