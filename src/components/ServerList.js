import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function ServerList({ items }) {
    // const [isActive, setIsActive] = useState()
    // const [currentItem, setCurrentItem] = useState()

    // function handleClick(e) {
    //     currentItem = e.target.
    // }

    return (
        <motion.div className="ListWrap">
           { items.map(item => {
               return (<motion.div
                   className="ServerCard"
                //    onClick={(e) => handleClick(e)}
               >
                   <img className="serverIcon" src="https://cdn.discordapp.com/icons/669880381649977354/a_7a3c714613524f87ac5078a4a87e3ae2.png?size=512" />
                   {item}
               </motion.div>)
            })}
        </motion.div>
    )
}
