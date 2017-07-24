export function nmap(n, func) {
  return Array.from({ length: n }).map(func)
}
