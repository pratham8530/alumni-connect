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
    },
    {
      id: "s3",
      name: "Priya Singh",
      college: "Delhi Technological University",
      year: "Second Year",
      tags: ["Machine Learning", "Data Science", "Python"],
      bio: "Exploring AI and ML to solve real-world problems.",
      avatar: "/images/avatars/default.png",
      progress: 45
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
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/rohitverma"
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
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/meerajoshi"
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
      mentoring: false,
      linkedinUrl: "https://linkedin.com/in/amitsingh"
    },
    {
      id: "a4",
      name: "Sneha Reddy",
      company: "Google",
      role: "Frontend Developer",
      gradYear: 2018,
      tags: ["Frontend", "React", "JavaScript", "UI/UX"],
      verified: true,
      bio: "Building user-centric web applications at scale.",
      avatar: "/images/avatars/default.png",
      points: 150,
      experience: 5,
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/snehareddy"
    },
    {
      id: "a5",
      name: "Vikram Sharma",
      company: "Microsoft",
      role: "Cloud Architect",
      gradYear: 2016,
      tags: ["Cloud", "Azure", "DevOps", "System Design"],
      verified: true,
      bio: "Designing cloud solutions for enterprise clients.",
      avatar: "/images/avatars/default.png",
      points: 180,
      experience: 7,
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/vikramsharma"
    },
    {
      id: "a6",
      name: "Kavya Nair",
      company: "Amazon",
      role: "Data Scientist",
      gradYear: 2020,
      tags: ["Data Science", "Machine Learning", "AWS", "Python"],
      verified: true,
      bio: "Building ML models for personalization and recommendations.",
      avatar: "/images/avatars/default.png",
      points: 95,
      experience: 3,
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/kavyanair"
    },
    {
      id: "a7",
      name: "Arjun Gupta",
      company: "Flipkart",
      role: "Backend Engineer",
      gradYear: 2019,
      tags: ["Backend", "Java", "Microservices", "Kafka"],
      verified: true,
      bio: "Scaling e-commerce platforms for millions of users.",
      avatar: "/images/avatars/default.png",
      points: 110,
      experience: 4,
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/arjungupta"
    },
    {
      id: "a8",
      name: "Ritu Agarwal",
      company: "Zomato",
      role: "Mobile Developer",
      gradYear: 2021,
      tags: ["Mobile", "React Native", "iOS", "Android"],
      verified: false,
      bio: "Creating delightful mobile experiences for food delivery.",
      avatar: "/images/avatars/default.png",
      points: 60,
      experience: 2,
      mentoring: true,
      linkedinUrl: "https://linkedin.com/in/rituagarwal"
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
              text: "Start with a token bucket algorithm and then scale using distributed counters with Redis. Consider sliding window for more accuracy. For high traffic, use multiple buckets per user across different servers.",
              upvotes: 15,
              timestamp: "2025-09-15T10:00:00Z"
            },
            {
              id: "ans2",
              author: "Vikram Sharma",
              text: "I'd recommend looking into leaky bucket as well. At Microsoft, we use a combination approach - token bucket for burst traffic and sliding window for precise tracking.",
              upvotes: 8,
              timestamp: "2025-09-15T10:15:00Z"
            }
          ],
          upvotes: 12,
          timestamp: "2025-09-15T09:45:00Z",
          tags: ["System Design", "Rate Limiting"]
        },
        {
          id: "t2",
          author: "Priya Singh",
          question: "Best practices for database connection pooling in microservices?",
          answers: [
            {
              id: "ans3",
              author: "Arjun Gupta",
              text: "Use HikariCP for Java applications. Set max pool size based on your database's max connections divided by number of service instances. Monitor connection leaks carefully.",
              upvotes: 12,
              timestamp: "2025-09-15T11:00:00Z"
            }
          ],
          upvotes: 8,
          timestamp: "2025-09-15T10:30:00Z",
          tags: ["Database", "Microservices"]
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
          id: "t3",
          author: "Rahul Kumar",
          question: "Best practices for state management in large React apps?",
          answers: [
            {
              id: "ans4", 
              author: "Sneha Reddy",
              text: "For large apps, consider Zustand or Redux Toolkit. Keep state close to where it's used and avoid prop drilling. Use React Query for server state management.",
              upvotes: 18,
              timestamp: "2025-09-15T11:30:00Z"
            },
            {
              id: "ans5",
              author: "Ritu Agarwal",
              text: "I've had great success with Context API + useReducer for complex local state. For global state, Zustand is much simpler than Redux.",
              upvotes: 10,
              timestamp: "2025-09-15T11:45:00Z"
            }
          ],
          upvotes: 16,
          timestamp: "2025-09-15T11:15:00Z", 
          tags: ["React", "State Management"]
        },
        {
          id: "t4",
          author: "Student User",
          question: "How to optimize React app performance for mobile devices?",
          answers: [
            {
              id: "ans6",
              author: "Sneha Reddy",
              text: "Key optimizations: lazy loading components, image optimization, virtual scrolling for long lists, and code splitting. Use React DevTools Profiler to identify bottlenecks.",
              upvotes: 14,
              timestamp: "2025-09-15T12:00:00Z"
            }
          ],
          upvotes: 11,
          timestamp: "2025-09-15T11:50:00Z",
          tags: ["Performance", "Mobile"]
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
      threads: [
        {
          id: "t5",
          author: "Priya Singh",
          question: "Which ML algorithm is best for recommendation systems?",
          answers: [
            {
              id: "ans7",
              author: "Meera Joshi",
              text: "For collaborative filtering, try matrix factorization (SVD) or neural collaborative filtering. For content-based, use cosine similarity or deep learning embeddings.",
              upvotes: 20,
              timestamp: "2025-09-14T16:30:00Z"
            },
            {
              id: "ans8",
              author: "Kavya Nair",
              text: "At Amazon, we use a hybrid approach combining collaborative and content-based filtering. XGBoost works well for feature-rich scenarios.",
              upvotes: 25,
              timestamp: "2025-09-14T16:45:00Z"
            }
          ],
          upvotes: 18,
          timestamp: "2025-09-14T16:20:00Z",
          tags: ["Recommendations", "Collaborative Filtering"]
        }
      ]
    },
    {
      id: "f4",
      title: "System Design Discussions",
      tags: ["System Design", "Architecture", "Scalability"],
      participants: 156,
      lastActivity: "2025-09-16T14:30:00Z",
      description: "Design scalable systems and discuss architecture patterns",
      threads: [
        {
          id: "t6",
          author: "Aisha Patel",
          question: "How to design a URL shortener like bit.ly?",
          answers: [
            {
              id: "ans9",
              author: "Rohit Verma",
              text: "Use base62 encoding for short URLs, Redis for caching, and partition your database by URL hash. Consider CDN for global distribution.",
              upvotes: 22,
              timestamp: "2025-09-16T14:45:00Z"
            }
          ],
          upvotes: 15,
          timestamp: "2025-09-16T14:30:00Z",
          tags: ["URL Shortener", "Distributed Systems"]
        }
      ]
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
    },
    {
      mentorId: "a4",
      slots: [
        "2025-09-22 14:00",
        "2025-09-23 16:00",
        "2025-09-24 10:00",
        "2025-09-26 18:00"
      ]
    },
    {
      mentorId: "a5",
      slots: [
        "2025-09-23 11:00",
        "2025-09-24 15:00",
        "2025-09-27 09:00"
      ]
    },
    {
      mentorId: "a6",
      slots: [
        "2025-09-22 12:00",
        "2025-09-24 17:00",
        "2025-09-25 10:00",
        "2025-09-28 14:00"
      ]
    },
    {
      mentorId: "a7",
      slots: [
        "2025-09-23 13:00",
        "2025-09-25 16:00",
        "2025-09-26 11:00"
      ]
    },
    {
      mentorId: "a8",
      slots: [
        "2025-09-24 09:00",
        "2025-09-26 14:00",
        "2025-09-28 16:00"
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
      studentId: "s1",
      alumniId: "a7",
      score: 88,
      matchReason: ["Backend", "System Design"]
    },
    {
      studentId: "s2",
      alumniId: "a3",
      score: 85,
      matchReason: ["Product", "Strategy"]
    },
    {
      studentId: "s2",
      alumniId: "a4",
      score: 94,
      matchReason: ["Frontend", "React", "UI/UX"]
    },
    {
      studentId: "s2",
      alumniId: "a8",
      score: 78,
      matchReason: ["Frontend", "Mobile"]
    },
    {
      studentId: "s3",
      alumniId: "a2",
      score: 89,
      matchReason: ["Machine Learning", "Data Science", "Python"]
    },
    {
      studentId: "s3",
      alumniId: "a6",
      score: 91,
      matchReason: ["Data Science", "Machine Learning", "Python"]
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
      content: "Started as an intern, focused on learning system design and scalability. Key tip: Always ask questions and take ownership of your projects. The transition from college to industry was challenging, but having mentors helped tremendously.",
      tags: ["Career Growth", "Backend", "Fintech"],
      likes: 24,
      timestamp: "2025-09-10T09:00:00Z",
      company: "MasterPay"
    },
    {
      id: "e2",
      author: "Meera Joshi", 
      title: "Breaking into ML: From CS graduate to ML Engineer",
      content: "Transitioned from web development to ML by taking online courses and working on personal projects. Portfolio matters more than degrees in ML. Built 3 end-to-end projects before landing my first ML role.",
      tags: ["Career Change", "Machine Learning", "Self Learning"],
      likes: 18,
      timestamp: "2025-09-12T14:00:00Z",
      company: "DataNexus"
    },
    {
      id: "e3",
      author: "Sneha Reddy",
      title: "Frontend Development at Google: What I wish I knew earlier",
      content: "Joining Google as a frontend developer taught me the importance of performance optimization and accessibility. Learn to think at scale - every millisecond matters when you have billions of users.",
      tags: ["Frontend", "Performance", "Google"],
      likes: 32,
      timestamp: "2025-09-11T16:00:00Z",
      company: "Google"
    },
    {
      id: "e4",
      author: "Vikram Sharma",
      title: "Cloud Architecture Lessons from Microsoft",
      content: "Working with enterprise clients taught me that reliability trumps everything. Design for failure, automate everything, and always have a rollback plan. Cloud isn't just about moving to AWS/Azure.",
      tags: ["Cloud", "Architecture", "Enterprise"],
      likes: 28,
      timestamp: "2025-09-08T11:00:00Z",
      company: "Microsoft"
    },
    {
      id: "e5",
      author: "Kavya Nair",
      title: "Data Science at Amazon: From Models to Production",
      content: "The gap between model development and production deployment is huge. Focus on MLOps, learn Docker, understand data pipelines. 80% of the work is data engineering, 20% is actual modeling.",
      tags: ["Data Science", "MLOps", "Production"],
      likes: 26,
      timestamp: "2025-09-13T13:00:00Z",
      company: "Amazon"
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