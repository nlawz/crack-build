import type { MDXComponents } from "mdx/types"
import defaultComponents from "fumadocs-ui/mdx"
import { Code } from "@/components/code"
import { Card, Cards } from "fumadocs-ui/components/card"
import { Heading } from 'fumadocs-ui/components/heading'
import { PreviewWrapper } from "./components/preview-wrapper"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Code,
    Card,
    Cards,
    Heading,
    PreviewWrapper,
  }
}
