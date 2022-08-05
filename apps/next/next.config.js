/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/gradient',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  '@expo/vector-icons',
  // '@showtime-xyz/universal.icon',
  // '@showtime-xyz/universal.switch',
  'app',
])

module.exports = withPlugins(
  [withTM, withFonts, [withExpo, { projectRoot: __dirname }]],
  nextConfig
)
