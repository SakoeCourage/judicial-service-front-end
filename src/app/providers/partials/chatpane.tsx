import React, { ReactHTMLElement, useRef, useState } from 'react'
import { chatDataTwi, chatDataEnglish } from './chatdata'
import { motion } from 'framer-motion';
import Chatreply from './chatreply';
import Chatsend from './chatsend';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import IconifyIcon from 'app/app/components/ui/iconsbutton';
import { itemcontainer } from './chatreply';

const ChatTextField = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight + 2) + 'px';
    };

    return (
        <div className='rounded-md flex items-center bg-[#F2F2F2]/70 mt-2 py-2'>
            <textarea
                className='bg-transparent outline-none border-none grow focus:outline-none focus:border-none px-3'
                placeholder='Enter Message Prompt Here'
                value={message}
                onChange={handleMessageChange}
                rows={1}
            />
            <button
                className=' self-end flex items-center h-max text-sm bg-zinc-700 rounded-md px-2 py-1 text-white'
                onClick={() => {

                    console.log('Message sent:', message);

                    setMessage('');
                }}
            >
                Send
                <IconifyIcon aria-description='button' icon='lets-icons:send-hor-light' className='cursor-pointer bg-transparent' />
            </button>
        </div>
    );
}

const Chatpane = React.forwardRef((props, ref) => {
    const [conversation, addConversation] = React.useState([])
    const [availableResponses, setAvailableResponses] = React.useState([])
    const [selectedLanguage, setSelectedLanguage] = React.useState(null)
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const handleAddToConversation = ({ message, type, responses }) => {
        addConversation(cc => cc = [...cc, {
            message: message,
            type: "Response",
            responses: responses
        }
        ])
        setAvailableResponses(responses)
    }
    const mySelection = (selection) => {
        if (selection) {
            addConversation(cc => cc = [...cc, {
                message: selection.message,
                type: "Request",
            }
            ])
        }
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight
            })
        }
    }

    const handleSelectedResponse = (res) => {
        if (res) {
            console.log(res)
            mySelection(res)
            handleAddToConversation(res)
        }
    }

    const greatingsTransition = {
        hidden: { opacity: 0, y: '100vh' },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                delay: 0.5,

            }
        }
    }


    React.useMemo(() => {
        selectedLanguage && handleAddToConversation(selectedLanguage[0])
    }, [selectedLanguage])

    return (
        <motion.div
            variants={itemcontainer}
            initial="hidden"
            animate="visible"
            ref={ref}
            exit='exit'
            className="flex-1 px-2 pb-6  justify-between flex flex-col  h-[35rem] w-96 bg-white rounded-md border-2">
            <div className="flex sm:items-center justify-between pb-3 border-b-2 ">
                <div className="relative flex items-center space-x-4">
                    <div className="relative">
                        <span className="absolute  right-0 bottom-6 ">
                            <div className='rounded-full  p-1.5 bg-green-500' />
                        </span>
                        <Image src='/images/judicialservicetranparent.png' quality={100} height={500} width={500} alt="" className="w-10  h-10  rounded-full" />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <div className="text-lg mt-1 flex items-center">
                            <span className="text-gray-700 mr-3">Conversational</span>
                        </div>
                        <span className="text-base text-gray-600">Support</span>
                    </div>
                </div>
            </div>
            {Boolean(conversation.length) && <SimpleBar className=' overflow-x-hidden flex flex-col px-2  py-2 gap-3'>
                {
                    conversation.map(({ type, message, responses }, i) => {
                        return (
                            type === "Response" ? <Chatreply key={i} message={message} responses={responses} getSelectedResponse={(res) => handleSelectedResponse(res)}

                            /> : <Chatsend key={i} responses={responses} message={message} />

                        )
                    })
                }
            </SimpleBar>
            }
            <div>
                {!selectedLanguage && <motion.div
                    variants={greatingsTransition}
                    animate="visible"
                    initial="hidden"
                    className='grid grid-cols-1 px-2 p-3   justify-self-end gap-5 bg-[#F9E4CB]/30 rounded-md selectlanguage'>
                    <span> Select a language to continue </span>
                    <button onClick={() => setSelectedLanguage(chatDataTwi)} className='bg-[#7F6B50]/70 text-[#F2F2F2] rounded-md p-3 shadow-md focus:ring-2 focus:ring-[#7F6B50] transition ease-in-out duration-200 ring-offset-2'>Twi</button>
                    <button onClick={() => setSelectedLanguage(chatDataEnglish)} className='bg-[#7F6B50]/70 text-[#F2F2F2] rounded-md p-3 shadow-md focus:ring-2 focus:ring-[#7F6B50] transition ease-in-out duration-200 ring-offset-2'>English</button>
                </motion.div>}
            </div>
            <ChatTextField />
        </motion.div>
    )
}
)
export default Chatpane
