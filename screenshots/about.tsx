import React from 'react'
import About from '@/pages/about'
import { takeScreenshots } from '@/screenshots/screenshot'

// eslint-disable-next-line import/no-unassigned-import
// TODO: https://github.com/fwouts/react-screenshot-test/issues/324
// import './style.css'

takeScreenshots('about', [{ element: <About /> }])
