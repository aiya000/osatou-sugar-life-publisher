import Link from 'next/link'
import links from '@/components/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useState } from 'react'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { title } from '@/data/title'

const Navbar: FunctionComponent = () => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center bg-pink-300 p-4 h-16">
        <Link href="/">
          <a className="btn">{title}</a>
        </Link>

        {/* For mobile devices */}
        <div className="flex justify-end w-1/2 ml-1 visible md:invisible">
          <button onClick={() => setIsMenuOpening(!isMenuOpening)}>
            <FontAwesomeIcon
              icon={isMenuOpening ? faTimesCircle : faBars}
              width={40}
              className="text-pink-500"
            />
          </button>
        </div>

        {/* For PC */}
        <div className="flex justify-end ml-1 w-0 h-0 md:w-auto md:h-auto">
          <div className="flex justify-end ml-1 invisible md:visible">
            {links.map((ALink, i) => (
              <ALink className="ml-1" key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* A burger menu body */}
      {isMenuOpening && (
        <div className="absolute flex flex-row">
          <button className="w-1/4v" onClick={() => setIsMenuOpening(false)}>
            　
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
