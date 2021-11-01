import React from 'react';
import {motion} from 'framer-motion'

const Searchbar = () => {
    return (
        <motion.div >
               <input className="SearchBar" type="text" name="name" placeholder="Search..." />
        </motion.div>

    );
}

export default Searchbar;
