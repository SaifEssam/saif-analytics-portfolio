export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  image: string;
  accent: string;
  featured: boolean;
  confidential?: boolean;
  liveLinks?: { label: string; href: string }[];
  documentLinks?: { label: string; href: string }[];
  tools: string[];
  problem: string;
  approach: string[];
  findings: { value: string; label: string; detail?: string }[];
  recommendations: string[];
  capabilities: string[];
  limitations: string[];
};

export const profile = {
  name: "Saif Essam",
  role: "Analytics Specialist & Data Analyst",
  location: "Cairo, Egypt",
  email: "saifessam092@gmail.com",
  linkedin: "https://www.linkedin.com/in/saif-essam-a64a9a279",
  github: "https://github.com/SaifEssam",
  headline: "I turn messy CRM, sales and insurance data into reliable decisions.",
  subheadline:
    "Statistics graduate and Analytics Specialist building secure dashboards, rigorous analytical workflows and decision-ready stories using SQL, R, Python, Power BI, Salesforce and Excel.",
};

export const projects: Project[] = [
  {
    slug: "sales-leadership-analytics-platform",
    title: "Sales Leadership Analytics Platform",
    eyebrow: "CRM Analytics · R Shiny · Analytics Engineering",
    summary:
      "Two connected dashboard experiences for supervisors and sales leadership, built to monitor lead allocation, response quality, reassignment flow and SLA risk.",
    impact:
      "A production-style analytics product with secure access, live refresh, role-aware views, drilldowns and exportable operational evidence.",
    image: "/projects/sales-platform.svg",
    accent: "cyan",
    featured: true,
    confidential: true,
    liveLinks: [
      {
        label: "Supervisor dashboard",
        href: "https://saifessam092.shinyapps.io/Leads_Distribution_Dashboard_with_Auth/",
      },
      {
        label: "Sales director dashboard",
        href: "https://saifessam092.shinyapps.io/sales_director_dashboard_pack/",
      },
    ],
    tools: ["R", "Shiny", "dplyr", "ggplot2", "DT", "shinymanager", "CRM analytics"],
    problem:
      "Sales leaders needed one reliable view of current lead workload, feedback coverage, overdue activity, missed leads and reassignment patterns — while preserving each user's authorized scope.",
    approach: [
      "Normalized inconsistent names, IDs, dates, statuses and email fields before analysis.",
      "Implemented credential-based access with admin, manager and supervisor scopes.",
      "Used reactive polling to refresh source data without rebuilding the application.",
      "Created executive KPI layers, advisor-level drilldowns and filtered CSV exports.",
      "Separated operational supervisor views from cross-team leadership views.",
    ],
    findings: [
      { value: "3", label: "Access levels", detail: "Admin, manager and supervisor" },
      { value: "Live", label: "Source refresh", detail: "Reactive polling with validation" },
      { value: "6", label: "Leadership KPIs", detail: "Leads, feedback, submissions, missed, reassigned and SLA risk" },
      { value: "CSV", label: "Decision exports", detail: "Filtered operational and risk records" },
    ],
    recommendations: [
      "Use the overdue-risk view as the daily exception queue rather than reviewing every lead.",
      "Compare response and missed-lead rates together to avoid rewarding volume without follow-through.",
      "Keep role-level access rules in data configuration rather than hard-coding dashboard copies.",
    ],
    capabilities: [
      "Role-based analytics",
      "Data normalization",
      "Reactive architecture",
      "KPI design",
      "Operational drilldowns",
      "Data exports",
    ],
    limitations: [
      "Portfolio previews use anonymized, aggregated or synthetic demonstration data.",
      "Live applications may require credentials and can take time to wake on free hosting.",
    ],
  },
  {
    slug: "medical-claims-intelligence",
    title: "Medical Claims & Pre-authorization Intelligence",
    eyebrow: "Insurance Analytics · R Shiny · Risk Monitoring",
    summary:
      "An interactive insurance dashboard connecting claims utilization, rejection risk and pre-authorization operations in one decision environment.",
    impact:
      "Moves users from total claims to risky insurers, rejection reasons, pending operations and row-level evidence without leaving the dashboard.",
    image: "/projects/claims-dashboard.svg",
    accent: "emerald",
    featured: true,
    confidential: true,
    liveLinks: [
      {
        label: "Launch live dashboard",
        href: "https://saifessam092.shinyapps.io/ClaimsProject3/",
      },
    ],
    tools: ["R", "Shiny", "Plotly", "Arrow", "Parquet", "Insurance analytics", "KPI design"],
    problem:
      "Claims and pre-authorization records contained different operational signals. Stakeholders needed to understand utilization, approvals, rejection concentration, pending workload and provider risk in one place.",
    approach: [
      "Prepared reusable reimbursement and pre-authorization fact tables.",
      "Built filters for dates, clients, insurers, service groups and statuses.",
      "Designed risk rankings that combine rejection rate, volume and rejected amount.",
      "Added Pareto analysis, rejection-reason decomposition and record-level exports.",
      "Used interactive Plotly charts for monthly and daily operational patterns.",
    ],
    findings: [
      { value: "2", label: "Operational domains", detail: "Reimbursement and pre-authorization" },
      { value: "Risk", label: "Provider ranking", detail: "Insurer and TPA prioritization" },
      { value: "Pareto", label: "Client concentration", detail: "Cumulative approved-value analysis" },
      { value: "Drill", label: "Record evidence", detail: "Filterable tables and CSV export" },
    ],
    recommendations: [
      "Prioritize providers with both high rejection rates and meaningful volume.",
      "Review top rejection reasons by provider before launching broad process changes.",
      "Track pending rate alongside request volume to distinguish workload spikes from process delays.",
    ],
    capabilities: [
      "Claims analytics",
      "Risk scoring",
      "Pareto analysis",
      "Interactive filtering",
      "Operational monitoring",
      "Export workflows",
    ],
    limitations: [
      "The portfolio does not expose confidential policyholder or client-level information.",
      "Business impact is presented as demonstrated capability unless a verified outcome is available.",
    ],
  },
  {
    slug: "zapier-lead-reassignment",
    title: "Controlling Lead Reassignment Cost",
    eyebrow: "Automation Analysis · Sales Operations · Decision Story",
    summary:
      "A decision analysis testing whether repeated Zapier lead reassignment produces enough productive outcomes to justify automation-task consumption.",
    impact:
      "Reframed a reporting request into an automation-control decision using volume, productivity and repeated-run evidence.",
    image: "/projects/zapier-analysis.svg",
    accent: "violet",
    featured: true,
    documentLinks: [
      { label: "Download presentation", href: "/documents/Zapier-Leads-Reassignment-Analysis.pptx" },
    ],
    tools: ["R", "Data cleaning", "Operational analytics", "KPI design", "Executive storytelling"],
    problem:
      "Repeated lead reassignments consume Zapier tasks, but task volume alone does not show whether the automation creates enough productive business outcomes.",
    approach: [
      "Matched lead records to reassignment runs and standardized outcome categories.",
      "Separated total lead volume, reassigned leads and automation-run consumption.",
      "Compared productive and non-productive outcomes by source and lead type.",
      "Built an executive story focused on where automation should be controlled.",
    ],
    findings: [
      { value: "1,798", label: "Total leads" },
      { value: "453", label: "Reassigned leads" },
      { value: "1,122", label: "Matched runs" },
      { value: "46.6%", label: "Productive outcomes" },
      { value: "53.4%", label: "Non-productive outcomes" },
      { value: "62.6%", label: "Digital Marketing share", detail: "1,126 leads" },
    ],
    recommendations: [
      "Set reassignment limits where repeated runs show low incremental productivity.",
      "Treat Digital Marketing quality as a portfolio-level issue because it dominates lead volume.",
      "Measure automation with outcome-per-run metrics, not only total leads processed.",
    ],
    capabilities: [
      "Process-cost analysis",
      "Record matching",
      "Outcome classification",
      "Executive storytelling",
      "Automation governance",
    ],
    limitations: [
      "No monetary saving is claimed because a verified cost-per-task value was not provided.",
      "The analysis reflects the available operational period and recorded outcome definitions.",
    ],
  },
  {
    slug: "fitly-churn-analysis",
    title: "Reducing Subscriber Churn at Fit.ly",
    eyebrow: "Customer Analytics · DataCamp Certification Project",
    summary:
      "A complete analysis joining account, engagement and support data to identify churn drivers and translate them into a measurable action plan.",
    impact:
      "Connected customer behavior and support experience to an executive recommendation: fix resolution time, activate new users and reassess the free tier.",
    image: "/projects/fitly-churn.svg",
    accent: "orange",
    featured: true,
    documentLinks: [
      { label: "Download presentation", href: "/documents/Fitly-Churn-Presentation.pptx" },
    ],
    tools: ["SQL", "R", "Data validation", "Customer analytics", "Storytelling", "KPI design"],
    problem:
      "Leadership saw churn increasing while acquisition costs were rising. The data came from multiple teams with inconsistent fields and had to be reconciled before the drivers could be trusted.",
    approach: [
      "Validated account, support and activity sources against the data specification.",
      "Built a customer-level analytical view across plan, engagement and support behavior.",
      "Compared churn patterns by tier, usage and issue-resolution experience.",
      "Converted findings into next-quarter targets and owner-ready actions.",
    ],
    findings: [
      { value: "28.5%", label: "Overall churn" },
      { value: "~40%", label: "Free-tier churn" },
      { value: "20–25%", label: "Paid-tier churn" },
      { value: "~6h", label: "Resolution for retained users" },
      { value: "~20h", label: "Resolution for churned users" },
      { value: "10.2h", label: "Current average resolution" },
    ],
    recommendations: [
      "Reduce average ticket resolution time below eight hours.",
      "Target overall churn below 20% and monitor it with support-response leading indicators.",
      "Design first-week activation around at least two meaningful product actions.",
      "Audit whether the free tier is under-delivering value or attracting the wrong audience.",
    ],
    capabilities: [
      "Multi-source joins",
      "Data validation",
      "Churn analysis",
      "KPI targets",
      "Executive communication",
    ],
    limitations: [
      "The project is a certification case study using a simulated company and supplied dataset.",
      "Observed relationships are analytical signals, not causal proof without an experiment.",
    ],
  },
  {
    slug: "social-security-modeling",
    title: "Predicting Social Security Coverage in Egypt",
    eyebrow: "Graduation Project · Statistics · Machine Learning",
    summary:
      "A policy-oriented classification study comparing interpretable statistical models with machine-learning and deep-learning alternatives.",
    impact:
      "Demonstrates model evaluation, trade-off reasoning and the ability to translate predictors into policy-relevant recommendations.",
    image: "/projects/social-security.svg",
    accent: "blue",
    featured: true,
    documentLinks: [
      { label: "View full academic report", href: "/documents/Social-Security-Graduation-Project.pdf" },
    ],
    tools: ["R", "Logistic regression", "Decision tree", "Random forest", "CNN", "Policy analytics"],
    problem:
      "The study asked which demographic, health, labor and social characteristics are associated with social-security coverage among the Egyptian labor force, and which model best classifies coverage.",
    approach: [
      "Conducted descriptive analysis and association testing.",
      "Built binary logistic regression, decision tree, random forest and CNN models.",
      "Compared accuracy, sensitivity, specificity and ROC AUC rather than selecting a model on one metric.",
      "Translated feature importance and odds-based findings into policy recommendations.",
    ],
    findings: [
      { value: "88.25%", label: "Logistic accuracy" },
      { value: "87.09%", label: "Decision-tree accuracy" },
      { value: "88.50%", label: "Random-forest accuracy" },
      { value: "88.52%", label: "CNN accuracy" },
      { value: "82.02%", label: "Best sensitivity", detail: "Logistic regression" },
      { value: "94.43%", label: "Best specificity", detail: "CNN" },
      { value: "0.94", label: "Top AUC", detail: "Logistic regression and random forest" },
    ],
    recommendations: [
      "Treat health-insurance access as a central policy lever.",
      "Design targeted programs by age, employment sector and occupation.",
      "Choose the model based on the operational cost of false negatives versus false positives.",
    ],
    capabilities: [
      "Statistical modeling",
      "Machine learning",
      "Model comparison",
      "Feature interpretation",
      "Policy recommendations",
    ],
    limitations: [
      "Classification performance depends on the available sample and variable definitions.",
      "Predictive association should not be presented as causal effect.",
    ],
  },
  {
    slug: "heart-disease-classification",
    title: "Heart Disease Classification",
    eyebrow: "Academic Research · Classification",
    summary:
      "Compared logistic regression, K-nearest neighbors and decision trees for heart-disease diagnosis using predictive and interpretability criteria.",
    impact:
      "Shows structured model comparison and the ability to explain why the statistically strongest model is not always the most interpretable one.",
    image: "/projects/heart-disease.svg",
    accent: "red",
    featured: false,
    documentLinks: [
      { label: "View report", href: "/documents/Heart-Disease-Data-Science-Project.pdf" },
    ],
    tools: ["R", "Logistic regression", "KNN", "Decision tree", "ROC analysis"],
    problem:
      "Evaluate which patient characteristics predict heart-disease diagnosis and compare multiple classification approaches.",
    approach: [
      "Prepared a dataset of 918 observations and 11 features.",
      "Evaluated goodness of fit, cutoff selection, confusion matrices and ROC curves.",
      "Compared model accuracy with transparency and implementation trade-offs.",
    ],
    findings: [
      { value: "0.935", label: "Logistic AUC" },
      { value: "81.95%", label: "Decision-tree accuracy" },
      { value: "70.68%", label: "KNN accuracy" },
    ],
    recommendations: [
      "Use logistic regression when overall discriminatory performance is the priority.",
      "Use a decision tree when transparent decision rules are more important.",
    ],
    capabilities: ["Classification", "ROC analysis", "Model interpretation", "Clinical-data EDA"],
    limitations: ["This academic analysis is not a clinical diagnostic tool."],
  },
  {
    slug: "mental-health-multivariate-analysis",
    title: "Character Strengths & Mental Health",
    eyebrow: "Multivariate Analysis · COVID-19 Research",
    summary:
      "Used factor analysis, clustering, discriminant validation and multivariate regression to examine character strengths and mental-health outcomes.",
    impact:
      "Demonstrates depth beyond dashboarding: latent-variable discovery, segment validation and multi-outcome interpretation.",
    image: "/projects/mental-health.svg",
    accent: "pink",
    featured: false,
    documentLinks: [
      { label: "View report", href: "/documents/Multivariate-Mental-Health-Project.pdf" },
    ],
    tools: ["R", "Factor analysis", "K-means", "Discriminant analysis", "Multivariate regression"],
    problem:
      "Understand the latent structure of character strengths and how those factors relate to distress, general mental health and self-efficacy during lockdown.",
    approach: [
      "Used scree and parallel analysis to determine the factor solution.",
      "Applied rotation for interpretable factor labels.",
      "Validated K-means segments with discriminant analysis.",
      "Modeled three psychological outcomes using multivariate regression.",
    ],
    findings: [
      { value: "4", label: "Latent factors" },
      { value: "54.8%", label: "Variance explained" },
      { value: "2", label: "Validated clusters" },
      { value: "1", label: "Consistent predictor", detail: "Transcendence" },
    ],
    recommendations: [
      "Use latent factors rather than 24 raw strength variables in downstream models.",
      "Treat cluster labels as analytical segments, not permanent personality types.",
    ],
    capabilities: ["Factor analysis", "Clustering", "Validation", "Multivariate modeling"],
    limitations: ["Cross-sectional survey relationships do not establish causality."],
  },
  {
    slug: "rainfall-time-series",
    title: "Rainfall Time-series Forecasting",
    eyebrow: "Time Series · Environmental Statistics",
    summary:
      "Analyzed monthly rainfall patterns using decomposition, modern forecasting approaches and Box–Jenkins methods.",
    impact:
      "Shows the ability to move from time-series structure to forecast design and uncertainty-aware interpretation.",
    image: "/projects/rainfall.svg",
    accent: "teal",
    featured: false,
    documentLinks: [{ label: "View report", href: "/documents/Rainfall-Time-Series-Project.pdf" }],
    tools: ["R", "Time-series decomposition", "ARIMA", "Forecasting", "Diagnostics"],
    problem:
      "Model and forecast monthly rainfall data while accounting for seasonality, trend and time dependence.",
    approach: [
      "Visualized and decomposed the series.",
      "Compared classical and modern approaches.",
      "Used Box–Jenkins identification, estimation and diagnostic checking.",
    ],
    findings: [
      { value: "252", label: "Monthly observations" },
      { value: "21", label: "Years covered" },
      { value: "3", label: "Modeling approaches" },
    ],
    recommendations: ["Use rolling forecast validation before operational deployment."],
    capabilities: ["Time-series EDA", "Forecasting", "Diagnostics", "Environmental analytics"],
    limitations: ["Forecast reliability depends on structural stability and future climate patterns."],
  },
  {
    slug: "spatial-temperature-analysis",
    title: "Spatial Temperature Analysis",
    eyebrow: "Spatial Statistics · California",
    summary:
      "Studied spatial dependency and temperature variation using autocorrelation, trend surfaces, kriging and geographically weighted regression.",
    impact:
      "Demonstrates geographic reasoning, interpolation and local-model interpretation.",
    image: "/projects/spatial-temperature.svg",
    accent: "amber",
    featured: false,
    documentLinks: [{ label: "View report", href: "/documents/Spatial-Temperature-Project.pdf" }],
    tools: ["R", "Moran's I", "Kriging", "Variograms", "GWR"],
    problem:
      "Identify spatial temperature patterns, estimate values at unmeasured locations and examine geographic variation in relationships.",
    approach: [
      "Measured spatial autocorrelation.",
      "Compared trend-surface models using information criteria.",
      "Selected a variogram and generated kriging prediction and uncertainty surfaces.",
      "Applied geographically weighted regression for local effects.",
    ],
    findings: [
      { value: "4th", label: "Selected trend degree" },
      { value: "Kriging", label: "Interpolation method" },
      { value: "GWR", label: "Local relationship model" },
    ],
    recommendations: ["Use denser monitoring in high-variance areas before high-stakes local decisions."],
    capabilities: ["Spatial autocorrelation", "Interpolation", "Local regression", "Mapping"],
    limitations: ["Interpolation uncertainty increases where observations are sparse."],
  },
];

export const experience = [
  {
    period: "Nov 2024 — Present",
    role: "Analytics Specialist",
    organization: "Deraya Insurance Brokerage",
    location: "Heliopolis, Cairo",
    description:
      "Support management decision-making through CRM, sales and insurance analytics, recurring reporting and data-quality operations.",
    bullets: [
      "Analyze and prepare large-scale CRM and sales datasets for KPI monitoring and management reporting.",
      "Clean, standardize, validate and deduplicate structured data to improve analytical reliability.",
      "Build dashboards and recurring reports using Salesforce, Excel and R Shiny.",
      "Translate business questions into actionable analytical outputs for cross-functional stakeholders.",
      "Manage uploads, integrity checks, exception handling and structured-data maintenance.",
    ],
  },
  {
    period: "Jul 2024 — Sep 2024",
    role: "Data & Research Analyst Intern",
    organization: "Egyptian Cabinet — Information and Decision Support Center",
    location: "New Administrative Capital",
    description:
      "Contributed to official-data research, indicator validation and analytical quality review.",
    bullets: [
      "Contributed to Egypt Description by Information 2024.",
      "Reviewed and updated statistical indicators using verified sources.",
      "Supported analytical sections through consistency checks and quantitative review.",
    ],
  },
  {
    period: "Jun 2024 — Jul 2024",
    role: "Statistical Analysis Intern",
    organization: "Central Agency for Public Mobilization and Statistics",
    location: "Nasr City, Cairo",
    description:
      "Observed official-statistics workflows from survey design through processing, dissemination and quality control.",
    bullets: [
      "Assisted with manual and digital survey-questionnaire evaluation.",
      "Gained exposure to national-scale statistical production and data-quality processes.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Business Analytics",
    description: "Connect measures to commercial and operational decisions.",
    skills: ["CRM analytics", "Sales analytics", "Insurance analytics", "KPI design", "Management reporting", "Stakeholder communication"],
  },
  {
    title: "Data Reliability",
    description: "Make the numbers dependable before making them persuasive.",
    skills: ["Data cleaning", "Validation", "Standardization", "Deduplication", "Exception handling", "Quality monitoring"],
  },
  {
    title: "Statistical Analysis",
    description: "Choose methods based on the question and decision cost.",
    skills: ["EDA", "Regression", "Classification", "Multivariate analysis", "Time-series forecasting", "Spatial analysis", "Model evaluation"],
  },
  {
    title: "Analytics Products",
    description: "Turn analysis into repeatable tools for real users.",
    skills: ["R Shiny", "Power BI", "Salesforce dashboards", "Excel", "SQL", "Python", "R", "Git & GitHub"],
  },
];

export const credentials = [
  {
    title: "B.Sc. in Statistics",
    issuer: "Cairo University — Faculty of Economics and Political Science",
    date: "2024",
    detail: "Minor in Socio-Computing · GPA 3.5/4.0 · Very Good with Honors",
    href: "/resume",
  },
  {
    title: "Data Analyst Certification",
    issuer: "DataCamp",
    date: "2026",
    detail: "SQL and R assessments plus a complete practical analysis and presentation project.",
    href: "/documents/DataCamp-Data-Analyst-Certificate.pdf",
  },
  {
    title: "Google Advanced Data Analytics",
    issuer: "Google Career Certificates · Coursera",
    date: "2024",
    detail: "Seven-course program covering Python, statistics, regression, machine learning and capstone work.",
    href: "/documents/Google-Advanced-Data-Analytics-Certificate.pdf",
  },
];

export const stats = [
  { value: "9+", label: "Case studies", note: "Business and academic" },
  { value: "3", label: "Live Shiny apps", note: "Operational analytics" },
  { value: "4", label: "Model families", note: "Compared in graduation research" },
  { value: "3.5/4", label: "Statistics GPA", note: "With honors" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
