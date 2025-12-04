import { MarketInsight } from "@/lib/data";
import { BuildingOffice2Icon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

export function MarketCard({ insight }: { insight: MarketInsight }) {
  return (
    <article className="card grid gap-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="badge mb-2">{insight.region}</p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {insight.country}
          </h3>
        </div>
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-2 text-right text-sm font-semibold text-brand-700 dark:border-brand-700 dark:bg-brand-800/40 dark:text-brand-200">
          <p>{insight.growthRate}% CAGR</p>
          <p className="text-xs font-medium text-brand-500 dark:text-brand-300">
            Smart home adoption growth
          </p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4 shadow-inner dark:bg-slate-900/60">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Consumer Behavior Signals
          </h4>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {insight.consumerBehavior.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 shadow-inner dark:bg-slate-900/60">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Regulatory Environment
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {insight.regulatoryEnvironment}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {insight.regulatorySignals.map((signal) => (
              <li key={signal} className="flex gap-2">
                <GlobeAsiaAustraliaIcon className="mt-0.5 h-4 w-4 text-brand-500" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl bg-white p-4 shadow-inner ring-1 ring-slate-200 dark:bg-slate-900/50 dark:ring-slate-700">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Competitive Landscape
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {insight.competitiveLandscape}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-brand-700 dark:text-brand-200">
            {insight.keyCompetitors.map((competitor) => (
              <span
                key={competitor}
                className="rounded-full border border-brand-200/60 px-3 py-1 dark:border-brand-700/60"
              >
                {competitor}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-inner ring-1 ring-slate-200 dark:bg-slate-900/50 dark:ring-slate-700">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Market Scale
          </h4>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                2023 smart households
              </dt>
              <dd className="text-lg font-semibold text-slate-900 dark:text-white">
                {insight.smartHomeHouseholds2023.toFixed(1)}M
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                2026 projection
              </dt>
              <dd className="text-lg font-semibold text-brand-600 dark:text-brand-300">
                {insight.projectedSmartHomeHouseholds2026.toFixed(1)}M
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100/70 p-6 dark:from-brand-900/40 dark:via-slate-900 dark:to-brand-800/30">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-800 dark:text-brand-200">
          <BuildingOffice2Icon className="h-5 w-5" />
          Go-to-Market Blueprint
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Positioning</h5>
            <ReactMarkdown className="prose prose-sm mt-2 max-w-none text-slate-700 dark:prose-invert">
              {insight.strategy.positioning}
            </ReactMarkdown>
          </div>
          <div className="space-y-3">
            <div>
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Key Partnerships</h5>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {insight.strategy.partnerships.map((partner) => (
                  <li key={partner} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pricing</h5>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                {insight.strategy.pricing}
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Distribution</h5>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {insight.strategy.distribution.map((channel) => (
                  <li key={channel} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                    <span>{channel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-inner ring-1 ring-slate-200 dark:bg-slate-900/70 dark:ring-slate-700">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Risks & Mitigation
        </h4>
        <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
          {insight.risks.map((item) => (
            <li key={item.risk} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="font-semibold text-slate-900 dark:text-white">Risk: {item.risk}</p>
              <p className="mt-1 text-slate-700 dark:text-slate-200">
                Mitigation: {item.mitigation}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-slate-800">
        “{insight.slogan}”
      </footer>
    </article>
  );
}
