import React, { FC } from 'react'
import { classNames } from '@/data/components'

interface SectionTitleProps {
  className?: string
}

const SectionTitle: FC<SectionTitleProps> = ({ children, className }) => (
  <div className="flex flex-row justify-center">
    <div className={classNames('font-extrabold text-pink-400 text-lg md:text-2xl', className)}>
      {children}
    </div>
  </div>
)

export default SectionTitle
