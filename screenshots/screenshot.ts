import { ReactElement } from 'react'
import { ReactScreenshotTest } from 'react-screenshot-test'

export function takeScreenshots(
  dirName: string,
  targets: Array<{ title?: string; element: ReactElement }>,
): void {
  const shot = ReactScreenshotTest.create(dirName)
    .viewport('Desktop', {
      width: 1024,
      height: 768,
    })
    .viewport('iPhone X', {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    })

  for (const { title, element } of targets) {
    shot.shoot(title ?? dirName, element)
  }

  shot.run()
}
