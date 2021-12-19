import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'
import { Switch3Item, fold } from '@/data/hooks/switch3'
import { classNames } from '@/data/components'
import { faThumbsUp, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

interface IconButtonProps {
  text: string

  /**
   * 0 is question.
   * 1 is negative.
   * 2 is positive.
   */
  current: Switch3Item

  onClick: () => void
  className?: string
}

/**
 * A fancy styled check box.
 */
const IconButton: FunctionComponent<IconButtonProps> = ({ current, text, onClick, className }) => (
  <button
    onClick={onClick}
    className={classNames(
      'border-2 rounded-lg p-2 flex flex-row justify-end items-center',
      fold(
        current,
        'border-gray-200 bg-white-100 text-black-500',
        'border-green-400 bg-green-100 text-green-500',
        'border-red-400 bg-red-100 text-red-500',
      ),
      className,
    )}
  >
    <FontAwesomeIcon icon={fold(current, faQuestionCircle, faThumbsUp, faTimesCircle)} width={25} />
    <div className="ml-1">{text}</div>
  </button>
)

export default IconButton
