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
    role: "DevOps Engineer",
    period: "June 2023 - Present",
    desc: "Energy Platform Startup · AWS-based Infrastructure Design and Operations Automation",
    highlights: [
      "Standardized AWS infrastructure (VPC, EC2, RDS, S3, ECS, etc.) as IaC using Terraform across dev/stage/prod",
      "Designed S3 + CloudFront-based frontend architecture with cache and HTTPS optimization",
      "Configured AWS WAF using Security Automation templates, applying OWASP Top 10 mitigation rules",
      "Operated ECS Fargate microservices with Service Connect; integrated Secrets Manager and SSM Parameter Store",
      "Built GitLab CI/CD pipeline: Docker Build → ECR Push → ECS Service Update; migrated from CodePipeline",
      "Built CloudWatch Logs → OpenSearch streaming pipeline for centralized log collection",
      "Designed monitoring and alerting with CloudWatch Metrics, Sentry, SigNoz, and Datadog",
      "Implemented Lambda-based auto-alerts to Microsoft Teams for ECS deployment status and Security Group changes",
    ],
  },
  {
    company: "AdenaSoftware",
    role: "DevOps Engineer",
    period: "February 2021 - June 2023",
    desc: "Global Fintech",
    highlights: [
      "Introduced Terraform IaC for AWS infrastructure; published reusable modules to Terraform Cloud Registry",
      "Implemented real-time image transformation pipeline using CloudFront + Lambda@Edge",
      "Established CDC pipeline with AWS MSK, Kafka Connect (JDBC/Elasticsearch), and Confluent; managed via AKHQ",
      "Configured AWS WAF covering HTTP Flood, SQLi, XSS, IP Reputation, and Bad Bot rules",
      "Built centralized log pipeline: CloudWatch Logs → OpenSearch with Kibana (VPC Flow, WAF, ALB, app, SES logs)",
      "Configured Apache + PHP 7.4 on Amazon Linux 2; deployed Metabase with Athena integration",
      "Migrated CI/CD from CodePipeline to GitLab-native pipeline: Docker Build → ECR Push → ECS Service Update",
    ],
  },
  {
    company: "HelloNature",
    role: "Cloud Engineer",
    period: "December 2019 - November 2020",
    desc: "Online Organic Fresh Food Dawn Delivery Service",
    highlights: [
      "AWS cloud infrastructure management and operations",
      "Built monitoring system using Prometheus + Grafana (CPU, memory, disk, network, etc.)",
      "Established log collection pipeline using Elastic Stack + CloudWatch Logs (Tomcat, Apache, Nginx, ELB, etc.)",
      "Configured application monitoring using New Relic + Pinpoint (Apache, PHP, Node.js, Tomcat)",
      "AWS resource cost analysis and optimization",
      "Operated deployment pipelines using AWS CodeBuild and CodeDeploy",
      "Installed and configured Yona issue tracker",
    ],
  },
  {
    company: "Perfect World Korea",
    role: "Systems Engineer",
    period: "August 2015 - November 2019",
    desc: "Mobile game services including Super Evolution Story, Liehuo, Mushin, Unison League, and more",
    highlights: [
      "Managed and maintained 130 IDC Dell servers",
      "Managed and operated KT U Cloud Biz",
      "Managed VMware ESXi and XenServer virtualization platforms",
      "Linux (CentOS) and Windows systems engineering",
      "Built and operated Zabbix monitoring system",
    ],
  },
  {
    company: "Infranics",
    role: "Systems Engineer",
    period: "May 2013 - December 2014",
    desc: "Samsung SDS Cloud Business Team · AWS Managed Services (ChatON, etc.)",
    highlights: [
      "AWS infrastructure management, operations, and technical support (EC2, EBS, S3, ELB, RDS, etc.)",
      "Ubuntu server configuration, Software RAID setup, and AWS CLI operations",
    ],
  },
  {
    company: "Unitrons Systems",
    role: "Systems Engineer",
    period: "April 2011 - May 2013",
    desc: "Server construction and technical support for public institutions and government offices",
    highlights: [
      "Sun Microsystems Solaris server and storage construction and maintenance",
      "Fujitsu server and storage maintenance",
      "Linux and Windows system maintenance",
      "NetBackup technical support",
      "Veritas Storage Foundation operations",
      "Veritas Cluster Server technical support",
    ],
  },
];

export const SKILLS: Record<string, string> = {
  "Cloud & IaC": "AWS (VPC, EC2, RDS, S3, ECS Fargate, Lambda, CloudFront, WAF, MSK, CodePipeline, Secrets Manager, SSM, etc.) · Terraform · Terraform Cloud · VMware ESXi · XenServer · Hyper-V",
  "CI/CD & Containers": "GitLab CI/CD · AWS CodePipeline · CodeBuild · CodeDeploy · Docker · Amazon ECR · ECS Fargate",
  "Monitoring & Logging": "CloudWatch · Datadog · Sentry · SigNoz · Jaeger · Prometheus · Grafana · Zabbix · New Relic · Pinpoint · Elastic Stack · OpenSearch · Kibana · Kafka · AWS MSK · Kafka Connect · AKHQ",
  "Infrastructure & OS": "Linux (CentOS, Ubuntu, Amazon Linux 2) · Windows · Solaris · Apache · Nginx · Tomcat · PHP · Sun Microsystems (SPARC) · Fujitsu · x86 · NetBackup · Veritas Storage Foundation · Veritas Cluster Server",
};

export const ABOUT_TEXT = `DevOps / Cloud Infrastructure Engineer with 15+ years of experience
across on-premises, virtualization, and cloud environments.

Started as a Solaris and x86 systems engineer, then evolved into
AWS-focused infrastructure design and DevOps automation.

Currently building and operating production-grade AWS infrastructure —
from IaC with Terraform to ECS Fargate microservices, CI/CD pipelines,
centralized logging, security automation, and cost optimization.
Experienced in managing multi-region, multi-account AWS environments
for fintech and energy platform startups.`;

export const CONTACT_INFO: ContactItem[] = [
  { label: "Email", value: "bokmail83@gmail.com" },
  { label: "Blog", value: "https://blog.naver.com/bokmail83" },
  { label: "GitHub", value: "https://github.com/BokEumEom" },
  { label: "LinkedIn", value: "https://linkedin.com/in/bokeum" },
  { label: "X", value: "https://x.com/bokeum" },
  { label: "Threads", value: "https://www.threads.com/@geumverse_ai" },
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
