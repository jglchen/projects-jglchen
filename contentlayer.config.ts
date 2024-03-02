import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    siteurl: { type: 'string' },
    appurl: { type: 'string' },
    source: { type: 'string', required: true },
    nativepub: { type: 'string' },
    nativesource: { type: 'string' },
    docker: { type: 'string', required: true },
    siteimg: { type: 'string', required: true },
    mobileimg: { type: 'string' },
    locale: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    skills: {
      type: 'list',
      of: { type: 'string' },
    },
    priority: { type: 'number', required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'data', documentTypes: [Project] })
