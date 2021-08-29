export function versionPageRoutes(path: string): string {
  if (!process.env.NEXT_PUBLIC_PRODUCION) {
    return `/v2/${path}`
  } else {
    return `/${path}`
  }
}
