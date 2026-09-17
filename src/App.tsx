import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { useBearStore } from "./store/store"

export function App() {
  const { bears, increae, reset } = useBearStore()

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Zustand Test</CardTitle>
            <CardDescription>
              I am testing Zustand here. Be careful!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{bears} bears around</p>

            <Button variant={"default"} onClick={() => increae(1)}>
              Add a bear
            </Button>
            <Button variant={"outline"} onClick={reset}>
              Reset
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
