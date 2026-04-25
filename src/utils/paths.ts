/**
 * Prepends the base path to an asset URL for GitHub Pages compatibility.
 * In development, it returns the path as is.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  
  // GitHub Pages subpath
  const basePath = "/portfolio";
  
  // Ensure we don't double up slashes
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Only apply basePath in production build
  // Next.js sets NODE_ENV to 'production' during build
  return process.env.NODE_ENV === "production" ? `${basePath}${cleanPath}` : cleanPath;
}
