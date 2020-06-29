const getMousePosFromEvent = e => {
  e = e || window.event
 
  return {
    x: e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
    y: e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
}

export default getMousePosFromEvent