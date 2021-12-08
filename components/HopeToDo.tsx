import IconButton from '@/components/IconButton'
import { FC, ReactElement } from 'react'
import { Switch3Item } from '@/data/hooks/switch3'

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
}

const HopeToDo: FC<HopeToDoProps> = ({ sectionName, components, children }) => (
  <section className="rounded-box w-3/4v mt-6">
    {sectionName && <p className="text-lg my-4 md:text-2xl">{sectionName}</p>}

    <div className="flex flex-row flex-wrap">
      {components.map(({ text, item, doSwitch }) => (
        <IconButton text={text} current={item} onClick={doSwitch} key={text} className="m-2" />
      ))}
    </div>

    {children}
  </section>
)

export default HopeToDo
