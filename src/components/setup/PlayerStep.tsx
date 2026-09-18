import { useTranslation } from "react-i18next"
import { SetupTabCard } from "./SetupTabCard"

export function PlayersStep({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { t } = useTranslation("common")

  return (
    <SetupTabCard
      title={t("setup.players.title", "Spieler")}
      description={t("setup.players.desc", "Spieler hinzufügen oder entfernen.")}
      onNext={onNext}
      onBack={onBack}
    >
      Some Player Content Here
    </SetupTabCard>
  )
}