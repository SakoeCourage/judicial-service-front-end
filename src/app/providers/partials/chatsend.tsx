import React from "react"
import { motion } from 'framer-motion';

export default function Chatsend(props) {
    return <div className="chat-message max-w-[85%] ml-auto my-2">
        <div className="flex items-end justify-end">
            <motion.div
                initial={{ opacity: 0, x: '50', scale: '0.6' }}
                variants={{
                    hidden: { opacity: 1, scale: 0 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2
                        }
                    }
                }}
                animate={{
                    opacity: 1, x: 0, scale: 1,
                    transition: {
                        type: 'spring',
                        mass: 0.6,
                        damping: 8
                    }
                }}

                className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600">{props.message}</span></div>
            </motion.div>
            <div className="!w-6 !h-6 rounded-full order-2 p-1 bg-stone-600 text-white text-xs grid place-content-center">A.K</div>
        </div>
    </div>
}