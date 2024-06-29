import { useLocation } from 'react-router-dom'

const useClassnameOfRoute = () => {
  const { pathname } = useLocation()
  const route = pathname.split('/')[1]
  if (route.length === 0) {
    document.body.className = 'home-view'
    return
  }
  document.body.className = route + '-view'
}

export { useClassnameOfRoute }
