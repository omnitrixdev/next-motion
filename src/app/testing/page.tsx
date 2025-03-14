'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Testing() {
  const [isShow, setIsShow] = useState(false);
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <section>
      <h1>Hello world</h1>
      <div className='w-[400px] h-[400px]'>
        {isShow && (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            animate={{ x: 100 }}
            transition={transition}
            className='w-[300px] h-[300px] bg-blue-400'
          >
            <p className='text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate corrupti sint est labore, porro praesentium eligendi
              modi at assumenda molestias!
            </p>
          </motion.div>
        )}
      </div>
      <motion.button
        onClick={() => setIsShow(!isShow)}
        className='bg-blue-500 p-2.5 rounded-md'
        whileTap='tap'
        whileHover='hover'
      >
        Hello world
      </motion.button>
    </section>
  );
}
