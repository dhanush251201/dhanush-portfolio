// Work history, newest first. Each entry becomes one item on the timeline.

export interface Job {
  company: string;
  companyUrl?: string;
  role: string;
  start: string; // e.g. 'Jun 2025'
  end: string; // e.g. 'Aug 2025' or 'Present'
  location: string;
  summary?: string;
  highlights: string[]; // 2–4 bullets; lead with impact, include numbers when you have them
  tech: string[];
  placeholder?: boolean; // shows a "placeholder" marker in dev so nothing ships unnoticed
}

export const experience: Job[] = [
  {
    company: 'University of Pennsylvania',
    companyUrl: 'https://www.upenn.edu/',
    role: 'Research Assistant',
    start: 'Aug 2026',
    end: 'Present',
    location: 'Philadelphia, PA',
    highlights: [
      'Extract and analyze a MongoDB corpus of European think-tank articles (2022–2026) for a linguistics professor, working under a strict no-data-deletion constraint on shared research data.',
    ],
    tech: ['MongoDB', 'Data extraction', 'Corpus analysis'],
  },
  {
    company: 'Penn Engineering Online',
    companyUrl: 'https://online.seas.upenn.edu/',
    role: 'Course Development Assistant, AI Capstone',
    start: 'Oct 2025',
    end: 'Present',
    location: 'Philadelphia, PA',
    highlights: [
      "Develop graduate-level curriculum (lecture slides, notes and hands-on Jupyter notebooks) for a new project-based AI Capstone course, led by Prof. Chris Callison-Burch, in Penn's MSE in AI Online program. Topics span LLM application patterns, RAG, agentic orchestration, fine-tuning (LoRA/PEFT), evaluation harness design and containerized deployment.",
      'Built reference implementations and scaffolded starter code, including a full-stack AI application delivered as staged milestones for students to extend and complete.',
    ],
    tech: ['LLMs', 'RAG', 'Agents', 'LoRA / PEFT', 'Jupyter', 'Docker'],
  },
  {
    company: 'IBM India Pvt Ltd',
    companyUrl: 'https://www.ibm.com/',
    role: 'Software Developer',
    start: 'Jul 2024',
    end: 'Jul 2025',
    location: 'India',
    highlights: [
      'Shipped an internal VS Code extension (LSP support, document parsing, ref-def navigation) with Generative AI-based explainability for legacy languages, adopted by 50 developers within 3 months.',
      'Migrated builds from a single static machine to a containerized CI/CD pipeline (Docker), eliminating a single point of failure and enabling multiple parallel builds across the team.',
    ],
    tech: ['TypeScript', 'VS Code API', 'Language Server Protocol', 'Generative AI', 'Docker', 'CI/CD'],
  },
  {
    company: 'IBM India Pvt Ltd',
    companyUrl: 'https://www.ibm.com/',
    role: 'Software Developer Intern',
    start: 'Jan 2024',
    end: 'Jun 2024',
    location: 'India',
    highlights: [
      'Deployed CICS TX on Cloud using Podman, Kubernetes, OpenShift and AWS EKS, reducing maintenance overhead and saving 2 person-days of effort per quarter.',
    ],
    tech: ['Podman', 'Kubernetes', 'OpenShift', 'AWS EKS', 'CICS TX'],
  },
];
