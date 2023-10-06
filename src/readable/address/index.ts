import { SUPPORTED_NS_LIST } from '../../constants'

export function isAddress(address: string): boolean {
  return !!/^(0x)?[\dA-Fa-f]{40}$/.test(address)
}

export function isMastodon(handle: string) {
  return /^\w{1,30}@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(handle)
}

export function isSupportedNS(handle?: string | null) {
  if (!handle) return false
  let valid = false
  SUPPORTED_NS_LIST.map((ns) => {
    if (handle.endsWith(ns)) valid = true
  })
  return valid
}

export function formatAddress(address: string): string {
  if (!address) return ''
  if (!isAddress(address)) return address
  return address.slice(0, 6) + '...' + address.slice(-4)
}

/**
 * it will format the address, eg: 0x1234567890abcdef1234567890abcdef12345678 -> 0x1234...5678
 * also format the long handle, eg: 0x1234567890abcdef1234567890abcdef12345678.csb -> 0x1234...5678.csb
 */
export function formatAddressAndNS(address: string): string {
  if (isAddress(address)) return formatAddress(address)
  else if (isSupportedNS(address))
    return address
      .split('.')
      .map((value: string) => formatAddress(value))
      .join('.')
  else return address
}
