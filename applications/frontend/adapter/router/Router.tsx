import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { routes } from './Routes'
import { useLocation, useOutlet } from 'react-router-dom'

export const Router = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        {() => {
          return (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )
        }}
      </CSSTransition>
    </SwitchTransition>
  )
}
