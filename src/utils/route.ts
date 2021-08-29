export function versionPageRoutes(path: string): string {
  console.log(process.env.NEXT_PUBLIC_PRODUCION)
  if (!process.env.NEXT_PUBLIC_PRODUCION) {
    return `/v2/${path}`
  } else {
    return `/${path}`
  }
}
