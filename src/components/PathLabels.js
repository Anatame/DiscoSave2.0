import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function PathLabels({ paths }) {
    const [isActive, setIsActive] = useState(true)
    const [currentItem, setCurrentItem] = useState()
    
    const handleClick = (e, id) => {
        setIsActive(state => !state)
        if (currentItem != null) {
            currentItem.style.color = 'white'
        }
        setCurrentItem(e.currentTarget)
        e.currentTarget.style.color = '#5D43FD'
    }

    const renderList = () => {
        return (
            paths.map(item => {
                return (<motion.h4
                    key={item.id}
                    style={{color: "white"}}
                    onClick={(e)=> handleClick(e, item.id)}
                >{item.name}: </motion.h4>)
            })
        )
    }
    return (
        <motion.div className="Paths">
            {renderList()}
        </motion.div>
    )
}
