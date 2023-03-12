import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
    calculateHorizontalPercentage, calculateVerticalPercentage
} from './utils'

export default function useScrollPercentage(
  options = {},
) {
  const [ref, inView, entry] = useInView(options)
  const [percentage, setPercentage] = useState(0)
  const target = entry && entry.target

  useEffect(() => {
    const handleScroll = () => {
      if (!target) return
      const bounds = target.getBoundingClientRect()
      const percentage = options.horizontal
        ? calculateHorizontalPercentage(bounds, options.threshold, options.root)
        : calculateVerticalPercentage(bounds, options.threshold, options.root)

      setPercentage(percentage)
    }

    if (inView) {
      const root = options.root || window
      root.addEventListener('scroll', handleScroll, { passive: true })
      root.addEventListener('resize', handleScroll)

      return () => {
        root.removeEventListener('scroll', handleScroll)
        root.removeEventListener('resize', handleScroll)
      }
    }

    // Trigger a scroll update, so we set the initial scroll percentage
    handleScroll()
    return
  }, [inView, options.root, options.horizontal, options.threshold, target])

  return [ref, percentage, entry]
}
