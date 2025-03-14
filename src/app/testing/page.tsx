'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Testing() {
  return (
    <section className='container mx-auto flex justify-center items-center flex-col'>
      <h1>This is supposed to be some motions</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='w-[300px] h-[200px]'
      >
        Hello, Motion!
      </motion.div>
      <div className='border'>
        <motion.div
          drag
          dragConstraints={{ left: 60, right: 100, top: 100, bottom: 100 }}
          className='bg-green-500 w-[500px] h-[500px]'
        />
      </div>
    </section>
  );
}
