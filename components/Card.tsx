import React from 'react'
import { FunctionComponent } from 'react'
import { classNames } from '@/data/components'

interface Props {
  image?: StaticImageData

  /**
   * A bold text onto the top.
   */
  title?: string

  /**
   * Each lines.
   */
  text?: Array<string>

  hashTags?: Array<string>
  className?: string
}

const Card: FunctionComponent<Props> = ({ image, title, text, hashTags, className }) => (
  <div className={classNames('rounded overflow-hidden shadow-lg', className)}>
    {image && <img src={image.src} alt="An example of a sugar" />}

    <div className="px-6 py-4">
      {title && <div className="font-bold text-xl mb-4">{title}</div>}
      {text?.map((line, i) => (
        <p key={i} className="text-gray-700 text-base">
          {line}
        </p>
      ))}
    </div>

    <div className="px-6 pt-4 pb-2">
      {hashTags?.map((hashTag, i) => (
        <span
          key={i}
          className="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-pink-300 mr-2 mb-2"
        >
          {hashTag}
        </span>
      ))}
    </div>
  </div>
)

export default Card
