import IconButton from '@/components/IconButton'
import React from 'react'
import { FC, ReactElement } from 'react'
import { Switch3Item } from '@/data/hooks/switch3'
import { classNames } from '@/data/components'

/**
 * What you want to do.
 */
export interface HopeToDoItem {
  text: string
  item: Switch3Item
}

export interface HopeToDoProps {
  sectionName?: ReactElement
  components: Array<HopeToDoItem & { doSwitch: () => void }>
  className?: string
}

const HopeToDo: FC<HopeToDoProps> = ({ sectionName, components, children, className }) => (
  <section className={classNames('rounded-box w-3/4v', className)}>
    {sectionName && <div className="text-lg my-4 md:text-2xl">{sectionName}</div>}

    <div className="flex flex-row flex-wrap">
      {components.map(({ text, item, doSwitch }) => (
        <IconButton text={text} current={item} onClick={doSwitch} key={text} className="m-2" />
      ))}
    </div>

    {children}
  </section>
)

export default HopeToDo
