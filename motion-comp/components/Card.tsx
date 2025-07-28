import { cn } from "../lib/utils";
import { useState } from "react";
import {AnimatePresence, motion} from "motion/react"


export const Card = () => {
    
    const [open, setOpen] = useState(true);

  return (
    <>
    <AnimatePresence mode="wait">
        {open && (<motion.div
        initial= {{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
        }}
        animate={{
            opacity:1,
            scale:1,
            filter:"blur(0px)"
        }}
        exit={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
        }}
        transition={{
            duration:0.3,
            ease:"easeInOut"
        }}
      className={cn(
        "w-72 min-h-[26rem] h-[26rem] rounded-xl","bg-white",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-6 flex flex-col"
      )}
    >
      <h2 className="font-bold text-xs">Card Component</h2>
      <p className="text-neutral-500 mt-2 text-[10px]">A collection of beautiful class components, lets start working with them.</p>
      <div className="flex items-center justify-center">
        <button onClick={() => setOpen(false)} className="flex items-center gap-2 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">SunTech</button>
        
      </div>
      <div className="bg-gray-100 flex-1 mt-4 rounded-md border  border-neutral-200 relative" >
        <motion.div
        initial={{
            opacity:0,
            scale:0.98,
            filter:"blur(10px)"
        }} 
        whileHover={{
            opacity:1,
            scale:1.05,
            filter:"blur(0px)"
        }}
        transition={{
            duration:0.3,
            ease:"easeInOut"
        }}
        className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200 ">
            <div className="p-4 text-[10px] flex items-start">abcd</div>
            <div className="p-4 text-[10px] flex items-start">abcd</div>
            <div className="p-4 text-[10px] flex items-start">abcd</div>
            <div className="p-4 text-[10px] flex items-start">abcd</div>
        </motion.div>
      </div>
    </motion.div>)}
    </AnimatePresence>
    
    </>
    


  );
};
