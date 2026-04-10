export type ThinkingNode = {
  id: string;
  title: string;
  short: string;
  detail: string;
  pos: { x: number; y: number };
  links: string[];
};

export const thinkingNodes: ThinkingNode[] = [
  {
    id: "desire",
    title: "Desire-based thinking",
    short: "Design starts from what people feel like doing next.",
    detail:
      "I treat interaction like a desire-driven system: every element should answer ‘what do I feel like clicking?’ and reward curiosity with clarity.",
    pos: { x: 14, y: 22 },
    links: ["nonlinear", "experience"],
  },
  {
    id: "social",
    title: "Activity-based social systems",
    short: "People connect through shared intentions.",
    detail:
      "Instead of static profiles, I design social mechanics around doing things together — dining, exploring, making — and the structures that sustain those behaviors.",
    pos: { x: 54, y: 18 },
    links: ["structure"],
  },
  {
    id: "structure",
    title: "Structure + flexibility",
    short: "Scaffolding that bends without breaking.",
    detail:
      "Products between digital and real-world experience need repeatable structure and room for improvisation. I design ‘rails’ that keep momentum without feeling controlling.",
    pos: { x: 74, y: 40 },
    links: ["scalable"],
  },
  {
    id: "nonlinear",
    title: "Non-linear workflows",
    short: "Progress isn’t a straight line.",
    detail:
      "I build flows that let users explore, backtrack, and re-enter without losing context — like good games: forgiving, legible, and driven by choice.",
    pos: { x: 30, y: 48 },
    links: ["structure"],
  },
  {
    id: "experience",
    title: "Experience > interface",
    short: "Interfaces are portals to real life.",
    detail:
      "I focus on what the product changes in the world: behavior, relationships, and rituals. The UI is the instrument — the experience is the outcome.",
    pos: { x: 18, y: 70 },
    links: ["social"],
  },
  {
    id: "scalable",
    title: "Scalable interaction patterns",
    short: "Meaningful, repeatable, sustainable.",
    detail:
      "I’m interested in systems that stay meaningful as they grow — patterns, rules, and incentives that remain human at scale.",
    pos: { x: 70, y: 72 },
    links: [],
  },
];

export function getNodeById(id: string): ThinkingNode | undefined {
  return thinkingNodes.find((n) => n.id === id);
}
