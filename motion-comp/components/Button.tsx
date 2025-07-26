import {motion} from "motion/react";


export const   Button =  () => {
    return (
        <div className="[perspective::1000px] [transform-style:preserve-3d] flex bg-neutral-950 h-screen w-full items-center justify-center"
        style={{
            backgroundImage: "radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0%, rgba(255, 255, 255, 0.05) 0.5px)",
            backgroundRepeat:'repeat',
            backgroundSize:"8px 8px"
        }}>
            <motion.button
            whileHover={{
                scale: 1.05,
                rotateX: 20,
                rotateY:10,
                y: -10,
                boxShadow: "0px 20px 50px  rgba(8,112,184,0.7)"
            }}
            whileTap={{
                y:0
            }}
            style={{
                translateZ:200,
                
            }}
            // initial={{
            //     rotate:0
            // }}

            // animate={{
            //     rotate:[0,10,0]
            // }}

            // transition={{
            //     duration:1
            // }}
             className=" group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
                <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-md"></span>
            </motion.button>

        </div>
    )
}