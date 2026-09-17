import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Users, Zap } from "lucide-react"
import { PlayersStep } from "@/components/setup/PlayerStep"
import { RolesStep } from "@/components/setup/RolesStep"
import { SettingsStep } from "@/components/setup/SettingsStep"

type SetupTab = "players" | "roles" | "settings"

export const Route = createFileRoute("/setup/")({
  validateSearch: (search: Record<string, unknown>): { tab: SetupTab } => {
    return {
      tab: (search.tab as SetupTab) || "players",
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { tab } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const setTab = (newTab: SetupTab) => {
    navigate({ search: { tab: newTab } })
  }

  return (
    <div className="max-w-md mx-auto p-2 sm:p-4 space-y-4">
      <Tabs value={tab} onValueChange={(v) => setTab(v as SetupTab)}>
        <TabsList className="w-full">
          <TabsTrigger value="players" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Spieler</span>
          </TabsTrigger>
          <TabsTrigger value="roles" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">Rollen</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Optionen</span>
          </TabsTrigger>
        </TabsList>

        {/* 3. Clean Modular Step Rendering */}
        <div className="mt-4">
          {tab === "players" && <PlayersStep onNext={() => setTab("roles")} />}
          {tab === "roles" && (
            <RolesStep
              onBack={() => setTab("players")}
              onNext={() => setTab("settings")}
            />
          )}
          {tab === "settings" && (
            <SettingsStep
              onBack={() => setTab("roles")}
              onStartGame={() => navigate({ to: "/reveal/$playerIndex", params: { playerIndex: "0" } })}
            />
          )}
        </div>
      </Tabs>
    </div>
  )
}