import { useTranslation } from "react-i18next"
import { SetupTabCard } from "./SetupTabCard"

export function RolesStep({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { t } = useTranslation("common")

  return (
    <SetupTabCard
      title={t("setup.players.title", "Rollen")}
      description={t("setup.players.desc", "Rollen auswählen oder erstellen.")}
      onNext={onNext}
      onBack={onBack}
    >
      Some Role Content Here
    </SetupTabCard>
  )
}