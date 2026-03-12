"use client";

import React from "react";
import { motion } from "framer-motion";

const InteractionLeft: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                ease: "easeInOut",
                duration: 0.8,
                delay: 0.3,
            }}
        >
            {children}
        </motion.div>
    );
};

export default InteractionLeft;

