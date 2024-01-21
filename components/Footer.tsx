import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-back-100 px-20 py-12 max-md:flex-col'>
        <p>Copyright © 2023 JS  Master | All rights Reserved </p>
        <div className="flex gap-x-9">
            <Link href="/terms-of-use">
                Terms & Conditions
            </Link>
        </div>

        <div className="flex gap-x-9">
            <Link href="/privacy-policy">
                Privacy
            </Link>
        </div>
    </footer>
  )
}

export default Footer