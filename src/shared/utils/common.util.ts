export function sleep(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function byteToKb(bytes: number) {
  return bytes / 1000;
}
