import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1}} dragElastic={1} dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaFileAlt />
        <p className='text-xs mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between px-8 py-3 bottom-0 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 bg-zinc-600 rounded-full items-center justify-center'>
                {data.close ? <IoMdClose /> : <IoMdDownload items-center justify-center size="1em" color='#000' />}
                </span>
            </div>
            {
                data.tag.isOpen &&  (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                ) }
            </div>
    </motion.div>
  );
}

export default Card;