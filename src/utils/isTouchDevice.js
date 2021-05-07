const isTouchDevice = () =>
  window && window.matchMedia("(pointer: coarse)").matches

export default isTouchDevice
