"use client"
import Link from 'next/link'
import {motion} from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { numberOfItemsInCart } from '../recoil/atoms/numberAtom';
import ThemeToggle from './ThemeToggle';
import { cartAnimationState } from '../recoil/atoms/cartAnimationAtom';

const NavBar = () => {
  const count = useRecoilValue(numberOfItemsInCart);
  const cartAnimationTriggered = useRecoilValue(cartAnimationState);

  return (
   <section>
     <nav className="fixed top-0 w-full bg-slate-100 dark:bg-gray-800 dark:text-white text-black p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            All in One Store
          </Link>
          <motion.div
            className="text-lg relative flex justify-between"
            animate={{ scale: numberOfItemsInCart > 0 ? 1.1 : 1, rotate: numberOfItemsInCart > 0 ? 10 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="relative inline-block"
              animate={cartAnimationTriggered ? { scale: [1, 1.5, 1]} :{} }
            >
              <Link href="/cart" className="text-lg mr-6 mt-1">
                Cart [{count}]
              </Link>
            </motion.div>
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>
   </section>
  )
}

export default NavBar;