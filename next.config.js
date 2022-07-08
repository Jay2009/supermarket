/** @type {import('next').NextConfig} */
const withLess = require("next-with-less")

const withImages = require("next-images")
const path = require("path")

module.exports = withImages(
  withLess({
    lessLoaderOptions: {},
    images: {
      disableStaticImages: true,
    },

    trailingSlash: true,
  })
)
