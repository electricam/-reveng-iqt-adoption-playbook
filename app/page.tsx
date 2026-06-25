import {
  ArrowRight,
  Binary,
  CircleCheckBig,
} from "lucide-react";

import { AcquisitionTracker } from "@/components/acquisition-tracker";
import { StakeholderNetwork } from "@/components/stakeholder-network";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { playbook } from "@/data/playbook";

const urgencyTone = {
  High: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Home() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden px-6 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 px-6 py-6 shadow-[0_30px_120px_-45px_rgba(15,23,42,0.85)] backdrop-blur-sm sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {playbook.hero.title}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-300">
                    {playbook.hero.subtitle}
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-slate-400">
                    {playbook.hero.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-white/15 bg-white/5 text-slate-200">
                    One company
                  </Badge>
                  <Badge variant="outline" className="border-white/15 bg-white/5 text-slate-200">
                    One 90-day adoption thesis
                  </Badge>
                  <Badge variant="outline" className="border-white/15 bg-white/5 text-slate-200">
                    Static demo data
                  </Badge>
                </div>
              </div>

              <Card className="border-white/10 bg-slate-950/65 text-white shadow-none">
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="w-fit border-white/15 bg-white/5 text-slate-200">
                    Executive framing
                  </Badge>
                  <CardTitle className="text-white">Where should RevEng spend the next 90 days?</CardTitle>
                  <CardDescription className="text-slate-300">
                    Concentrate first on malware-analysis mission owners with clear analyst pain and
                    fast feedback loops, then widen toward operational and transition stakeholders.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    "Start with NSA and CISA to validate analyst demand.",
                    "Use USCYBERCOM and Army Cyber as follow-on operators after workflow proof.",
                    "Translate pilot results into a transition memo for IQT portfolio support.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <CircleCheckBig className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                      <p className="text-sm leading-6 text-slate-200">{point}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {playbook.hero.kpis.map((kpi) => (
                <Card key={kpi.label} className="bg-white/96">
                  <CardHeader>
                    <CardDescription className="font-medium uppercase tracking-[0.22em] text-slate-500">
                      {kpi.label}
                    </CardDescription>
                    <CardTitle className="text-2xl leading-tight">{kpi.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{kpi.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="bg-white/96">
            <CardHeader className="space-y-3">
              <Badge className="w-fit">Company Snapshot</Badge>
              <CardTitle>Single-company reference profile</CardTitle>
              <CardDescription>
                Keep the adoption discussion anchored to one concrete capability and one measurable
                government outcome.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm text-slate-600">
              {[
                ["Company", playbook.company.company],
                ["Category", playbook.company.category],
                ["Core capability", playbook.company.capability],
                ["Government value proposition", playbook.company.valueProposition],
                ["Stage", playbook.company.stage],
                ["Deployment model", playbook.company.deployment],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/96">
            <CardHeader className="space-y-3">
              <Badge className="w-fit">Capability-to-Mission Map</Badge>
              <CardTitle>Translate product features into mission outcomes</CardTitle>
              <CardDescription>
                The interview story gets stronger when the company is described in operational terms
                instead of product marketing language.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-3xl border border-slate-200/80">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-xs uppercase tracking-[0.18em] text-slate-300">
                    <tr>
                      <th className="px-5 py-4">Capability</th>
                      <th className="px-5 py-4">Mission outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                    {playbook.capabilities.map((row) => (
                      <tr key={row.capability}>
                        <td className="px-5 py-4 font-medium text-slate-900">{row.capability}</td>
                        <td className="px-5 py-4">{row.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Card className="bg-white/96">
            <CardHeader className="space-y-3">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <Badge className="w-fit">Government Opportunity Matrix</Badge>
                  <CardTitle>Prioritize mission owners before broad business development</CardTitle>
                  <CardDescription>
                    This is presented as a sortable-looking matrix so the viewer can immediately see
                    the sequence of highest-value introductions.
                  </CardDescription>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Ordered by fit score
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-[980px] divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-xs uppercase tracking-[0.18em] text-slate-300">
                    <tr>
                      {[
                        "Agency",
                        "Office / Mission Owner",
                        "Mission Need",
                        "Pain Point",
                        "Fit Score",
                        "Urgency",
                        "Recommended Action",
                      ].map((heading) => (
                        <th key={heading} className="px-4 py-4 font-medium">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                    {playbook.opportunities.map((item) => (
                      <tr key={`${item.agency}-${item.office}`} className="align-top">
                        <td className="px-4 py-4 font-medium text-slate-900">{item.agency}</td>
                        <td className="px-4 py-4">{item.office}</td>
                        <td className="px-4 py-4">{item.missionNeed}</td>
                        <td className="px-4 py-4">{item.painPoint}</td>
                        <td className="px-4 py-4">
                          <div className="inline-flex min-w-14 justify-center rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-900">
                            {item.fitScore}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${urgencyTone[item.urgency]}`}
                          >
                            {item.urgency}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                            {item.recommendedAction}
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3">
            <Badge className="w-fit">Live &amp; Future Acquisition Pathways</Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
              Ground the adoption thesis in live opportunities, official pathways, and real demand
              signals
            </h2>
            <p className="text-sm text-slate-400">
              Click an opportunity to expand the customer, vehicle, and recommended IQT action.
            </p>
            <p className="text-sm text-slate-400">
              Each card links directly to the source opportunity or official acquisition pathway.
            </p>
          </div>

          <Card className="mb-6 border-white/10 bg-white/8 text-white backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="max-w-5xl text-base leading-7 text-slate-200">
                RevEng should not chase generic cyber opportunities. The first customer-discovery
                motion should anchor on a live CISA threat-hunting requirement, use prior CISA
                malware-analysis demand as proof of need, and then map DoD purchasing pathways
                where an AI-assisted malware-analysis platform could be piloted, evaluated, or
                inserted through a prime.
              </p>
            </CardContent>
          </Card>

          <AcquisitionTracker opportunities={playbook.acquisitionOpportunities} />
        </div>
      </section>

      <section className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Badge className="w-fit">Stakeholder Map</Badge>
          </div>
          <StakeholderNetwork items={playbook.stakeholders} />
        </div>
      </section>

      <footer className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Binary className="h-4 w-4 text-emerald-300" />
            <span>Demo data - for interview discussion only</span>
          </div>
          <span>Repo: reveng-iqt-adoption-playbook</span>
        </div>
      </footer>
    </main>
  );
}
