"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AcquisitionOpportunity } from "@/data/playbook";
import { cn } from "@/lib/utils";

const statusTone: Record<AcquisitionOpportunity["statusCategory"], string> = {
  Live: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Pathway: "border-blue-200 bg-blue-50 text-blue-700",
  Historical: "border-slate-200 bg-slate-100 text-slate-700",
};

export function AcquisitionTracker({
  opportunities,
}: {
  opportunities: AcquisitionOpportunity[];
}) {
  const [selectedTitle, setSelectedTitle] = useState("CISA Cyber Technology Services");

  const selected =
    opportunities.find((opportunity) => opportunity.title === selectedTitle) ?? opportunities[0];

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto pb-2">
        <div className="grid min-w-[1100px] gap-4 md:min-w-0 md:grid-cols-2 xl:grid-cols-5">
          {opportunities.map((opportunity) => {
            const isSelected = opportunity.title === selected.title;

            return (
              <button
                key={opportunity.title}
                type="button"
                onClick={() => setSelectedTitle(opportunity.title)}
                className={cn(
                  "text-left",
                  "rounded-[1.6rem] border bg-white p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] transition-all",
                  "hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_24px_70px_-32px_rgba(37,99,235,0.28)]",
                  isSelected
                    ? "border-blue-300 bg-blue-50/60 ring-2 ring-blue-200"
                    : "border-slate-200/80",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                        statusTone[opportunity.statusCategory],
                      )}
                    >
                      {opportunity.statusCategory}
                    </span>
                    <Badge variant="outline" className="text-[11px]">
                      {opportunity.priority}
                    </Badge>
                  </div>
                  {opportunity.sourceUrl ? (
                    <a
                      href={opportunity.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-100"
                      aria-label={`View source for ${opportunity.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">Source needed</span>
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="line-clamp-2 text-base font-semibold leading-6 text-slate-950">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">{opportunity.agency}</p>
                  <p className="truncate text-sm text-slate-500">{opportunity.endUserShort}</p>
                  <p className="truncate text-sm text-slate-500">{opportunity.opportunityType}</p>
                  <p className="line-clamp-2 text-sm leading-6 text-slate-700">
                    {opportunity.whyItMatters}
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                  View details
                  <ChevronRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Card className="bg-white/96">
        <CardHeader className="space-y-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-2">
              <Badge className="w-fit">Selected Opportunity Detail</Badge>
              <CardTitle className="text-2xl leading-tight">{selected.title}</CardTitle>
              <CardDescription>{selected.source} · {selected.status}</CardDescription>
            </div>
            {selected.sourceUrl ? (
              <a
                href={selected.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-100"
              >
                View source
                <span className="text-blue-600">{selected.sourceLabel}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span className="text-sm text-slate-400">Source needed</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <span
              className={cn(
                "inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
                statusTone[selected.statusCategory],
              )}
            >
              {selected.statusCategory}
            </span>
            <Badge variant="outline">{selected.priority}</Badge>
            <Badge variant="outline">{selected.opportunityType}</Badge>
            <Badge variant="outline">{selected.agency}</Badge>
          </div>
        </CardHeader>

        <CardContent className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {[
                ["Opportunity ID", selected.opportunityId],
                ["End User", selected.endUser],
                ["Due Date", selected.dueDate ?? "Not listed"],
                ["Estimated Value", selected.estimatedValue ?? "Not listed"],
                ["Vehicle", selected.likelyVehicle ?? "Not listed"],
                ["NAICS", selected.naics ?? "Not listed"],
              ].map(([label, value]) => (
                <div
                  key={`${selected.title}-${label}`}
                  className="min-w-[180px] flex-1 rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Mission Need", selected.missionNeed],
              ["Why RevEng Fits", selected.whyRevEngFits],
              ["Customer Hypothesis", selected.customerHypothesis],
              ["Recommended IQT Action", selected.recommendedIQTAction],
            ].map(([label, value]) => (
              <div
                key={`${selected.title}-${label}`}
                className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
