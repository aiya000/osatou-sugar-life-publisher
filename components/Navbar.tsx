import Link from 'next/link'
import Links from '@/components/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useState } from 'react'
import { faBars, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { title } from '@/data/title'

const Navbar: FunctionComponent = () => {
  const [isMenuOpening, setIsMenuOpening] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center bg-pink-300 p-4 h-16">
        <Link href="/">
          <a className="btn">{title}</a>
        </Link>

        {/* For mobile devices */}
        <div className="flex justify-end w-1/2 ml-1 visible md:invisible">
          <button onClick={() => setIsMenuOpening(!isMenuOpening)}>
            <FontAwesomeIcon icon={faBars} width={40} className="text-pink-500" />
          </button>
        </div>

        {/* For PC */}
        <div className="flex justify-end ml-1 w-0 h-0 md:w-auto md:h-auto">
          <div className="flex justify-end ml-1 invisible md:visible">{Links}</div>
        </div>
      </div>

      {isMenuOpening && (
        <div className="absolute flex flex-row">
          <div className="w-1/4v">　</div>
          <div className="w-3/4v h-screen bg-pink-100 flex flex-col">{Links}</div>
        </div>
      )}
    </>
  )
}

export default Navbar
