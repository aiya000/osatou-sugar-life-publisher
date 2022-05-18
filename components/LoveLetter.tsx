import React, { FC } from 'react'
import { HopeToDoItem } from '@/components/HopeToDo'
import { classNames } from '@/data/components'
import background1 from '~/images/loveletter/background1.png'

export interface LoveLetterProps {
  name: string
  gender: string
  role: string
  startTimeToIn: string
  endTimeToIn: string
  yourIconFilePath: string
  hopeToDoWithYou: Array<HopeToDoItem>
  hopeToDoToYou: Array<HopeToDoItem>
  hopeToDoFromYou: Array<HopeToDoItem>
  hopeToEcchiToYou: Array<HopeToDoItem>
  hopeToEcchiFromYou: Array<HopeToDoItem>
  otherNotes: string

  className?: string
}

const LoveLetter: FC<LoveLetterProps> = ({
  name,
  gender,
  role,
  startTimeToIn,
  endTimeToIn,
  yourIconFilePath,
  hopeToDoWithYou,
  hopeToDoToYou,
  hopeToDoFromYou,
  hopeToEcchiToYou,
  hopeToEcchiFromYou,
  otherNotes,
  className,
}) => (
  <div
    style={{ backgroundImage: `url(${background1.src})` }}
    className={classNames('bg-cover bg-no-repeat', className)}
  >
    TODO
  </div>
)

export default LoveLetter
