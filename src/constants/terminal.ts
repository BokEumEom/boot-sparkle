export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  desc: string;
  highlights: string[];
}

export interface ContactItem {
  label: string;
  value: string;
}

export interface HelpItem {
  cmd: string;
  desc: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Bright Energy Partners",
    role: "DevOps / Platform Engineering Lead",
    period: "June 2023 - Present",
    desc: "Energy Platform Startup · AWS-based Infrastructure Design, DevOps Operations, and Operations Automation",
    highlights: [
      "Standardized core AWS infrastructure as Terraform-based IaC across dev/stage/prod environments",
      "Operated ECS Fargate microservices in production; strengthened runtime security with centralized secret management (Secrets Manager, SSM Parameter Store)",
      "Built GitLab-native CI/CD pipelines replacing legacy deployment flows: Docker Build → ECR Push → ECS Service Update",
      "Established centralized logging and observability with CloudWatch, OpenSearch, Datadog, Sentry, and SigNoz",
      "Implemented AWS WAF controls and alert automation to improve security posture and infrastructure change visibility",
      "Designed frontend hosting architecture on S3 + CloudFront to separate frontend delivery from backend release cycles",
      "Supported AWS cost analysis, infrastructure visibility, and operational improvement activities",
      "Explored AI-assisted workflows for infrastructure analysis, operational reporting, and technical documentation",
    ],
  },
  {
    company: "AdenaSoftware",
    role: "DevOps / Infrastructure Engineer",
    period: "February 2021 - June 2023",
    desc: "Global Fintech · AWS Standardization, DevOps Automation, Data Pipelines, Security Automation, Centralized Logging",
    highlights: [
      "Introduced Terraform IaC for AWS standardization; published reusable modules to Terraform Cloud Registry",
      "Implemented real-time image transformation pipeline using CloudFront + Lambda@Edge",
      "Established CDC and streaming pipelines with AWS MSK, Kafka Connect (JDBC/Elasticsearch), and Confluent; managed via AKHQ",
      "Configured AWS WAF (Security Automation templates) covering HTTP Flood, SQLi, XSS, IP Reputation, and Bad Bot rules",
      "Built centralized log pipeline: CloudWatch Logs → OpenSearch with Kibana (VPC Flow, WAF, ALB, app, SES logs)",
      "Configured Apache + PHP 7.4 on Amazon Linux 2; deployed Metabase with Athena integration",
      "Migrated CI/CD from CodePipeline to GitLab-native pipeline: Docker Build → ECR Push → ECS Service Update",
    ],
  },
  {
    company: "HelloNature",
    role: "Infrastructure / DevOps Engineer",
    period: "December 2019 - November 2020",
    desc: "Fresh Food E-commerce · AWS Infrastructure Operations, Monitoring, Logging, Deployment Support, Service Reliability",
    highlights: [
      "Managed AWS-based production infrastructure",
      "Built monitoring system using Prometheus + Grafana (CPU, memory, disk, network, etc.)",
      "Established log collection pipeline using Elastic Stack + CloudWatch Logs (Tomcat, Apache, Nginx, ELB, etc.)",
      "Configured application monitoring using New Relic + Pinpoint (Apache, PHP, Node.js, Tomcat)",
      "Performed AWS resource cost analysis and optimization",
      "Supported incident analysis, troubleshooting, and technical issue resolution",
      "Operated deployment pipelines using AWS CodeBuild and CodeDeploy",
      "Installed and configured Yona issue tracker",
    ],
  },
  {
    company: "Perfect World Korea",
    role: "System / Infrastructure Engineer",
    period: "August 2015 - November 2019",
    desc: "Mobile Game Services · On-premises Infrastructure, Cloud Resources, Virtualization, Monitoring, Production Operations",
    highlights: [
      "Managed and maintained 130+ IDC Dell servers",
      "Managed and operated KT U Cloud Biz environments",
      "Managed VMware ESXi and XenServer virtualization platforms",
      "Linux (CentOS) and Windows systems engineering",
      "Built and operated Zabbix monitoring system",
    ],
  },
  {
    company: "Infranics",
    role: "Cloud / Systems Engineer",
    period: "May 2013 - December 2014",
    desc: "Samsung SDS Cloud Business Team · AWS Managed Service Operations and Linux Server Support",
    highlights: [
      "Supported AWS infrastructure management, operations, and technical support (EC2, EBS, S3, ELB, RDS, etc.)",
      "Ubuntu server configuration, Software RAID setup, and AWS CLI operations",
    ],
  },
  {
    company: "Unitrons Systems",
    role: "System / Infrastructure Engineer",
    period: "April 2011 - May 2013",
    desc: "Public Sector IT Infrastructure · Server, Storage, Backup, Clustering, and Enterprise Infrastructure Support",
    highlights: [
      "Sun Microsystems Solaris server and storage construction and maintenance",
      "Fujitsu server and storage maintenance",
      "Linux and Windows system maintenance",
      "NetBackup technical support",
      "Veritas Storage Foundation and Veritas Cluster Server operations",
    ],
  },
];

export const SKILLS: Record<string, string> = {
  "Cloud & Infrastructure": "AWS (VPC, EC2, RDS, Aurora MySQL, EBS, S3, ELB, ECS Fargate, Lambda, Lambda@Edge, CloudFront, WAF, MSK, Secrets Manager, SSM Parameter Store, CloudWatch) · Terraform · Terraform Cloud",
  "CI/CD & Containers": "GitLab CI/CD · AWS CodePipeline · CodeBuild · CodeDeploy · Docker · Amazon ECR · ECS Service Update",
  "Monitoring & Logging": "CloudWatch · Datadog · Sentry · SigNoz · Jaeger · Prometheus · Grafana · Zabbix · New Relic · Pinpoint · Elastic Stack · OpenSearch · Kibana",
  "Streaming & Data Pipeline": "Kafka · AWS MSK · Kafka Connect · AKHQ · Confluent · JDBC Connector · Elasticsearch Connector",
  "Infrastructure & OS": "Linux (CentOS, Ubuntu, Amazon Linux 2) · Windows · Solaris · VMware ESXi · XenServer · Hyper-V",
  "Web / App Infrastructure": "Apache · Nginx · Tomcat · PHP · Metabase · Athena · Yona",
  "Backup / Storage / Enterprise": "Sun Microsystems SPARC · Fujitsu Servers · x86 Servers · NetBackup · Veritas Storage Foundation · Veritas Cluster Server",
  "Backend / Frontend / AI": "MySQL · SQL · FastAPI · SQLAlchemy · REST APIs · React · TypeScript · Tailwind CSS · Svelte · Vercel · Generative AI · AI-Assisted Operations · Prompt Engineering",
};

export const ABOUT_TEXT = `AWS-focused DevOps, Platform, and Infrastructure Engineer with
15+ years of experience across on-premises infrastructure,
virtualization, and AWS cloud environments.

Experienced in building and operating production AWS platforms using
Terraform, ECS Fargate, GitLab CI/CD, centralized logging, monitoring,
and security automation. Strong background in infrastructure
standardization, deployment automation, observability, cloud security
operations, cost visibility, and production service troubleshooting.

Currently working on AWS-based infrastructure and DevOps operations
for an energy platform startup. Recently exploring AI-assisted
workflows for infrastructure analysis, operational documentation,
reporting automation, and service operations.`;

export const CONTACT_INFO: ContactItem[] = [
  { label: "Email", value: "bokmail83@gmail.com" },
  { label: "Blog", value: "https://blog.naver.com/bokmail83" },
  { label: "GitHub", value: "https://github.com/BokEumEom" },
  { label: "LinkedIn", value: "https://linkedin.com/in/bokeum" },
  { label: "X", value: "https://x.com/bokeum" },
  { label: "Threads", value: "https://www.threads.com/@geumverse_ai" },
];

export interface EducationEntry {
  school: string;
  degree: string;
  period?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    school: "Hankyong National University",
    degree: "B.E. in Information and Control Engineering",
  },
  {
    school: "Incheon Polytechnic College",
    degree: "Associate Degree in Computer Control",
  },
];

export const CERTIFICATIONS: string[] = [
  "AWS Certified Solutions Architect – Associate",
  "Sun / Veritas certifications",
];

export const HELP_OUTPUT: HelpItem[] = [
  { cmd: "about", desc: "Who I am and what I do" },
  { cmd: "experience", desc: "Work history & roles" },
  { cmd: "skills", desc: "Tech stack & proficiencies" },
  { cmd: "contact", desc: "Get in touch" },
  { cmd: "education", desc: "Academic background" },
  { cmd: "hobbies", desc: "A little more about me" },
  { cmd: "clear", desc: "Clear terminal" },
];
