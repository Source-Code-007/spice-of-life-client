import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "../Components/HelpingCompo/ScrollToTop";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false)


    useEffect(()=>{
        const scrollTopFunc = ()=>{
            setIsVisible(window.pageYOffset>100)
        }
        window.addEventListener('scroll', scrollTopFunc)
        return ()=>{
            window.removeEventListener('scroll', scrollTopFunc)
        }
    },[])

    // handleToTopFunc
    const handleToTopFunc = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 80 }}
            onClick={handleToTopFunc}
            className={`rounded-full h-12 w-12 bg-[#0b1315] fixed bottom-2 right-2  ${isVisible? 'flex' : 'hidden'} items-center justify-center cursor-pointer`}>
            <FaArrowUp></FaArrowUp>
        </motion.div>
    );
};

export default ToTop;