const getMousePosFromEvent = e => {
  e = e || window.event

  return {
    x: e.clientX,
    y: e.clientY,
  }
}

export default getMousePosFromEvent
