/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

const MyMotion = ({ children, x, y, delay, stiffness }) => {
    return (
        <motion.div
        variants={
            {
                hidden: { opacity: 0, x: x || 0, y: y || 0 },
                visible: { opacity: 1, x: 0, y: 0 }
            }
        }
        initial={'hidden'}
        whileInView={'visible'}
        transition={{duration: .5, delay: delay || .2, type: "spring", stiffness: stiffness || 100}}
        >{children}</motion.div>
    );
};

export default MyMotion;

