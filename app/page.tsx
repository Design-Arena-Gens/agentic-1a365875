import { ThemeToggle } from "@/components/theme-toggle";
import { DataChart } from "@/components/data-chart";
import { DataTable } from "@/components/data-table";
import { MarketCard } from "@/components/market-card";
import { marketInsights } from "@/lib/data";
import { ArrowTrendingUpIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const totalProjectedHouseholds = marketInsights
  .map((market) => market.projectedSmartHomeHouseholds2026)
  .reduce((acc, value) => acc + value, 0);

const averageIncome = Math.round(
  marketInsights.reduce((acc, { metrics }) => acc + metrics.avgHouseholdIncome, 0) / marketInsights.length
);

export default function HomePage() {
  return (
    <main className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-transparent to-brand-200/50 dark:from-brand-900/40 dark:via-transparent dark:to-brand-800/20" />
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-800/40 dark:text-brand-200">
              LumiHome Expansion 2026
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Global Expansion Blueprint for High-Velocity Smart Home Markets
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              As CEO, you have greenlit LumiHome&apos;s push into three fast-accelerating smart home markets. This command center blends
              market research, macroeconomic analysis, and tailored go-to-market plays—ready for investor briefings and operating
              plans.
            </p>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/80 p-4 shadow-inner ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-700">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  <GlobeAltIcon className="h-4 w-4" /> Markets Selected
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">3</dd>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fastest-growing smart home adoption worldwide</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-inner ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-700">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  <ArrowTrendingUpIcon className="h-4 w-4" /> 2026 Smart Households
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  {totalProjectedHouseholds.toFixed(1)}M
                </dd>
                <p className="text-xs text-slate-500 dark:text-slate-400">Combined opportunity size across target countries</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-inner ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-700">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  <ArrowTrendingUpIcon className="h-4 w-4" /> Avg Household Income
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">${averageIncome.toLocaleString()}</dd>
                <p className="text-xs text-slate-500 dark:text-slate-400">PPP-adjusted purchasing power for premium bundles</p>
              </div>
            </dl>
          </div>
          <ThemeToggle />
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="section-title">Executive Readouts</h2>
          <p className="mt-2 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Prioritized list of countries with the sharpest smart home adoption curves, backed by on-the-ground consumer signals,
            regulatory momentum, and the competitive chessboard you will face in 2026.
          </p>
        </div>
        <div className="grid gap-8">
          {marketInsights.map((insight) => (
            <MarketCard key={insight.country} insight={insight} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-title">Macro & Adoption Analytics</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Cross-market comparison of macroeconomic resilience, connected infrastructure, and household spending capacity to
            calibrate resource allocation and pricing.
          </p>
          <div className="mt-6">
            <DataChart data={marketInsights} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Metric Snapshot</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              GDP growth and internet penetration favor diversified rollouts, while income levels hint at localized price ladders.
            </p>
          </div>
          <DataTable data={marketInsights} />
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900 shadow-sm dark:border-yellow-600/40 dark:bg-yellow-900/30 dark:text-yellow-100">
            <p className="font-semibold">Analyst Insight</p>
            <p className="mt-1">
              India and Brazil require scale-friendly pricing, but their adoption velocity outpaces GDP growth—prioritize recurring
              services to defend margins. UAE offers premium ARPU upside that can bankroll high-touch support for the other two
              markets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
