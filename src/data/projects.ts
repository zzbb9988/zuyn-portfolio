export type ProjectSection = {
  title: string;
  content: string;
};

export type Project = {
  slug: string;
  title: string;
  hook: string;
  role: string;
  timeline: string;
  tags: string[];
  sections: {
    mission: ProjectSection;
    problem: ProjectSection;
    insight: ProjectSection;
    solution: ProjectSection;
    demo: {
      label: string;
      url: string;
      whatToNotice: string[];
    };
    learnings: {
      title: string;
      bullets: string[];
    };
  };
};

export const projects: Project[] = [
  {
    slug: "travel-sprints-planner",
    title: "Travel Sprints Planner",
    hook: "Designing travel around energy, not schedules.",
    role: "UX Design · Product Design",
    timeline: "Concept + system design",
    tags: [
      "UX Design",
      "Product Design",
      "Experience Design",
      "AI-Assisted Planning",
      "Gamification",
      "Social Interaction Systems",
      "Behavioral Design",
    ],
    sections: {
      mission: {
        title: "Mission",
        content:
          "Design a gamified, AI-assisted travel planning system that organizes places into walkable ‘Sprints’ — enabling flexible, low-pressure exploration based on users’ energy, mood, and interests.",
      },
      problem: {
        title: "Problem",
        content:
          "Traditional travel planning is rigid, time-based, and cognitively demanding. Users are expected to pre-plan detailed itineraries, commit to fixed schedules, and coordinate extensively with others. This creates planning fatigue, guilt when plans aren’t followed, reduced spontaneity, and social friction in groups. Most importantly, current systems ignore a key variable: human energy is dynamic, not fixed.",
      },
      insight: {
        title: "Insight",
        content:
          "Energy > Time. People don’t fail plans because of time — they fail because of fluctuating energy and mood. Over-planning creates guilt loops. Exploration works better in modular units. Social coordination is the real friction. Consumption ≠ execution: people often spend more time researching than actually experiencing.",
      },
      solution: {
        title: "Solution",
        content:
          "A planning paradigm shift: from fixed itineraries → adaptive ‘Sprints’. Users pick their energy level and the system generates 1–4 walkable sprints per day (3–6 nearby locations each) clustered by vibe + proximity. Saved places are auto-clustered into actionable sprints. Priority logic reduces pressure: 1 sprint is ‘must do’, others are optional. A gamified layer rewards real-world execution (XP, identity types, progress by behavior). Co-Sprints support group planning with overlapping sprint generation + cost splitting. A consumption-vs-execution tracker nudges users from planning → doing.",
      },
      demo: {
        label: "Try the demo ↗",
        url: "https://travel-sprints-planner.replit.app",
        whatToNotice: [
          "Energy-based sprint generation (1–4 sprints/day, walkable clusters)",
          "Anti-guilt priority logic (one ‘must do’ sprint, the rest optional)",
          "Co-sprints for social coordination (overlap finding + planning help)",
        ],
      },
      learnings: {
        title: "Impact / Learnings",
        bullets: [
          "Reduced cognitive load by replacing itinerary decisions with pre-structured sprint options.",
          "More flexibility and enjoyment by letting users act based on mood + energy.",
          "Removed guilt loops by redefining success as participation, not completion.",
          "Improved group travel by reducing coordination overhead and enabling shared activities.",
          "Encouraged real-world execution by shifting attention from planning → doing.",
        ],
      },
    },
  },
  {
    slug: "driftly",
    title: "Driftly",
    hook: "Navigate your energy, not your calendar.",
    role: "UX Design · Product Design",
    timeline: "Concept + system design",
    tags: [
      "UX Design",
      "Product Design",
      "AI-Assisted Planning",
      "Behavioral Design",
      "Mental Health Tech",
      "Self-Awareness Tools",
      "Voice-First Interaction",
    ],
    sections: {
      mission: {
        title: "Mission",
        content:
          "Design an AI-powered energy navigation system that helps non-linear thinkers understand their current mental state and receive aligned, low-resistance actions — based on how they actually feel, not how they ‘should’ feel.",
      },
      problem: {
        title: "Problem",
        content:
          "Traditional productivity tools assume consistent energy, fixed schedules, and the ability to force focus. For people who operate in cycles (hyperfocus → drift → burnout), this creates friction: users feel broken, guilt and self-blame grow, avoidance loops get mistaken for laziness, and there are few tools that match how non-linear brains naturally operate. Current systems punish the pattern instead of supporting it.",
      },
      insight: {
        title: "Insight",
        content:
          "Energy > Time — users can act when energy matches the task. Expression unlocks clarity (externalize first). Resistance is a signal (too big/unclear, not lazy). Hyperfocus → drift → shutdown is a cycle. Emotional resonance matters: users stay when the system ‘gets them’. Reflection builds control by helping users name patterns over time.",
      },
      solution: {
        title: "Solution",
        content:
          "A state-based system that adapts in real time. Users check-in via text or voice (brain dump). AI interprets their current state (Hyperfocus / Active / Drift / Shutdown), emotion, and pattern. Then it offers 1–3 low-resistance actions matched to capacity. Tasks include an energy_required score, and the system only surfaces tasks when energy can handle them. Flow Mode supports hyperfocus with a minimal full-screen session and one completion action. Pattern tracking surfaces simple insights (e.g., drift at night). Soft gamification validates progress (clarity points, calm meter, self-awareness levels) without pressure.",
      },
      demo: {
        label: "Try the demo ↗",
        url: "https://driftly.replit.app",
        whatToNotice: [
          "Check-in → interpretation loop (state, emotion, pattern)",
          "Low-resistance actions matched to capacity (instead of a to-do list)",
          "Energy-aware tasks and gentle pattern reflection over time",
        ],
      },
      learnings: {
        title: "Impact / Learnings",
        bullets: [
          "Time-to-value: under 30 seconds from open to first suggestion (no setup).",
          "Higher completion because actions match current capacity.",
          "Reduced guilt by reframing cycles as patterns, not personal failure.",
          "Increased self-awareness: users learn to name their own states and triggers.",
        ],
      },
    },
  },
  {
    slug: "uni-hussle",
    title: "Uni Hussle",
    hook: "A life RPG where energy management beats time management.",
    role: "Game Design · Systems Design",
    timeline: "Concept + game loop design",
    tags: [
      "Game Design",
      "Life Simulation",
      "Resource Management",
      "Behavioral Design",
      "Strategy RPG",
      "Identity-Shaping Mechanics",
    ],
    sections: {
      mission: {
        title: "Mission",
        content:
          "Design a choice-based university simulation where players manage energy, stress, and relationships — not hourly schedules. Each week, choose 2–3 actions and watch decisions compound into who you become by graduation.",
      },
      problem: {
        title: "Problem",
        content:
          "Most university sims treat time as the primary resource: fill hourly schedules, optimize the calendar, repeat. This creates decision fatigue from too many micro-choices, assumes ‘optimized’ equals fun, and misses what actually matters: energy fluctuation, burnout risk, and relationship timing. Players don’t fail because they mismanage time — they fail because they mismanage energy.",
      },
      insight: {
        title: "Insight",
        content:
          "Energy > Time. Burnout is the real game over. Trade-offs create meaning (you can’t max grades, social life, money, and health). Relationships unlock opportunities (internships, boosts, referrals). Mental state modifies outcomes (stressed lowers efficiency, inspired boosts gains). Small weekly choices compound into identity.",
      },
      solution: {
        title: "Solution",
        content:
          "A weekly turn-based RPG where you manage energy, not hours. Each week: view state → pick 2–3 actions → apply outcomes → trigger events → repeat. Core resources: Energy (0–100), Stress, Motivation. Action types include Study, Work, Socialise, Rest, Side Project with costs/rewards. A mental-state modifier is the USP (Stressed -20% efficiency, Inspired +30% skill gain, Burned Out blocks high-energy actions, Balanced normal). Relationship system with NPC levels unlocks referrals, study boosts, and emotional support. Opportunity windows (deadlines, birthdays, applications) force prioritization. Resume system tracks internships, skills, achievements, and network toward a graduation score (your build).",
      },
      demo: {
        label: "Try the demo ↗",
        url: "https://uni-hussle.replit.app",
        whatToNotice: [
          "Weekly turn system: meaningful choices without micro-scheduling",
          "Energy/stress/motivation driving what you can do (and what you can’t)",
          "How relationships + opportunity windows create real trade-offs",
        ],
      },
      learnings: {
        title: "Impact / Learnings",
        bullets: [
          "Meaningful decisions come from trade-offs, not more buttons.",
          "Weekly pacing reduces schedule fatigue while keeping strategic depth.",
          "Burnout modeling creates emotional resonance and replayable builds.",
          "Social systems feel valuable when they unlock opportunities, not just flavor.",
        ],
      },
    },
  },
  {
    slug: "a-way",
    title: "A-WAY",
    hook: "Turn moving stress into community connection.",
    role: "UX Design · Product Design",
    timeline: "Hyper-local system concept",
    tags: [
      "UX Design",
      "Product Design",
      "Community Platform",
      "Hyper-Local Systems",
      "Behavioral Design",
      "Circular Economy",
    ],
    sections: {
      mission: {
        title: "Mission",
        content:
          "Design a hyper-local app that helps people quickly get rid of items and get help during moves. Sell, donate, or request help — posts appear by distance and urgency. No complicated trust systems. Just proximity and chat.",
      },
      problem: {
        title: "Problem",
        content:
          "Moving is stressful, wasteful, and isolating. People have items to get rid of, need small favors, and don’t know their neighbors. Existing options are too slow (Marketplace), too anonymous, too complicated (formal donation), and don’t support small help requests. Current systems ignore a key variable: convenience > sustainability. Connection happens through low-stakes tasks, not forced friendship.",
      },
      insight: {
        title: "Insight",
        content:
          "Task-first, social-second: users come to get rid of stuff, they stay for connection. Trust comes from proximity (familiar strangers), not ratings. Low-stakes asks build real trust (help carrying a table). Convenience matters more than morality; sustainability is a byproduct. Urgency drives action — the app must feel faster than throwing away.",
      },
      solution: {
        title: "Solution",
        content:
          "A hyper-local exchange system optimized for speed + proximity. Quick Post: create a sell/donate/help request in under 30 seconds (photo, title, optional price, urgency). Local Feed: sorted by distance (same building → same uni → same suburb), urgency, relevance. Chat-first: a big Message button on every post. One-tap outcomes reduce ‘what now?’ friction (convert to donation, mark as free). A help/share layer turns moving day into an icebreaker (‘Need help carrying a table’, ‘Can share Uber’). Lightweight trust avoids complex ratings: verified uni email + ‘Lives nearby’ / ‘Same building’ cues.",
      },
      demo: {
        label: "Try the demo ↗",
        url: "https://a-way-zwan7181.replit.app/a-way-web/",
        whatToNotice: [
          "Local feed prioritizing proximity + urgency over endless browsing",
          "Chat-first interactions as the trust engine",
          "One-tap conversion (sell → free/donate) to remove friction",
        ],
      },
      learnings: {
        title: "Impact / Learnings",
        bullets: [
          "Faster than throwing away by making the default flow the quickest option.",
          "Psychological safety via proximity cues (same building/uni) without heavy review systems.",
          "Reduced decision fatigue through minimal fields + clear outcomes.",
          "Community emerges naturally when help requests are low-stakes and time-bound.",
          "Circular flow becomes effortless: sell → no buyer → donate → reuse.",
        ],
      },
    },
  },
  {
    slug: "work-easy",
    title: "WorkEasy",
    hook: "What can I realistically do right now?",
    role: "UX Design · Product Design",
    timeline: "MVP concept + behavior system",
    tags: [
      "UX Design",
      "Product Design",
      "Behavioral Design",
      "Energy-Based Planning",
      "Self-Awareness Tools",
      "Anti-Productivity Design",
    ],
    sections: {
      mission: {
        title: "Mission",
        content:
          "Design an energy-based productivity system that replaces rigid schedules with real-time check-ins. Users log how they feel (body, focus, capacity), capture messy tasks, and complete only what matches their current state — earning XP and weekly insights without guilt.",
      },
      problem: {
        title: "Problem",
        content:
          "Traditional productivity tools expect users to be consistent machines: fixed energy, schedule compliance, and forced focus. The result is guilt when tasks don’t get done, self-blame for ‘laziness’, and avoidance loops that worsen over time. Current systems ignore a key variable: humans are adaptive systems, not consistent machines.",
      },
      insight: {
        title: "Insight",
        content:
          "Energy > schedules: users can act when energy matches the task. Messy input beats structured lists (dump first, organize later). Resistance is a signal (too big/unclear, not lazy). Completion context matters (state at completion is as important as the task). Reflection builds control. No guilt loops: alignment creates action.",
      },
      solution: {
        title: "Solution",
        content:
          "A system that reframes productivity from ‘what should I do?’ → ‘what can I realistically do right now?’ Daily check-in captures Body (tired/cold/energized/parched), Focus (calm/overwhelmed/drifting/hyperfocus), and Capacity (deep/shallow/rest) as a timestamped state. Task capture is free text (no categories, no priority, no pressure). Completing a task logs timestamp + the last check-in state. MVP rewards momentum with +10 XP per completion. Weekly report (every 7 days) shows total completed, most common check-in state, completions by time-of-day, and simple text reflection — no heavy charts.",
      },
      demo: {
        label: "Try the demo ↗",
        url: "https://work-easy.replit.app",
        whatToNotice: [
          "Check-in as the entry point (body/focus/capacity)",
          "Messy task capture without forced structure",
          "Completion logs with context + simple XP momentum",
        ],
      },
      learnings: {
        title: "Impact / Learnings",
        bullets: [
          "Reduced cognitive load by removing categories, priorities, and forced structure.",
          "Removed guilt loops: unfinished tasks become ‘mismatched energy’, not failure.",
          "Encouraged honest rest by treating ‘rest’ as a valid capacity state.",
          "Built self-awareness via a lightweight weekly reflection (patterns over perfection).",
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
