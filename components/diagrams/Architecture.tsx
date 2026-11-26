import { useTranslations } from "next-intl";
import { IconCloud, IconUser, IconShieldLock, IconCpu, IconNetwork } from "../icons";

// What runs where: robot (agent + gate + robot stack) ⇄ private network ⇄ Qafila Fleet ⇄ people.
// HTML/CSS so labels stay real text; the network is drawn as the brand's dashed route line.
function Box({ title, sub, icon: Icon, strong }: { title: string; sub: string; icon: typeof IconCpu; strong?: boolean }) {
  return (
    <div className={`rounded-card border bg-surface p-4 ${strong ? "border-primary-accent" : "border-edge"}`}>
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 shrink-0 text-fg-soft" />
        <p className="font-semibold text-fg">{title}</p>
      </div>
      <p className="mt-1 text-small text-fg-soft">{sub}</p>
    </div>
  );
}

function Link({ label }: { label?: string }) {
  return (
    <div aria-hidden className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
      <div className="route-y h-10 w-4 lg:route-x lg:h-4 lg:w-full lg:min-w-16" />
      {label && (
        <span className="absolute rounded-full border border-edge bg-bg px-3 py-0.5 text-micro text-fg-soft">{label}</span>
      )}
    </div>
  );
}

export default function Architecture() {
  const t = useTranslations("how");
  return (
    <figure>
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.7fr_1fr_0.4fr_0.9fr] lg:items-center">
        <div className="rounded-panel border border-dashed border-fg-muted/50 p-3">
          <p className="px-1 pb-2 text-small font-medium text-fg-soft">{t("aRobot")}</p>
          <div className="grid gap-2">
            <Box title={t("aAgent")} sub={t("aAgentSub")} icon={IconNetwork} strong />
            <Box title={t("aGate")} sub={t("aGateSub")} icon={IconShieldLock} strong />
            <Box title={t("aStack")} sub={t("aStackSub")} icon={IconCpu} />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Link label={t("aNet")} />
        </div>
        <Box title={t("aCloud")} sub={t("aCloudSub")} icon={IconCloud} />
        <div className="relative flex items-center justify-center">
          <Link />
        </div>
        <Box title={t("aPeople")} sub={t("aPeopleSub")} icon={IconUser} />
      </div>
      <figcaption className="sr-only">{t("archLabel")}</figcaption>
    </figure>
  );
}
