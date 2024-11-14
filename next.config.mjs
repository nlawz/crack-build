import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"
import createMDX from "fumadocs-mdx/config"
import { remarkImage } from "fumadocs-core/mdx-plugins"


/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: {
    code: "Code",
  },
}

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, chConfig, remarkImage]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

export default withMDX(config)
