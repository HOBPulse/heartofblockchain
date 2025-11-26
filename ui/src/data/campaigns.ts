export interface CampaignTag {
  label: string
  variant: "urgent" | "verified" | "child" | "recovery" | "low-funded" | "adult" | "ongoing" | "mother"
}

export interface UseOfFund {
  category: string
  amount: number
}

export interface RecentDonation {
  donor: string
  amount: number
  isAnonymous?: boolean
}

export interface MedicalDocument {
  name: string
  type: string
  checked: boolean
}

export interface Campaign {
  id: string
  name: string
  age: number
  location: string
  description: string
  shortDescription: string
  image: string
  video?: string
  raised: number // in SOL
  goal: number // in SOL
  tags: CampaignTag[]
  urgency?: "urgent" | "sos" | "recovery" | "ongoing"
  campaignId: string // e.g., "#NLF-00231"
  daysRemaining: number
  donorCount: number
  campaignStory: string[]
  useOfFunds: UseOfFund[]
  medicalDocuments: MedicalDocument[]
  recentDonations: RecentDonation[]
}

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Monthly Medications for Idris",
    age: 56,
    location: "Idris",
    description: "Idris lives with Beta Thalassemia Major, a lifelong condition requiring monthly transfusions and chelation therapy. Support his next 3 months of treatment.",
    shortDescription: "Idris has been diagnosed with a chronic condition requiring ongoing monthly medication and treatment. He needs financial support to maintain his health and quality of life.",
    image: "/cases.png",
    raised: 5,
    goal: 20,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Child", variant: "child" }
    ],
    urgency: "urgent",
    campaignId: "#NLF-00230",
    daysRemaining: 7,
    donorCount: 23,
    campaignStory: [
      "Idris has been living with Beta Thalassemia Major since childhood, a genetic blood disorder that requires lifelong treatment. Every month, he needs blood transfusions to maintain healthy hemoglobin levels and chelation therapy to remove excess iron from his body.",
      "Without these treatments, Idris faces severe complications including organ damage, heart failure, and reduced life expectancy. The cost of monthly treatments has become overwhelming for his family, especially with the rising costs of medical care.",
      "Your donation will help cover Idris's next 3 months of critical treatment, ensuring he can continue to live a healthy and productive life. Every contribution makes a real difference in his ongoing care."
    ],
    useOfFunds: [
      { category: "Monthly Blood Transfusions (3 months)", amount: 12000 },
      { category: "Chelation Therapy Medication", amount: 6000 },
      { category: "Medical Consultations", amount: 2000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "Blood Test Results", type: "PDF", checked: true },
      { name: "Treatment Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x18D...A2B", amount: 2.5, isAnonymous: false },
      { donor: "wallet.solSupporter", amount: 1.2, isAnonymous: false },
      { donor: "Anonymous", amount: 0.8, isAnonymous: true },
      { donor: "0x92F...31E", amount: 0.5, isAnonymous: false }
    ]
  },
  {
    id: "2",
    name: "Hassan",
    age: 42,
    location: "Turkey",
    description: "After a workplace injury left him paralyzed, Hassan needs neurological rehab. He has no family support and limited access to local care.",
    shortDescription: "Hassan is a father of three who urgently needs lifesaving heart surgery. His family needs financial support and relies heavily on local care.",
    image: "/cases.png",
    raised: 50,
    goal: 200,
    tags: [
      { label: "Recovery", variant: "recovery" },
      { label: "Low-Funded", variant: "low-funded" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "recovery",
    campaignId: "#NLF-00229",
    daysRemaining: 12,
    donorCount: 45,
    campaignStory: [
      "Hassan was working as a construction worker when a tragic accident left him with a spinal cord injury, resulting in partial paralysis. The injury has completely changed his life and his ability to provide for his three children.",
      "He requires intensive neurological rehabilitation to regain mobility and independence. Without proper rehabilitation, Hassan faces permanent disability and the inability to work or care for his family.",
      "Hassan has no extended family support and limited access to specialized rehabilitation facilities in his area. Your donation will help cover the costs of specialized neurological rehabilitation, physical therapy, and necessary medical equipment."
    ],
    useOfFunds: [
      { category: "Neurological Rehabilitation Program", amount: 120000 },
      { category: "Physical Therapy Sessions", amount: 50000 },
      { category: "Medical Equipment & Mobility Aids", amount: 30000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "MRI Scan Images", type: "Images", checked: true },
      { name: "Rehabilitation Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x45A...B3C", amount: 10, isAnonymous: false },
      { donor: "crypto.helper", amount: 5.5, isAnonymous: false },
      { donor: "Anonymous", amount: 8.2, isAnonymous: true },
      { donor: "0x78E...F4D", amount: 3.3, isAnonymous: false }
    ]
  },
  {
    id: "3",
    name: "Mirela",
    age: 36,
    location: "Ghana",
    description: "Mirela has end-stage liver disease and is scheduled for a transplant in India. The surgery is funded but post-op care and rehab remain unfunded. Your support can close that gap.",
    shortDescription: "Mirela needs urgent surgery to remove a tumor. The surgery is funded but post-op care and therapy is unfunded. Your support is critical for her recovery.",
    image: "/cases.png",
    raised: 90,
    goal: 100,
    tags: [
      { label: "Ongoing", variant: "ongoing" },
      { label: "Verified", variant: "verified" },
      { label: "Mother", variant: "mother" }
    ],
    urgency: "ongoing",
    campaignId: "#NLF-00228",
    daysRemaining: 3,
    donorCount: 67,
    campaignStory: [
      "Mirela is a loving mother of two who has been diagnosed with end-stage liver disease. After years of battling this condition, she has been approved for a life-saving liver transplant at a specialized hospital in India.",
      "While the surgery itself has been funded through previous donations, the critical post-operative care, medication, and rehabilitation remain unfunded. Without these essential components, Mirela's recovery and long-term health are at risk.",
      "Your support will help cover post-operative medications, follow-up consultations, rehabilitation therapy, and necessary medical supplies. Every donation brings Mirela closer to a full recovery and the ability to return to her children."
    ],
    useOfFunds: [
      { category: "Post-Op Medication (6 months)", amount: 40000 },
      { category: "Follow-up Consultations", amount: 30000 },
      { category: "Rehabilitation & Recovery Support", amount: 30000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "Liver Function Tests", type: "PDF", checked: true },
      { name: "Transplant Approval Documents", type: "PDF", checked: true }
    ],
    recentDonations: [
      { donor: "0x12A...B4C", amount: 15, isAnonymous: false },
      { donor: "hope.wallet", amount: 12.5, isAnonymous: false },
      { donor: "Anonymous", amount: 20, isAnonymous: true },
      { donor: "0x56D...E7F", amount: 8.3, isAnonymous: false }
    ]
  },
  {
    id: "4",
    name: "Help Amal Get Life-Saving Liver Transplant",
    age: 5,
    location: "Beirut, Lebanon",
    description: "Amal is a 5-year-old girl suffering from acute liver failure. She urgently needs a transplant in Istanbul. Your donation helps cover her transport and medical care.",
    shortDescription: "Amal is a 5-year-old girl suffering from acute liver failure. She urgently needs a transplant in Istanbul. Your donation helps cover her transport and medical care.",
    image: "/cases.png",
    video: "/cases.png", // Using image as placeholder for video
    raised: 18300,
    goal: 25000,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Child", variant: "child" }
    ],
    urgency: "urgent",
    campaignId: "#NLF-00231",
    daysRemaining: 4,
    donorCount: 67,
    campaignStory: [
      "Amal is a bright and cheerful 5-year-old girl from Beirut, Lebanon, who has been diagnosed with acute liver failure. Her condition has deteriorated rapidly, and she urgently needs a liver transplant to survive.",
      "The specialized medical care Amal needs is only available at a leading transplant center in Istanbul, Turkey. Her family has exhausted all their resources and cannot afford the costs of emergency air transport and the life-saving surgery.",
      "We are collaborating with Global MedTransport Alliance to ensure Amal receives the critical care she needs. Your donation will directly support her emergency air transport, the transplant surgery, and essential post-operative care. Time is critical - every day counts for Amal's survival."
    ],
    useOfFunds: [
      { category: "Emergency Air Transport (ambulance flight)", amount: 5500 },
      { category: "Hospital Surgery & 7-Day Stay", amount: 16000 },
      { category: "Post-Op Medication/Recovery Support", amount: 4000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: false },
      { name: "Live Scan Images", type: "Images", checked: false },
      { name: "Post-Op Medication/Recovery Support", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x18D...A2B", amount: 5, isAnonymous: false },
      { donor: "wallet.solSupporter", amount: 0.77, isAnonymous: false },
      { donor: "Anonymous", amount: 3.7, isAnonymous: true },
      { donor: "0x92F...31E", amount: 0.45, isAnonymous: false }
    ]
  },
  {
    id: "5",
    name: "Urgent Spinal Surgery",
    age: 29,
    location: "Turkey",
    description: "Following a young teacher with a life-threatening condition affecting the spine. Has had a partial fracture and requires immediate surgery to heal and prevent permanent paralysis.",
    shortDescription: "Following a young teacher with a life-threatening condition affecting the spine. Has had a partial fracture and requires immediate surgery to heal and prevent permanent paralysis.",
    image: "/cases.png",
    raised: 117,
    goal: 180,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Low-Funded", variant: "low-funded" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "urgent",
    campaignId: "#NLF-00227",
    daysRemaining: 9,
    donorCount: 34,
    campaignStory: [
      "A dedicated young teacher has suffered a severe spinal injury that threatens to cause permanent paralysis if not treated immediately. The partial fracture in her spine requires urgent surgical intervention.",
      "Without this surgery, she faces the devastating prospect of permanent paralysis, which would end her teaching career and dramatically impact her quality of life. The surgery must be performed within the next few days to maximize the chances of full recovery.",
      "Your support will help cover the costs of the emergency spinal surgery, post-operative care, and rehabilitation. Every contribution helps ensure this young educator can return to the classroom and continue making a difference in children's lives."
    ],
    useOfFunds: [
      { category: "Emergency Spinal Surgery", amount: 120000 },
      { category: "Hospital Stay & Post-Op Care", amount: 40000 },
      { category: "Rehabilitation Program", amount: 20000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "CT Scan Images", type: "Images", checked: true },
      { name: "Surgical Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x33B...C4D", amount: 8, isAnonymous: false },
      { donor: "help.wallet", amount: 6.5, isAnonymous: false },
      { donor: "Anonymous", amount: 4.2, isAnonymous: true }
    ]
  },
  {
    id: "6",
    name: "Equip Local Medics",
    age: 0,
    location: "Hatay, Turkey",
    description: "Following devastating 9.1 magnitude earthquake, local hospitals are overwhelmed. Your donation will help equip medical response teams in the affected area.",
    shortDescription: "Following devastating 9.1 magnitude earthquake, local hospitals are overwhelmed. Your donation will help equip medical response teams in the affected area.",
    image: "/cases.png",
    raised: 425,
    goal: 500,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "sos",
    campaignId: "#NLF-00226",
    daysRemaining: 15,
    donorCount: 128,
    campaignStory: [
      "Following a devastating 9.1 magnitude earthquake, the medical infrastructure in Hatay, Turkey has been severely damaged. Local hospitals are overwhelmed with patients, and medical response teams are struggling to provide adequate care.",
      "Emergency medical equipment, supplies, and resources are desperately needed to treat the injured and save lives. The situation is critical, with thousands of people requiring immediate medical attention.",
      "Your donation will directly support the procurement and distribution of essential medical equipment, supplies, and resources to medical response teams working around the clock to save lives in this disaster-stricken region."
    ],
    useOfFunds: [
      { category: "Medical Equipment & Supplies", amount: 300000 },
      { category: "Emergency Response Vehicles", amount: 150000 },
      { category: "Medical Personnel Support", amount: 50000 }
    ],
    medicalDocuments: [
      { name: "Emergency Response Plan", type: "PDF", checked: true },
      { name: "Equipment Requirements", type: "PDF", checked: true },
      { name: "Distribution Log", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x99E...F1A", amount: 25, isAnonymous: false },
      { donor: "relief.wallet", amount: 18.5, isAnonymous: false },
      { donor: "Anonymous", amount: 30, isAnonymous: true },
      { donor: "0x44B...C5D", amount: 12.3, isAnonymous: false }
    ]
  },
  {
    id: "7",
    name: "Emilia",
    age: 28,
    location: "Ukraine",
    description: "Emilia was diagnosed with Stage 3 ovarian cancer and needs urgent treatment. She requires chemotherapy and targeted radiation available in Germany.",
    shortDescription: "Emilia was diagnosed with Stage 3 ovarian cancer and needs urgent treatment. She requires chemotherapy and targeted radiation available in Germany.",
    image: "/cases.png",
    raised: 95,
    goal: 150,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "urgent",
    campaignId: "#NLF-00225",
    daysRemaining: 6,
    donorCount: 52,
    campaignStory: [
      "Emilia, a 28-year-old woman from Ukraine, has been diagnosed with Stage 3 ovarian cancer. The diagnosis came as a devastating shock, but she is determined to fight this disease with everything she has.",
      "The specialized treatment Emilia needs - including advanced chemotherapy and targeted radiation therapy - is only available at specialized cancer centers in Germany. The cost of treatment, travel, and accommodation is beyond her family's means.",
      "Your donation will help cover the costs of Emilia's life-saving treatment in Germany, including chemotherapy sessions, radiation therapy, medical consultations, and necessary travel expenses. Together, we can help Emilia win her fight against cancer."
    ],
    useOfFunds: [
      { category: "Chemotherapy Treatment (6 cycles)", amount: 80000 },
      { category: "Radiation Therapy", amount: 50000 },
      { category: "Travel & Accommodation", amount: 20000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "Biopsy Results", type: "PDF", checked: true },
      { name: "Treatment Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x77C...D8E", amount: 7.5, isAnonymous: false },
      { donor: "cure.wallet", amount: 5.2, isAnonymous: false },
      { donor: "Anonymous", amount: 10, isAnonymous: true }
    ]
  },
  {
    id: "8",
    name: "Yusuf",
    age: 55,
    location: "Kenya",
    description: "Yusuf suffered a sudden cardiac event and now requires immediate bypass surgery. Currently, the surgery is scheduled at a regional facility.",
    shortDescription: "Yusuf suffered a sudden cardiac event and now requires immediate bypass surgery. Currently, the surgery is scheduled at a regional facility.",
    image: "/cases.png",
    raised: 58,
    goal: 150,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Low-Funded", variant: "low-funded" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "sos",
    campaignId: "#NLF-00224",
    daysRemaining: 8,
    donorCount: 41,
    campaignStory: [
      "Yusuf, a 55-year-old man from Kenya, suffered a sudden and severe cardiac event that has left him in critical condition. He requires immediate coronary artery bypass surgery to restore blood flow to his heart.",
      "The surgery has been scheduled at a regional medical facility, but the costs are overwhelming for Yusuf and his family. Without this surgery, Yusuf faces the risk of further cardiac complications and potential heart failure.",
      "Your donation will help cover the costs of the bypass surgery, hospital stay, and post-operative care. Every contribution brings Yusuf closer to recovery and the ability to return to his family and community."
    ],
    useOfFunds: [
      { category: "Coronary Artery Bypass Surgery", amount: 100000 },
      { category: "Hospital Stay (7 days)", amount: 35000 },
      { category: "Post-Op Medication & Care", amount: 15000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "Cardiac Test Results", type: "PDF", checked: true },
      { name: "Surgical Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x22A...B3C", amount: 4.5, isAnonymous: false },
      { donor: "heart.wallet", amount: 3.2, isAnonymous: false },
      { donor: "Anonymous", amount: 2.8, isAnonymous: true }
    ]
  },
  {
    id: "9",
    name: "Adama",
    age: 36,
    location: "Nigeria",
    description: "Born with a congenital heart defect, Adama has lived with symptoms her whole life. She now needs a life-saving heart surgery at a hospital in India.",
    shortDescription: "Born with a congenital heart defect, Adama has lived with symptoms her whole life. She now needs a life-saving heart surgery at a hospital in India.",
    image: "/cases.png",
    raised: 33,
    goal: 80,
    tags: [
      { label: "▲ Urgent", variant: "urgent" },
      { label: "Verified", variant: "verified" },
      { label: "Adult", variant: "adult" }
    ],
    urgency: "urgent",
    campaignId: "#NLF-00223",
    daysRemaining: 11,
    donorCount: 28,
    campaignStory: [
      "Adama was born with a congenital heart defect that has affected her throughout her life. Despite the challenges, she has remained resilient and hopeful. However, her condition has now reached a critical point where surgery is essential for her survival.",
      "The specialized heart surgery Adama needs is only available at a leading cardiac center in India. The procedure is complex and requires highly skilled surgeons and advanced medical facilities.",
      "Your donation will help cover the costs of Adama's life-saving heart surgery, travel to India, hospital stay, and post-operative care. Together, we can give Adama the chance at a healthy and fulfilling life."
    ],
    useOfFunds: [
      { category: "Heart Surgery Procedure", amount: 50000 },
      { category: "Travel to India", amount: 15000 },
      { category: "Hospital Stay & Post-Op Care", amount: 15000 }
    ],
    medicalDocuments: [
      { name: "Doctor's Referral Letter", type: "PDF", checked: true },
      { name: "Echocardiogram Results", type: "PDF", checked: true },
      { name: "Surgical Plan", type: "PDF", checked: false }
    ],
    recentDonations: [
      { donor: "0x55D...E6F", amount: 3.5, isAnonymous: false },
      { donor: "hope.wallet", amount: 2.1, isAnonymous: false },
      { donor: "Anonymous", amount: 1.8, isAnonymous: true }
    ]
  }
]

export function getCampaignById(id: string): Campaign | undefined {
  return campaigns.find(campaign => campaign.id === id)
}

