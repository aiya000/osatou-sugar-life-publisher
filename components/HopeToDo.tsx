import IconButton from '@/components/IconButton'
import React from 'react'
import SectionTitle from '@/components/SectionTitle'
import { FC, ReactElement } from 'react'
import { switch3Item } from '@/data/hooks/useSwitch3'
import { classNames } from '@/data/components'
import { z } from 'zod'

/**
 * What you want to do.
 */
export const hopeToDoItem = z.object({
  text: z.string(),

  /**
   * A state of IconButton.
   */
  state: switch3Item,
})
export type HopeToDoItem = z.infer<typeof hopeToDoItem>

/**
 * All necessary items for [[HopeToDo]].
 */
export const hopeToDoComponent = hopeToDoItem.and(
  z.object({
    doSwitch: z.function().returns(z.void()),
  }),
)
export type HopeToDoComponent = z.infer<typeof hopeToDoComponent>

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
