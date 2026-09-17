import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen">
      {/* <div>Hello "__root"! This can be used for layout</div> */}
      <Outlet />
    </div>
  )
}
