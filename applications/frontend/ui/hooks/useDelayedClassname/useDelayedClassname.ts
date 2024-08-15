import { useEffect, useState } from 'react'

const defaultDelayInMs = 100

interface Props {
  initialClassname: string
  delayedClassname: string
  delay?: number
}

export const useDelayedClassname = ({
  initialClassname,
  delayedClassname,
  delay = defaultDelayInMs,
}: Props) => {
  const [classname, setClassname] = useState(initialClassname)

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassname(`${initialClassname} ${delayedClassname}`)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, delayedClassname, initialClassname])

  return { classname }
}
