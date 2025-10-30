"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  ChevronRight,
  ArrowLeft,
  Home,
  Layers,
  FileText, 
  File,
  Briefcase,
  Users,
  Book,
  HelpCircle,
  Lightbulb,
  Leaf,
  DollarSign,
  Phone,
  Code,
  Cloud,
  Shield,
  BarChart3,
  Heart,
  Server,
  Workflow,
  Target,
  GraduationCap,
  Settings,
  Zap,
  Database,
  Brain,
  Activity,
  PieChart,
  LineChart,
  Globe,
  Smartphone,
  Monitor,
  RefreshCcw,
  ServerCog,
  Network,
  CheckCircle,
  Cpu,
  Gauge,
  Wrench,
  Bug,
  Headphones,
  ClipboardCheck,
  Wallet,
  FileCode,
  DatabaseBackup,
  GitBranch,
  Boxes,
  Cog,
  KeyRound,
  Lock,
  ShieldCheck,
  AlertTriangle 
} from "lucide-react";

interface MenuItem {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

interface Props {
  onClose: () => void;
}

const menuData: MenuItem[] = [
  { title: "Home", subtitle: "Welcome to our platform", icon: <Home size={18} /> },
  {
    title: "Products & Services",
    subtitle: "Explore our offerings",
    icon: <Layers size={18} />,
    children: [
      {
        title: "Software Solutions",
        subtitle: "Custom software development and deployment",
        icon: <Code size={18} />,
        children: [
  {
    title: "Custom Software Development",
    subtitle: "Tailored solutions for unique business needs",
    icon: <Code size={18} />,
    children: [
      {
        title: "Web Application Development",
        subtitle: "Modern, scalable web applications",
        icon: <Globe size={18} />,
      },
      {
        title: "Mobile Application Development",
        subtitle: "Native and cross-platform mobile apps",
        icon: <Smartphone size={18} />,
      },
      {
        title: "Desktop Application Development",
        subtitle: "Robust and secure desktop solutions",
        icon: <Monitor size={18} />,
      },
    ],
  },
  {
    title: "Software Modernization",
    subtitle: "Upgrade legacy systems to modern architectures",
    icon: <RefreshCcw size={18} />,
    children: [
      {
        title: "Legacy System Migration",
        subtitle: "Migrate outdated systems to modern stacks",
        icon: <ServerCog size={18} />,
      },
      {
        title: "Cloud-Native Transformation",
        subtitle: "Rearchitect for scalability and resilience",
        icon: <Cloud size={18} />,
      },
      {
        title: "API Modernization",
        subtitle: "Rebuild and optimize integration layers",
        icon: <Network size={18} />,
      },
    ],
  },
  {
    title: "Quality Assurance & Testing",
    subtitle: "Comprehensive testing and quality control",
    icon: <CheckCircle size={18} />,
    children: [
      {
        title: "Automated Testing",
        subtitle: "CI/CD integrated automated test suites",
        icon: <Cpu size={18} />,
      },
      {
        title: "Performance Testing",
        subtitle: "Load, stress, and scalability assessments",
        icon: <Gauge size={18} />,
      },
      {
        title: "Security Testing",
        subtitle: "Penetration testing and vulnerability analysis",
        icon: <Shield size={18} />,
      },
    ],
  },
  {
    title: "Maintenance & Support",
    subtitle: "Ongoing improvement and technical assistance",
    icon: <Wrench size={18} />,
    children: [
      {
        title: "Application Maintenance",
        subtitle: "Bug fixes, enhancements, and updates",
        icon: <Bug size={18} />,
      },
      {
        title: "Technical Support",
        subtitle: "Dedicated support and troubleshooting",
        icon: <Headphones size={18} />,
      },
      {
        title: "Monitoring & Optimization",
        subtitle: "Continuous performance tracking and tuning",
        icon: <Activity size={18} />,
      },
    ],
  },
]

      },
      {
        title: "Cloud & Infrastructure",
        subtitle: "Scalable cloud solutions and infrastructure",
        icon: <Cloud size={18} />,
        children: [
  {
    title: "Cloud Strategy & Consulting",
    subtitle: "Guidance for effective cloud adoption",
    icon: <Cloud size={18} />,
    children: [
      {
        title: "Cloud Readiness Assessment",
        subtitle: "Evaluate infrastructure for migration readiness",
        icon: <ClipboardCheck size={18} />,
      },
      {
        title: "Cloud Architecture Design",
        subtitle: "Custom cloud infrastructure blueprints",
        icon: <Server size={18} />,
      },
      {
        title: "Cost Optimization",
        subtitle: "Optimize cloud usage and reduce spend",
        icon: <Wallet size={18} />,
      },
    ],
  },
  {
    title: "Cloud Infrastructure Management",
    subtitle: "Reliable, scalable, and secure operations",
    icon: <ServerCog size={18} />,
    children: [
      {
        title: "Infrastructure as Code (IaC)",
        subtitle: "Automated provisioning with Terraform and CloudFormation",
        icon: <FileCode size={18} />,
      },
      {
        title: "Monitoring & Observability",
        subtitle: "Real-time visibility into cloud environments",
        icon: <Activity size={18} />,
      },
      {
        title: "Backup & Disaster Recovery",
        subtitle: "Business continuity and failover strategies",
        icon: <DatabaseBackup size={18} />,
      },
    ],
  },
  {
    title: "DevOps & Automation",
    subtitle: "Accelerating delivery through automation",
    icon: <Workflow size={18} />,
    children: [
      {
        title: "CI/CD Implementation",
        subtitle: "Streamlined deployment pipelines",
        icon: <GitBranch size={18} />,
      },
      {
        title: "Containerization & Orchestration",
        subtitle: "Docker and Kubernetes infrastructure setup",
        icon: <Boxes size={18} />,
      },
      {
        title: "Infrastructure Automation",
        subtitle: "Automating builds, tests, and deployments",
        icon: <Cog size={18} />,
      },
    ],
  },
  {
    title: "Cloud Security & Compliance",
    subtitle: "Protecting infrastructure and data assets",
    icon: <Shield size={18} />,
    children: [
      {
        title: "Identity & Access Management",
        subtitle: "Role-based access and policy enforcement",
        icon: <KeyRound size={18} />,
      },
      {
        title: "Security Audits & Compliance",
        subtitle: "Cloud security posture management",
        icon: <Lock size={18} />,
      },
      {
        title: "Data Encryption & Privacy",
        subtitle: "Safeguarding sensitive information at rest and in transit",
        icon: <ShieldCheck size={18} />,
      },
    ],
  },
]

      },
      {
        title: "Consulting Services",
        subtitle: "Expert guidance and strategic support",
        icon: <Users size={18} />,
        children: [
          {
            title: "Technical Consulting",
            subtitle: "Architecture and implementation guidance",
            icon: <Settings size={18} />,
            children: [
              {
                title: "System Architecture",
                subtitle: "Scalable system design and planning",
                icon: <Server size={18} />,
              },
              {
                title: "Performance Optimization",
                subtitle: "Application and system optimization",
                icon: <Zap size={18} />,
              },
              {
                title: "Security Audits",
                subtitle: "Comprehensive security assessments",
                icon: <Shield size={18} />,
              },
            ],
          },
          {
            title: "Business Strategy",
            subtitle: "Digital transformation and planning",
            icon: <Target size={18} />,
          },
          {
            title: "Training & Workshops",
            subtitle: "Team skill development and knowledge transfer",
            icon: <GraduationCap size={18} />,
            children: [
              {
                title: "Technical Training",
                subtitle: "Programming and technology skills",
                icon: <Code size={18} />,
              },
              {
                title: "Agile Methodologies",
                subtitle: "Scrum, Kanban, and agile practices",
                icon: <Workflow size={18} />,
              },
              {
                title: "Leadership & Management",
                subtitle: "Team and management training",
                icon: <Users size={18} />,
              },
            ],
          },
        ],
      },
      {
        title: "Digital Transformation",
        subtitle: "Comprehensive transformation strategies",
        icon: <Briefcase size={18} />,
        children: [
    {
      title: "Innovation Strategy",
      subtitle: "Technology-driven innovation planning",
      icon: <Target size={18} />,
    },
    {
      title: "Process Automation",
      subtitle: "Workflow automation and process optimization",
      icon: <Workflow size={18} />,
    },
    {
      title: "Customer Experience",
      subtitle: "Enhancing engagement through digital solutions",
      icon: <Users size={18} />,
    },
    {
      title: "Change Management",
      subtitle: "Organizational alignment and transformation enablement",
      icon: <RefreshCcw size={18} />,
    },
  ],
      },
      {
        title: "Cybersecurity Consulting",
        subtitle: "Security and compliance solutions",
        icon: <Shield size={18} />,
        children: [
  {
    title: "Security Audits",
    subtitle: "Comprehensive risk and vulnerability assessments",
    icon: <Shield size={18} />,
  },
  {
    title: "Threat Detection",
    subtitle: "Monitoring and identifying potential cyber threats",
    icon: <Activity size={18} />,
  },
  {
    title: "Incident Response",
    subtitle: "Rapid response and recovery strategies",
    icon: <AlertTriangle size={18} />,
  },
  {
    title: "Compliance Management",
    subtitle: "Ensuring regulatory and security standard adherence",
    icon: <CheckCircle size={18} />,
  },
]

      },
      {
        title: "Data & Analytics Consulting",
        subtitle: "Data-driven strategies and insights",
        icon: <BarChart3 size={18} />,
        children: [
    {
      title: "Data Strategy",
      subtitle: "Governance and strategy development",
      icon: <Database size={18} />,
      children: [
        {
          title: "Data Governance",
          subtitle: "Data quality, privacy, and compliance frameworks",
          icon: <Shield size={18} />,
        },
        {
          title: "Data Architecture",
          subtitle: "Enterprise data architecture design",
          icon: <Server size={18} />,
        },
        {
          title: "Data Lake Strategy",
          subtitle: "Data lake design and implementation",
          icon: <Cloud size={18} />,
        },
      ],
    },
    {
      title: "Advanced Analytics",
      subtitle: "AI and predictive insights for smarter decisions",
      icon: <Brain size={18} />,
      children: [
        {
          title: "Machine Learning & Predictive Analytics",
          subtitle: "Build and deploy data-driven models",
          icon: <Activity size={18} />,
        },
      ],
    },
    {
      title: "Business Intelligence",
      subtitle: "Visualization and decision support tools",
      icon: <PieChart size={18} />,
      children: [
        {
          title: "BI Platform Implementation & Optimization",
          subtitle: "Enhance reporting and performance visibility",
          icon: <LineChart size={18} />,
        },
      ],
    },
  ],
},
      {
        title: "DevOps & Platform Engineering",
        subtitle: "DevOps transformation and support",
        icon: <Server size={18} />,
        children: [
        {
          title: "DevOps Transformation",
          subtitle: "Organizational DevOps adoption and culture",
          icon: <Zap size={18} />,
        },
        {
          title: "Platform Engineering",
          subtitle: "Internal developer platform development",
          icon: <Server size={18} />,
        },
        {
          title: "Cloud Migration",
          subtitle: "Cloud adoption and migration strategies",
          icon: <Cloud size={18} />,
        }
      ],
      },
      {
        title: "Support & Maintenance",
        subtitle: "Ongoing support and improvements",
        icon: <HelpCircle size={18} />,
      },
    ],
  },
  { title: "Company", 
    subtitle: "About our culture", 
    icon: <Users size={18} />,
    children: [
  {
    title: "About Us",
    subtitle: "Our story, mission, and vision",
    icon: <Home size={18} />,
  },
  {
    title: "Leadership",
    subtitle: "Meet our executive team",
    icon: <Users size={18} />,
  },
  {
    title: "Careers",
    subtitle: "Join our growing global team",
    icon: <Briefcase size={18} />,
  },
  {
    title: "Newsroom",
    subtitle: "Latest announcements and media coverage",
    icon: <Globe size={18} />,
  },
]
 },
  { title: "Resources", subtitle: "Knowledge base", icon: <Book size={18} />, children: [
  {
    title: "Knowledge Base",
    subtitle: "Guides, tutorials, and documentation",
    icon: <Book size={18} />,
  },
  {
    title: "Case Studies",
    subtitle: "Real-world success stories",
    icon: <FileText size={18} />,
  },
  {
    title: "Whitepapers",
    subtitle: "In-depth research and insights",
    icon: <File size={18} />,
  },
  {
    title: "Webinars",
    subtitle: "Join our live and recorded sessions",
    icon: <Monitor size={18} />,
  },
]
 },
  { title: "Support", subtitle: "Get help", icon: <HelpCircle size={18} />, children: [
  {
    title: "Contact Support",
    subtitle: "Reach our help desk anytime",
    icon: <Phone size={18} />,
  },
  {
    title: "Documentation",
    subtitle: "Setup guides and product manuals",
    icon: <Book size={18} />,
  },
  {
    title: "Community Forum",
    subtitle: "Ask questions and share solutions",
    icon: <Users size={18} />,
  },
  {
    title: "Report a Bug",
    subtitle: "Help us improve our services",
    icon: <Bug size={18} />,
  },
]
 },
  { title: "Research & Innovation", subtitle: "Cutting-edge ideas", icon: <Lightbulb size={18} />, children: [
  {
    title: "AI & Machine Learning",
    subtitle: "Building next-gen intelligent solutions",
    icon: <Brain size={18} />,
  },
  {
    title: "Data Science",
    subtitle: "Advanced analytics and insights",
    icon: <BarChart3 size={18} />,
  },
  {
    title: "Emerging Technologies",
    subtitle: "Exploring blockchain, AR/VR, and IoT",
    icon: <Globe size={18} />,
  },
  {
    title: "Innovation Labs",
    subtitle: "Prototyping and rapid experimentation",
    icon: <Lightbulb size={18} />,
  },
]
 },
  { title: "Sustainability", subtitle: "Responsible tech", icon: <Leaf size={18} />, children: [
  {
    title: "Green IT",
    subtitle: "Reducing environmental impact of technology",
    icon: <Leaf size={18} />,
  },
  {
    title: "Energy Efficiency",
    subtitle: "Optimizing resource consumption",
    icon: <Gauge size={18} />,
  },
  {
    title: "CSR Initiatives",
    subtitle: "Corporate social responsibility programs",
    icon: <Heart size={18} />,
  },
  {
    title: "Sustainable Partnerships",
    subtitle: "Collaborations for a cleaner planet",
    icon: <Users size={18} />,
  },
]
 },
  { title: "Investor Relations", subtitle: "Financial info", icon: <DollarSign size={18} />, children: [
  {
    title: "Financial Reports",
    subtitle: "Quarterly and annual performance reports",
    icon: <BarChart3 size={18} />,
  },
  {
    title: "Stock Information",
    subtitle: "Latest share price and market updates",
    icon: <LineChart size={18} />,
  },
  {
    title: "Corporate Governance",
    subtitle: "Board policies and transparency reports",
    icon: <Shield size={18} />,
  },
  {
    title: "Press Releases",
    subtitle: "Official corporate announcements",
    icon: <Globe size={18} />,
  },
]
 },
  { title: "Contact", subtitle: "Get in touch", icon: <Phone size={18} /> },
];

export default function FloatingMenu({ onClose }: Props) {
  const [history, setHistory] = useState<MenuItem[][]>([menuData]);
  const currentMenu = history[history.length - 1];

  const navigateTo = (item: MenuItem) => {
    if (item.children) {
      setHistory((prev) => [...prev, item.children!]);
    }
  };

  const goBack = () => {
    if (history.length > 1) setHistory((prev) => prev.slice(0, -1));
    else onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-end z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-3xl w-full max-w-sm m-4 p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          {history.length > 1 ? (
            <button onClick={goBack} className="flex items-center gap-1 text-sm font-medium">
              <ArrowLeft size={18} /> Back
            </button>
          ) : (
            <h2 className="text-lg font-semibold"></h2>
          )}
        </div>

        {/* Menu items */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={history.length}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-2"
          >
            {currentMenu.map((item, i) => (
              <button
                key={i}
                onClick={() => navigateTo(item)}
                className="w-full flex justify-between items-center p-3 rounded-2xl hover:bg-gray-100 transition text-left"
              >
                <div className="flex gap-3 items-start">
                  {item.icon && <div className="mt-1">{item.icon}</div>}
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                    {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                  </div>
                </div>
                {item.children && <ChevronRight size={18} className="text-gray-400" />}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
