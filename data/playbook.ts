export type Kpi = {
  label: string;
  value: string;
  detail: string;
};

export type CapabilityMapItem = {
  capability: string;
  outcome: string;
};

export type Opportunity = {
  agency: string;
  office: string;
  missionNeed: string;
  painPoint: string;
  fitScore: number;
  urgency: "High" | "Medium";
  recommendedAction: string;
};

export type Stakeholder = {
  name: string;
  missionFit: string;
  likelyBuyer: string;
  nextAction: string;
};

export const playbook = {
  hero: {
    title: "RevEng Government Adoption Playbook",
    subtitle:
      "90-day mission adoption dashboard for AI-assisted malware and binary analysis",
    summary:
      "This demo maps one venture-backed cyber capability to the government mission owners most likely to adopt, validate, and transition it. The immediate objective is to help IQT focus RevEng's next 90 days on the offices with the clearest mission pain, strongest analyst pull, and most credible path to adoption.",
    kpis: [
      {
        label: "Top Opportunity Score",
        value: "NSA Cybersecurity / Malware Analysis",
        detail: "Best fit for mission urgency, analyst workflow alignment, and transition credibility.",
      },
      {
        label: "Priority Agencies",
        value: "NSA, CISA, USCYBERCOM, Army Cyber",
        detail: "Sequence starts with national cyber defense and scales into operational users.",
      },
      {
        label: "Recommended Next Step",
        value: "Technical demo with mission analysts",
        detail: "Lead with analyst workflow validation before procurement conversations.",
      },
    ] satisfies Kpi[],
  },
  company: {
    company: "RevEng",
    category: "AI-assisted reverse engineering / malware analysis",
    capability:
      "Accelerates binary analysis, malware triage, vulnerability research, and threat intelligence generation.",
    valueProposition:
      "Reduce analyst workload and shorten time from malware sample to actionable intelligence.",
    stage: "Growth / venture-backed placeholder",
    deployment: "SaaS / secure enclave / on-prem placeholder",
  },
  capabilities: [
    {
      capability: "AI-assisted binary analysis",
      outcome: "Faster malware triage",
    },
    {
      capability: "Reverse engineering automation",
      outcome: "Reduced analyst burden",
    },
    {
      capability: "Firmware / embedded analysis",
      outcome: "ICS, OT, and supply chain defense",
    },
    {
      capability: "Vulnerability discovery",
      outcome: "Defensive cyber operations",
    },
    {
      capability: "Threat intelligence generation",
      outcome: "Faster reporting and operational planning",
    },
    {
      capability: "Analyst collaboration workspace",
      outcome: "Shared understanding across cyber teams",
    },
  ] satisfies CapabilityMapItem[],
  opportunities: [
    {
      agency: "NSA",
      office: "Cybersecurity Collaboration Center",
      missionNeed: "Malware analysis and threat sharing",
      painPoint: "Need faster analysis of adversary tools",
      fitScore: 95,
      urgency: "High",
      recommendedAction: "Intro + technical demo",
    },
    {
      agency: "NSA",
      office: "Cybersecurity Directorate",
      missionNeed: "National-level cyber defense",
      painPoint: "Convert malware findings into defensive guidance",
      fitScore: 92,
      urgency: "High",
      recommendedAction: "Analyst workflow review",
    },
    {
      agency: "CISA",
      office: "Joint Cyber Defense Collaborative",
      missionNeed: "Public-private cyber defense",
      painPoint: "Need scalable analysis for campaigns affecting critical infrastructure",
      fitScore: 90,
      urgency: "High",
      recommendedAction: "JCDC use-case workshop",
    },
    {
      agency: "CISA",
      office: "Threat Hunting / Incident Response",
      missionNeed: "Incident response support",
      painPoint: "Need faster triage during active intrusions",
      fitScore: 88,
      urgency: "High",
      recommendedAction: "Pilot with incident-response team",
    },
    {
      agency: "USCYBERCOM",
      office: "Cyber National Mission Force",
      missionNeed: "Hunt-forward and malware analysis",
      painPoint: "Need rapid understanding of malware found in operational environments",
      fitScore: 91,
      urgency: "High",
      recommendedAction: "Mission demo",
    },
    {
      agency: "Army Cyber Command",
      office: "Cyber Protection Teams",
      missionNeed: "Defensive cyber operations",
      painPoint: "Need repeatable analysis workflows for CPTs",
      fitScore: 84,
      urgency: "Medium",
      recommendedAction: "Field user feedback session",
    },
    {
      agency: "PEO IEW&S / Army",
      office: "Cyber capability modernization",
      missionNeed: "Transition path for cyber tools",
      painPoint: "Need validated tools that can integrate into Army workflows",
      fitScore: 78,
      urgency: "Medium",
      recommendedAction: "Program office discovery call",
    },
    {
      agency: "DHS S&T",
      office: "Cyber R&D transition",
      missionNeed: "Evaluate emerging cyber technologies",
      painPoint: "Need transition-ready cyber tools for DHS components",
      fitScore: 75,
      urgency: "Medium",
      recommendedAction: "Explore pilot / evaluation pathway",
    },
  ] satisfies Opportunity[],
  scoringWeights: [
    { label: "Mission fit", weight: 30 },
    { label: "Technical maturity", weight: 20 },
    { label: "Urgency", weight: 20 },
    { label: "Transition pathway", weight: 15 },
    { label: "Stakeholder accessibility", weight: 10 },
    { label: "Budget / funding signal", weight: 5 },
  ],
  agencyScores: [
    { agency: "NSA", score: 95 },
    { agency: "CISA", score: 90 },
    { agency: "USCYBERCOM", score: 91 },
    { agency: "Army Cyber", score: 84 },
    { agency: "DHS S&T", score: 75 },
  ],
  plan: [
    {
      phase: "Days 0-15",
      items: [
        "Validate strongest mission pain points",
        "Prepare analyst-facing demo",
        "Identify 3-5 target champions",
      ],
    },
    {
      phase: "Days 15-30",
      items: [
        "Conduct NSA / CISA technical discovery sessions",
        "Map analyst workflows",
        "Capture integration requirements",
      ],
    },
    {
      phase: "Days 30-60",
      items: [
        "Run controlled pilot or tabletop evaluation",
        "Measure time saved in malware triage",
        "Collect analyst feedback",
      ],
    },
    {
      phase: "Days 60-90",
      items: [
        "Convert pilot feedback into transition plan",
        "Identify funding / procurement pathway",
        "Prepare IQT portfolio value-add memo",
      ],
    },
  ],
  stakeholders: [
    {
      name: "NSA Cybersecurity Directorate",
      missionFit: "Highest",
      likelyBuyer: "Mission analysts and defensive cyber leadership",
      nextAction: "Run a malware triage workflow review with exemplar samples",
    },
    {
      name: "CISA JCDC",
      missionFit: "High",
      likelyBuyer: "Public-private defense coordinators and campaign planners",
      nextAction: "Frame a campaign analysis workshop for critical infrastructure use cases",
    },
    {
      name: "USCYBERCOM CNMF",
      missionFit: "High",
      likelyBuyer: "Operational malware analysts supporting hunt-forward missions",
      nextAction: "Demonstrate speed-to-understanding on field-discovered samples",
    },
    {
      name: "Army Cyber CPTs",
      missionFit: "Medium-High",
      likelyBuyer: "Defensive cyber operators and unit tech leads",
      nextAction: "Collect field feedback on repeatable analyst workflows",
    },
    {
      name: "DHS S&T Cyber R&D",
      missionFit: "Medium",
      likelyBuyer: "Transition and evaluation stakeholders",
      nextAction: "Assess pilotability and component-level transition path",
    },
  ] satisfies Stakeholder[],
  recommendation:
    "Prioritize NSA and CISA first. NSA offers the strongest mission fit for malware analysis and national cyber defense. CISA offers the best public-private scaling pathway through JCDC and incident response. USCYBERCOM and Army Cyber are strong follow-on users once workflows are validated.",
};
