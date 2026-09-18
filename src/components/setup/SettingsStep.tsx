import { useTranslation } from "react-i18next"
import { SetupTabCard } from "./SetupTabCard"

export function SettingsStep({ onStartGame, onBack }: { onStartGame: () => void, onBack: () => void }) {
  const { t } = useTranslation("common")

  return (
    <SetupTabCard
      title={t("setup.players.title", "Einstellungen")}
      description={t("setup.players.desc", "Spieleinstellungen bearbeiten.")}
      onNext={onStartGame}
      onBack={onBack}
    >
      Some Settings Content Here
    </SetupTabCard>
  )
}