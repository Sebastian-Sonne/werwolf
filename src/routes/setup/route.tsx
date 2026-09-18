import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/setup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='m-4'>
        <Outlet />
    </div>
  )
}
