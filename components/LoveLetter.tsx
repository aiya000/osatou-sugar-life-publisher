import React, { FC } from 'react'
import background1 from '~/images/loveletter/background1.png'
import { classNames } from '@/data/components'
import { hopeToDoItem } from '@/components/HopeToDo'
import { switch3Item } from '@/data/hooks/useSwitch3'
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

  hopeToDoWithYouStates: z.array(switch3Item),
  hopeToDoToYouStates: z.array(switch3Item),
  hopeToDoFromYouStates: z.array(switch3Item),
  hopeToEcchiToYouStates: z.array(switch3Item),
  hopeToEcchiFromYouStates: z.array(switch3Item),

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
  hopeToDoWithYouStates,
  hopeToDoToYouStates,
  hopeToDoFromYouStates,
  hopeToEcchiToYouStates,
  hopeToEcchiFromYouStates,
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
