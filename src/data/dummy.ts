export const dummyData = {
  students: [
    {
      id: "s1",
      name: "Aisha Patel",
      college: "ABC Institute of Tech",
      year: "Final Year",
      tags: ["Backend", "Fintech", "Interview Prep"],
      bio: "Aspiring SDE focusing on scalable backend systems.",
      avatar: "/images/avatars/aisha.png",
      progress: 75
    },
    {
      id: "s2", 
      name: "Rahul Kumar",
      college: "XYZ Engineering College",
      year: "Third Year", 
      tags: ["Frontend", "React", "UI/UX"],
      bio: "Passionate about creating beautiful user experiences.",
      avatar: "/images/avatars/rahul.png",
      progress: 60
    }
  ],
  
  alumni: [
    {
      id: "a1",
      name: "Rohit Verma",
      company: "MasterPay (Mock)",
      role: "Senior Software Engineer",
      gradYear: 2017,
      tags: ["Backend", "System Design", "Fintech"],
      verified: true,
      bio: "Worked on payments infra & low-latency systems.",
      avatar: "/images/avatars/rohit.png",
      points: 120,
      experience: 6,
      mentoring: true
    },
    {
      id: "a2",
      name: "Meera Joshi", 
      company: "DataNexus",
      role: "ML Engineer",
      gradYear: 2019,
      tags: ["Machine Learning", "Data Science", "Python"],
      verified: false,
      bio: "Ex-analytics lead, hiring for data teams.",
      avatar: "/images/avatars/meera.png",
      points: 80,
      experience: 4,
      mentoring: true
    },
    {
      id: "a3",
      name: "Amit Singh",
      company: "TechCorp",
      role: "Product Manager", 
      gradYear: 2015,
      tags: ["Product", "Strategy", "Growth"],
      verified: true,
      bio: "Building products that scale to millions of users.",
      avatar: "/images/avatars/amit.png", 
      points: 200,
      experience: 8,
      mentoring: false
    }
  ],
  
  forums: [
    {
      id: "f1",
      title: "Backend Interview Doubts",
      tags: ["Backend", "Interview Prep"],
      participants: 78,
      lastActivity: "2025-09-15T09:30:00Z",
      description: "Get help with system design, coding challenges, and backend concepts",
      threads: [
        {
          id: "t1",
          author: "Aisha Patel",
          question: "How to design a rate limiter for a high-traffic API?",
          answers: [
            {
              id: "ans1",
              author: "Rohit Verma",
              text: "Start with a token bucket algorithm and then scale using distributed counters with Redis. Consider sliding window for more accuracy...",
              upvotes: 15,
              timestamp: "2025-09-15T10:00:00Z"
            }
          ],
          upvotes: 12,
          timestamp: "2025-09-15T09:45:00Z",
          tags: ["System Design", "Rate Limiting"]
        }
      ]
    },
    {
      id: "f2", 
      title: "Frontend Development Hub",
      tags: ["Frontend", "React", "JavaScript"],
      participants: 124,
      lastActivity: "2025-09-15T11:15:00Z",
      description: "React, Vue, Angular - all frontend technologies discussed here",
      threads: [
        {
          id: "t2",
          author: "Rahul Kumar",
          question: "Best practices for state management in large React apps?",
          answers: [
            {
              id: "ans2", 
              author: "Meera Joshi",
              text: "For large apps, consider Zustand or Redux Toolkit. Keep state close to where it's used and avoid prop drilling...",
              upvotes: 8,
              timestamp: "2025-09-15T11:30:00Z"
            }
          ],
          upvotes: 6,
          timestamp: "2025-09-15T11:15:00Z", 
          tags: ["React", "State Management"]
        }
      ]
    },
    {
      id: "f3",
      title: "Machine Learning & AI",
      tags: ["Machine Learning", "Data Science", "AI"],
      participants: 92,
      lastActivity: "2025-09-14T16:20:00Z",
      description: "Discuss ML algorithms, data preprocessing, and AI trends",
      threads: []
    }
  ],
  
  mentorshipSlots: [
    { 
      mentorId: "a1", 
      slots: [
        "2025-09-22 10:00", 
        "2025-09-22 15:00", 
        "2025-09-24 18:00",
        "2025-09-25 14:00",
        "2025-09-26 16:00",
        "2025-09-27 11:00"
      ] 
    },
    { 
      mentorId: "a2", 
      slots: [
        "2025-09-23 09:00", 
        "2025-09-25 20:00",
        "2025-09-26 10:00",
        "2025-09-28 15:00"
      ] 
    }
  ],
  
  companyTips: {
    "MasterPay": [
      { 
        id: "c1", 
        text: "Round 1: coding; Round 2: system design; emphasize payments scaling.",
        author: "Rohit Verma",
        timestamp: "2025-09-10T10:00:00Z"
      }
    ],
    "DataNexus": [
      {
        id: "c2",
        text: "Heavy focus on ML fundamentals and practical model deployment experience.",
        author: "Meera Joshi", 
        timestamp: "2025-09-12T14:30:00Z"
      }
    ]
  },
  
  matches: [
    {
      studentId: "s1",
      alumniId: "a1", 
      score: 92,
      matchReason: ["Backend", "Fintech", "Interview Prep"]
    },
    {
      studentId: "s1",
      alumniId: "a2",
      score: 68,
      matchReason: ["System Design"]
    },
    {
      studentId: "s2",
      alumniId: "a3",
      score: 85,
      matchReason: ["Product", "Strategy"]
    }
  ],
  
  badges: [
    { id: "b1", name: "Verified Mentor", tier: "Gold", description: "Verified alumni actively mentoring students" },
    { id: "b2", name: "Top Contributor", tier: "Silver", description: "Actively shares knowledge and experiences" },
    { id: "b3", name: "Rising Star", tier: "Bronze", description: "New member making great progress" },
    { id: "b4", name: "Community Helper", tier: "Silver", description: "Helps students in forums regularly" }
  ],
  
  chatbotFAQs: {
    admissions: [
      "Admission requirements vary by college. Generally, you need good grades, entrance exam scores, and sometimes interviews.",
      "Most engineering colleges require JEE Main/Advanced scores. Check specific college requirements on their websites.",
      "Application deadlines are usually between March-June. Keep track of important dates for your target colleges."
    ],
    placements: [
      "Placement preparation should start early. Focus on coding skills, system design, and communication.",
      "Top companies visit campus between July-December. Make sure your resume is ready by then.",
      "Practice coding problems daily on platforms like LeetCode, HackerRank, and GeeksforGeeks."
    ],
    mentorship: [
      "You can request 1:1 mentorship from verified alumni in your field of interest.",
      "Mentors can help with career guidance, interview preparation, and industry insights.",
      "Be respectful of mentors' time and come prepared with specific questions."
    ]
  },
  
  opportunities: [
    {
      id: "o1",
      title: "Backend Developer Intern",
      company: "MasterPay",
      location: "Remote",
      type: "Internship",
      tags: ["Backend", "Node.js", "MongoDB"],
      description: "Work on payment processing systems and API development",
      postedBy: "a1",
      matchScore: 90
    },
    {
      id: "o2", 
      title: "ML Engineering Intern",
      company: "DataNexus",
      location: "Bangalore",
      type: "Internship",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      description: "Build and deploy ML models for data analytics platform",
      postedBy: "a2",
      matchScore: 75
    }
  ],

  experiences: [
    {
      id: "e1",
      author: "Rohit Verma",
      title: "My journey from college to Senior SDE at MasterPay",
      content: "Started as an intern, focused on learning system design and scalability. Key tip: Always ask questions and take ownership of your projects.",
      tags: ["Career Growth", "Backend", "Fintech"],
      likes: 24,
      timestamp: "2025-09-10T09:00:00Z",
      company: "MasterPay"
    },
    {
      id: "e2",
      author: "Meera Joshi", 
      title: "Breaking into ML: From CS graduate to ML Engineer",
      content: "Transitioned from web development to ML by taking online courses and working on personal projects. Portfolio matters more than degrees in ML.",
      tags: ["Career Change", "Machine Learning", "Self Learning"],
      likes: 18,
      timestamp: "2025-09-12T14:00:00Z",
      company: "DataNexus"
    }
  ]
};

export type Student = typeof dummyData.students[0];
export type Alumni = typeof dummyData.alumni[0];
export type Forum = typeof dummyData.forums[0];
export type Thread = typeof dummyData.forums[0]['threads'][0];
export type Match = typeof dummyData.matches[0];
export type Badge = typeof dummyData.badges[0];
export type Opportunity = typeof dummyData.opportunities[0];
export type Experience = typeof dummyData.experiences[0];