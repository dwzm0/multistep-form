import { useState, useEffect } from 'react'

export const useResize = (): boolean => {
  const [showSmallBg, setSmallBg] = useState<boolean>(false)
  const showBg = (): any => {
    window.innerWidth <= 770 ? setSmallBg(true) : setSmallBg(false)
  }

  useEffect(() => {
    showBg()
  }, [])

  window.addEventListener('resize', showBg)

  return showSmallBg
}
