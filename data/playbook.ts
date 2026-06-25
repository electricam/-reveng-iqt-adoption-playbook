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
  role: string;
  organization: string;
  relevance: string;
  nextAction: string;
};

export type AcquisitionOpportunity = {
  title: string;
  opportunityId: string;
  source: string;
  sourceLabel: string;
  sourceUrl?: string;
  agency: string;
  endUserShort: string;
  statusCategory: "Live" | "Pathway" | "Historical";
  endUser: string;
  opportunityType: string;
  status: string;
  dueDate?: string;
  estimatedValue?: string;
  likelyVehicle?: string;
  naics?: string;
  missionNeed: string;
  whyRevEngFits: string;
  customerHypothesis: string;
  recommendedIQTAction: string;
  dashboardBadge: string;
  priority: string;
  whyItMatters: string;
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
      name: "Kristina Walter",
      role: "Chief, Cybersecurity Collaboration Center",
      organization: "NSA",
      relevance:
        "Key named leader for industry-facing collaboration and the most natural first bridge into NSA malware-analysis and DIB defense use cases.",
      nextAction:
        "Validate whether RevEng should be framed as a collaboration-center introduction, analyst workflow demo, or DIB-focused malware-analysis capability.",
    },
    {
      name: "Dave Luber",
      role: "Director of Cybersecurity",
      organization: "NSA",
      relevance:
        "Senior mission owner for NSA cybersecurity priorities and a critical signal on whether RevEng aligns with national-level defensive cyber outcomes.",
      nextAction:
        "Pressure-test the national-security framing: malware-analysis acceleration, defensive guidance generation, and analyst productivity at scale.",
    },
    {
      name: "Chris Butera",
      role: "Acting Executive Assistant Director for Cybersecurity",
      organization: "CISA",
      relevance:
        "Senior CISA cyber decision-maker connected to the broader cybersecurity division and likely important for validating where RevEng fits inside active CISA mission demand.",
      nextAction:
        "Map whether the right lane is Cyber Technology Services, Threat Hunting, incident response support, or a broader cyber-operations workflow conversation.",
    },
    {
      name: "Nick Andersen",
      role: "Senior CISA Cyber Leader",
      organization: "CISA",
      relevance:
        "Frequently appears as the public operational voice for CISA cyber priorities and is a useful proxy for what malware-analysis capabilities CISA is actively emphasizing.",
      nextAction:
        "Use his public cyber guidance and statements to sharpen the CISA mission narrative around active threat response, malware analysis, and operational relevance.",
    },
    {
      name: "Boyden Rohner",
      role: "Deputy Assistant Director, Integrated Operations Division",
      organization: "CISA",
      relevance:
        "Important operational stakeholder for how CISA routes support during real incidents and for understanding where malware-analysis capability intersects with integrated cyber operations.",
      nextAction:
        "Clarify whether RevEng is best positioned as a direct operational support tool, a specialist capability inside a larger services contract, or a partner to an incumbent prime.",
    },
  ] satisfies Stakeholder[],
  acquisitionOpportunities: [
    {
      title: "CISA Cyber Technology Services",
      opportunityId: "70RCSJ26RFI000001",
      source: "SAM.gov",
      sourceLabel: "SAM.gov Notice",
      sourceUrl: "https://sam.gov/opp/64e207182370419db58caa0d31c0bf39/view",
      agency: "DHS / CISA",
      endUserShort: "CISA Threat Hunting",
      statusCategory: "Live",
      endUser: "CISA Cybersecurity Division, Threat Hunting Sub-division",
      opportunityType: "RFI / Sources Sought / Market Research",
      status: "Live / future-facing",
      dueDate: "June 19, 2026",
      estimatedValue: "$100M+ planned requirement",
      likelyVehicle: "GSA Schedule",
      naics: "541519",
      missionNeed:
        "Support CISA threat-hunting operations, incident response, cybersecurity engineering, security operations, IT architecture, and cyber tool sustainment.",
      whyRevEngFits:
        "RevEng can support the malware-analysis and reverse-engineering layer of CISA threat hunting by accelerating malware triage, binary analysis, technical reporting, and analyst workflow efficiency.",
      customerHypothesis:
        "The likely end users are CISA threat-hunting and incident-response analysts who need faster understanding of malicious code and adversary tooling.",
      recommendedIQTAction:
        "Treat this as the primary live target. Use the RFI to identify the mission owner, map the likely prime ecosystem, and position RevEng as a specialized malware-analysis capability that could partner with a prime or support a pilot.",
      dashboardBadge: "Primary live target",
      priority: "High",
      whyItMatters:
        "Live CISA threat-hunting requirement tied to cyber operations and tool sustainment.",
    },
    {
      title: "CISA Malware Analysis Support Services",
      opportunityId: "70RCSJ25Q00000166 / APFS F2025069864",
      source: "DHS Acquisition Planning Forecast System",
      sourceLabel: "DHS APFS Forecast",
      sourceUrl: "https://apfs-cloud.dhs.gov/record/69864/public-print/",
      agency: "DHS / CISA",
      endUserShort: "CISA Code & Media Analysis",
      statusCategory: "Historical",
      endUser:
        "CISA Cybersecurity Division, Threat Hunting subdivision, Code and Media Analysis Section",
      opportunityType: "Historical RFQ / Forecast",
      status: "No longer required / no longer planned",
      estimatedValue: "$10M-$20M",
      likelyVehicle: "GSA MAS SIN 54151HACS",
      missionNeed:
        "CISA sought malware analysis subject matter expertise to provide forensic analysis and reverse engineering of malware in direct support of active Incident Response Branch engagements and Threat Hunting priorities.",
      whyRevEngFits:
        "This is a direct functional match for RevEng’s AI-assisted binary analysis, malware triage, reverse engineering, and technical reporting capabilities.",
      customerHypothesis:
        "The real end user to engage is CISA CSD Threat Hunting / Code and Media Analysis, even though the specific requirement is no longer active.",
      recommendedIQTAction:
        "Use this as proof that CISA has purchased or planned to purchase exactly this type of mission support before. Determine whether the requirement was cancelled, absorbed into Cyber Technology Services, shifted to another vehicle, or awarded through a prime.",
      dashboardBadge: "Validated demand signal",
      priority: "High",
      whyItMatters:
        "Direct proof that CISA has expressed demand for malware reverse-engineering support.",
    },
    {
      title: "Tradewinds Solutions Marketplace",
      opportunityId: "DoD Tradewinds Marketplace",
      source: "CDAO / Tradewinds",
      sourceLabel: "Tradewinds Marketplace",
      sourceUrl: "https://www.tradewindai.com/tw-marketplace",
      agency: "DoD",
      endUserShort: "DoD AI / cyber buyers",
      statusCategory: "Pathway",
      endUser: "DoD AI, cyber, digital, and data buyers",
      opportunityType: "Awardable marketplace / rapid acquisition pathway",
      status: "Open pathway to monitor / submit",
      missionNeed:
        "DoD buyers need a faster way to discover, assess, and acquire AI, digital, data, and cyber-relevant technologies.",
      whyRevEngFits:
        "RevEng can be framed as an AI-assisted cyber analysis capability for malware analysis, vulnerability research, binary analysis, and analyst productivity.",
      customerHypothesis:
        "Likely buyers include cyber mission teams, software assurance teams, vulnerability research teams, and defensive cyber operators.",
      recommendedIQTAction:
        "Assess whether RevEng should submit a 5-minute pitch to Tradewinds, then use awardable status to make the company easier for DoD customers to purchase.",
      dashboardBadge: "DoD acquisition pathway",
      priority: "Medium-High",
      whyItMatters:
        "Pathway for DoD users to discover and acquire AI-enabled cyber capabilities.",
    },
    {
      title: "DoD SBIR/STTR Cyber Topics",
      opportunityId: "DoD SBIR/STTR Funding Opportunities",
      source: "Defense SBIR/STTR",
      sourceLabel: "DoD SBIR/STTR Opportunities",
      sourceUrl: "https://www.defensesbirsttr.mil/SBIR-STTR/Opportunities/",
      agency: "DoD",
      endUserShort: "Component cyber R&D offices",
      statusCategory: "Pathway",
      endUser: "Topic-dependent DoD cyber, software assurance, and R&D offices",
      opportunityType: "SBIR / STTR / Direct-to-Phase-II pathway",
      status: "Future topics to monitor",
      missionNeed:
        "DoD components use SBIR/STTR to evaluate and mature emerging technologies aligned to mission needs.",
      whyRevEngFits:
        "If a topic references malware analysis, vulnerability research, secure software, AI-enabled cyber defense, binary analysis, software assurance, or cyber operations, RevEng could be a strong fit.",
      customerHypothesis:
        "SBIR topic managers and technical points of contact can serve as early mission validators even before a procurement.",
      recommendedIQTAction:
        "Create saved searches for malware analysis, reverse engineering, binary analysis, software assurance, vulnerability research, and AI cyber defense.",
      dashboardBadge: "Funding pathway to monitor",
      priority: "Medium",
      whyItMatters:
        "Funding route when topics align to malware analysis, binary analysis, or AI cyber defense.",
    },
    {
      title: "GSA MAS SIN 54151HACS",
      opportunityId: "SIN 54151HACS",
      source: "GSA",
      sourceLabel: "GSA HACS Official Page",
      sourceUrl:
        "https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/multiple-award-schedule-it/highly-adaptive-cybersecurity-services",
      agency: "Government-wide",
      endUserShort: "CISA / DHS / DoD cyber buyers",
      statusCategory: "Pathway",
      endUser: "CISA, DHS components, DoD, and civilian cyber offices",
      opportunityType: "Contract vehicle / teaming pathway",
      status: "Existing vehicle",
      missionNeed:
        "Agencies use HACS categories for cyber hunt, incident response, penetration testing, risk assessment, and cyber support services.",
      whyRevEngFits:
        "RevEng may not sell directly at first; the faster path may be pairing with HACS primes that already support CISA or DoD cyber operations.",
      customerHypothesis:
        "The near-term buyer may be a prime contractor supporting CISA Threat Hunting or broader cyber operations, with the government mission owner as the user.",
      recommendedIQTAction:
        "Map 5-10 likely HACS primes supporting CISA threat hunting and identify where RevEng could be inserted as a specialized malware-analysis capability.",
      dashboardBadge: "Partnering / prime path",
      priority: "Medium-High",
      whyItMatters:
        "Practical teaming path through primes already selling cyber services to government.",
    },
  ] satisfies AcquisitionOpportunity[],
};
