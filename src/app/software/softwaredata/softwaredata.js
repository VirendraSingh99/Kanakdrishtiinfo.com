// import {
//   Monitor,
//   BarChart2,
//   Smartphone,
//   TrendingUp,
//   Users,
//   Shield,
//   Zap,
//   RefreshCw,
//   Target,
//   CheckCircle,
//   Globe,
//   Database,
//   Lock,
//   Layers,
//   Settings,
// } from "lucide-react";

// // ============================================================
// // SOFTWARES DATA ARRAY
// // ============================================================

// export const softwares = [
//   // ──────────────────────────────────────────────────────────
//   // 1. TRAVEL CRM SOFTWARE
//   // ──────────────────────────────────────────────────────────
//   {
//     slug: "travel-crm-software",
//     title: "Travel CRM Software",
//     tag: "CRM",
//     color: "from-blue-400 to-[#49BCE3]",
//     icon: Monitor,
//     desc: "A complete travel management CRM designed for tour operators and agencies. Manage leads, bookings, itineraries, and customer communication from a single dashboard — boosting efficiency and delivering seamless travel experiences.",
//     heroDescription:
//       "Powerful Travel CRM solution built specifically for tour operators, travel agencies, and hospitality businesses. Streamline your entire operations with lead management, booking engine, itinerary planning, vendor management, and customer communication — all in one intelligent platform.",

//     // ── Key Features ──
//     features: [
//       {
//         icon: Target,
//         title: "Lead & Enquiry Management",
//         description:
//           "Capture, track, and nurture leads efficiently with automated follow-ups, priority tagging, and real-time status tracking.",
//       },
//       {
//         icon: RefreshCw,
//         title: "Booking & Itinerary Management",
//         description:
//           "Create, modify, and manage complete travel itineraries with real-time updates, multi-day trip planning, and client portal access.",
//       },
//       {
//         icon: Users,
//         title: "Client & Vendor Portal",
//         description:
//           "Dedicated portals for clients and vendors for seamless communication, document sharing, and booking confirmations.",
//       },
//       {
//         icon: BarChart2,
//         title: "Advanced Analytics & Reports",
//         description:
//           "Real-time dashboards and insightful reports to track business performance, team productivity, and profitability.",
//       },
//       {
//         icon: Shield,
//         title: "Secure Payment Integration",
//         description:
//           "Multiple payment gateways with secure transaction handling, automated invoice generation, and payment reminders.",
//       },
//       {
//         icon: Zap,
//         title: "Automated Workflows",
//         description:
//           "Reduce manual work with smart automation for quotations, booking confirmations, payment reminders, and follow-up emails.",
//       },
//     ],

//     // ── Development Process ──
//     process: [
//       {
//         step: "01",
//         title: "Requirement Analysis",
//         description:
//           "Deep understanding of your travel business processes, pain points, team structure, and growth objectives.",
//       },
//       {
//         step: "02",
//         title: "System Design",
//         description:
//           "Custom architecture and UI/UX design tailored for travel industry workflows and user experience.",
//       },
//       {
//         step: "03",
//         title: "Development & Integration",
//         description:
//           "Agile development with integration of payment gateways, SMS/Email APIs, and third-party travel APIs.",
//       },
//       {
//         step: "04",
//         title: "Testing & Deployment",
//         description:
//           "Rigorous quality testing followed by smooth deployment, data migration, and team onboarding.",
//       },
//     ],

//     // ── FAQs ──
//     faqs: [
//       {
//         question: "Can I customize the CRM according to my travel business?",
//         answer:
//           "Yes. We build fully customized Travel CRM solutions tailored to your specific business requirements, workflows, and branding.",
//       },
//       {
//         question: "Does it support multiple payment gateways?",
//         answer:
//           "Absolutely. We integrate Razorpay, PayPal, Stripe, CCAvenue, and other popular payment solutions based on your preference.",
//       },
//       {
//         question: "Is there a client portal for my customers?",
//         answer:
//           "Yes. Customers can view their bookings, itineraries, invoices, and make payments through a secure, branded client portal.",
//       },
//       {
//         question: "Do you provide training and support?",
//         answer:
//           "Yes. We provide complete hands-on training to your team and offer ongoing technical support with dedicated account management.",
//       },
//       {
//         question: "Can it handle multiple branches or offices?",
//         answer:
//           "Yes. Our Travel CRM supports multi-branch and multi-user setup with role-based access control and centralized reporting.",
//       },
//     ],

//     // ── Image + Content Section (imageLeft: true = image left, content right) ──
//     imageContentSection: {
//       heading: "Why Travel Businesses Need a Dedicated CRM System",
//       paragraphs: [
//         "The travel industry is one of the most relationship-driven businesses in the world. From the moment a traveler submits an enquiry to the day they return from their trip — every touchpoint matters. A generic CRM simply cannot handle the complexity of tour packaging, vendor coordination, itinerary customization, and real-time booking management that travel businesses require daily.",
//         "Our Travel CRM Software is built ground-up for travel agencies, tour operators, and DMCs. It centralizes your entire operation — lead tracking, package creation, vendor payments, client communication, and financial reporting — into one powerful, easy-to-use platform. Whether you are a boutique travel agency handling 50 bookings a month or a large operator managing thousands of customers, our system scales with your business.",
//       ],
//       imageSrc:
//         "https://getjess.com/wp-content/uploads/2020/07/People-Project-Management.jpg",
//       imageAlt: "Travel CRM Software for Tour Operators",
//       imageLeft: true,
//     },

//     // ── SEO Text Sections (extra content for keyword ranking) ──
//     seoSections: [
//       {
//         heading: "Complete Travel Agency Management Software for Indian Market",
//         paragraphs: [
//           "India's travel industry is growing rapidly, and with it comes the challenge of managing a high volume of enquiries, diverse customer expectations, and complex package customizations. Our Travel CRM Software is specifically designed keeping Indian travel businesses in mind — from domestic tour operators in cities like Delhi, Mumbai, Jaipur, and Bangalore to international travel agencies handling global itineraries.",
//           "The software supports multi-currency billing, GST-compliant invoicing, and integrations with popular Indian payment gateways like Razorpay and Paytm. It also connects seamlessly with WhatsApp Business API, allowing your team to communicate with clients through their preferred messaging platform — reducing response times and improving conversion rates significantly.",
//           "Whether you specialize in pilgrimage tours, honeymoon packages, corporate travel, or adventure tourism, our system adapts to your business model. Custom fields, flexible package templates, and configurable workflows ensure that the CRM fits your process — not the other way around.",
//         ],
//       },
//       {
//         heading: "How Our Travel CRM Software Boosts Your Revenue",
//         paragraphs: [
//           "Most travel businesses lose revenue not because of bad products but due to poor follow-up, missed enquiries, and disorganized operations. Our Travel CRM Software solves these problems systematically. Every incoming lead — whether from your website, social media, or referral — is automatically captured, assigned to the right salesperson, and tracked through the entire sales funnel.",
//           "The system sends automated reminders for follow-ups, payment due dates, and travel document submissions. This ensures nothing falls through the cracks. With detailed performance reports, managers can identify top-performing agents, high-converting lead sources, and the most profitable tour packages — enabling data-driven decisions that directly impact the bottom line.",
//           "Our clients have reported up to 40% reduction in manual workload and a significant improvement in lead-to-booking conversion rates after implementing our Travel CRM solution. The system pays for itself within months through improved efficiency and increased sales.",
//         ],
//       },
//     ],

//     // ── Why Choose Points ──
//     whyChoosePoints: [
//       "100% customizable as per your business workflow",
//       "GST-compliant invoicing and financial reports",
//       "WhatsApp & Email automation for client communication",
//       "Multi-branch support with role-based access",
//       "Dedicated support team with fast response time",
//       "Regular updates and new feature additions",
//     ],
//   },

//   // ──────────────────────────────────────────────────────────
//   // 2. HRMS SOFTWARE
//   // ──────────────────────────────────────────────────────────
//   {
//     slug: "hrms-software",
//     title: "HRMS Software",
//     tag: "HR Tech",
//     color: "from-indigo-400 to-purple-400",
//     icon: Users,
//     desc: "Streamline your human resource operations with a powerful HRMS system. From attendance tracking and payroll automation to employee performance and leave management — everything in one secure platform.",
//     heroDescription:
//       "Comprehensive Human Resource Management System (HRMS) that automates and simplifies all HR operations — from recruitment and onboarding to payroll, attendance, performance management, and employee engagement.",

//     // ── Key Features ──
//     features: [
//       {
//         icon: Zap,
//         title: "Attendance & Leave Management",
//         description:
//           "Biometric, GPS, and web-based attendance tracking with automated leave approval workflow and holiday calendar.",
//       },
//       {
//         icon: BarChart2,
//         title: "Payroll Automation",
//         description:
//           "Automated salary calculation with statutory deductions (PF, ESI, TDS), payslip generation, and bank transfer integration.",
//       },
//       {
//         icon: Target,
//         title: "Performance Management",
//         description:
//           "Goal setting, KPI tracking, quarterly appraisals, and 360-degree feedback system for employee development.",
//       },
//       {
//         icon: Users,
//         title: "Recruitment & Onboarding",
//         description:
//           "End-to-end recruitment pipeline management with job posting, applicant tracking, and digital onboarding workflows.",
//       },
//       {
//         icon: Shield,
//         title: "Employee Self-Service Portal",
//         description:
//           "Employees can apply for leaves, view payslips, update personal information, and raise HR requests independently.",
//       },
//       {
//         icon: Database,
//         title: "HR Analytics & Compliance",
//         description:
//           "Statutory compliance reports (PF, ESI, PT), attrition analysis, headcount reports, and workforce planning insights.",
//       },
//     ],

//     // ── Development Process ──
//     process: [
//       {
//         step: "01",
//         title: "HR Process Study",
//         description:
//           "Detailed study of your existing HR workflows, company policies, org structure, and pain points.",
//       },
//       {
//         step: "02",
//         title: "Custom HRMS Design",
//         description:
//           "Designing modules and workflows as per your company policies, pay structures, and compliance requirements.",
//       },
//       {
//         step: "03",
//         title: "Development & Integration",
//         description:
//           "Building the system with integrations to biometric devices, accounting software, and existing tools.",
//       },
//       {
//         step: "04",
//         title: "Training & Go-Live",
//         description:
//           "Complete team training, data migration from existing systems, and successful go-live with dedicated support.",
//       },
//     ],

//     // ── FAQs ──
//     faqs: [
//       {
//         question: "Can it handle multiple company branches?",
//         answer:
//           "Yes. Our HRMS supports multi-company and multi-branch structure with separate policy configurations for each entity.",
//       },
//       {
//         question: "Is payroll compliant with Indian laws?",
//         answer:
//           "Yes. Fully compliant with TDS, PF, ESI, Professional Tax, Gratuity, and all other Indian statutory requirements.",
//       },
//       {
//         question: "Can employees access it on mobile?",
//         answer:
//           "Yes. Our HRMS has a mobile-responsive design and optional mobile app for employee self-service features.",
//       },
//       {
//         question: "Does it integrate with biometric attendance devices?",
//         answer:
//           "Yes. We integrate with all major biometric attendance hardware brands used in Indian offices.",
//       },
//     ],

//     // ── Image + Content Section (imageLeft: false = content left, image right) ──
//     imageContentSection: {
//       heading: "Modernize Your HR Operations with Intelligent Automation",
//       paragraphs: [
//         "Managing human resources manually — through Excel sheets, paper registers, and scattered email threads — is not just inefficient, it is also error-prone and non-compliant. As organizations grow, these challenges multiply. A single payroll error or a missed compliance deadline can lead to significant financial and legal consequences.",
//         "Our HRMS Software eliminates these risks by automating the entire HR lifecycle. From the day an employee joins your organization to their exit formalities — every process is digitized, trackable, and compliant. Payroll runs that used to take days now complete in minutes. Leave approvals that required multiple follow-ups are now just one click on a mobile screen.",
//       ],
//       imageSrc:
//         "https://www.sgcms.com/wp-content/uploads/2024/07/what-is-hrms-software.png",
//       imageAlt: "HRMS Software for Indian Businesses",
//       imageLeft: false,
//     },

//     // ── SEO Text Sections ──
//     seoSections: [
//       {
//         heading: "HRMS Software Built for Indian Businesses and Compliance",
//         paragraphs: [
//           "Indian HR compliance is complex. With multiple statutory requirements like Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), TDS on salary, and Shops & Establishment Act compliance varying across states — managing HR without proper software is a constant risk. Our HRMS Software is built with Indian compliance at its core.",
//           "The system automatically calculates PF, ESI, and PT deductions based on your state-specific configurations. It generates Form 16, Form 24Q, and other statutory reports directly from the system — saving your HR team hours of manual work every quarter. All calculations stay updated with the latest government regulations, so you are always compliant.",
//           "Whether you are a startup with 20 employees in Bangalore or a manufacturing company with 2,000 workers across multiple states, our HRMS scales to your needs while maintaining complete regulatory compliance.",
//         ],
//       },
//       {
//         heading: "Improve Employee Experience with Self-Service HR Tools",
//         paragraphs: [
//           "Modern employees expect digital convenience in their workplace tools. When employees have to submit leave applications on paper, wait for payslips by email, or stand in queue at the HR desk for basic queries — it impacts their experience and your HR team's productivity simultaneously.",
//           "Our Employee Self-Service portal empowers employees to manage their own HR needs independently. They can apply for leaves, check leave balances, download payslips, view attendance records, update personal information, and raise IT or admin requests — all from their smartphone or computer, anytime, anywhere.",
//           "For HR managers, this means fewer routine queries, more accurate employee data, and faster processing times. The result is a happier workforce and a more efficient HR department — a win for the entire organization.",
//         ],
//       },
//     ],

//     // ── Why Choose Points ──
//     whyChoosePoints: [
//       "Full Indian statutory compliance (PF, ESI, TDS, PT)",
//       "Biometric & GPS attendance integration",
//       "Mobile app for employee self-service",
//       "Customizable for your company policies",
//       "Secure cloud or on-premise deployment options",
//       "Dedicated HR implementation consultant",
//     ],
//   },

//   // ──────────────────────────────────────────────────────────
//   // 3. MLM SOFTWARE
//   // ──────────────────────────────────────────────────────────
//   {
//     slug: "mlm-software",
//     title: "MLM Software",
//     tag: "MLM",
//     color: "from-orange-400 to-rose-400",
//     icon: BarChart2,
//     desc: "Advanced multi-level marketing software with smart commission distribution, genealogy tree tracking, and real-time reporting. Designed for scalability, transparency, and business growth.",
//     heroDescription:
//       "Powerful and scalable MLM Software with advanced commission plans, genealogy visualization, e-wallet, and real-time analytics to help your network marketing business grow efficiently and transparently.",

//     // ── Key Features ──
//     features: [
//       {
//         icon: Layers,
//         title: "Multiple MLM Plan Support",
//         description:
//           "Binary, Matrix, Unilevel, Board, Hybrid — all major MLM compensation plans supported with full customization.",
//       },
//       {
//         icon: BarChart2,
//         title: "Commission & Bonus Engine",
//         description:
//           "Smart commission distribution engine with real-time calculations for referral, level, matching, and leadership bonuses.",
//       },
//       {
//         icon: Users,
//         title: "Genealogy Tree Visualization",
//         description:
//           "Interactive genealogy tree showing your entire downline structure with performance metrics at every node.",
//       },
//       {
//         icon: Shield,
//         title: "E-Wallet & Payout Management",
//         description:
//           "Built-in e-wallet for commission storage, instant bank transfers, UPI payouts, and transaction history.",
//       },
//       {
//         icon: Target,
//         title: "Rank & Achievement System",
//         description:
//           "Configurable rank advancement system with automated rank upgrades, achievement badges, and incentive tracking.",
//       },
//       {
//         icon: Globe,
//         title: "Member Portal & App",
//         description:
//           "Feature-rich member dashboard with personal performance stats, team reports, and referral link management.",
//       },
//     ],

//     // ── Development Process ──
//     process: [
//       {
//         step: "01",
//         title: "Plan Understanding",
//         description:
//           "Deep dive into your MLM compensation plan, commission structure, and business rules.",
//       },
//       {
//         step: "02",
//         title: "Architecture Design",
//         description:
//           "Scalable system architecture designed to handle large member networks without performance issues.",
//       },
//       {
//         step: "03",
//         title: "Development & Testing",
//         description:
//           "Commission engine development with rigorous testing for calculation accuracy and edge cases.",
//       },
//       {
//         step: "04",
//         title: "Launch & Support",
//         description:
//           "System launch with member onboarding support, admin training, and ongoing technical assistance.",
//       },
//     ],

//     // ── FAQs ──
//     faqs: [
//       {
//         question: "Which MLM plans do you support?",
//         answer:
//           "We support all major plans including Binary, Matrix, Unilevel, Board Plan, Generation Plan, and custom hybrid plans.",
//       },
//       {
//         question: "Can it handle lakhs of members?",
//         answer:
//           "Yes. Our MLM software is built on scalable cloud infrastructure and has been deployed for networks with over 5 lakh members.",
//       },
//       {
//         question: "Is the commission calculation accurate?",
//         answer:
//           "Yes. Our commission engine is rigorously tested and handles complex multi-level calculations with 100% accuracy.",
//       },
//       {
//         question: "Do you provide source code?",
//         answer:
//           "Yes. We offer source code delivery with proper documentation based on your licensing agreement.",
//       },
//     ],

//     // ── Image + Content Section ──
//     imageContentSection: {
//       heading: "Build a Transparent and Scalable Network Marketing Business",
//       paragraphs: [
//         "Trust is the foundation of any successful MLM business. When distributors cannot see their commissions clearly, when the genealogy tree is confusing, or when payouts are delayed — the entire network loses confidence. Our MLM Software is built with transparency and accuracy at its core, giving every member complete visibility into their earnings, team performance, and rank progress.",
//         "The software handles the most complex commission structures effortlessly. Whether your plan has 7 levels of referral commissions, matching bonuses up to generation 5, or a binary plan with carry-forward volumes — our commission engine processes everything accurately in real time. Members see their earnings update instantly, building trust and motivation throughout your network.",
//       ],
//       imageSrc:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLjnI9WI2FWHa1RfS5ynvm4vQ7XrXxp690A&s",
//       imageAlt: "MLM Software with Genealogy Tree",
//       imageLeft: true,
//     },

//     // ── SEO Text Sections ──
//     seoSections: [
//       {
//         heading:
//           "Custom MLM Software Development for Indian Network Marketing Companies",
//         paragraphs: [
//           "India is one of the largest and fastest-growing direct selling markets in the world, with millions of distributors across thousands of network marketing companies. Running an MLM business in India comes with its own set of requirements — UPI and bank transfer payouts, GST compliance on product sales, Aadhaar/PAN-based KYC verification, and regulatory compliance with the Direct Selling Guidelines issued by the government.",
//           "Our MLM Software is built keeping Indian market requirements at the forefront. The system integrates with major Indian payment gateways for instant commission payouts, supports GST invoicing for product transactions, and includes a built-in KYC module for member verification. Whether you are launching a new direct selling company or upgrading your existing system, we deliver a compliant, robust, and feature-rich solution.",
//           "We have built MLM software for companies across product categories including health and wellness, agriculture, education, cosmetics, and financial services — each with unique compensation plans and business models. Our experience across these verticals allows us to implement your plan quickly and correctly.",
//         ],
//       },
//       {
//         heading:
//           "Why the Right MLM Software is Your Most Critical Business Asset",
//         paragraphs: [
//           "In network marketing, your software is not just a tool — it is the backbone of your entire operation. When commissions are calculated incorrectly, members lose trust. When the genealogy tree is slow or inaccurate, leaders cannot manage their teams. When payouts are delayed, motivation drops. A poor software choice can destroy a growing MLM business.",
//           "Conversely, a well-built MLM software becomes a powerful recruitment and retention tool. When new members join and immediately see a clean, professional dashboard with clear commission tracking and team visualization — it builds confidence in your business. When leaders can monitor their team's performance in real time and plan their growth strategies based on accurate data — they perform better and recruit more actively.",
//           "We understand the stakes involved in MLM software. That is why every system we build goes through extensive testing — especially the commission engine — before deployment. We have handled deployments for networks ranging from 500 to 5 lakh+ members, and we know exactly what it takes to build software that performs reliably at scale.",
//         ],
//       },
//     ],

//     // ── Why Choose Points ──
//     whyChoosePoints: [
//       "Supports all major MLM compensation plans",
//       "Real-time commission calculation engine",
//       "UPI, NEFT, and instant payout integrations",
//       "GST-compliant invoicing and reports",
//       "Scalable for networks of any size",
//       "KYC verification and compliance module",
//     ],
//   },

//   // ──────────────────────────────────────────────────────────
//   // 4. TASK MANAGEMENT SOFTWARE
//   // ──────────────────────────────────────────────────────────
//   {
//     slug: "task-management-software",
//     title: "Task Management Software",
//     tag: "Productivity",
//     color: "from-emerald-400 to-teal-400",
//     icon: Smartphone,
//     desc: "Organize, track, and manage your team's workflow efficiently. Assign tasks, monitor progress, set deadlines, and improve productivity with a modern and intuitive task management system.",
//     heroDescription:
//       "Intuitive Task Management Software that helps teams stay organized, meet deadlines, and collaborate efficiently — with real-time task tracking, priority management, and insightful productivity analytics.",

//     // ── Key Features ──
//     features: [
//       {
//         icon: CheckCircle,
//         title: "Task Assignment & Tracking",
//         description:
//           "Create, assign, and track tasks with due dates, priorities, and status updates visible to the entire team in real time.",
//       },
//       {
//         icon: Layers,
//         title: "Project & Sprint Management",
//         description:
//           "Organize work into projects and sprints with Kanban boards, Gantt charts, and milestone tracking.",
//       },
//       {
//         icon: Users,
//         title: "Team Collaboration",
//         description:
//           "Task-level comments, file attachments, mentions, and real-time notifications keep every team member aligned.",
//       },
//       {
//         icon: BarChart2,
//         title: "Productivity Analytics",
//         description:
//           "Team performance reports, workload analysis, on-time delivery metrics, and individual productivity dashboards.",
//       },
//       {
//         icon: Zap,
//         title: "Automation & Reminders",
//         description:
//           "Automated task reminders, deadline alerts, escalation rules, and recurring task scheduling.",
//       },
//       {
//         icon: Settings,
//         title: "Custom Workflows",
//         description:
//           "Configure task statuses, approval workflows, and team structures to match your exact operational process.",
//       },
//     ],

//     // ── Development Process ──
//     process: [
//       {
//         step: "01",
//         title: "Workflow Analysis",
//         description:
//           "Understanding your team structure, project types, and current task management challenges.",
//       },
//       {
//         step: "02",
//         title: "System Design",
//         description:
//           "Designing intuitive UI/UX and workflow configurations tailored to your team's way of working.",
//       },
//       {
//         step: "03",
//         title: "Development & Testing",
//         description:
//           "Building the system with thorough testing for performance, usability, and reliability.",
//       },
//       {
//         step: "04",
//         title: "Onboarding & Support",
//         description:
//           "Team onboarding, training sessions, and ongoing support to ensure successful adoption.",
//       },
//     ],

//     // ── FAQs ──
//     faqs: [
//       {
//         question: "Is this better than tools like Trello or Asana?",
//         answer:
//           "Our custom task management software is tailored specifically to your business workflows, unlike generic tools. It integrates with your existing systems and includes features designed for your team's exact needs.",
//       },
//       {
//         question: "Can it handle multiple departments?",
//         answer:
//           "Yes. The system supports multi-department structure with separate workspaces, permission levels, and reporting for each team.",
//       },
//       {
//         question: "Is there a mobile app?",
//         answer:
//           "Yes. A mobile-responsive web app and optional native mobile app is available for task management on the go.",
//       },
//       {
//         question: "Can we integrate it with our existing tools?",
//         answer:
//           "Yes. We can integrate the system with Slack, email, ERP systems, CRM tools, and other software your team already uses.",
//       },
//     ],

//     // ── Image + Content Section ──
//     imageContentSection: {
//       heading: "Give Your Team the Tools to Deliver Work Without Chaos",
//       paragraphs: [
//         "Most teams today struggle not because they lack talent, but because they lack visibility. Who is working on what? Is that critical deadline on track? Why did that task fall through the cracks? These questions — when left unanswered — lead to missed deadlines, duplicated efforts, and frustrated team members.",
//         "Our Task Management Software brings complete clarity to your team's operations. Every task, every deadline, every responsibility is visible in a single organized view. Team members know exactly what they need to do today. Managers can see the status of every project at a glance without sending follow-up messages. Bottlenecks are identified early before they become missed deadlines.",
//         "Whether your team is in the same office or distributed across cities, our software ensures everyone stays aligned, accountable, and productive. With smart automation handling reminders and escalations, nothing gets forgotten and no manager needs to micromanage.",
//       ],
//       imageSrc:
//         "https://www.invensislearning.com/blog/wp-content/uploads/2025/12/top-task-management-software-for-teams-banner-image-696x464.jpg",
//       imageAlt: "Task Management Software for Teams",
//       imageLeft: false,
//     },

//     // ── SEO Text Sections ──
//     seoSections: [
//       {
//         heading: "Custom Task Management Software vs Off-the-Shelf Tools",
//         paragraphs: [
//           "Tools like Trello, Asana, Monday.com, and Jira are popular for a reason — they solve basic task management needs quickly. However, as organizations grow and their processes become more complex, the limitations of these generic tools become apparent. You find yourself creating workarounds, paying for expensive add-ons, or forcing your team to adapt their natural workflow to fit the software.",
//           "Custom task management software, built specifically for your organization, eliminates these compromises. Your team's actual workflow — including unique approval processes, department-specific statuses, integration with your internal systems, and reporting requirements — is built directly into the software. There are no workarounds because the system is designed for your exact way of working.",
//           "The result is higher adoption, less training time, better data quality, and ultimately a system that your team actually enjoys using — instead of treating it as just another tool to update.",
//         ],
//       },
//     ],

//     // ── Why Choose Points ──
//     whyChoosePoints: [
//       "Fully customized to your team's workflow",
//       "Integrates with your existing tools and systems",
//       "Kanban, List, and Gantt view options",
//       "Role-based access for different team levels",
//       "Mobile-friendly for remote and field teams",
//       "Detailed productivity and performance reports",
//     ],
//   },

//   // ──────────────────────────────────────────────────────────
//   // 5. SHIFTOPAY PAYMENT INTEGRATION
//   // ──────────────────────────────────────────────────────────
//   {
//     slug: "shiftopay-payment-integration",
//     title: "ShiftoPay Payment Integration",
//     tag: "FinTech",
//     color: "from-amber-400 to-yellow-500",
//     icon: TrendingUp,
//     desc: "Seamless payment orchestration system enabling secure transactions, multi-gateway support, and real-time tracking. Perfect for businesses looking to simplify and scale their payment infrastructure.",
//     heroDescription:
//       "ShiftoPay is a powerful payment orchestration platform that simplifies multi-gateway integration, automates payouts, and provides real-time payment analytics — helping businesses deliver a seamless and secure transaction experience to their customers.",

//     // ── Key Features ──
//     features: [
//       {
//         icon: Globe,
//         title: "Multi-Gateway Integration",
//         description:
//           "Connect Razorpay, PayU, Cashfree, Stripe, PayPal, and other gateways through a single unified API.",
//       },
//       {
//         icon: Zap,
//         title: "Smart Payment Routing",
//         description:
//           "Intelligent routing of transactions to the best-performing gateway based on success rate, cost, and speed.",
//       },
//       {
//         icon: Shield,
//         title: "Secure Transaction Processing",
//         description:
//           "PCI-DSS compliant infrastructure with end-to-end encryption, fraud detection, and 3D Secure authentication.",
//       },
//       {
//         icon: BarChart2,
//         title: "Real-Time Payment Analytics",
//         description:
//           "Live transaction dashboards, success rate monitoring, gateway performance comparison, and revenue reports.",
//       },
//       {
//         icon: RefreshCw,
//         title: "Automated Reconciliation",
//         description:
//           "Automatic payment reconciliation across multiple gateways with discrepancy alerts and settlement tracking.",
//       },
//       {
//         icon: Lock,
//         title: "Payout & Refund Management",
//         description:
//           "Bulk payout processing, instant refunds, split payment distribution, and vendor payment automation.",
//       },
//     ],

//     // ── Development Process ──
//     process: [
//       {
//         step: "01",
//         title: "Payment Audit",
//         description:
//           "Analysis of your current payment setup, gateways used, failure rates, and integration requirements.",
//       },
//       {
//         step: "02",
//         title: "Integration Architecture",
//         description:
//           "Designing the orchestration layer to connect your chosen gateways with your platform seamlessly.",
//       },
//       {
//         step: "03",
//         title: "Development & Security Testing",
//         description:
//           "Building the integration with rigorous security testing, PCI compliance checks, and gateway certification.",
//       },
//       {
//         step: "04",
//         title: "Go-Live & Monitoring",
//         description:
//           "Production deployment with real-time monitoring, transaction alerts, and dedicated technical support.",
//       },
//     ],

//     // ── FAQs ──
//     faqs: [
//       {
//         question: "Which payment gateways do you support?",
//         answer:
//           "We support all major Indian and international gateways including Razorpay, PayU, Cashfree, Instamojo, Stripe, PayPal, CCAvenue, and more.",
//       },
//       {
//         question: "Is the system PCI-DSS compliant?",
//         answer:
//           "Yes. All our payment integrations follow PCI-DSS standards with proper security certifications and regular audits.",
//       },
//       {
//         question: "Can it handle high transaction volumes?",
//         answer:
//           "Yes. The system is built on scalable cloud infrastructure capable of processing thousands of transactions per second.",
//       },
//       {
//         question: "Do you support UPI and wallet payments?",
//         answer:
//           "Yes. Full support for UPI, Paytm, PhonePe, Google Pay, Amazon Pay, and all major Indian digital payment methods.",
//       },
//     ],

//     // ── Image + Content Section ──
//     imageContentSection: {
//       heading: "Stop Losing Revenue to Payment Failures and Gateway Issues",
//       paragraphs: [
//         "Payment failures are one of the most significant causes of revenue loss for online businesses. When a transaction fails at checkout — whether due to a gateway outage, network timeout, or bank decline — the customer rarely retries. That sale is lost. For businesses processing thousands of transactions daily, even a 2% failure rate translates into significant revenue leakage.",
//         "ShiftoPay's intelligent payment orchestration solves this problem by automatically routing each transaction to the gateway most likely to succeed in that moment. If your primary gateway is experiencing issues, transactions seamlessly shift to an alternate gateway — without the customer even noticing. This smart routing alone has helped our clients improve their payment success rates by 15-25%.",
//       ],
//       imageSrc:
//         "https://inai.io/hubfs/global-payment-method-guide-localize-your-ecommerce.png",
//       imageAlt: "ShiftoPay Payment Integration Dashboard",
//       imageLeft: true,
//     },

//     // ── SEO Text Sections ──
//     seoSections: [
//       {
//         heading:
//           "Payment Integration Solutions for E-Commerce, SaaS, and Marketplace Businesses",
//         paragraphs: [
//           "Different business models have different payment integration needs. An e-commerce platform needs a smooth checkout experience with multiple payment options. A SaaS company needs recurring billing and subscription management. A marketplace needs split payments between buyers, sellers, and the platform. A lending company needs EMI and NACH integration. ShiftoPay handles all of these scenarios through a single, unified integration.",
//           "Our payment integration services have been successfully deployed for businesses across e-commerce, travel, EdTech, FinTech, healthcare, and marketplace sectors. Each implementation is customized to the specific payment flows, compliance requirements, and user experience needs of that industry. We do not offer a one-size-fits-all solution — we design a payment architecture that fits your exact business model.",
//           "With the rapid evolution of India's digital payment ecosystem — including new UPI features, RBI guidelines, and emerging payment methods — staying current is critical. Our team stays ahead of these changes and ensures your payment integration remains up to date, compliant, and optimized for the latest payment technologies.",
//         ],
//       },
//     ],

//     // ── Why Choose Points ──
//     whyChoosePoints: [
//       "Single API for 15+ payment gateways",
//       "Smart routing for maximum success rates",
//       "PCI-DSS compliant and RBI regulated",
//       "Real-time transaction monitoring dashboard",
//       "Automated reconciliation and settlement reports",
//       "Support for UPI, wallets, cards, net banking, EMI",
//     ],
//   },
// ];

// // ============================================================
// // HELPER FUNCTION
// // Slug se software dhundhne ke liye
// // ============================================================
// export function getSoftwareBySlug(slug) {
//   return softwares.find((software) => software.slug === slug);
// }


import {
  Monitor,
  BarChart2,
  Smartphone,
  TrendingUp,
  Users,
  Shield,
  Zap,
  RefreshCw,
  Target,
  CheckCircle,
  Globe,
  Database,
  Lock,
  Layers,
  Settings,
} from "lucide-react";

// ============================================================
// SOFTWARES DATA ARRAY
// ============================================================

export const softwares = [

  // ──────────────────────────────────────────────────────────
  // 1. TRAVEL CRM SOFTWARE
  // ──────────────────────────────────────────────────────────
  {
    slug: "travel-crm-software",
    title: " Drishti Travel CRM Software",
    tag: "CRM",
    color: "from-blue-400 to-[#49BCE3]",
    icon: Monitor,

    // ── SEO Meta Tags ──────────────────────────────────────
    seoTitle: "Travel CRM Software | Tour Operator & Travel Agency Management System",
    seoDescription:
      "Powerful Travel CRM built for tour operators and travel agencies. Manage leads, bookings, itineraries, vendor payments, and client communication from one intelligent platform.",
    seoKeywords:
      "travel CRM software, tour operator software, travel agency management system, booking management software, itinerary management, travel CRM India",

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: "Travel CRM Software | Complete Tour Operator Management System",
      description:
        "Manage leads, bookings, itineraries, vendors, and client communication from one powerful Travel CRM built for travel agencies and tour operators.",
      url: "https://yourdomain.com/softwares/travel-crm-software",
      type: "website",
      image: "https://yourdomain.com/og/travel-crm-software.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ───────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Travel CRM Software | Built for Tour Operators & Travel Agencies",
      description:
        "Lead management, booking engine, itinerary planning, and client portal — all in one Travel CRM.",
      image: "https://yourdomain.com/og/travel-crm-software.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ──────────────────────────────────────
    canonical: "https://yourdomain.com/softwares/travel-crm-software",

    // ── WebPage Schema (JSON-LD) ───────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Travel CRM Software",
      description:
        "Powerful Travel CRM solution built for tour operators, travel agencies, and hospitality businesses to manage leads, bookings, itineraries, and client communication.",
      url: "https://yourdomain.com/softwares/travel-crm-software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "YourBrandName",
          url: "https://yourdomain.com",
        },
      },
    },
    // ── SEO Fields End ─────────────────────────────────────

    desc: "A complete travel management CRM designed for tour operators and agencies. Manage leads, bookings, itineraries, and customer communication from a single dashboard — boosting efficiency and delivering seamless travel experiences.",
    heroDescription:
      "Powerful Travel CRM solution built specifically for tour operators, travel agencies, and hospitality businesses. Streamline your entire operations with lead management, booking engine, itinerary planning, vendor management, and customer communication — all in one intelligent platform.",

    features: [
      {
        icon: Target,
        title: "Lead & Enquiry Management",
        description:
          "Capture, track, and nurture leads efficiently with automated follow-ups, priority tagging, and real-time status tracking.",
      },
      {
        icon: RefreshCw,
        title: "Booking & Itinerary Management",
        description:
          "Create, modify, and manage complete travel itineraries with real-time updates, multi-day trip planning, and client portal access.",
      },
      {
        icon: Users,
        title: "Client & Vendor Portal",
        description:
          "Dedicated portals for clients and vendors for seamless communication, document sharing, and booking confirmations.",
      },
      {
        icon: BarChart2,
        title: "Advanced Analytics & Reports",
        description:
          "Real-time dashboards and insightful reports to track business performance, team productivity, and profitability.",
      },
      {
        icon: Shield,
        title: "Secure Payment Integration",
        description:
          "Multiple payment gateways with secure transaction handling, automated invoice generation, and payment reminders.",
      },
      {
        icon: Zap,
        title: "Automated Workflows",
        description:
          "Reduce manual work with smart automation for quotations, booking confirmations, payment reminders, and follow-up emails.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Requirement Analysis",
        description:
          "Deep understanding of your travel business processes, pain points, team structure, and growth objectives.",
      },
      {
        step: "02",
        title: "System Design",
        description:
          "Custom architecture and UI/UX design tailored for travel industry workflows and user experience.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "Agile development with integration of payment gateways, SMS/Email APIs, and third-party travel APIs.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description:
          "Rigorous quality testing followed by smooth deployment, data migration, and team onboarding.",
      },
    ],

    faqs: [
      {
        question: "Can I customize the CRM according to my travel business?",
        answer:
          "Yes. We build fully customized Travel CRM solutions tailored to your specific business requirements, workflows, and branding.",
      },
      {
        question: "Does it support multiple payment gateways?",
        answer:
          "Absolutely. We integrate Razorpay, PayPal, Stripe, CCAvenue, and other popular payment solutions based on your preference.",
      },
      {
        question: "Is there a client portal for my customers?",
        answer:
          "Yes. Customers can view their bookings, itineraries, invoices, and make payments through a secure, branded client portal.",
      },
      {
        question: "Do you provide training and support?",
        answer:
          "Yes. We provide complete hands-on training to your team and offer ongoing technical support with dedicated account management.",
      },
      {
        question: "Can it handle multiple branches or offices?",
        answer:
          "Yes. Our Travel CRM supports multi-branch and multi-user setup with role-based access control and centralized reporting.",
      },
    ],

    imageContentSection: {
      heading: "Why Travel Businesses Need a Dedicated CRM System",
      paragraphs: [
        "The travel industry is one of the most relationship-driven businesses in the world. From the moment a traveler submits an enquiry to the day they return from their trip — every touchpoint matters. A generic CRM simply cannot handle the complexity of tour packaging, vendor coordination, itinerary customization, and real-time booking management that travel businesses require daily.",
        "Our Travel CRM Software is built ground-up for travel agencies, tour operators, and DMCs. It centralizes your entire operation — lead tracking, package creation, vendor payments, client communication, and financial reporting — into one powerful, easy-to-use platform. Whether you are a boutique travel agency handling 50 bookings a month or a large operator managing thousands of customers, our system scales with your business.",
      ],
      imageSrc:
        "https://getjess.com/wp-content/uploads/2020/07/People-Project-Management.jpg",
      imageAlt: "Travel CRM Software for Tour Operators",
      imageLeft: true,
    },

    seoSections: [
      {
        heading: "Complete Travel Agency Management Software for Indian Market",
        paragraphs: [
          "India's travel industry is growing rapidly, and with it comes the challenge of managing a high volume of enquiries, diverse customer expectations, and complex package customizations. Our Travel CRM Software is specifically designed keeping Indian travel businesses in mind — from domestic tour operators in cities like Delhi, Mumbai, Jaipur, and Bangalore to international travel agencies handling global itineraries.",
          "The software supports multi-currency billing, GST-compliant invoicing, and integrations with popular Indian payment gateways like Razorpay and Paytm. It also connects seamlessly with WhatsApp Business API, allowing your team to communicate with clients through their preferred messaging platform — reducing response times and improving conversion rates significantly.",
          "Whether you specialize in pilgrimage tours, honeymoon packages, corporate travel, or adventure tourism, our system adapts to your business model. Custom fields, flexible package templates, and configurable workflows ensure that the CRM fits your process — not the other way around.",
        ],
      },
      {
        heading: "How Our Travel CRM Software Boosts Your Revenue",
        paragraphs: [
          "Most travel businesses lose revenue not because of bad products but due to poor follow-up, missed enquiries, and disorganized operations. Our Travel CRM Software solves these problems systematically. Every incoming lead — whether from your website, social media, or referral — is automatically captured, assigned to the right salesperson, and tracked through the entire sales funnel.",
          "The system sends automated reminders for follow-ups, payment due dates, and travel document submissions. This ensures nothing falls through the cracks. With detailed performance reports, managers can identify top-performing agents, high-converting lead sources, and the most profitable tour packages — enabling data-driven decisions that directly impact the bottom line.",
          "Our clients have reported up to 40% reduction in manual workload and a significant improvement in lead-to-booking conversion rates after implementing our Travel CRM solution. The system pays for itself within months through improved efficiency and increased sales.",
        ],
      },
    ],

    whyChoosePoints: [
      "100% customizable as per your business workflow",
      "GST-compliant invoicing and financial reports",
      "WhatsApp & Email automation for client communication",
      "Multi-branch support with role-based access",
      "Dedicated support team with fast response time",
      "Regular updates and new feature additions",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 2. HRMS SOFTWARE
  // ──────────────────────────────────────────────────────────
  {
    slug: "hrms-software",
    title: "HRMS Software",
    tag: "HR Tech",
    color: "from-indigo-400 to-purple-400",
    icon: Users,

    // ── SEO Meta Tags ──────────────────────────────────────
    seoTitle: "HRMS Software | HR Management System for Indian Businesses",
    seoDescription:
      "Comprehensive HRMS that automates attendance, payroll, leave management, recruitment, and performance appraisals. Fully compliant with Indian statutory requirements — PF, ESI, TDS.",
    seoKeywords:
      "HRMS software, HR management system, payroll software India, attendance management, leave management software, HR software for small business, PF ESI compliance software",

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: "HRMS Software | Automate HR Operations for Indian Businesses",
      description:
        "Payroll automation, attendance tracking, leave management, and statutory compliance — all in one HRMS built for Indian organizations.",
      url: "https://yourdomain.com/softwares/hrms-software",
      type: "website",
      image: "https://yourdomain.com/og/hrms-software.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ───────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "HRMS Software | HR Automation for Indian Businesses",
      description:
        "Payroll, attendance, leave, performance — complete HRMS with Indian statutory compliance (PF, ESI, TDS).",
      image: "https://yourdomain.com/og/hrms-software.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ──────────────────────────────────────
    canonical: "https://yourdomain.com/softwares/hrms-software",

    // ── WebPage Schema (JSON-LD) ───────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HRMS Software",
      description:
        "Comprehensive Human Resource Management System that automates HR operations including payroll, attendance, leave management, and Indian statutory compliance.",
      url: "https://yourdomain.com/softwares/hrms-software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "YourBrandName",
          url: "https://yourdomain.com",
        },
      },
    },
    // ── SEO Fields End ─────────────────────────────────────

    desc: "Streamline your human resource operations with a powerful HRMS system. From attendance tracking and payroll automation to employee performance and leave management — everything in one secure platform.",
    heroDescription:
      "Comprehensive Human Resource Management System (HRMS) that automates and simplifies all HR operations — from recruitment and onboarding to payroll, attendance, performance management, and employee engagement.",

    features: [
      {
        icon: Zap,
        title: "Attendance & Leave Management",
        description:
          "Biometric, GPS, and web-based attendance tracking with automated leave approval workflow and holiday calendar.",
      },
      {
        icon: BarChart2,
        title: "Payroll Automation",
        description:
          "Automated salary calculation with statutory deductions (PF, ESI, TDS), payslip generation, and bank transfer integration.",
      },
      {
        icon: Target,
        title: "Performance Management",
        description:
          "Goal setting, KPI tracking, quarterly appraisals, and 360-degree feedback system for employee development.",
      },
      {
        icon: Users,
        title: "Recruitment & Onboarding",
        description:
          "End-to-end recruitment pipeline management with job posting, applicant tracking, and digital onboarding workflows.",
      },
      {
        icon: Shield,
        title: "Employee Self-Service Portal",
        description:
          "Employees can apply for leaves, view payslips, update personal information, and raise HR requests independently.",
      },
      {
        icon: Database,
        title: "HR Analytics & Compliance",
        description:
          "Statutory compliance reports (PF, ESI, PT), attrition analysis, headcount reports, and workforce planning insights.",
      },
    ],

    process: [
      {
        step: "01",
        title: "HR Process Study",
        description:
          "Detailed study of your existing HR workflows, company policies, org structure, and pain points.",
      },
      {
        step: "02",
        title: "Custom HRMS Design",
        description:
          "Designing modules and workflows as per your company policies, pay structures, and compliance requirements.",
      },
      {
        step: "03",
        title: "Development & Integration",
        description:
          "Building the system with integrations to biometric devices, accounting software, and existing tools.",
      },
      {
        step: "04",
        title: "Training & Go-Live",
        description:
          "Complete team training, data migration from existing systems, and successful go-live with dedicated support.",
      },
    ],

    faqs: [
      {
        question: "Can it handle multiple company branches?",
        answer:
          "Yes. Our HRMS supports multi-company and multi-branch structure with separate policy configurations for each entity.",
      },
      {
        question: "Is payroll compliant with Indian laws?",
        answer:
          "Yes. Fully compliant with TDS, PF, ESI, Professional Tax, Gratuity, and all other Indian statutory requirements.",
      },
      {
        question: "Can employees access it on mobile?",
        answer:
          "Yes. Our HRMS has a mobile-responsive design and optional mobile app for employee self-service features.",
      },
      {
        question: "Does it integrate with biometric attendance devices?",
        answer:
          "Yes. We integrate with all major biometric attendance hardware brands used in Indian offices.",
      },
    ],

    imageContentSection: {
      heading: "Modernize Your HR Operations with Intelligent Automation",
      paragraphs: [
        "Managing human resources manually — through Excel sheets, paper registers, and scattered email threads — is not just inefficient, it is also error-prone and non-compliant. As organizations grow, these challenges multiply. A single payroll error or a missed compliance deadline can lead to significant financial and legal consequences.",
        "Our HRMS Software eliminates these risks by automating the entire HR lifecycle. From the day an employee joins your organization to their exit formalities — every process is digitized, trackable, and compliant. Payroll runs that used to take days now complete in minutes. Leave approvals that required multiple follow-ups are now just one click on a mobile screen.",
      ],
      imageSrc:
        "https://www.sgcms.com/wp-content/uploads/2024/07/what-is-hrms-software.png",
      imageAlt: "HRMS Software for Indian Businesses",
      imageLeft: false,
    },

    seoSections: [
      {
        heading: "HRMS Software Built for Indian Businesses and Compliance",
        paragraphs: [
          "Indian HR compliance is complex. With multiple statutory requirements like Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), TDS on salary, and Shops & Establishment Act compliance varying across states — managing HR without proper software is a constant risk. Our HRMS Software is built with Indian compliance at its core.",
          "The system automatically calculates PF, ESI, and PT deductions based on your state-specific configurations. It generates Form 16, Form 24Q, and other statutory reports directly from the system — saving your HR team hours of manual work every quarter. All calculations stay updated with the latest government regulations, so you are always compliant.",
          "Whether you are a startup with 20 employees in Bangalore or a manufacturing company with 2,000 workers across multiple states, our HRMS scales to your needs while maintaining complete regulatory compliance.",
        ],
      },
      {
        heading: "Improve Employee Experience with Self-Service HR Tools",
        paragraphs: [
          "Modern employees expect digital convenience in their workplace tools. When employees have to submit leave applications on paper, wait for payslips by email, or stand in queue at the HR desk for basic queries — it impacts their experience and your HR team's productivity simultaneously.",
          "Our Employee Self-Service portal empowers employees to manage their own HR needs independently. They can apply for leaves, check leave balances, download payslips, view attendance records, update personal information, and raise IT or admin requests — all from their smartphone or computer, anytime, anywhere.",
          "For HR managers, this means fewer routine queries, more accurate employee data, and faster processing times. The result is a happier workforce and a more efficient HR department — a win for the entire organization.",
        ],
      },
    ],

    whyChoosePoints: [
      "Full Indian statutory compliance (PF, ESI, TDS, PT)",
      "Biometric & GPS attendance integration",
      "Mobile app for employee self-service",
      "Customizable for your company policies",
      "Secure cloud or on-premise deployment options",
      "Dedicated HR implementation consultant",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 3. MLM SOFTWARE
  // ──────────────────────────────────────────────────────────
  {
    slug: "mlm-software",
    title: "MLM Software",
    tag: "MLM",
    color: "from-orange-400 to-rose-400",
    icon: BarChart2,

    // ── SEO Meta Tags ──────────────────────────────────────
    seoTitle: "MLM Software | Network Marketing Software with Commission Engine",
    seoDescription:
      "Advanced MLM Software with binary, matrix, unilevel plan support, real-time commission engine, genealogy tree, e-wallet, and instant payout integration. Built for Indian direct selling companies.",
    seoKeywords:
      "MLM software, network marketing software, binary MLM software, direct selling software, commission management software, MLM software India, genealogy tree software",

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: "MLM Software | Advanced Network Marketing Platform",
      description:
        "Binary, matrix, unilevel plans — real-time commission engine, genealogy visualization, e-wallet, and instant UPI payouts for your MLM business.",
      url: "https://yourdomain.com/softwares/mlm-software",
      type: "website",
      image: "https://yourdomain.com/og/mlm-software.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ───────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "MLM Software | All Plans Supported | Real-Time Commission Engine",
      description:
        "Scalable MLM software with all compensation plans, real-time commissions, genealogy tree, and instant payouts.",
      image: "https://yourdomain.com/og/mlm-software.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ──────────────────────────────────────
    canonical: "https://yourdomain.com/softwares/mlm-software",

    // ── WebPage Schema (JSON-LD) ───────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "MLM Software",
      description:
        "Powerful and scalable MLM Software with advanced commission plans, genealogy visualization, e-wallet, and real-time analytics for network marketing businesses.",
      url: "https://yourdomain.com/softwares/mlm-software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "YourBrandName",
          url: "https://yourdomain.com",
        },
      },
    },
    // ── SEO Fields End ─────────────────────────────────────

    desc: "Advanced multi-level marketing software with smart commission distribution, genealogy tree tracking, and real-time reporting. Designed for scalability, transparency, and business growth.",
    heroDescription:
      "Powerful and scalable MLM Software with advanced commission plans, genealogy visualization, e-wallet, and real-time analytics to help your network marketing business grow efficiently and transparently.",

    features: [
      {
        icon: Layers,
        title: "Multiple MLM Plan Support",
        description:
          "Binary, Matrix, Unilevel, Board, Hybrid — all major MLM compensation plans supported with full customization.",
      },
      {
        icon: BarChart2,
        title: "Commission & Bonus Engine",
        description:
          "Smart commission distribution engine with real-time calculations for referral, level, matching, and leadership bonuses.",
      },
      {
        icon: Users,
        title: "Genealogy Tree Visualization",
        description:
          "Interactive genealogy tree showing your entire downline structure with performance metrics at every node.",
      },
      {
        icon: Shield,
        title: "E-Wallet & Payout Management",
        description:
          "Built-in e-wallet for commission storage, instant bank transfers, UPI payouts, and transaction history.",
      },
      {
        icon: Target,
        title: "Rank & Achievement System",
        description:
          "Configurable rank advancement system with automated rank upgrades, achievement badges, and incentive tracking.",
      },
      {
        icon: Globe,
        title: "Member Portal & App",
        description:
          "Feature-rich member dashboard with personal performance stats, team reports, and referral link management.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Plan Understanding",
        description:
          "Deep dive into your MLM compensation plan, commission structure, and business rules.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Scalable system architecture designed to handle large member networks without performance issues.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description:
          "Commission engine development with rigorous testing for calculation accuracy and edge cases.",
      },
      {
        step: "04",
        title: "Launch & Support",
        description:
          "System launch with member onboarding support, admin training, and ongoing technical assistance.",
      },
    ],

    faqs: [
      {
        question: "Which MLM plans do you support?",
        answer:
          "We support all major plans including Binary, Matrix, Unilevel, Board Plan, Generation Plan, and custom hybrid plans.",
      },
      {
        question: "Can it handle lakhs of members?",
        answer:
          "Yes. Our MLM software is built on scalable cloud infrastructure and has been deployed for networks with over 5 lakh members.",
      },
      {
        question: "Is the commission calculation accurate?",
        answer:
          "Yes. Our commission engine is rigorously tested and handles complex multi-level calculations with 100% accuracy.",
      },
      {
        question: "Do you provide source code?",
        answer:
          "Yes. We offer source code delivery with proper documentation based on your licensing agreement.",
      },
    ],

    imageContentSection: {
      heading: "Build a Transparent and Scalable Network Marketing Business",
      paragraphs: [
        "Trust is the foundation of any successful MLM business. When distributors cannot see their commissions clearly, when the genealogy tree is confusing, or when payouts are delayed — the entire network loses confidence. Our MLM Software is built with transparency and accuracy at its core, giving every member complete visibility into their earnings, team performance, and rank progress.",
        "The software handles the most complex commission structures effortlessly. Whether your plan has 7 levels of referral commissions, matching bonuses up to generation 5, or a binary plan with carry-forward volumes — our commission engine processes everything accurately in real time. Members see their earnings update instantly, building trust and motivation throughout your network.",
      ],
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLjnI9WI2FWHa1RfS5ynvm4vQ7XrXxp690A&s",
      imageAlt: "MLM Software with Genealogy Tree",
      imageLeft: true,
    },

    seoSections: [
      {
        heading: "Custom MLM Software Development for Indian Network Marketing Companies",
        paragraphs: [
          "India is one of the largest and fastest-growing direct selling markets in the world, with millions of distributors across thousands of network marketing companies. Running an MLM business in India comes with its own set of requirements — UPI and bank transfer payouts, GST compliance on product sales, Aadhaar/PAN-based KYC verification, and regulatory compliance with the Direct Selling Guidelines issued by the government.",
          "Our MLM Software is built keeping Indian market requirements at the forefront. The system integrates with major Indian payment gateways for instant commission payouts, supports GST invoicing for product transactions, and includes a built-in KYC module for member verification. Whether you are launching a new direct selling company or upgrading your existing system, we deliver a compliant, robust, and feature-rich solution.",
          "We have built MLM software for companies across product categories including health and wellness, agriculture, education, cosmetics, and financial services — each with unique compensation plans and business models. Our experience across these verticals allows us to implement your plan quickly and correctly.",
        ],
      },
      {
        heading: "Why the Right MLM Software is Your Most Critical Business Asset",
        paragraphs: [
          "In network marketing, your software is not just a tool — it is the backbone of your entire operation. When commissions are calculated incorrectly, members lose trust. When the genealogy tree is slow or inaccurate, leaders cannot manage their teams. When payouts are delayed, motivation drops. A poor software choice can destroy a growing MLM business.",
          "Conversely, a well-built MLM software becomes a powerful recruitment and retention tool. When new members join and immediately see a clean, professional dashboard with clear commission tracking and team visualization — it builds confidence in your business. When leaders can monitor their team's performance in real time and plan their growth strategies based on accurate data — they perform better and recruit more actively.",
          "We understand the stakes involved in MLM software. That is why every system we build goes through extensive testing — especially the commission engine — before deployment. We have handled deployments for networks ranging from 500 to 5 lakh+ members, and we know exactly what it takes to build software that performs reliably at scale.",
        ],
      },
    ],

    whyChoosePoints: [
      "Supports all major MLM compensation plans",
      "Real-time commission calculation engine",
      "UPI, NEFT, and instant payout integrations",
      "GST-compliant invoicing and reports",
      "Scalable for networks of any size",
      "KYC verification and compliance module",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 4. TASK MANAGEMENT SOFTWARE
  // ──────────────────────────────────────────────────────────
  {
    slug: "task-management-software",
    title: "Task Management Software",
    tag: "Productivity",
    color: "from-emerald-400 to-teal-400",
    icon: Smartphone,

    // ── SEO Meta Tags ──────────────────────────────────────
    seoTitle: "Task Management Software | Custom Team Productivity & Project Tracking Tool",
    seoDescription:
      "Custom task management software for teams — assign tasks, track deadlines, monitor progress, and boost productivity with Kanban boards, Gantt charts, and real-time collaboration.",
    seoKeywords:
      "task management software, project management tool, team productivity software, custom task tracker, Kanban software, workflow management, task tracking system India",

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: "Task Management Software | Organize, Track & Deliver on Time",
      description:
        "Custom task management system with Kanban boards, Gantt charts, team collaboration, and productivity analytics — built for your exact workflow.",
      url: "https://yourdomain.com/softwares/task-management-software",
      type: "website",
      image: "https://yourdomain.com/og/task-management-software.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ───────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "Task Management Software | Built for Your Team's Workflow",
      description:
        "Assign tasks, track deadlines, monitor progress — custom task management software with Kanban, Gantt, and analytics.",
      image: "https://yourdomain.com/og/task-management-software.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ──────────────────────────────────────
    canonical: "https://yourdomain.com/softwares/task-management-software",

    // ── WebPage Schema (JSON-LD) ───────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Task Management Software",
      description:
        "Custom task management software that helps teams stay organized, meet deadlines, and collaborate efficiently with real-time tracking and productivity analytics.",
      url: "https://yourdomain.com/softwares/task-management-software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "YourBrandName",
          url: "https://yourdomain.com",
        },
      },
    },
    // ── SEO Fields End ─────────────────────────────────────

    desc: "Organize, track, and manage your team's workflow efficiently. Assign tasks, monitor progress, set deadlines, and improve productivity with a modern and intuitive task management system.",
    heroDescription:
      "Intuitive Task Management Software that helps teams stay organized, meet deadlines, and collaborate efficiently — with real-time task tracking, priority management, and insightful productivity analytics.",

    features: [
      {
        icon: CheckCircle,
        title: "Task Assignment & Tracking",
        description:
          "Create, assign, and track tasks with due dates, priorities, and status updates visible to the entire team in real time.",
      },
      {
        icon: Layers,
        title: "Project & Sprint Management",
        description:
          "Organize work into projects and sprints with Kanban boards, Gantt charts, and milestone tracking.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description:
          "Task-level comments, file attachments, mentions, and real-time notifications keep every team member aligned.",
      },
      {
        icon: BarChart2,
        title: "Productivity Analytics",
        description:
          "Team performance reports, workload analysis, on-time delivery metrics, and individual productivity dashboards.",
      },
      {
        icon: Zap,
        title: "Automation & Reminders",
        description:
          "Automated task reminders, deadline alerts, escalation rules, and recurring task scheduling.",
      },
      {
        icon: Settings,
        title: "Custom Workflows",
        description:
          "Configure task statuses, approval workflows, and team structures to match your exact operational process.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Workflow Analysis",
        description:
          "Understanding your team structure, project types, and current task management challenges.",
      },
      {
        step: "02",
        title: "System Design",
        description:
          "Designing intuitive UI/UX and workflow configurations tailored to your team's way of working.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description:
          "Building the system with thorough testing for performance, usability, and reliability.",
      },
      {
        step: "04",
        title: "Onboarding & Support",
        description:
          "Team onboarding, training sessions, and ongoing support to ensure successful adoption.",
      },
    ],

    faqs: [
      {
        question: "Is this better than tools like Trello or Asana?",
        answer:
          "Our custom task management software is tailored specifically to your business workflows, unlike generic tools. It integrates with your existing systems and includes features designed for your team's exact needs.",
      },
      {
        question: "Can it handle multiple departments?",
        answer:
          "Yes. The system supports multi-department structure with separate workspaces, permission levels, and reporting for each team.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Yes. A mobile-responsive web app and optional native mobile app is available for task management on the go.",
      },
      {
        question: "Can we integrate it with our existing tools?",
        answer:
          "Yes. We can integrate the system with Slack, email, ERP systems, CRM tools, and other software your team already uses.",
      },
    ],

    imageContentSection: {
      heading: "Give Your Team the Tools to Deliver Work Without Chaos",
      paragraphs: [
        "Most teams today struggle not because they lack talent, but because they lack visibility. Who is working on what? Is that critical deadline on track? Why did that task fall through the cracks? These questions — when left unanswered — lead to missed deadlines, duplicated efforts, and frustrated team members.",
        "Our Task Management Software brings complete clarity to your team's operations. Every task, every deadline, every responsibility is visible in a single organized view. Team members know exactly what they need to do today. Managers can see the status of every project at a glance without sending follow-up messages. Bottlenecks are identified early before they become missed deadlines.",
        "Whether your team is in the same office or distributed across cities, our software ensures everyone stays aligned, accountable, and productive. With smart automation handling reminders and escalations, nothing gets forgotten and no manager needs to micromanage.",
      ],
      imageSrc:
        "https://www.invensislearning.com/blog/wp-content/uploads/2025/12/top-task-management-software-for-teams-banner-image-696x464.jpg",
      imageAlt: "Task Management Software for Teams",
      imageLeft: false,
    },

    seoSections: [
      {
        heading: "Custom Task Management Software vs Off-the-Shelf Tools",
        paragraphs: [
          "Tools like Trello, Asana, Monday.com, and Jira are popular for a reason — they solve basic task management needs quickly. However, as organizations grow and their processes become more complex, the limitations of these generic tools become apparent. You find yourself creating workarounds, paying for expensive add-ons, or forcing your team to adapt their natural workflow to fit the software.",
          "Custom task management software, built specifically for your organization, eliminates these compromises. Your team's actual workflow — including unique approval processes, department-specific statuses, integration with your internal systems, and reporting requirements — is built directly into the software. There are no workarounds because the system is designed for your exact way of working.",
          "The result is higher adoption, less training time, better data quality, and ultimately a system that your team actually enjoys using — instead of treating it as just another tool to update.",
        ],
      },
    ],

    whyChoosePoints: [
      "Fully customized to your team's workflow",
      "Integrates with your existing tools and systems",
      "Kanban, List, and Gantt view options",
      "Role-based access for different team levels",
      "Mobile-friendly for remote and field teams",
      "Detailed productivity and performance reports",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 5. SHIFTOPAY PAYMENT INTEGRATION
  // ──────────────────────────────────────────────────────────
  {
    slug: "shiftopay-payment-integration",
    title: "ShiftoPay Payment Integration",
    tag: "FinTech",
    color: "from-amber-400 to-yellow-500",
    icon: TrendingUp,

    // ── SEO Meta Tags ──────────────────────────────────────
    seoTitle: "ShiftoPay Payment Integration | Multi-Gateway Payment Orchestration",
    seoDescription:
      "ShiftoPay simplifies multi-gateway payment integration with smart routing, automated reconciliation, and real-time analytics. Supports Razorpay, Stripe, UPI, wallets, and more.",
    seoKeywords:
      "payment gateway integration, payment orchestration, multi-gateway integration, Razorpay integration, UPI payment integration, payment reconciliation software, fintech payment solution India",

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: "ShiftoPay | Multi-Gateway Payment Orchestration Platform",
      description:
        "Connect 15+ payment gateways through one API. Smart routing, automated reconciliation, and real-time analytics for maximum payment success rates.",
      url: "https://yourdomain.com/softwares/shiftopay-payment-integration",
      type: "website",
      image: "https://yourdomain.com/og/shiftopay-payment-integration.jpg",
      siteName: "YourBrandName",
    },

    // ── Twitter Card ───────────────────────────────────────
    twitterCard: {
      card: "summary_large_image",
      title: "ShiftoPay | Stop Losing Revenue to Payment Failures",
      description:
        "Smart payment routing, 15+ gateway support, PCI-DSS compliance, and real-time transaction monitoring.",
      image: "https://yourdomain.com/og/shiftopay-payment-integration.jpg",
      site: "@YourTwitterHandle",
    },

    // ── Canonical URL ──────────────────────────────────────
    canonical: "https://yourdomain.com/softwares/shiftopay-payment-integration",

    // ── WebPage Schema (JSON-LD) ───────────────────────────
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ShiftoPay Payment Integration",
      description:
        "Payment orchestration platform that simplifies multi-gateway integration, automates payouts, and provides real-time payment analytics for seamless and secure transactions.",
      url: "https://yourdomain.com/softwares/shiftopay-payment-integration",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "YourBrandName",
          url: "https://yourdomain.com",
        },
      },
    },
    // ── SEO Fields End ─────────────────────────────────────

    desc: "Seamless payment orchestration system enabling secure transactions, multi-gateway support, and real-time tracking. Perfect for businesses looking to simplify and scale their payment infrastructure.",
    heroDescription:
      "ShiftoPay is a powerful payment orchestration platform that simplifies multi-gateway integration, automates payouts, and provides real-time payment analytics — helping businesses deliver a seamless and secure transaction experience to their customers.",

    features: [
      {
        icon: Globe,
        title: "Multi-Gateway Integration",
        description:
          "Connect Razorpay, PayU, Cashfree, Stripe, PayPal, and other gateways through a single unified API.",
      },
      {
        icon: Zap,
        title: "Smart Payment Routing",
        description:
          "Intelligent routing of transactions to the best-performing gateway based on success rate, cost, and speed.",
      },
      {
        icon: Shield,
        title: "Secure Transaction Processing",
        description:
          "PCI-DSS compliant infrastructure with end-to-end encryption, fraud detection, and 3D Secure authentication.",
      },
      {
        icon: BarChart2,
        title: "Real-Time Payment Analytics",
        description:
          "Live transaction dashboards, success rate monitoring, gateway performance comparison, and revenue reports.",
      },
      {
        icon: RefreshCw,
        title: "Automated Reconciliation",
        description:
          "Automatic payment reconciliation across multiple gateways with discrepancy alerts and settlement tracking.",
      },
      {
        icon: Lock,
        title: "Payout & Refund Management",
        description:
          "Bulk payout processing, instant refunds, split payment distribution, and vendor payment automation.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Payment Audit",
        description:
          "Analysis of your current payment setup, gateways used, failure rates, and integration requirements.",
      },
      {
        step: "02",
        title: "Integration Architecture",
        description:
          "Designing the orchestration layer to connect your chosen gateways with your platform seamlessly.",
      },
      {
        step: "03",
        title: "Development & Security Testing",
        description:
          "Building the integration with rigorous security testing, PCI compliance checks, and gateway certification.",
      },
      {
        step: "04",
        title: "Go-Live & Monitoring",
        description:
          "Production deployment with real-time monitoring, transaction alerts, and dedicated technical support.",
      },
    ],

    faqs: [
      {
        question: "Which payment gateways do you support?",
        answer:
          "We support all major Indian and international gateways including Razorpay, PayU, Cashfree, Instamojo, Stripe, PayPal, CCAvenue, and more.",
      },
      {
        question: "Is the system PCI-DSS compliant?",
        answer:
          "Yes. All our payment integrations follow PCI-DSS standards with proper security certifications and regular audits.",
      },
      {
        question: "Can it handle high transaction volumes?",
        answer:
          "Yes. The system is built on scalable cloud infrastructure capable of processing thousands of transactions per second.",
      },
      {
        question: "Do you support UPI and wallet payments?",
        answer:
          "Yes. Full support for UPI, Paytm, PhonePe, Google Pay, Amazon Pay, and all major Indian digital payment methods.",
      },
    ],

    imageContentSection: {
      heading: "Stop Losing Revenue to Payment Failures and Gateway Issues",
      paragraphs: [
        "Payment failures are one of the most significant causes of revenue loss for online businesses. When a transaction fails at checkout — whether due to a gateway outage, network timeout, or bank decline — the customer rarely retries. That sale is lost. For businesses processing thousands of transactions daily, even a 2% failure rate translates into significant revenue leakage.",
        "ShiftoPay's intelligent payment orchestration solves this problem by automatically routing each transaction to the gateway most likely to succeed in that moment. If your primary gateway is experiencing issues, transactions seamlessly shift to an alternate gateway — without the customer even noticing. This smart routing alone has helped our clients improve their payment success rates by 15-25%.",
      ],
      imageSrc:
        "https://inai.io/hubfs/global-payment-method-guide-localize-your-ecommerce.png",
      imageAlt: "ShiftoPay Payment Integration Dashboard",
      imageLeft: true,
    },

    seoSections: [
      {
        heading: "Payment Integration Solutions for E-Commerce, SaaS, and Marketplace Businesses",
        paragraphs: [
          "Different business models have different payment integration needs. An e-commerce platform needs a smooth checkout experience with multiple payment options. A SaaS company needs recurring billing and subscription management. A marketplace needs split payments between buyers, sellers, and the platform. A lending company needs EMI and NACH integration. ShiftoPay handles all of these scenarios through a single, unified integration.",
          "Our payment integration services have been successfully deployed for businesses across e-commerce, travel, EdTech, FinTech, healthcare, and marketplace sectors. Each implementation is customized to the specific payment flows, compliance requirements, and user experience needs of that industry. We do not offer a one-size-fits-all solution — we design a payment architecture that fits your exact business model.",
          "With the rapid evolution of India's digital payment ecosystem — including new UPI features, RBI guidelines, and emerging payment methods — staying current is critical. Our team stays ahead of these changes and ensures your payment integration remains up to date, compliant, and optimized for the latest payment technologies.",
        ],
      },
    ],

    whyChoosePoints: [
      "Single API for 15+ payment gateways",
      "Smart routing for maximum success rates",
      "PCI-DSS compliant and RBI regulated",
      "Real-time transaction monitoring dashboard",
      "Automated reconciliation and settlement reports",
      "Support for UPI, wallets, cards, net banking, EMI",
    ],
  },
];

// ============================================================
// HELPER FUNCTION
// ============================================================
export function getSoftwareBySlug(slug) {
  return softwares.find((software) => software.slug === slug);
}

// export function getAllSlugs() {
//   return packages.map((p) => ({ slug: p.slug }));
// }
