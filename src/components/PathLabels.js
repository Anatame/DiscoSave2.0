import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function PathLabels({ paths }) {
    const [isActive, setIsActive] = useState(true)
    
    const handleClick = (e, id) => {
        setIsActive(state => !state)
        console.log(id)
        console.log(e.currentTarget.style.color = 'blue')
    }
    return (
        <motion.div className="Paths">
            {paths.map(item => {
                return (<motion.h4
                    key={item.id}
                    onClick={(e)=> handleClick(e, item.id)}
                >{item.name}: </motion.h4>)
            })}
        </motion.div>
    )
}
