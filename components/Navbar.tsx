import Link from 'next/link'
import React from 'react'
import brandIcon from '~/images/brand-icon.png'
import links from '@/components/links'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useBoolean } from 'react-hanger/array'

const Navbar: FC = () => {
  const [menuIsOpening, { toggle: toggleMenuIsOpening }] = useBoolean(false)

  return (
    <div>
      <div className="bg-pink-300 h-20">
        <Link href="/">
          <a className="btn flex flex-row justify-center w-20 h-16 absolute left-2 top-2">
            <img src={brandIcon.src} alt="brand-icon" className="w-10 h-8" />
          </a>
        </Link>

        <button onClick={toggleMenuIsOpening} className="show-only-mobile absolute top-4 right-6">
          <FontAwesomeIcon
            icon={menuIsOpening ? faTimesCircle : faBars}
            width={40}
            className="text-pink-500"
          />
        </button>

        <div className="show-only-desktop flex flex-row absolute top-2 right-2">
          {links.map((ALink, i) => (
            <ALink className="ml-1 h-16" key={i} />
          ))}
        </div>
      </div>

      {/* A burger menu body */}
      {menuIsOpening && (
        <div className="absolute flex flex-row">
          <button className="w-1/4v" onClick={toggleMenuIsOpening}>
            　
          </button>
          <div className="w-3/4v h-screen bg-pink-100 items-center flex flex-col border-2 border-pink-400 rounded-lg">
            {links.map((ALink, i) => (
              <ALink className="w-3/4 mt-2 flex flex-col items-center" key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
