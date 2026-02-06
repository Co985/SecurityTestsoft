export const q1_40 = [
  {
    question:
      "Which SDL phase is primarily responsible for creating the Product Risk Profile and mapping SDL activities to the development schedule?",
    choices: [
      "Architecture (A2)",
      "Security Assessment (A1)",
      "Design and Development (A3)",
      "Ship (A5)"
    ],
    answer: "Security Assessment (A1)",
    correctLetter: "B",
    explanationCorrect:
      "In A1, the team creates the Product Risk Profile and the SDL project outline, mapping SDL activities to the development schedule and establishing risk and compliance baselines.",
    explanationWrong: {
      A: "Architecture (A2) focuses on threat modeling, DFDs, and architectural threat analysis, not initial risk profiling and planning.",
      C: "A3 updates threat models and creates security test plans, but the initial product risk profile is already defined in A1.",
      D: "Ship (A5) is about final reviews, vulnerability scanning, and pen testing, not initial planning."
    },
    conceptNote: "SDL early-phase planning, risk profiling, and alignment of security with project management.",
    scenario: false
  },
  {
    question:
      "Which of the following is a key success factor in the Architecture (A2) phase of the SDL?",
    choices: [
      "Accuracy of planned SDL activities",
      "Effective threat modeling",
      "Final security and privacy review",
      "External vulnerability disclosure response"
    ],
    answer: "Effective threat modeling",
    correctLetter: "B",
    explanationCorrect:
      "The Architecture (A2) phase emphasizes threat modeling, DFDs, and architectural threat analysis; effective threat modeling is explicitly listed as a key success factor.",
    explanationWrong: {
      A: "Accuracy of planned SDL activities belongs to the Security Assessment (A1) phase.",
      C: "Final security and privacy reviews occur in the Ship (A5) phase.",
      D: "External vulnerability disclosure response is part of Post-Release Support, not A2."
    },
    conceptNote: "Threat modeling, architecture-level risk analysis, and mapping threats to business requirements (CIA).",
    scenario: false
  },
  {
    question:
      "During the Design and Development (A3) phase, which activity directly supports updating the understanding of threats as the design evolves?",
    choices: [
      "Security test case execution",
      "Threat model updating",
      "Final privacy review",
      "Open-source licensing review"
    ],
    answer: "Threat model updating",
    correctLetter: "B",
    explanationCorrect:
      "A3 explicitly includes Threat Model Updating, ensuring that new design decisions and components are reflected in the threat model.",
    explanationWrong: {
      A: "Security test case execution is a focus of A4, not A3.",
      C: "Final privacy review is part of the Ship (A5) phase.",
      D: "Open-source licensing review is also an A5 activity."
    },
    conceptNote: "Iterative threat modeling and keeping models aligned with evolving architecture and design.",
    scenario: false
  },
  {
    question:
      "Which metric would be most appropriate for the Design and Development (A4) phase of the SDL?",
    choices: [
      "Time in hours to respond to externally disclosed vulnerabilities",
      "Number of security defects found through static analysis tools",
      "Number of customer-reported security issues per month",
      "Percent of stakeholders participating in SDL activities"
    ],
    answer: "Number of security defects found through static analysis tools",
    correctLetter: "B",
    explanationCorrect:
      "A4 metrics include lines of code tested, security defects, high-risk defects, and defect density from static analysis and other testing.",
    explanationWrong: {
      A: "Response time to external disclosures is a Post-Release Support metric.",
      C: "Customer-reported security issues are also post-release metrics.",
      D: "Stakeholder participation is an A1 Security Assessment metric."
    },
    conceptNote: "Verification-focused metrics, static analysis, and measuring testing effectiveness.",
    scenario: false
  },
  {
    question:
      "Which role is primarily responsible for guiding the company through the SDL, including threat modeling, pen testing, and code review?",
    choices: [
      "Software Security Champion",
      "Software Security Evangelist",
      "Software Security Architect",
      "Product Security Incident Response Team (PSIRT)"
    ],
    answer: "Software Security Architect",
    correctLetter: "C",
    explanationCorrect:
      "The Software Security Architect guides the company through SDL, participates in threat modeling, pen testing, and code review, and provides architectural and technical security guidance.",
    explanationWrong: {
      A: "The Champion is embedded with teams, enforcing SDL locally and acting as a liaison, not the overall SDL guide.",
      B: "The Evangelist focuses on promoting the SDL program, training, and policy enforcement at a high level.",
      D: "PSIRT handles vulnerability response and incidents, not day-to-day SDL guidance."
    },
    conceptNote: "Security roles, responsibilities, and how they interact with SDL phases.",
    scenario: false
  },

  /* … Q6–Q40 continue exactly as provided … */
];
