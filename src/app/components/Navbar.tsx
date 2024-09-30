// components/Navbar.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="text-white p-4" 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex justify-center space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/addon">Addon</Link></li>
        <li><Link href="/company">Company</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </motion.nav>
  );
}
