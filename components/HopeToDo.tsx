import IconButton from '@/components/IconButton'
import React from 'react'
import SectionTitle from '@/components/SectionTitle'
import { FC, ReactElement } from 'react'
import { Switch3Item } from '@/data/hooks/useSwitch3'
import { classNames } from '@/data/components'

/**
 * What you want to do.
 */
export interface HopeToDoItem {
  text: string

  /**
   * A state of IconButton.
   */
  state: Switch3Item
}

/**
 * All necessary items for [[HopeToDo]].
 */
export type HopeToDoComponent = HopeToDoItem & { doSwitch: () => void }

export interface HopeToDoProps {
  sectionName?: ReactElement
  components: Array<HopeToDoComponent>
  className?: string
}

const HopeToDo: FC<HopeToDoProps> = ({ sectionName, components, children, className }) => (
  <section className={classNames('rounded-box', className)}>
    {sectionName && <SectionTitle>{sectionName}</SectionTitle>}

    <div className="flex flex-row flex-wrap">
      {components.map(({ text, state, doSwitch }) => (
        <IconButton text={text} current={state} onClick={doSwitch} key={text} className="m-2" />
      ))}
    </div>

    {children}
  </section>
)

export default HopeToDo
