import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Stakeholder } from "@/data/playbook";

export function StakeholderNetwork({ items }: { items: Stakeholder[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.name} className="border-slate-200 bg-white/95">
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <Badge variant="outline">{item.organization}</Badge>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.name}</h3>
                <p className="text-sm font-medium text-slate-600">{item.role}</p>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Why this person matters:</span>{" "}
                  {item.relevance}
                </p>
                <p className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span>
                    <span className="font-medium text-slate-800">How to use them:</span>{" "}
                    {item.nextAction}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
