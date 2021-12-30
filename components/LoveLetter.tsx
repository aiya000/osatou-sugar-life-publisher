import React, { FC } from 'react'
import { HopeToDoItem } from '@/components/HopeToDo'

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
}

const LoveLetter: FC<LoveLetterProps> = (_) => <div>TODO</div>

export default LoveLetter
