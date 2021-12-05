import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'
import { Switch3Item, fold } from '@/data/hooks/switch3'
import { classNames } from '@/data/components'
import { faCircle, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

interface Props {
  text: string

  /**
   * 0 is negative.
   * 1 is positive.
   * 2 is question.
   */
  current: Switch3Item

  onClick: () => void
  className?: string
}

// NOTE: Currently you can implement `current` over maximum of Switch3Item.

/**
 * A fancy styled check box.
 */
const IconButton: FunctionComponent<Props> = ({ current, text, onClick, className }) => (
  <button
    onClick={onClick}
    className={classNames(
      'border-2 rounded-lg p-2 flex flex-row justify-end items-center',
      fold(
        current,
        'border-gray-400 bg-gray-100 text-gray-500',
        'border-green-400 bg-green-100 text-green-500',
        'border-yellow-400 bg-yellow-100 text-yellow-500',
      ),
      className,
    )}
  >
    <FontAwesomeIcon icon={fold(current, faTimesCircle, faCircle, faQuestionCircle)} width={25} />
    <div className="ml-1">{text}</div>
  </button>
)

export default IconButton
