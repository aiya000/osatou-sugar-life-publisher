import React, { FC } from 'react'
import background1 from '~/images/loveletter/background1.png'
import { hopeToDoItem } from '@/components/HopeToDo'
import { classNames } from '@/data/components'
import { z } from 'zod'

export const loveLetterProps = z.object({
  name: z.string(),
  gender: z.string(),
  role: z.string(),

  /**
   * When they will login since.
   */
  startTimeToIn: z.string(),

  /**
   * When they will logout.
   */
  endTimeToIn: z.string(),

  yourIconFilePath: z.string(),
  hopeToDoWithYou: z.array(hopeToDoItem),
  hopeToDoToYou: z.array(hopeToDoItem),
  hopeToDoFromYou: z.array(hopeToDoItem),
  hopeToEcchiToYou: z.array(hopeToDoItem),
  hopeToEcchiFromYou: z.array(hopeToDoItem),
  otherNotes: z.string(),

  className: z.string().optional(),
})

export type LoveLetterProps = z.infer<typeof loveLetterProps>

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
