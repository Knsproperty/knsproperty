'use client'
import PropertyCard from '@/blocks/molecules/cards/property';

import { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const List = ({ data, type }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1, y: 0,
                    transition: {
                        duration: .2,
                        when: "beforeChildren", //use this instead of delay
                        staggerChildren: 0.2, //apply stagger on the parent tag
                    },
                },
                hidden: { opacity: 0, y: 200 }
            }}
            className="grid lg:grid-cols-3 gap-y-5 xl:grid-cols-4 md:grid-cols-2 grid-cols-1" >
            {data.map(({ attributes }: any, index: number) => (
                <motion.div
                    key={index}
                    variants={listVariant}>
                    <PropertyCard
                        {...{
                            type,
                            area: attributes.Area,
                            slug: attributes.slug,
                            price: attributes.Price,
                            bedroom: attributes.Bedrooms,
                            bathroom: attributes.Bathrooms,
                            title: attributes.Short_Address,
                            description: attributes.Location,
                            image: attributes.Cron_Images?.data.map((img: any) => img.url) as any,
                        }}
                    />
                </motion.div>
            ))}

        </motion.div>
    )
}

export default List


const listVariant = {
    hidden: {
        y: -50, //move out of the site
        opacity: 0,
    },
    visible: {
        y: 0, // bring it back to nrmal
        opacity: 1,
        transition: {
            duration: .5
        }
    },
};