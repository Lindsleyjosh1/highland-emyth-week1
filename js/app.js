// Highland Longevity Clinic - E-Myth Week 1 Interactive App

// ==================== DATA ====================
// Role-specific task counts
const ROLE_TASK_COUNTS = {
    lindsley: { day1: 10, day2: 11, day3: 4, day4: 2, day5: 4 },
    jacqui: { day1: 10, day2: 8, day3: 8, day4: 6, day5: 7 },
    divya: { day1: 9, day2: 6, day3: 8, day4: 5, day5: 5 },
    aubrey: { day1: 9, day2: 6, day3: 8, day4: 5, day5: 6 },
    dorothy: { day1: 9, day2: 6, day3: 8, day4: 5, day5: 6 }
};

// Role-specific content for each day
const ROLE_CONTENT = {
    lindsley: {
        name: 'Dr. Lindsley',
        day1: {
            subtitle: 'Preparation',
            infoBox: '<strong>Time Commitment:</strong> 3-4 hours<br><strong>Goal:</strong> Prepare yourself to lead the Tuesday kickoff',
            sections: [
                { title: 'Personal Review', tasks: [
                    { text: 'Read the E-Myth Principles Quick Reference', doc: 'principles' },
                    { text: 'Review the Vision, Mission & Values document', doc: 'vmv' },
                    'Complete your E/M/T self-assessment'
                ]},
                { title: 'Presentation Customization', tasks: [
                    { text: 'Open E-Myth-Kickoff-Presentation.pptx', resource: 'resources/presentation/E-Myth-Kickoff-Presentation.pptx' },
                    'Update Slide 6 with your E/M/T percentages',
                    'Add Highland-specific examples to key slides',
                    'Practice the "Tale of Two Practices" story'
                ]},
                { title: 'Handoff & Materials', tasks: [
                    'Brief Jacqui on running rest of week (1:1s, workshop)',
                    { text: 'Print all materials from Printables folder', resource: 'resources/pdfs/TEAM-HANDOUT.pdf' },
                    'Organize materials into packets for team'
                ]}
            ]
        },
        day2: {
            subtitle: 'Kickoff Meeting',
            infoBox: '<strong>The Big Day!</strong> Present E-Myth to the team, then hand off to Jacqui.',
            sections: [
                { title: 'Pre-Meeting Setup', tasks: [
                    'Arrive 15 minutes early to set up',
                    'Connect laptop to projector/screen',
                    'Test presentation slides'
                ]},
                { title: 'Deliver the Presentation', tasks: [
                    'Welcome team & set the tone (5 min)',
                    'E-Myth Overview presentation (20 min)',
                    'Three Personalities exercise (10 min)',
                    'Highland Vision discussion (15 min)',
                    'Position Contracts introduction (10 min)',
                    'Q&A session (10 min)'
                ]},
                { title: 'Wrap Up & Hand Off', tasks: [
                    'Hand off to Jacqui for rest of week',
                    'Send follow-up email to team'
                ]}
            ],
            quiz: 'personalities'
        },
        day3: {
            subtitle: 'Remote Check-in',
            infoBox: '<strong>Jacqui leads today.</strong> She conducts the 1:1 conversations.',
            sections: [
                { title: 'Remote Support', tasks: [
                    'Check in with Jacqui via text/call',
                    'Review any questions she has',
                    'Available if team needs you',
                    'Review Jacqui\'s end-of-day update'
                ]}
            ],
            quiz: 'values'
        },
        day4: {
            subtitle: 'Remote Check-in',
            infoBox: '<strong>Jacqui facilitates the Org Chart Workshop today.</strong>',
            sections: [
                { title: 'Remote Support', tasks: [
                    'Available if Jacqui has questions',
                    'Review workshop photos/notes when shared'
                ]}
            ]
        },
        day5: {
            subtitle: 'Week 1 Review',
            infoBox: '<strong>Review Jacqui\'s summary and prep for Week 2.</strong>',
            sections: [
                { title: 'Review & Plan', tasks: [
                    'Review Jacqui\'s Week 1 summary',
                    'Review position contract drafts',
                    'Provide feedback to Jacqui',
                    'Plan Week 2 priorities'
                ]}
            ],
            quiz: 'final'
        }
    },
    jacqui: {
        name: 'Jacqui',
        day1: {
            subtitle: 'Preparation & Leadership Prep',
            infoBox: '<strong>You\'ll be leading the week after Tuesday!</strong> Prepare for your expanded role.',
            sections: [
                { title: 'E-Myth Review', tasks: [
                    { text: 'Read E-Myth Principles Quick Reference', doc: 'principles' },
                    { text: 'Review Vision, Mission & Values document', doc: 'vmv' },
                    'Complete your E/M/T self-assessment'
                ]},
                { title: 'Meeting Preparation', tasks: [
                    'Prepare meeting room (chairs, whiteboard, supplies)',
                    'Print handout materials',
                    'Coordinate team schedules for Tuesday meeting'
                ]},
                { title: 'Leadership Preparation', tasks: [
                    'Review 1:1 Conversation Guide (you\'ll conduct these!)',
                    'Review Org Chart Workshop materials',
                    'Review your draft Position Contract',
                    'Send reminder to team about tomorrow\'s meeting'
                ]}
            ]
        },
        day2: {
            subtitle: 'Kickoff Meeting',
            infoBox: '<strong>Support Dr. L today, then take the lead for the rest of the week!</strong>',
            sections: [
                { title: 'Meeting Support', tasks: [
                    'Arrive 10 min early to help Dr. L with setup',
                    'Distribute handout packets',
                    'Take detailed notes during presentation',
                    'Track action items mentioned'
                ]},
                { title: 'After the Meeting', tasks: [
                    'Confirm 1:1 schedule with each team member',
                    'Review your leadership plan with Dr. L before he leaves',
                    'Note any team questions/concerns to address',
                    'Send recap email to team'
                ]}
            ],
            quiz: 'personalities'
        },
        day3: {
            subtitle: 'Conduct 1:1 Conversations',
            infoBox: '<strong>You\'re leading today!</strong> Conduct the 1:1 conversations with each team member.',
            sections: [
                { title: '1:1 with Divya (25 min)', tasks: [
                    'Review her Position Contract draft beforehand',
                    { text: 'Conduct 1:1 using the guide questions', resource: 'resources/templates/1-1-Meeting-Notes-Template.docx' }
                ]},
                { title: '1:1 with Aubrey (25 min)', tasks: [
                    'Review her Position Contract draft beforehand',
                    { text: 'Conduct 1:1 using the guide questions', resource: 'resources/templates/1-1-Meeting-Notes-Template.docx' }
                ]},
                { title: '1:1 with Dorothy (25 min)', tasks: [
                    'Review her Position Contract draft beforehand',
                    { text: 'Conduct 1:1 using the guide questions', resource: 'resources/templates/1-1-Meeting-Notes-Template.docx' }
                ]},
                { title: 'End of Day', tasks: [
                    'Take notes on each conversation',
                    'Send update to Dr. Lindsley'
                ]}
            ],
            quiz: 'values'
        },
        day4: {
            subtitle: 'Facilitate Org Chart Workshop',
            infoBox: '<strong>You\'re facilitating!</strong> Lead the team through the org chart exercise.',
            sections: [
                { title: 'Preparation', tasks: [
                    { text: 'Review Org Chart Workshop guide', resource: 'resources/templates/Org-Chart-Template.html' },
                    'Prepare whiteboard/materials'
                ]},
                { title: 'Run the Workshop (60 min)', tasks: [
                    'Facilitate team discussion',
                    'Draw org chart together as team',
                    'Discuss handoffs and gaps'
                ]},
                { title: 'Documentation', tasks: [
                    'Take photos of whiteboard',
                    'Send update to Dr. Lindsley'
                ]}
            ]
        },
        day5: {
            subtitle: 'Wrap-Up & Reporting',
            infoBox: '<strong>Compile the week and report to Dr. Lindsley.</strong>',
            sections: [
                { title: 'Collect & Compile', tasks: [
                    'Collect Position Contract drafts from team',
                    'Compile notes from 1:1s',
                    'Write Week 1 summary for Dr. Lindsley'
                ]},
                { title: 'Close the Week', tasks: [
                    'List action items for Week 2',
                    'Schedule Week 2 check-in with Dr. L',
                    'Share wins from the week with team',
                    'Send end-of-week email to Dr. L'
                ]}
            ],
            quiz: 'final'
        }
    },
    divya: {
        name: 'Divya',
        day1: {
            subtitle: 'Clinical Review',
            infoBox: '<strong>Focus on clinical systems.</strong> How can E-Myth improve patient care?',
            sections: [
                { title: 'E-Myth Review', tasks: [
                    { text: 'Read E-Myth Principles Quick Reference', doc: 'principles' },
                    { text: 'Review Vision, Mission & Values document', doc: 'vmv' },
                    'Complete your E/M/T self-assessment'
                ]},
                { title: 'Clinical Systems Reflection', tasks: [
                    'Review your draft Position Contract',
                    'List current clinical protocols in use',
                    'Identify protocols needing documentation',
                    'Note any clinical bottlenecks',
                    'Think about: What clinical systems work well?',
                    'Consider: What needs standardization?'
                ]}
            ]
        },
        day2: {
            subtitle: 'Kickoff Meeting',
            infoBox: '<strong>Attend the kickoff with Dr. Lindsley.</strong> Think about clinical applications.',
            sections: [
                { title: 'During the Meeting', tasks: [
                    'Attend kickoff meeting',
                    'Think: How does E-Myth apply to clinical care?',
                    'Note questions about clinical systems',
                    'Consider patient care "products"',
                    'Think about clinical handoffs',
                    'Participate in discussion'
                ]}
            ],
            quiz: 'personalities'
        },
        day3: {
            subtitle: '1:1 with Jacqui',
            infoBox: '<strong>Prepare for your 1:1 conversation with Jacqui.</strong>',
            sections: [
                { title: 'Preparation', tasks: [
                    { text: 'Review your draft Position Contract', resource: 'resources/templates/Position-Contract-Blank.html' },
                    'List your clinical responsibilities',
                    'Note any unclear expectations',
                    'Prepare questions for your 1:1',
                    'Think about clinical supervision needs',
                    'Consider: What decisions need escalation?',
                    'Identify training opportunities'
                ]},
                { title: 'Meeting', tasks: [
                    'Attend your 1:1 with Jacqui'
                ]}
            ],
            quiz: 'values'
        },
        day4: {
            subtitle: 'Org Chart Workshop',
            infoBox: '<strong>Participate in the org chart workshop with the team.</strong>',
            sections: [
                { title: 'Workshop Participation', tasks: [
                    { text: 'Participate in workshop', resource: 'resources/templates/Org-Chart-Template.html' },
                    'Identify your position on org chart',
                    'Discuss clinical handoffs',
                    'Note provider coverage needs',
                    'Contribute to discussion'
                ]}
            ]
        },
        day5: {
            subtitle: 'Clinical Systems Reflection',
            infoBox: '<strong>Reflect on the week and finalize your Position Contract.</strong>',
            sections: [
                { title: 'Wrap Up', tasks: [
                    'Review week\'s learnings',
                    'Finalize Position Contract draft',
                    'Submit draft to Jacqui',
                    'List 3 clinical SOPs to create/update',
                    'Note Week 2 clinical priorities'
                ]}
            ],
            quiz: 'final'
        }
    },
    aubrey: {
        name: 'Aubrey',
        day1: {
            subtitle: 'Procedure Review',
            infoBox: '<strong>Focus on your aesthetics procedures.</strong> Document your workflows.',
            sections: [
                { title: 'E-Myth Review', tasks: [
                    { text: 'Read E-Myth Principles Quick Reference', doc: 'principles' },
                    { text: 'Review Vision, Mission & Values document', doc: 'vmv' },
                    'Complete your E/M/T self-assessment'
                ]},
                { title: 'Aesthetics Workflow Review', tasks: [
                    'Review your draft Position Contract',
                    'Document your current Hydrafacial workflow',
                    'Document your Chemical Peel process',
                    'List supplies/inventory you manage',
                    'Identify workflow bottlenecks',
                    'Note: What makes a great treatment?'
                ]}
            ]
        },
        day2: {
            subtitle: 'Kickoff Meeting',
            infoBox: '<strong>Attend the kickoff with Dr. Lindsley.</strong> Think about your procedures as "products."',
            sections: [
                { title: 'During the Meeting', tasks: [
                    'Attend kickoff meeting',
                    'Think: How does E-Myth apply to aesthetics?',
                    'Consider your treatments as "products"',
                    'Note questions about your role',
                    'Think about patient experience flow',
                    'Participate in discussion'
                ]}
            ],
            quiz: 'personalities'
        },
        day3: {
            subtitle: '1:1 with Jacqui',
            infoBox: '<strong>Prepare for your 1:1 conversation with Jacqui.</strong>',
            sections: [
                { title: 'Preparation', tasks: [
                    { text: 'Review your draft Position Contract', resource: 'resources/templates/Position-Contract-Blank.html' },
                    'List your key procedures',
                    'Note any unclear expectations',
                    'Prepare questions for your 1:1',
                    'Think about training needs',
                    'Consider: What equipment/supplies do you need?',
                    'Identify your ideal schedule'
                ]},
                { title: 'Meeting', tasks: [
                    'Attend your 1:1 with Jacqui'
                ]}
            ],
            quiz: 'values'
        },
        day4: {
            subtitle: 'Org Chart Workshop',
            infoBox: '<strong>Participate in the org chart workshop with the team.</strong>',
            sections: [
                { title: 'Workshop Participation', tasks: [
                    { text: 'Participate in workshop', resource: 'resources/templates/Org-Chart-Template.html' },
                    'Identify your position on org chart',
                    'Discuss handoffs (scheduling, supplies, follow-up)',
                    'Note collaboration points',
                    'Contribute to discussion'
                ]}
            ]
        },
        day5: {
            subtitle: 'Aesthetics Reflection',
            infoBox: '<strong>Reflect on the week and draft your SOPs.</strong>',
            sections: [
                { title: 'Wrap Up', tasks: [
                    'Review week\'s learnings',
                    'Finalize Position Contract draft',
                    'Submit draft to Jacqui',
                    'Draft Hydrafacial SOP outline',
                    'Draft Chemical Peel SOP outline',
                    'Note Week 2 aesthetics priorities'
                ]}
            ],
            quiz: 'final'
        }
    },
    dorothy: {
        name: 'Dorothy',
        day1: {
            subtitle: 'Front Desk Review',
            infoBox: '<strong>Focus on patient experience.</strong> You\'re the face of Highland!',
            sections: [
                { title: 'E-Myth Review', tasks: [
                    { text: 'Read E-Myth Principles Quick Reference', doc: 'principles' },
                    { text: 'Review Vision, Mission & Values document', doc: 'vmv' },
                    'Complete your E/M/T self-assessment'
                ]},
                { title: 'Front Desk Process Review', tasks: [
                    'Review your draft Position Contract',
                    'Document current phone answering process',
                    'Document patient check-in steps',
                    'Document checkout/scheduling process',
                    'Note common patient questions',
                    'Think: What makes a great first impression?'
                ]}
            ]
        },
        day2: {
            subtitle: 'Kickoff Meeting',
            infoBox: '<strong>Arrange phone coverage, then attend the kickoff.</strong>',
            sections: [
                { title: 'Before & During Meeting', tasks: [
                    'Arrange phone coverage during meeting',
                    'Attend kickoff meeting',
                    'Think: How does E-Myth apply to front desk?',
                    'Consider patient experience as "product"',
                    'Note questions about your role',
                    'Participate in discussion'
                ]}
            ],
            quiz: 'personalities'
        },
        day3: {
            subtitle: '1:1 with Jacqui',
            infoBox: '<strong>Prepare for your 1:1 conversation with Jacqui.</strong>',
            sections: [
                { title: 'Preparation', tasks: [
                    { text: 'Review your draft Position Contract', resource: 'resources/templates/Position-Contract-Blank.html' },
                    'List your daily responsibilities',
                    'Note any unclear expectations',
                    'Prepare questions for your 1:1',
                    'Think about phone script needs',
                    'Consider: What makes check-in smooth?',
                    'Identify common problems'
                ]},
                { title: 'Meeting', tasks: [
                    'Attend your 1:1 with Jacqui'
                ]}
            ],
            quiz: 'values'
        },
        day4: {
            subtitle: 'Org Chart Workshop',
            infoBox: '<strong>Participate in the org chart workshop with the team.</strong>',
            sections: [
                { title: 'Workshop Participation', tasks: [
                    { text: 'Participate in workshop', resource: 'resources/templates/Org-Chart-Template.html' },
                    'Identify front desk on org chart',
                    'Discuss patient flow handoffs',
                    'Clarify who handles what inquiries',
                    'Contribute to discussion'
                ]}
            ]
        },
        day5: {
            subtitle: 'Patient Experience Reflection',
            infoBox: '<strong>Reflect on the week and draft your SOPs.</strong>',
            sections: [
                { title: 'Wrap Up', tasks: [
                    'Review week\'s learnings',
                    'Finalize Position Contract draft',
                    'Submit draft to Jacqui',
                    'Draft Phone Answering SOP outline',
                    'Draft Check-In SOP outline',
                    'Note Week 2 front desk priorities'
                ]}
            ],
            quiz: 'final'
        }
    }
};

// Legacy TASK_COUNTS for backward compatibility - will be set dynamically
let TASK_COUNTS = {
    day1: 10,
    day2: 8,
    day3: 8,
    day4: 5,
    day5: 5
};

const BADGES = {
    first_step: { name: 'First Step', icon: '👣' },
    day1_champion: { name: 'Day 1 Champion', icon: '🏆' },
    day2_champion: { name: 'Day 2 Champion', icon: '🎯' },
    day3_champion: { name: 'Day 3 Champion', icon: '🤝' },
    day4_champion: { name: 'Day 4 Champion', icon: '📊' },
    day5_champion: { name: 'Day 5 Champion', icon: '🎉' },
    quiz_master: { name: 'Quiz Master', icon: '🧠' },
    document_scholar: { name: 'Document Scholar', icon: '📖' },
    triple_crown: { name: 'Triple Crown', icon: '👑' },
    explorer: { name: 'E-Myth Explorer', icon: '📚' },
    week1_warrior: { name: 'Week 1 Warrior', icon: '⭐' }
};

// Document paths
const DOCUMENTS = {
    principles: {
        title: 'E-Myth Principles Quick Reference',
        path: 'docs/E-Myth-Principles-Quick-Reference.html',
        quiz: 'principles'
    },
    vmv: {
        title: 'Vision, Mission & Values',
        path: 'docs/Vision-Mission-Values.html',
        quiz: 'vmv'
    },
    contracts: {
        title: 'Position Contracts Summary',
        path: 'docs/Position-Contracts-Summary.html',
        quiz: 'contracts'
    },
    guide: {
        title: 'Week 1 Complete Guide',
        path: 'docs/Week-1-Complete-Guide.html',
        quiz: 'guide'
    }
};

const QUIZZES = {
    // E-Myth Principles Quiz
    principles: {
        title: 'E-Myth Principles Quiz',
        subtitle: 'Test your understanding of how Highland builds for growth',
        questions: [
            {
                question: 'Why is Highland implementing E-Myth principles?',
                options: ['To reduce staff', 'To build systems that enable growth and opportunity', 'To change management style'],
                correct: 1,
                explanation: 'E-Myth is about building documented systems that create the foundation for growth - and as Highland grows, everyone\'s role grows with it.'
            },
            {
                question: 'What are the three types of thinking Highland needs?',
                options: ['Past, Present, Future', 'Vision, Systems, Execution', 'Planning, Doing, Reviewing'],
                correct: 1,
                explanation: 'Highland needs Vision (where we\'re going), Systems (how we get there), and Execution (getting it done daily).'
            },
            {
                question: 'What\'s the difference between "firefighting" and "building systems"?',
                options: ['Firefighting is faster', 'Systems solve problems permanently instead of repeatedly', 'There is no difference'],
                correct: 1,
                explanation: 'Building systems means documenting solutions so problems are solved once, not handled repeatedly. This saves time for everyone.'
            },
            {
                question: 'What does "How do we make this work consistently?" represent?',
                options: ['Vision thinking', 'Systems thinking', 'Execution thinking'],
                correct: 1,
                explanation: 'Systems thinking focuses on creating processes, checklists, and documentation that ensure consistent quality.'
            },
            {
                question: 'What is "The Highland Standard"?',
                options: ['A dress code', 'Building documented systems as if we could replicate the clinic', 'A patient satisfaction score'],
                correct: 1,
                explanation: 'The Highland Standard means every process is documented step-by-step so anyone can follow it and patients get consistent, excellent care.'
            },
            {
                question: 'What happens to your role as Highland grows?',
                options: ['Roles stay the same', 'Roles grow with the clinic', 'Roles are eliminated'],
                correct: 1,
                explanation: 'As Highland grows, everyone\'s role grows with it. The systems you help build become the foundation for future opportunities.'
            }
        ]
    },
    // Vision, Mission & Values Quiz
    vmv: {
        title: 'Vision, Mission & Values Quiz',
        subtitle: 'How well do you know Highland\'s foundation?',
        questions: [
            {
                question: 'Highland\'s vision is to be the premier longevity clinic in which area?',
                options: ['All of Texas', 'DFW Metroplex', 'The entire Southwest'],
                correct: 1,
                explanation: 'Our vision is to be the premier longevity medicine clinic in the DFW metroplex.'
            },
            {
                question: 'Which core value says "Every decision starts with: What\'s best for the patient?"',
                options: ['Excellence in Everything', 'Patient First', 'Radical Ownership'],
                correct: 1,
                explanation: 'Patient First is our guiding principle for all decisions.'
            },
            {
                question: 'What does "Radical Ownership" mean at Highland?',
                options: ['Owning shares in the company', 'No excuses, no blame, just solutions', 'Working extra hours'],
                correct: 1,
                explanation: 'Radical Ownership means taking full responsibility for outcomes without making excuses.'
            },
            {
                question: 'Which value emphasizes "Today\'s best is tomorrow\'s baseline"?',
                options: ['Transparent Communication', 'Continuous Improvement', 'Excellence in Everything'],
                correct: 1,
                explanation: 'Continuous Improvement means we never stop getting better.'
            },
            {
                question: 'How many core values does Highland have?',
                options: ['3', '5', '7'],
                correct: 1,
                explanation: 'Highland has 5 core values: Patient First, Excellence, Radical Ownership, Continuous Improvement, and Transparent Communication.'
            },
            {
                question: 'What does Year 2 of Highland\'s vision focus on?',
                options: ['Maintaining the status quo', 'Growing patient base and expanding team capabilities', 'Reducing services'],
                correct: 1,
                explanation: 'Year 2 focuses on expansion - growing patient base means more opportunities for everyone\'s role to grow.'
            }
        ]
    },
    // Position Contracts Quiz
    contracts: {
        title: 'Position Contracts Quiz',
        subtitle: 'Understanding roles and accountability',
        questions: [
            {
                question: 'What is a Position Contract?',
                options: ['A job description', 'An employment agreement', 'An accountability agreement defining results and metrics'],
                correct: 2,
                explanation: 'Position Contracts are accountability agreements that define expected results and how success is measured.'
            },
            {
                question: 'According to E-Myth, should you chart positions or people?',
                options: ['Chart people, not positions', 'Chart positions, not people', 'Chart both equally'],
                correct: 1,
                explanation: 'Chart positions, not people. Positions exist even if unfilled. One person can hold multiple positions.'
            },
            {
                question: 'What is the primary accountability for the Practice Manager position?',
                options: ['Clinical safety', 'Operational efficiency', 'Sustainable growth'],
                correct: 1,
                explanation: 'The Practice Manager\'s primary accountability is operational efficiency, measured by patient retention rate.'
            },
            {
                question: 'What is "The Rule of Focus"?',
                options: ['Only do one thing per day', 'Focus on your defined role to do your best work', 'Focus on personal goals'],
                correct: 1,
                explanation: 'The Rule of Focus means clear role definitions help you do your best work without confusion - and as you master your role, new opportunities emerge.'
            },
            {
                question: 'What does a position contract give you?',
                options: ['More work to do', 'Clarity on what success looks like in your role', 'A list of rules to follow'],
                correct: 1,
                explanation: 'A position contract gives you clarity - you know exactly what\'s expected, what decisions you can make, and how your work contributes to Highland\'s growth.'
            }
        ]
    },
    // Week 1 Complete Guide Quiz
    guide: {
        title: 'Week 1 Complete Guide Quiz',
        subtitle: 'Test your knowledge of what Week 1 is about',
        questions: [
            {
                question: 'What is the main focus of Week 1?',
                options: ['Executing all systems', 'Education and alignment', 'Hiring new staff'],
                correct: 1,
                explanation: 'Week 1 is about education and alignment - ensuring everyone understands what we\'re building together and why it matters.'
            },
            {
                question: 'What happens during your 1:1 conversation?',
                options: ['Performance review', 'Your questions answered and your input heard', 'Assigning extra work'],
                correct: 1,
                explanation: 'The 1:1 is your chance to ask questions, share concerns, and give input on how things work in your role.'
            },
            {
                question: 'What should you NOT do during the Org Chart Workshop?',
                options: ['Document reality', 'Dream about the future', 'Assign blame'],
                correct: 2,
                explanation: 'Ground Rule #1: No judgment - we\'re documenting reality together, not assigning blame.'
            },
            {
                question: 'Why do we create two org charts in the workshop?',
                options: ['To confuse people', 'To see where we are now and where we\'re going', 'Because one isn\'t enough'],
                correct: 1,
                explanation: 'We create current-state (how things are) and future-state (where we\'re going) charts to understand the growth path.'
            },
            {
                question: 'What will you get from the kickoff meeting?',
                options: ['Extra homework', 'Understanding of what we\'re building and why', 'A test'],
                correct: 1,
                explanation: 'The kickoff meeting gives everyone a shared understanding of what we\'re building together and how it benefits the team.'
            },
            {
                question: 'What is a position contract?',
                options: ['A legal employment document', 'A clear definition of what success looks like in your role', 'A list of extra duties'],
                correct: 1,
                explanation: 'A position contract gives you clarity - you\'ll know exactly what success looks like and what\'s expected.'
            }
        ]
    },
    // Legacy quizzes for day content
    personalities: {
        title: 'Three Types of Thinking Quiz',
        subtitle: 'Test your understanding of how Highland approaches work',
        questions: [
            {
                question: 'Which type of thinking focuses on "What if?" and future opportunities?',
                options: ['Vision', 'Systems', 'Execution'],
                correct: 0,
                explanation: 'Vision thinking is future-focused, always looking at where Highland is going and asking "What if?"'
            },
            {
                question: 'What three types of thinking does Highland need?',
                options: ['Planning, Doing, Checking', 'Vision, Systems, Execution', 'Fast, Slow, Medium'],
                correct: 1,
                explanation: 'Highland needs Vision (direction), Systems (consistency), and Execution (daily delivery) - all working together.'
            },
            {
                question: 'What does Systems thinking focus on?',
                options: ['Vision and change', 'Order, processes, and predictability', 'Getting today\'s work done'],
                correct: 1,
                explanation: 'Systems thinking creates order and documented processes, asking "How do we make this consistent?"'
            },
            {
                question: 'Why does Highland build systems?',
                options: ['To reduce creativity', 'So everyone can do their best work with clear expectations', 'To create more paperwork'],
                correct: 1,
                explanation: 'Systems give everyone clarity, reduce confusion, and create the foundation for growth. As Highland grows, opportunities grow for everyone.'
            }
        ]
    },
    values: {
        title: 'Core Values Quiz',
        subtitle: 'How well do you know Highland\'s values?',
        questions: [
            {
                question: 'Which core value says "Every decision starts with: What\'s best for the patient?"',
                options: ['Excellence in Everything', 'Patient First', 'Radical Ownership'],
                correct: 1,
                explanation: 'Patient First is our guiding principle for all decisions.'
            },
            {
                question: 'What does "Radical Ownership" mean at Highland?',
                options: ['Owning shares in the company', 'No excuses, no blame, just solutions', 'Working extra hours'],
                correct: 1,
                explanation: 'Radical Ownership means taking full responsibility for outcomes without making excuses.'
            },
            {
                question: 'Which value emphasizes "Today\'s best is tomorrow\'s baseline"?',
                options: ['Transparent Communication', 'Continuous Improvement', 'Excellence in Everything'],
                correct: 1,
                explanation: 'Continuous Improvement means we never stop getting better.'
            },
            {
                question: 'How many core values does Highland have?',
                options: ['3', '5', '7'],
                correct: 1,
                explanation: 'Highland has 5 core values: Patient First, Excellence, Radical Ownership, Continuous Improvement, and Transparent Communication.'
            }
        ]
    },
    final: {
        title: 'Final E-Myth Quiz',
        subtitle: 'Test your complete Week 1 knowledge!',
        questions: [
            {
                question: 'What is "The E-Myth"?',
                options: ['A myth about entrepreneurs', 'The belief that technical skill = business skill', 'A story about a successful business'],
                correct: 1,
                explanation: 'The E-Myth is the false belief that being good at technical work means you\'ll be good at running a business.'
            },
            {
                question: 'What is a Position Contract?',
                options: ['A job description', 'An employment agreement', 'An accountability agreement defining results and metrics'],
                correct: 2,
                explanation: 'Position Contracts are accountability agreements that define expected results and how success is measured.'
            },
            {
                question: 'What does "Working ON the business" mean?',
                options: ['Doing the daily work', 'Building systems and designing processes', 'Working overtime'],
                correct: 1,
                explanation: 'Working ON the business means building systems that make the business run better, not just doing daily tasks.'
            },
            {
                question: 'What is the "Franchise Prototype" concept?',
                options: ['Opening a franchise', 'Building your business as if you\'d replicate it 100 times', 'Creating a business plan'],
                correct: 1,
                explanation: 'The Franchise Prototype means building documented, repeatable systems anyone could follow.'
            },
            {
                question: 'Highland\'s vision includes being the premier longevity clinic in which area?',
                options: ['All of Texas', 'DFW Metroplex', 'The entire Southwest'],
                correct: 1,
                explanation: 'Our vision is to be the premier longevity medicine clinic in the DFW metroplex.'
            }
        ]
    }
};

const REFERENCE_CONTENT = {
    principles: `
        <h2>E-Myth Principles Quick Reference</h2>

        <h3>1. The Entrepreneurial Myth</h3>
        <p><strong>The Fatal Assumption:</strong> If you understand the technical work of a business, you understand a business that does that technical work.</p>
        <blockquote>Being a great physician doesn't automatically make you a great business owner. These are two entirely different skill sets.</blockquote>

        <h3>2. The Three Personalities</h3>
        <table>
            <tr><th>Personality</th><th>Focus</th><th>Question</th></tr>
            <tr><td><strong>Entrepreneur</strong></td><td>Vision, opportunity</td><td>"What if?"</td></tr>
            <tr><td><strong>Manager</strong></td><td>Order, systems</td><td>"How?"</td></tr>
            <tr><td><strong>Technician</strong></td><td>The work itself</td><td>"What's next?"</td></tr>
        </table>
        <p><strong>Typical:</strong> 70% Technician, 20% Manager, 10% Entrepreneur</p>
        <p><strong>Ideal:</strong> 33% each</p>

        <h3>3. Working ON vs. Working IN</h3>
        <table>
            <tr><th>Working IN</th><th>Working ON</th></tr>
            <tr><td>Seeing patients</td><td>Designing patient experience</td></tr>
            <tr><td>Answering questions</td><td>Creating systems that answer questions</td></tr>
            <tr><td>Being indispensable</td><td>Making yourself optional</td></tr>
        </table>

        <h3>4. The Franchise Prototype</h3>
        <p>Build your business as if you're going to open 100 locations:</p>
        <ul>
            <li>Every process documented step-by-step</li>
            <li>Anyone can be trained to do any role</li>
            <li>Quality is consistent, not person-dependent</li>
            <li>The system runs the business</li>
        </ul>

        <h3>5. Key Quote</h3>
        <blockquote>"If your business depends on you, you don't own a business - you have a job."<br>— Michael Gerber</blockquote>
    `,
    vmv: `
        <h2>Vision, Mission & Values</h2>

        <h3>Vision Statement</h3>
        <blockquote>"To be the premier longevity medicine clinic in the DFW metroplex - delivering exceptional in-person care while extending our reach through telemedicine to serve patients throughout Texas and beyond."</blockquote>

        <h3>Mission Statement</h3>
        <blockquote>"Highland Longevity Clinic transforms lives through personalized, premium care - helping patients optimize their health, appearance, and performance through evidence-based treatments, advanced diagnostics, and genuine physician partnerships."</blockquote>

        <h3>Core Values</h3>

        <h4>1. Patient First</h4>
        <p>"Every decision starts with: What's best for the patient?"</p>

        <h4>2. Excellence in Everything</h4>
        <p>"We don't do average. Every touchpoint reflects Highland quality."</p>

        <h4>3. Radical Ownership</h4>
        <p>"We own our outcomes. No excuses, no blame, just solutions."</p>

        <h4>4. Continuous Improvement</h4>
        <p>"Today's best is tomorrow's baseline. We never stop getting better."</p>

        <h4>5. Transparent Communication</h4>
        <p>"We say what we mean, share what matters, and ask when uncertain."</p>

        <h3>3-Year Vision</h3>
        <table>
            <tr><th>Year</th><th>Milestone</th></tr>
            <tr><td>Year 1</td><td>Physical clinic with documented systems + telemedicine launch</td></tr>
            <tr><td>Year 2</td><td>Multi-provider practice with owner working ON not IN the business</td></tr>
            <tr><td>Year 3</td><td>Recognized regional leader, owner optional</td></tr>
        </table>
    `,
    contracts: `
        <h2>Position Contracts Summary</h2>

        <p>A Position Contract is an <strong>accountability agreement</strong> (not a job description) that defines the results you're responsible for and how success is measured.</p>

        <h3>Highland Team Positions</h3>
        <table>
            <tr><th>Position</th><th>Who</th><th>Primary Accountability</th></tr>
            <tr><td>CEO / Medical Director</td><td>Dr. Lindsley</td><td>Vision, growth & clinical safety</td></tr>
            <tr><td>Practice Manager</td><td>Jacqui</td><td>Operational efficiency, patient retention</td></tr>
            <tr><td>Lead Clinician</td><td>Divya</td><td>Clinical consistency, protocol adherence</td></tr>
            <tr><td>Nurse / Aesthetics</td><td>Aubrey</td><td>Aesthetic treatments, clinical support</td></tr>
            <tr><td>Front Desk</td><td>Dorothy</td><td>Patient reception & experience</td></tr>
        </table>

        <h3>What Your Position Contract Includes</h3>
        <ol>
            <li><strong>Position Title</strong> - Your role name</li>
            <li><strong>Reports To</strong> - Who you work with</li>
            <li><strong>Primary Objective</strong> - What success looks like</li>
            <li><strong>Key Responsibilities</strong> - Your 3-5 core duties</li>
            <li><strong>Metrics of Success</strong> - How we measure progress</li>
        </ol>

        <h3>The Rule of Focus</h3>
        <p>Clear role definitions help everyone do their best work:</p>
        <ul>
            <li>Know your responsibilities so there's no confusion</li>
            <li>As you master your role, opportunities to grow emerge</li>
        </ul>
    `
};

// ==================== STATE ====================
let currentUser = null;
let userProgress = {};
let currentQuiz = null;
let currentReferenceType = null;
let currentDocument = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing user
    const savedUser = localStorage.getItem('emyth_user');
    if (savedUser) {
        loginUser(savedUser);
    }

    // Setup event listeners
    setupUserSelection();
    setupNavigation();
    setupChecklists();
    setupQuizzes();
    setupActions();
});

// ==================== USER MANAGEMENT ====================
function setupUserSelection() {
    document.querySelectorAll('.user-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const user = btn.dataset.user;
            loginUser(user);
        });
    });

    document.getElementById('switchUser').addEventListener('click', () => {
        logoutUser();
    });
}

function loginUser(username) {
    currentUser = username;
    localStorage.setItem('emyth_user', username);

    // Set role-specific task counts
    TASK_COUNTS = ROLE_TASK_COUNTS[username] || ROLE_TASK_COUNTS.dorothy;

    // Load user progress (or create new with correct task counts)
    const savedProgress = localStorage.getItem(`emyth_progress_${username}`);
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
        // Ensure task arrays match current counts (in case they changed)
        for (let day = 1; day <= 5; day++) {
            const dayKey = `day${day}`;
            const expectedCount = TASK_COUNTS[dayKey];
            if (!userProgress[dayKey] || userProgress[dayKey].tasks.length !== expectedCount) {
                userProgress[dayKey] = { tasks: new Array(expectedCount).fill(false) };
            }
        }
    } else {
        userProgress = createEmptyProgress();
    }

    // Render role-specific content for all days
    renderAllDayContent(username);

    // Update UI
    document.getElementById('userModal').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    const roleData = ROLE_CONTENT[username];
    const displayName = roleData ? roleData.name : username.charAt(0).toUpperCase() + username.slice(1);
    document.getElementById('currentUserName').textContent = displayName;
    document.getElementById('dashboardUserName').textContent = displayName;

    // Setup checkbox event listeners after rendering
    setupChecklists();

    // Load saved checkbox states
    loadCheckboxStates();

    // Update all progress displays
    updateAllProgress();
    updateBadgesDisplay();
    updateBadgeCount();
}

// ==================== DYNAMIC CONTENT RENDERING ====================
function renderAllDayContent(username) {
    const roleData = ROLE_CONTENT[username];
    if (!roleData) return;

    for (let day = 1; day <= 5; day++) {
        const dayKey = `day${day}`;
        const dayData = roleData[dayKey];
        if (dayData) {
            renderDayContent(day, dayData);
        }
    }
}

function renderDayContent(dayNum, dayData) {
    const contentArea = document.getElementById(`day${dayNum}Content`);
    const subtitleEl = document.getElementById(`day${dayNum}Subtitle`);

    if (!contentArea) return;

    // Update subtitle
    if (subtitleEl && dayData.subtitle) {
        subtitleEl.textContent = dayData.subtitle;
    }

    let html = '';
    let taskIndex = 0;

    // Add info box
    if (dayData.infoBox) {
        html += `<div class="info-box">${dayData.infoBox}</div>`;
    }

    // Add sections with tasks
    if (dayData.sections) {
        dayData.sections.forEach(section => {
            html += `<h3>${section.title}</h3>`;
            html += `<div class="checklist" data-day="${dayNum}">`;

            section.tasks.forEach(task => {
                const isObject = typeof task === 'object';
                const taskText = isObject ? task.text : task;
                const docKey = isObject ? task.doc : null;
                const resourceLink = isObject ? task.resource : null;

                if (docKey || resourceLink) {
                    html += `
                    <div class="check-item-wrapper">
                        <label class="check-item has-doc">
                            <input type="checkbox" data-task="${taskIndex}">
                            <span class="checkmark"></span>
                            <span class="check-text">${taskText}</span>
                        </label>`;
                    if (docKey) {
                        html += `<button class="doc-link" onclick="viewDocument('${docKey}')" title="Click to open document">📄</button>`;
                    }
                    if (resourceLink) {
                        html += `<a href="${resourceLink}" class="resource-link" target="_blank" download title="Download resource">📥</a>`;
                    }
                    html += `</div>`;
                } else {
                    html += `
                    <label class="check-item">
                        <input type="checkbox" data-task="${taskIndex}">
                        <span class="checkmark"></span>
                        <span class="check-text">${taskText}</span>
                    </label>`;
                }
                taskIndex++;
            });

            html += '</div>';
        });
    }

    // Add quiz button if applicable
    if (dayData.quiz) {
        const quizData = QUIZZES[dayData.quiz];
        const quizIcons = { personalities: '🧠', values: '💎', final: '⭐' };
        const quizIcon = quizIcons[dayData.quiz] || '📝';
        html += `
            <div class="quiz-trigger">
                <button class="quiz-btn" data-quiz="${dayData.quiz}">
                    <span class="quiz-icon">${quizIcon}</span>
                    <span>Take the ${quizData ? quizData.title : 'Quiz'}!</span>
                </button>
            </div>`;
    }

    contentArea.innerHTML = html;

    // Re-attach quiz button event listeners
    const quizBtns = contentArea.querySelectorAll('.quiz-btn');
    quizBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            startQuiz(btn.dataset.quiz);
        });
    });

}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('emyth_user');
    document.getElementById('userModal').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
}

function createEmptyProgress() {
    return {
        day1: { tasks: new Array(TASK_COUNTS.day1).fill(false) },
        day2: { tasks: new Array(TASK_COUNTS.day2).fill(false) },
        day3: { tasks: new Array(TASK_COUNTS.day3).fill(false) },
        day4: { tasks: new Array(TASK_COUNTS.day4).fill(false) },
        day5: { tasks: new Array(TASK_COUNTS.day5).fill(false) },
        quizzes: { personalities: 0, values: 0, final: 0, principles: 0, vmv: 0, contracts: 0, guide: 0 },
        documents: { principles: false, vmv: false, contracts: false, guide: false },
        references: { principles: false, vmv: false, contracts: false },
        badges: []
    };
}

function saveProgress() {
    localStorage.setItem(`emyth_progress_${currentUser}`, JSON.stringify(userProgress));
}

// ==================== NAVIGATION ====================
function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const section = tab.dataset.section;
            showSection(section);
        });
    });

    // Quick action buttons
    document.querySelectorAll('[data-section]').forEach(btn => {
        if (!btn.classList.contains('nav-tab')) {
            btn.addEventListener('click', () => {
                showSection(btn.dataset.section);
            });
        }
    });

    // Continue button
    document.getElementById('continueBtn').addEventListener('click', () => {
        const nextDay = findNextIncompleteDay();
        showSection(nextDay);
    });
}

function showSection(sectionId) {
    // Update tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === sectionId);
    });

    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

function findNextIncompleteDay() {
    for (let i = 1; i <= 5; i++) {
        const dayKey = `day${i}`;
        const completed = userProgress[dayKey].tasks.filter(t => t).length;
        if (completed < TASK_COUNTS[dayKey]) {
            return dayKey;
        }
    }
    return 'dashboard';
}

// ==================== CHECKLISTS ====================
function setupChecklists() {
    document.querySelectorAll('.check-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const item = e.target.closest('.check-item');
            const checklist = e.target.closest('.checklist');
            const day = checklist.dataset.day;
            const taskIndex = parseInt(e.target.dataset.task);

            // Update progress
            userProgress[`day${day}`].tasks[taskIndex] = e.target.checked;
            saveProgress();

            // Check for first task badge
            if (e.target.checked && !userProgress.badges.includes('first_step')) {
                earnBadge('first_step');
            }

            // Animate the checkmark
            if (e.target.checked) {
                item.classList.add('celebrate');
                setTimeout(() => item.classList.remove('celebrate'), 500);
            }

            // Update progress displays
            updateDayProgress(day);
            updateOverallProgress();

            // Check for day completion badge
            checkDayCompletion(day);
        });
    });
}

function loadCheckboxStates() {
    for (let day = 1; day <= 5; day++) {
        const tasks = userProgress[`day${day}`].tasks;
        document.querySelectorAll(`.checklist[data-day="${day}"] input[type="checkbox"]`).forEach((checkbox, index) => {
            checkbox.checked = tasks[index] || false;
        });
    }
}

function updateDayProgress(day) {
    const tasks = userProgress[`day${day}`].tasks;
    const completed = tasks.filter(t => t).length;
    const total = TASK_COUNTS[`day${day}`];
    const percent = Math.round((completed / total) * 100);

    // Update day progress bar
    const progressBar = document.getElementById(`day${day}ProgressBar`);
    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }

    // Update dashboard progress
    const dashProgress = document.getElementById(`day${day}Progress`);
    if (dashProgress) {
        dashProgress.style.width = `${percent}%`;
    }

    const percentDisplay = document.getElementById(`day${day}Percent`);
    if (percentDisplay) {
        percentDisplay.textContent = `${percent}%`;
    }

    // Update nav status
    const status = document.getElementById(`day${day}Status`);
    if (status) {
        status.classList.remove('complete', 'partial');
        if (percent === 100) {
            status.classList.add('complete');
        } else if (percent > 0) {
            status.classList.add('partial');
        }
    }
}

function updateOverallProgress() {
    let totalCompleted = 0;
    let totalTasks = 0;

    for (let day = 1; day <= 5; day++) {
        totalCompleted += userProgress[`day${day}`].tasks.filter(t => t).length;
        totalTasks += TASK_COUNTS[`day${day}`];
    }

    const percent = Math.round((totalCompleted / totalTasks) * 100);

    // Update header progress ring
    const progressCircle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 20;
    progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    document.getElementById('progressPercent').textContent = `${percent}%`;

    // Update big progress ring
    const bigCircle = document.getElementById('bigProgressCircle');
    const bigCircumference = 2 * Math.PI * 50;
    bigCircle.style.strokeDashoffset = bigCircumference - (percent / 100) * bigCircumference;
    document.getElementById('bigProgressPercent').textContent = `${percent}%`;

    // Update message
    const messages = [
        { threshold: 0, message: "Let's get started!" },
        { threshold: 20, message: "Great start! Keep going!" },
        { threshold: 40, message: "You're making progress!" },
        { threshold: 60, message: "Over halfway there!" },
        { threshold: 80, message: "Almost done!" },
        { threshold: 100, message: "Week 1 Complete! 🎉" }
    ];

    const message = messages.reverse().find(m => percent >= m.threshold);
    document.getElementById('progressMessage').textContent = message.message;

    // Check for week completion
    if (percent === 100 && !userProgress.badges.includes('week1_warrior')) {
        earnBadge('week1_warrior');
    }
}

function updateAllProgress() {
    for (let day = 1; day <= 5; day++) {
        updateDayProgress(day);
    }
    updateOverallProgress();
}

function checkDayCompletion(day) {
    const tasks = userProgress[`day${day}`].tasks;
    const allComplete = tasks.every(t => t);
    const badgeKey = `day${day}_champion`;

    if (allComplete && !userProgress.badges.includes(badgeKey)) {
        earnBadge(badgeKey);
        celebrateCompletion();
    }
}

// ==================== QUIZZES ====================
function setupQuizzes() {
    document.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const quizType = btn.dataset.quiz;
            startQuiz(quizType);
        });
    });
}

function startQuiz(quizType) {
    currentQuiz = quizType;
    const quiz = QUIZZES[quizType];

    document.getElementById('quizTitle').textContent = quiz.title;
    document.getElementById('quizSubtitle').textContent = quiz.subtitle;

    let html = '';
    quiz.questions.forEach((q, index) => {
        html += `
            <div class="quiz-question" data-question="${index}">
                <h4>${index + 1}. ${q.question}</h4>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <div class="quiz-option" data-option="${i}">
                            <div class="quiz-radio"></div>
                            <span>${opt}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-feedback hidden"></div>
            </div>
        `;
    });

    document.getElementById('quizContent').innerHTML = html;
    document.getElementById('quizSubmit').classList.remove('hidden');
    document.getElementById('quizClose').classList.add('hidden');

    // Setup option selection
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const question = option.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Setup submit
    document.getElementById('quizSubmit').onclick = submitQuiz;

    document.getElementById('quizModal').classList.remove('hidden');
}

function submitQuiz() {
    const quiz = QUIZZES[currentQuiz];
    let correct = 0;

    quiz.questions.forEach((q, index) => {
        const questionEl = document.querySelector(`.quiz-question[data-question="${index}"]`);
        const selected = questionEl.querySelector('.quiz-option.selected');
        const feedback = questionEl.querySelector('.quiz-feedback');

        if (selected) {
            const optionIndex = parseInt(selected.dataset.option);
            if (optionIndex === q.correct) {
                correct++;
                selected.classList.add('correct');
                feedback.className = 'quiz-feedback correct';
                feedback.textContent = '✓ Correct! ' + q.explanation;
            } else {
                selected.classList.add('wrong');
                questionEl.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
                feedback.className = 'quiz-feedback wrong';
                feedback.textContent = '✗ ' + q.explanation;
            }
        } else {
            feedback.className = 'quiz-feedback wrong';
            feedback.textContent = 'No answer selected. ' + q.explanation;
        }
        feedback.classList.remove('hidden');
    });

    // Save score
    if (!userProgress.quizzes) {
        userProgress.quizzes = {};
    }
    userProgress.quizzes[currentQuiz] = correct;
    saveProgress();

    // Check for badges
    if (correct === quiz.questions.length && !userProgress.badges.includes('quiz_master')) {
        earnBadge('quiz_master');
    }

    // Check for document scholar badge (perfect score on all 4 document quizzes)
    const docQuizzes = ['principles', 'vmv', 'contracts', 'guide'];
    const allDocPerfect = docQuizzes.every(quizKey => {
        const q = QUIZZES[quizKey];
        return userProgress.quizzes[quizKey] === q?.questions.length;
    });
    if (allDocPerfect && !userProgress.badges.includes('document_scholar')) {
        earnBadge('document_scholar');
    }

    // Check for triple crown (perfect on personalities, values, final)
    const legacyQuizzes = ['personalities', 'values', 'final'];
    const allLegacyPerfect = legacyQuizzes.every(quizKey => {
        const q = QUIZZES[quizKey];
        return userProgress.quizzes[quizKey] === q?.questions.length;
    });
    if (allLegacyPerfect && !userProgress.badges.includes('triple_crown')) {
        earnBadge('triple_crown');
    }

    // Update reference cards to show quiz scores
    if (typeof updateReferenceCards === 'function') {
        updateReferenceCards();
    }

    // Show result
    const percent = Math.round((correct / quiz.questions.length) * 100);
    const resultHtml = `
        <div class="quiz-result">
            <div class="quiz-score">${correct}/${quiz.questions.length}</div>
            <p>${percent === 100 ? '🎉 Perfect Score!' : percent >= 75 ? '👍 Great job!' : 'Keep learning!'}</p>
        </div>
    `;
    document.getElementById('quizContent').innerHTML += resultHtml;

    document.getElementById('quizSubmit').classList.add('hidden');
    document.getElementById('quizClose').classList.remove('hidden');

    if (correct === quiz.questions.length) {
        celebrateCompletion();
    }
}

function closeQuiz() {
    document.getElementById('quizModal').classList.add('hidden');
    currentQuiz = null;
}

// ==================== REFERENCE MATERIALS ====================
function showReference(type) {
    currentReferenceType = type;
    document.getElementById('referenceContent').innerHTML = REFERENCE_CONTENT[type];
    document.getElementById('referenceModal').classList.remove('hidden');
}

function closeReference() {
    document.getElementById('referenceModal').classList.add('hidden');
}

function markReferenceRead() {
    userProgress.references[currentReferenceType] = true;
    saveProgress();

    // Check for explorer badge
    const allRead = Object.values(userProgress.references).every(r => r);
    if (allRead && !userProgress.badges.includes('explorer')) {
        earnBadge('explorer');
    }

    closeReference();
}

// ==================== BADGES ====================
function earnBadge(badgeKey) {
    if (userProgress.badges.includes(badgeKey)) return;

    userProgress.badges.push(badgeKey);
    saveProgress();

    // Show badge popup
    const badge = BADGES[badgeKey];
    document.getElementById('earnedBadgeIcon').textContent = badge.icon;
    document.getElementById('earnedBadgeName').textContent = badge.name;
    document.getElementById('badgePopup').classList.remove('hidden');

    // Confetti!
    celebrateCompletion();

    // Hide popup after 3 seconds
    setTimeout(() => {
        document.getElementById('badgePopup').classList.add('hidden');
    }, 3000);

    // Update displays
    updateBadgesDisplay();
    updateBadgeCount();
}

function updateBadgesDisplay() {
    // Update badges grid
    document.querySelectorAll('.badge-card').forEach(card => {
        const badgeKey = card.dataset.badge;
        const earned = userProgress.badges.includes(badgeKey);
        card.classList.toggle('earned', earned);
        card.querySelector('.badge-icon').classList.toggle('locked', !earned);
    });

    // Update recent badges on dashboard
    const recentBadges = document.getElementById('recentBadges');
    if (userProgress.badges.length > 0) {
        recentBadges.innerHTML = userProgress.badges.slice(-4).map(key => {
            const badge = BADGES[key];
            return `<div class="mini-badge" title="${badge.name}">${badge.icon}</div>`;
        }).join('');
    } else {
        recentBadges.innerHTML = '<p class="empty-state">Complete tasks to earn badges!</p>';
    }
}

function updateBadgeCount() {
    document.getElementById('badgeCount').textContent = userProgress.badges.length;
}

// ==================== CELEBRATIONS ====================
function celebrateCompletion() {
    // Fire confetti!
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Fire more from sides
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 250);
}

// ==================== ACTIONS ====================
function setupActions() {
    // Make action buttons with data-section work
    document.querySelectorAll('.action-btn[data-section]').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.section);
        });
    });
}

// ==================== DOCUMENT VIEWING ====================
function viewDocument(docKey) {
    currentDocument = docKey;
    const doc = DOCUMENTS[docKey];

    document.getElementById('documentTitle').textContent = doc.title;
    document.getElementById('documentFrame').src = doc.path;
    document.getElementById('documentModal').classList.remove('hidden');
}

function closeDocument() {
    document.getElementById('documentModal').classList.add('hidden');
    document.getElementById('documentFrame').src = '';
    currentDocument = null;
}

function markDocumentRead() {
    if (!currentDocument) return;

    // Ensure documents object exists
    if (!userProgress.documents) {
        userProgress.documents = { principles: false, vmv: false, contracts: false, guide: false };
    }

    userProgress.documents[currentDocument] = true;
    saveProgress();

    // Update the reference card display
    updateReferenceCards();

    // Check for explorer badge (all documents read)
    const allRead = Object.values(userProgress.documents).every(d => d);
    if (allRead && !userProgress.badges.includes('explorer')) {
        earnBadge('explorer');
    }

    closeDocument();
}

function startDocQuiz(docKey) {
    const doc = DOCUMENTS[docKey];
    if (doc && doc.quiz) {
        startQuiz(doc.quiz);
    }
}

function updateReferenceCards() {
    // Ensure documents and quizzes objects exist
    if (!userProgress.documents) {
        userProgress.documents = { principles: false, vmv: false, contracts: false, guide: false };
    }

    const docKeys = ['principles', 'vmv', 'contracts', 'guide'];
    const cardIds = {
        principles: 'refPrinciples',
        vmv: 'refVMV',
        contracts: 'refContracts',
        guide: 'refGuide'
    };
    const statusIds = {
        principles: 'principlesStatus',
        vmv: 'vmvStatus',
        contracts: 'contractsStatus',
        guide: 'guideStatus'
    };

    docKeys.forEach(key => {
        const card = document.getElementById(cardIds[key]);
        const statusEl = document.getElementById(statusIds[key]);

        if (!card || !statusEl) return;

        // Update read status
        if (userProgress.documents[key]) {
            card.classList.add('read');
        } else {
            card.classList.remove('read');
        }

        // Build status text
        let statusText = '';

        // Check if document is read
        if (userProgress.documents[key]) {
            statusText += '✓ Document Read';
        }

        // Check quiz score
        const quizKey = DOCUMENTS[key]?.quiz;
        if (quizKey && userProgress.quizzes && userProgress.quizzes[quizKey] > 0) {
            const quiz = QUIZZES[quizKey];
            const score = userProgress.quizzes[quizKey];
            const total = quiz.questions.length;
            if (statusText) statusText += ' | ';
            statusText += `Quiz: ${score}/${total}`;
            if (score === total) {
                statusText += ' ⭐';
            }
        }

        statusEl.textContent = statusText;
        statusEl.className = 'ref-status';
        if (statusText) {
            statusEl.classList.add('read');
        }
    });
}

// Override loginUser to update reference cards
const originalLoginUser = loginUser;
loginUser = function(username) {
    originalLoginUser(username);
    // Update reference cards after login
    setTimeout(updateReferenceCards, 100);
};

// Make functions global for onclick handlers
window.showReference = showReference;
window.closeReference = closeReference;
window.markReferenceRead = markReferenceRead;
window.closeQuiz = closeQuiz;
window.viewDocument = viewDocument;
window.closeDocument = closeDocument;
window.markDocumentRead = markDocumentRead;
window.startDocQuiz = startDocQuiz;
