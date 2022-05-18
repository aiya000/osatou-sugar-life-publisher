/**
 * Please see `script.build` of package.json and below modules.exports to resolve paths.
 */
const urlPrefix = process.env.NODE_ENV === 'production' ? '/osatou-sugar-life-publisher' : ''

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'], // To handle for a type 'StaticImageData'

  /*
   * For gh-pages.
   */
  trailingSlash: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
}
