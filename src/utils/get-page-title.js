import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vue公共模板'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
