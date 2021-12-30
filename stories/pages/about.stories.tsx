import About from '@/pages/about'
import React from 'react'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Pages/About',
  component: About,
} as ComponentMeta<typeof About>

export const AboutPage = () => <About />
