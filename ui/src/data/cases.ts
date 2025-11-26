export interface CaseData {
  id: string
  name: string
  age: number
  location: string
  description: string
  image: string
  raised: number // in SOL
  goal: number // in SOL
  tags: CaseTag[]
  urgency?: "urgent" | "recovery" | null
}

export interface CaseTag {
  label: string
  variant: "urgent" | "verified" | "child" | "recovery" | "low-funded" | "adult"
}

export const urgentCases: CaseData[] = [
  {
    id: "1",
    name: "Amal",
    age: 6,
    location: "Romania",
    description: "Needs bone marrow transplant for a rare form of leukaemia. Her condition is worsening, and she needs urgent treatment to save her life.",
    image: "/cases.png",
    raised: 150,
    goal: 200,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Child", variant: "child" }
    ],
    urgency: "urgent"
  },
  {
    id: "2",
    name: "Hassan",
    age: 42,
    location: "Turkey",
    description: "After a workplace injury left him paralysed, Hassan needs neurological rehab. He has no family support and requires extensive rehabilitation.",
    image: "/cases.png",
    raised: 50,
    goal: 200,
    tags: [
      { label: "Recovery", variant: "recovery" },
      { label: "Low-Funded", variant: "low-funded" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "recovery"
  },
  {
    id: "3",
    name: "Yusuf",
    age: 55,
    location: "Kenya",
    description: "Yusuf suffered a sudden cardiac event and now requires an emergency heart bypass surgery. While his family is struggling to pay for his treatment.",
    image: "/cases.png",
    raised: 5,
    goal: 20,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Low-Funded", variant: "low-funded" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "urgent"
  }
]

