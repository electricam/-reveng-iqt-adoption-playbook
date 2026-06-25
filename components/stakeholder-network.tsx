import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Stakeholder } from "@/data/playbook";

export function StakeholderNetwork({ items }: { items: Stakeholder[] }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_1.4fr]">
      <Card className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.22),_transparent_45%)]" />
        <CardContent className="relative flex min-h-[320px] items-center justify-center p-8">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 hidden xl:block">
              {items.map((item, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2",
                  "top-1/4 right-0",
                  "bottom-1/4 right-8",
                  "bottom-0 left-1/2 -translate-x-1/2",
                  "top-1/3 left-0",
                ];

                return (
                  <div
                    key={item.name}
                    className={`absolute ${positions[index]} text-[11px] uppercase tracking-[0.18em] text-slate-300`}
                  >
                    {item.name}
                  </div>
                );
              })}
              <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-500/50 to-transparent" />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/8 px-8 py-10 text-center shadow-2xl backdrop-blur">
              <Badge variant="accent" className="mx-auto border-emerald-400/40 bg-emerald-400/12 text-emerald-100">
                Venture Portfolio Company
              </Badge>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">RevEng</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">
                AI-assisted reverse engineering, malware triage, and intelligence generation for
                cyber mission owners.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.name} className="border-slate-200 bg-white/95">
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <Badge variant="outline">Mission fit: {item.missionFit}</Badge>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.name}</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Likely buyer/user:</span>{" "}
                  {item.likelyBuyer}
                </p>
                <p className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span>
                    <span className="font-medium text-slate-800">Next action:</span>{" "}
                    {item.nextAction}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
