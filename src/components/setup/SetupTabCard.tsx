import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface SetupTabCardProps {
  title: string
  description: string
  children: ReactNode
  onBack?: () => void
  onNext?: () => void
  nextDisabled?: boolean
  nextLabel?: string
}

export function SetupTabCard({
  title,
  description,
  children,
  onBack,
  onNext,
  nextDisabled = false,
  nextLabel = "Weiter",
}: SetupTabCardProps) {
  return (
    <Card className="border-none shadow-none sm:border sm:shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="min-h-75">{children}</CardContent>

      <CardFooter className="flex justify-between gap-4 border-t pt-4">
        {onBack ? (
          <Button variant="secondary" size="lg" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        ) : (
          <div />
        )}

        {onNext && (
          <Button
            variant="default"
            size="lg"
            onClick={onNext}
            disabled={nextDisabled}
          >
            {nextLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
