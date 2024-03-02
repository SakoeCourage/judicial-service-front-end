import React,{useMemo} from "react"
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";


export const itemcontainer = {
    hidden: { opacity: 0, x: '-50', scale: '0.6' },
    visible: {
        opacity: 1, x: 0, scale: 1,
        transition: {
            type: 'spring',
            mass: 0.6,
            damping: 8,
            delay: 0.1

        }
    },
    exit: { opacity: 0, x: '50', scale: '0.1' }
};

export default function Chatreply(props) {
    const [selectedReponse, setSelectedResponse] = React.useState(null)
    const [ms, setMs] = React.useState(false)
    const navigate = {}
    const isSelected = (index) => {
        return index == selectedReponse;
    }
    
    React.useEffect(() => {
        if (typeof (selectedReponse == Number) && Boolean(props.responses?.length)) {
            props.getSelectedResponse(props.responses[selectedReponse])
        }
    }, [selectedReponse])


    
   

    const isLink = React.useMemo(() => {
        let state = false
        if (props.responses?.length) {
            props.responses[0]?.hasOwnProperty('link') && (state = true)
        }
        return state
    }, [props.responses])

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    React.useEffect(() => {
        props.responses && console.log(props.responses)

    }, [props.responses])

    return <div className="chat-message my-2 max-w-[85%] mr-auto">
        <div className="flex items-end justify-start">
            <div className="flex itemcontainer flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <motion.div
                    variants={itemcontainer}
                    initial="hidden"
                    animate="visible"
                   
                >
                    <nav className={`px-4 py-2 rounded-xl inline-block rounded-bl-none bg-[#F2F2F2] text-xs shadow-sm text-[#7F6B50] font-semibold`}>
                        {props.message && !isLink && <span>
                            {props.message}
                        </span>
                        }{Boolean(props.responses?.length) && <ul className='my-2  p-1 grid grid-cols-1 rounded '>
                            {!isLink && <ul>
                                {!ms && <li className='text-[#7F6B50]/90'>choose an option</li>}
                                {ms && <li className='text-[#7F6B50]/90'>option choosen</li>}
                            </ul>
                            }
                            {props.responses?.map((response, i) => {
                                return (!isLink ? <motion.li
                                    variants={item}
                                    onClick={() => { setSelectedResponse(i); setMs(true) }} className={`cursor-pointer my-1 p-1 rounded-md bg-white chatlistshadow  item flex items-center gap-2 min-w-full min-h-[3rem]
                                     ${isSelected(i) && 'bg-green-600 text-white'}
                                        ${ms && (Number(selectedReponse) != i) && 'hidden'}
                                `} key={i}>
                                    <Icon icon="icon-park-outline:dot" fontSize={'2rem'} className='text-[#EBEBEB]' />
                                    <span className='flex-grow'>{response.message}</span>
                                </motion.li> : <motion.li
                                    variants={item}
                                    onClick={() =>{void(0)}} className={`cursor-pointer my-1 p-1  item flex items-center gap-2 min-w-full min-h-[3rem]
                                `} key={i}>
                                       <nav>
                                          Click  the <span className="bg-white text-blue-400 underline">
                                           button below  &nbsp;
                                          </span>
                                          to continue
                                          <Link href={response.link} className='bg-blue-400 tex-white px-4 py-2 my-2 rounded-md shadow-md text-sm text-white flex items-center gap-2'>
                                           {props.message} <Icon fontSize={'1rem'} icon="ph:arrow-square-out" />
                                          </Link>
                                       </nav>
                                </motion.li> )
                            })}
                        </ul>
                        }
                    </nav>
                </motion.div>
            </div>
            <Image src='/images/judicialservicetranparent.png' quality={100} height={500} width={500} alt="My profile" className="w-6 h-6 rounded-full " />

        </div>
    </div>
}
