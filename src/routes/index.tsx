import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card className="max-w-md mx-auto ">
      <CardHeader>
        <CardTitle>Werwolf</CardTitle>
        <CardDescription>
          Eine App die dich durch das Spiel führt.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          to="/setup"
          search={{
            tab: "players",
          }}
        >
          <Button>Start</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
