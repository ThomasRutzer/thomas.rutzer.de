const lerp = (a, b, n) => {
  // console.log(a)
  return (1 - n) * a + n * b
}

export default lerp