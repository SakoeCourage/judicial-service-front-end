"use client"
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Chatpane from './partials/chatpane'
import IconifyIcon from '../components/ui/iconsbutton';
import ClickAwayListener from 'react-click-away-listener';
import { AnimatePresence } from 'framer-motion';

const useClickAway = (ref: React.RefObject<HTMLElement>, onClickAway: () => void) => {
    
    useLayoutEffect(() => {
        console.log(ref.current)
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickAway();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};


function Chatserviceprovider({ children }: { children: React.ReactNode }) {
    const [showChat, setShowChat] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);
    const Chatpaneref = useRef(null)

    useClickAway(Chatpaneref, () => { setIsHovered(false); setShowChat(false) });


    return <>
        <div className=' fixed z-50 bottom-5 right-5 chat-footer'>
            <AnimatePresence>
                {showChat ? <Chatpane ref={Chatpaneref} />
                    :
                    <nav className='flex gap-1 flex-col items-end mr-2'>
                        <nav className={` text-bg-[#7F6B50]   font-semibold text-xs chat-trigger-text p-2 rounded-lg bg-[#7F6B50]/20 rounded-br-none border-[#7F6B50]/50 border ${isHovered ? 'opacity-100' : 'opacity-30'}`} >Let me be your guide</nav>
                        <button
                            onMouseOver={() => setIsHovered(true)}
                            onMouseOut={() => setIsHovered(false)}
                            onClick={() => setShowChat(true)}
                            className='w-max chat-trigger text-white bg-[#7F6B50]/80 p-2 rounded-full aspect-square'>
                            <svg className=' transform scale-x-[-1]' xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11h6m-7.876 7.701L5.6 19.921c-.833.665-1.249.998-1.599.999a1 1 0 0 1-.783-.377C3 20.27 3 19.737 3 18.671V7.201c0-1.12 0-1.681.218-2.11c.192-.376.497-.681.874-.873C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.117 0 1.676-.218 2.104a2 2 0 0 1-.874.874c-.427.218-.987.218-2.105.218h-8.68c-.417 0-.624 0-.823.04a2.004 2.004 0 0 0-.508.179c-.18.091-.34.22-.657.474z" /></svg>
                        </button>
                    </nav>
                }
            </AnimatePresence>
        </div>
        {children}
    </>
}

export default Chatserviceprovider