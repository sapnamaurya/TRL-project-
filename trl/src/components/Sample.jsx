import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";

// ─── Glossary Lookup Data (from PDFs) ────────────────────────────────────────
const GLOSSARY = {
  "javascript": {
    label: "JavaScript", role: "Frontend Engine",
    description: "Functions as the Frontend engine. Used to create buttons, sliders, and interactive forms where a user enters TRL data in a web browser. Also integrates AI/ML outputs into web-based applications, displaying predictions, dashboards, and visualizations in real time.",
    tags: ["Frontend", "Web", "UI"], color: "amber",
  },
  "python": {
    label: "Python", role: "Backend / AI-ML Core",
    description: "Used for core maturity calculations and numerical modeling. Acts as the primary AI/ML language — processes TRL data, performs predictions, and enables intelligent decision-making. Supports data processing, evaluation logic, and future AI integration.",
    libraries: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "XGBoost / LightGBM", "Statsmodels", "NLTK / SpaCy"],
    tags: ["Backend", "AI/ML", "Data Science"], color: "blue",
  },
  "matlab": {
    label: "MATLAB", role: "Computational & Modeling Layer",
    description: "A high-level language and environment for numerical computation and visualization. Used for complex mathematical modeling of how a technology matures over time, simulations, and algorithm development especially in research-oriented TRL systems.",
    tags: ["Computation", "Simulation", "Modeling"], color: "purple",
  },
  "excel vba": {
    label: "Excel VBA", role: "Local Automation Tool",
    description: "VBA (Visual Basic for Applications) is used to write Macros — sequences of instructions that automate repetitive tasks. In the TRL tool, it automatically calculates scores and generates reports directly inside Excel without requiring external systems.",
    tags: ["Automation", "Spreadsheet", "Local"], color: "green",
  },
  "postgresql": {
    label: "PostgreSQL", role: "Relational Database",
    description: "Manages and stores historical TRL data with high data integrity and consistency. Stores structured data (TRL scores, project history, evaluation records) efficiently using tables and relationships.",
    tags: ["Database", "SQL", "Structured Data"], color: "blue",
  },
  "sql": {
    label: "SQL", role: "Structured Data Management",
    description: "Stores structured TRL data such as scores, history, and project details. Manages project timelines, task dependencies, and historical records with high accuracy.",
    note: { title: "SQL vs NoSQL", body: "SQL is preferred for TRL tools because the data is structured and requires high accuracy and consistency. NoSQL can be used only for unstructured data such as logs, chat data, or AI-generated inputs. Therefore, SQL is the main database, while NoSQL is only a supporting system." },
    tags: ["Database", "Structured", "Enterprise"], color: "teal",
  },
  "nosql": {
    label: "NoSQL", role: "Unstructured Data Storage",
    description: "Used for storing unstructured data such as chat logs, social media inputs, collaboration data, and AI-generated inputs. Social media data is not structured, so NoSQL is more suitable for these contexts.",
    note: { title: "SQL vs NoSQL", body: "SQL is preferred for TRL tools because the data is structured and requires high accuracy and consistency. NoSQL is used only for unstructured data such as logs, chat data, or AI-generated inputs." },
    tags: ["Database", "Unstructured", "Logs"], color: "gray",
  },
  "java": {
    label: "Java", role: "Enterprise Backend",
    description: "Used in large-scale and mission-critical systems (such as space agencies). Supports secure, multi-user, and high-performance TRL assessment systems. Also handles large-scale, enterprise-level data processing and system integration.",
    tags: ["Backend", "Enterprise", "Scalable"], color: "coral",
  },
  ".net": {
    label: ".NET (C#)", role: "Enterprise Application Layer",
    description: "Supports scalable enterprise applications. Used to develop secure, enterprise-level applications when the tool is deployed in larger systems. C# is used in .NET framework for enterprise-level estimation and building scalable applications that assess estimation accuracy.",
    tags: ["Backend", "Enterprise", "Microsoft"], color: "blue",
  },
  "html": {
    label: "HTML / CSS", role: "Frontend Structure & Style",
    description: "Used to design and structure the interface of standalone TRL tools. HTML provides the layout, while CSS enhances the visual appearance and user experience. Used for independent tool development without requiring an enterprise server.",
    tags: ["Frontend", "Web", "UI"], color: "amber",
  },
  "css": {
    label: "HTML / CSS", role: "Frontend Structure & Style",
    description: "Used to design and structure the interface of standalone TRL tools. HTML provides the layout, while CSS enhances the visual appearance and user experience.",
    tags: ["Frontend", "Web", "UI"], color: "amber",
  },
  "c++": {
    label: "C++", role: "High-Performance Computing Layer",
    description: "Provides fast computation for complex estimation algorithms and simulations. Used for high-speed execution of complex algorithms and handling large-scale data efficiently in both TRL and time estimation systems.",
    tags: ["Backend", "Performance", "System"], color: "gray",
  },
  "angular": {
    label: "Angular", role: "Frontend Framework (ERP Layer)",
    description: "Helps in developing large-scale, modular applications within ERP platforms. Works alongside JavaScript to manage user interaction and real-time updates in enterprise-scale TRL systems.",
    tags: ["Frontend", "Framework", "Enterprise"], color: "coral",
  },
  "abap": {
    label: "ABAP", role: "SAP ERP Backend",
    description: "SAP's proprietary programming language used to integrate TRL logic directly into SAP ERP systems and handle business processes. Implements time estimation logic within SAP ERP systems and connects with business modules such as project planning and resource management.",
    tags: ["ERP", "SAP", "Enterprise"], color: "purple",
  },
  "sap hana sql": {
    label: "SAP HANA SQL", role: "In-Memory Enterprise Database",
    description: "An in-memory database that stores data in RAM, enabling real-time analytics and fast processing of large-scale enterprise TRL data. Enables instant decision-making in enterprise environments.",
    tags: ["Database", "SAP", "Real-time"], color: "teal",
  },
  "sap hana": {
    label: "SAP HANA", role: "In-Memory Enterprise Database",
    description: "An in-memory database that stores data in RAM, enabling real-time analytics and fast processing of large-scale enterprise TRL data.",
    tags: ["Database", "SAP", "Real-time"], color: "teal",
  },
  "pandas": {
    label: "Pandas", role: "Data Cleaning & Structuring",
    description: "Used for cleaning and organizing TRL datasets (project data, scores, history) into a structured format (DataFrames). Organizes and cleans collaborative data including logs, chats, and inputs.",
    tags: ["Python Library", "Data Science", "AI/ML"], color: "green",
  },
  "numpy": {
    label: "NumPy", role: "Numerical Computation",
    description: "Handles numerical and matrix operations required for TRL calculations and model computations. Performs numerical computations essential for AI/ML model training and inference.",
    tags: ["Python Library", "Mathematics", "AI/ML"], color: "blue",
  },
  "scikit-learn": {
    label: "Scikit-learn", role: "Machine Learning Framework",
    description: "Provides machine learning algorithms: Regression to predict TRL level, Classification to categorize technology maturity, and Clustering to group similar technologies. Also used for ML models such as regression for time prediction.",
    tags: ["Python Library", "AI/ML", "Classification"], color: "purple",
  },
  "tensorflow": {
    label: "TensorFlow / Keras", role: "Deep Learning Framework",
    description: "Used for deep learning and complex prediction models. Handles advanced neural network training for TRL and time estimation predictions where classical ML models are insufficient.",
    tags: ["Python Library", "Deep Learning", "AI/ML"], color: "coral",
  },
  "xgboost": {
    label: "XGBoost / LightGBM", role: "High-Accuracy Forecasting",
    description: "High-accuracy forecasting models used for predicting TRL levels and project completion times with superior performance compared to standard ML methods.",
    tags: ["Python Library", "Forecasting", "AI/ML"], color: "amber",
  },
  "nltk": {
    label: "NLP Libraries (NLTK / SpaCy)", role: "Text & Social Data Analysis",
    description: "Analyze text data from discussions and social inputs. Used to process unstructured natural language inputs — chat logs, collaboration data, and social media content — for TRL evaluation.",
    tags: ["Python Library", "NLP", "Social Data"], color: "teal",
  },
  "jupyter": {
    label: "Jupyter Notebook", role: "Experimentation & Development",
    description: "Used for experimenting with datasets, testing ML models, and analyzing TRL-related data step-by-step. Enables interactive development and prototyping of AI models before deployment.",
    tags: ["Development", "Data Science", "Prototyping"], color: "amber",
  },
  "docker": {
    label: "Docker", role: "Deployment & Containerization",
    description: "Packages the application and AI models into containers so they can run consistently across different systems and environments. Ensures scalable deployment and consistent execution across systems.",
    tags: ["DevOps", "Deployment", "Containers"], color: "blue",
  },
  "eclipse rcp": {
    label: "Eclipse RCP", role: "Desktop Application Platform",
    description: "Rich Client Platform used to build modular and scalable desktop applications for engineers and researchers. Provides an interface for interacting with TRL systems and collaborative tools.",
    tags: ["Desktop", "Enterprise", "UI Framework"], color: "gray",
  },
  "react": {
    label: "React", role: "Modern Frontend Framework",
    description: "Builds dynamic and interactive user interfaces for displaying time predictions, dashboards, and alerts. Used in Social-layer systems for real-time AI/ML output visualization.",
    tags: ["Frontend", "Framework", "Real-time"], color: "blue",
  },
  "node.js": {
    label: "Node.js", role: "Backend Runtime",
    description: "Enables real-time data processing, API handling, and communication between frontend and AI/ML models. Used in social/collaborative systems requiring real-time data flow.",
    tags: ["Backend", "Runtime", "Real-time"], color: "green",
  },
  "oracle": {
    label: "Oracle DB", role: "Enterprise Database System",
    description: "Provides reliable, scalable, and secure database management for large organizations. Manages structured data such as TRL scores, project timelines, resource allocation, and historical records.",
    tags: ["Database", "Enterprise", "Oracle"], color: "coral",
  },
  "pl/sql": {
    label: "PL/SQL", role: "Advanced SQL Procedures",
    description: "Executes complex queries, stored procedures, and manages structured enterprise data efficiently. Used in combined social systems where complex data relationships must be maintained alongside unstructured data.",
    tags: ["Database", "Oracle", "Procedures"], color: "teal",
  },
  "c": {
    label: "C", role: "Low-Level Computation",
    description: "Provides efficient low-level computation for implementing core logic, algorithms, and performance-critical operations in estimation and assessment systems.",
    tags: ["System", "Low-level", "Performance"], color: "gray",
  },
  "statsmodels": {
    label: "Statsmodels", role: "Statistical Analysis",
    description: "Used for statistical analysis and validation of time estimation models. Provides rigorous statistical methods to validate the accuracy of project duration predictions.",
    tags: ["Python Library", "Statistics", "Validation"], color: "purple",
  },
  "kotlin": {
    label: "Kotlin", role: "Modern Scalable Backend",
    description: "Modern alternative to Java, used for efficient and concise backend development in enterprise-level scalable backend systems.",
    tags: ["Backend", "Enterprise", "Modern"], color: "purple",
  },
  "typescript": {
    label: "TypeScript", role: "Type-Safe Frontend",
    description: "Enhances JavaScript with type safety, making large-scale applications more reliable. Used in social-layer frontends where reliability of AI/ML data display is critical.",
    tags: ["Frontend", "Type Safety", "Enterprise"], color: "blue",
  },
  "graphql": {
    label: "GraphQL", role: "API Query Layer",
    description: "Used as a flexible API query language in AI/ML backend systems. Enables efficient data fetching between AI model outputs and frontend dashboards.",
    tags: ["API", "Backend", "Data Fetching"], color: "coral",
  },
  "fastapi": {
    label: "FastAPI", role: "Python API Framework",
    description: "High-performance Python web framework for building APIs that serve AI/ML model outputs to frontend dashboards. Used in TRL + AI/ML integration layers.",
    tags: ["Backend", "API", "Python"], color: "green",
  },
  "kafka": {
    label: "Kafka", role: "Event-Driven Messaging",
    description: "Distributed event streaming platform used in social-layer TRL systems for handling real-time data feeds from collaborative and social media inputs.",
    tags: ["Backend", "Streaming", "Real-time"], color: "gray",
  },
  "airflow": {
    label: "Airflow", role: "Workflow Orchestration",
    description: "Used to orchestrate ML pipelines and data workflows for TRL + AI/ML systems, managing the scheduling and execution of data processing tasks.",
    tags: ["DevOps", "Pipeline", "AI/ML"], color: "amber",
  },
  "rest api": {
    label: "REST API", role: "API Protocol",
    description: "Standard web API protocol used for communication between frontend and backend components in TRL tools. Enables structured data exchange using HTTP methods.",
    tags: ["Protocol", "API", "Web"], color: "blue",
  },
  "grpc": {
    label: "gRPC", role: "High-Performance RPC",
    description: "High-performance Remote Procedure Call framework used in enterprise TRL systems for efficient communication between services, especially in AI/ML processing pipelines.",
    tags: ["Protocol", "API", "Performance"], color: "purple",
  },
  "js": {
    label: "JavaScript (JS)", role: "Frontend Engine",
    description: "Shorthand for JavaScript. Functions as the frontend engine used to create interactive forms, buttons, and real-time data displays in TRL web applications.",
    tags: ["Frontend", "Web", "UI"], color: "amber",
  },
};

function lookupGlossary(rawLabel) {
  if (!rawLabel) return null;
  const key = rawLabel.toLowerCase().trim();
  if (GLOSSARY[key]) return GLOSSARY[key];
  for (const [k, v] of Object.entries(GLOSSARY)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return null;
}

// ─── Matrix Data ──────────────────────────────────────────────────────────────
const LEVEL_NAMES = {
  1: "Level 1 — Software", 2: "Level 2 — Languages", 3: "Level 3 — Hardware",
  4: "Level 4 — Protocols", 5: "Level 5 — Filters", 6: "Level 6 — Cloud", 7: "Level 7 — Security",
};
const CHIP_COLORS = { 1: "blue", 2: "green", 3: "gray", 4: "purple", 5: "amber", 6: "teal", 7: "coral" };
const ROW_COLORS = ["blue", "green", "purple"];
const COL_COLORS = ["blue", "blue", "blue", "teal", "purple", "coral"];
const ROWS = ["TRL", "Project Duration", "TRL & Project Duration"];
const COLS = ["Tool", "Assessment", "Standalone", "ERP", "AI/ML", "Social"];

const CELLS = {
  // --- ROW 1: TRL STACK ---
  "0-0": { head: "TRL Tool", levels: { 1: { Software: ["ESA TRL Calculator", "NASA TRL Worksheet", "Horizon Europe"] }, 2: { Languages: ["JavaScript", "Excel VBA", "MATLAB", "Python", "PostgreSQL", "Oracle SQL"] }, 3: { Hardware: ["Laptop", "Browser", "Cloud Server"] }, 4: { Protocols: ["REST API (HTTP)", "Local Processing (File-based)", "Lightweight RPC"] }, 5: { Filters: ["Accuracy", "Ease of Use", "Budget"] }, 6: { Cloud: ["AWS", "GCR", "Azure"] }, 7: { Security: ["CrowdStrike Falcon", "Microsoft Defender for Endpoint", "AppLocker"] } } },
  
  "0-1": { head: "TRL Assessment", levels: { 1: { Software: ["ESA TRL Calculator", "Canada Clean-Growth TRL Assessment Tool", "eG Technology TRL Assessment"] }, 2: { Languages: ["Python", ".NET", "Java stack in ESA"] }, 3: { Hardware: ["Standard PC", "Any Browser system", "Workstation"] }, 4: { Protocols: ["Client-Server (REST+JSON)", "gRPC", "Database-driven API"] }, 5: { Criteria: ["Accuracy", "Reliability", "Flexibility"] }, 6: { Cloud: ["AWS", "Azure", "GCP", "GCR"] }, 7: { Security: ["Splunk", "IBM QRadar", "ELK Stack"] } } },
  
  "0-2": { head: "Standalone TRL implementation", levels: { 1: { Software: ["ESA TRL Calculator", "NASA TRL Calculator", "Canada Innovation TRL Assessment Tool"] }, 2: { Languages: ["JavaScript", "Microsoft Excel Macro(VBA)", "HTML", "CSS"] }, 3: { Hardware: ["Laptop"] }, 4: { Protocols: ["Filebased-pipeline", "Local API (CLI tools)", "Embedded processing"] }, 5: { Filters: ["Budget", "Ease of Use", "Efficiency"] }, 6: { Cloud: ["GCP", "AWS", "Azure"] }, 7: { Security: ["BitLocker", "Windows Defender Antivirus", "Malwarebytes"] } } },
  
  "0-3": { head: "TRL with ERP", levels: { 1: { Software: ["Siemens Teamcenter", "PTC Windchill", "SAP PLM"] }, 2: { Languages: ["C++", "JavaScript", "Angular", "Java", "JSP", "SQL", "ABAP", "SAP HANA SQL"] }, 3: { Hardware: ["Engineering Workstation", "PLM server cluster", "CAD System", "Secure enterprise servers"] }, 4: { Protocols: ["REST API + SQL", "SOAP (enterprise systems)", "Event driven"] }, 5: { Filters: ["Integration Capability", "Scalability", "Security"] }, 6: { Cloud: ["Azure", "SAP Cloud", "AWS"] }, 7: { Security: ["SAP Security", "Oracle Database Vault", "Palo Alto Networks NGFW"] } } },
  
  "0-4": { head: "TRL with AI/ML", levels: { 1: { Software: ["CARE (Clinical AI Readiness Evaluator)", "eG Technology TRL Assessment Tool"] }, 2: { Languages: ["Web app. Python/MATLAB", "JavaScript", "Python/MATLAB"] }, 3: { Hardware: ["Standard Workstation+ HPC", "Cloud server", "GPU/CPU ML servers"] }, 4: { Protocols: ["REST API (FastAPI)", "gRPC (fast model serving)", "Pipeline orchestration (Airflow-like)"] }, 5: { Filters: ["Accuracy", "Intelligence Level", "Automation"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Darktrace", "Microsoft Defender for Cloud", "TensorFlow Privacy"] } } },
  
  "0-5": { head: "TRL with AI/ML social media", levels: { 1: { Software: ["READINESSnavigator", "Kooplex Research Platform", "Remote Component Environment (RCE-DLR)"] }, 2: { Languages: ["Java/Python", "Jupyter", "Docker", "ECLIPSE RCP"] }, 3: { Hardware: ["Private Cluster", "Enterprise data centers", "Cloud HPC"] }, 4: { Protocols: ["Streaming (Kafka)", "REST APIs (external data)", "Event-driven architecture"] }, 5: { Filters: ["Data Source Compatibility", "Real-Time Capability", "Intelligence Level"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Zscaler Internet Access", "Cisco Umbrella", "Netskope"] } } },

  // --- ROW 2: TIME ESTIMATION STACK ---
  "1-0": { head: "Time Estimation Tool", levels: { 1: { Software: ["Jira", "Microsoft Project", "Oracle Primavera P6"] }, 2: { Languages: ["JavaScript, C", "Java", "Python", "MATLAB"] }, 3: { Hardware: ["Personal browser", "Window Workstation"] }, 4: { Protocols: ["Local UI processing", "REST API", "File-based"] }, 5: { Filters: ["Accuracy", "Efficiency", "Ease of Use"] }, 6: { Cloud: ["Azure", "AWS", "GCP"] }, 7: { Security: ["Microsoft Defender for Endpoint", "SentinelOne", "AppLocker"] } } },
  
  "1-1": { head: "Time Estimation Assessment", levels: { 1: { Software: ["Galorath SEER-SEM", "QSM SLIM-Estimate", "PRICE True Planning"] }, 2: { Languages: ["C, C#", ".NET Enterprise database", "JavaScript"] }, 3: { Hardware: ["Engineering Workstation", "Personal computer"] }, 4: { Protocols: ["Data pipeline (ETL)", "SQL-based communication", "REST API"] }, 5: { Filters: ["Accuracy", "Reliability", "Flexibility"] }, 6: { Cloud: ["AWS", "GCP", "Azure", "GCR"] }, 7: { Security: ["Splunk", "ELK Stack", "IBM QRadar"] } } },
  
  "1-2": { head: "Standalone Time Estimation implementation", levels: { 1: { Software: ["COCOMO II Tool", "SEER SIM", "SLIM (QSM)"] }, 2: { Languages: ["C/C++", "Python/MATLAB", "JavaScript"] }, 3: { Hardware: ["Window workstation", "Window PC"] }, 4: { Protocols: ["File-based", "Local scripts", "CLI tools"] }, 5: { Filters: ["Budget", "Efficiency", "Ease of Use"] }, 6: { Cloud: ["GCP", "AWS", "Azure"] }, 7: { Security: ["BitLocker", "Malwarebytes", "Windows Defender Antivirus"] } } },
  
  "1-3": { head: "Time Estimation with ERP", levels: { 1: { Software: ["SAP S/4HANA Project System", "Odoo ERP", "Microsoft Dynamics 365 Project Operation"] }, 2: { Languages: ["ABAP, SP HANA DB", "C#, .NET", "Python", "PostgreSQL", "JavaScript"] }, 3: { Hardware: ["Enterprise server", "Oracle Cloud", "Window enterprise"] }, 4: { Protocols: ["REST API + Cloud DB", "SOAP", "Event-driven integration"] }, 5: { Filters: ["Integration Capability", "Scalability", "Security"] }, 6: { Cloud: ["Azure", "SAP Cloud", "AWS"] }, 7: { Security: ["SAP Security", "Oracle Database", "Vault Fortinet FortiGate"] } } },
  
  "1-4": { head: "Time Estimation with AI/ML", levels: { 1: { Software: ["Forecast (AI project)", "SEER (Galorath SEERai)", "ALICE Technologies"] }, 2: { Languages: ["Python", "JavaScript", "C++"] }, 3: { Hardware: ["Cloud + distributed CPU/GPU", "High-performance servers", "HPC compute clusters"] }, 4: { Protocols: ["Model API (REST/gRPC)", "Cloud orchestration (Kubernetes)", "Data pipelines"] }, 5: { Filters: ["Accuracy", "Intelligence Level", "Automation"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Darktrace", "Azure Machine Learning Security", "Microsoft Defender for Cloud"] } } },
  
  "1-5": { head: "Time Estimation with AI/ML social media", levels: { 1: { Software: ["Jira+Estimate AI", "Clickup AI", "Notion AI"] }, 2: { Languages: ["Java, Kotlin, React/TypeScript", "Node.js", "JavaScript"] }, 3: { Hardware: ["Cloud workspace or private company server", "Cloud Workspace"] }, 4: { Protocols: ["Streaming (Kafka)", "REST APIs", "Distributed pipelines"] }, 5: { Filters: ["Data Source Compatibility", "Real-Time Capability", "Intelligence Level"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Zscaler Internet Access", "Netskope", "Cisco Umbrella"] } } },

  // --- ROW 3: COMBINED TRL & TIME STACK ---
  "2-0": { head: "TRL & Time Estimation Tool", levels: { 1: { Software: ["NASA TAT-C+OpenMDAO", "SEER SEM", "ANSYS ModelCenter"] }, 2: { Languages: ["Python, C++", ".NET"] }, 3: { Hardware: ["High-performance workstation", "Standard enterprise PC", "HPC workstations/GPU compute"] }, 4: { Protocols: ["Microservices (REST APIs)", "gRPC (fast internal comm.)", "Orchestration layer"] }, 5: { Filters: ["Accuracy", "Integration Capability", "Scalability"] }, 6: { Cloud: ["AWS", "Azure", "GCP"] }, 7: { Security: ["CrowdStrike Falcon", "Microsoft Defender for Endpoint", "SentinelOne"] } } },
  
  "2-1": { head: "TRL & Time Estimation Assessment", levels: { 1: { Software: ["Siemens TeamCenter + Simcenter", "Ansys ModelCenter", "IBM Engineering Lifecycle Management"] }, 2: { Languages: ["C++, Python, .NET", "MATLAB", "Java, C++, Eclipse RCP"] }, 3: { Hardware: ["Standard workstation", "GPU workstation"] }, 4: { Protocols: ["Data fusion layer", "REST APIs", "ETL pipelines"] }, 5: { Filters: ["Accuracy", "Reliability", "Flexibility"] }, 6: { Cloud: ["AWS", "Azure", "GCP"] }, 7: { Security: ["Splunk", "IBM QRadar", "ELK Stack"] } } },
  
  "2-2": { head: "Standalone TRL & Time Estimation implementation", levels: { 1: { Software: ["ESA TRL Calculator + COCOMO based Estimation System"] }, 2: { Languages: ["Python/Java/MATLAB/C++", "SQL"] }, 3: { Hardware: ["Standard PC"] }, 4: { Protocols: ["Local pipeline", "File-based", "CLI tools"] }, 5: { Filters: ["Budget", "Ease of Use", "Flexibility"] }, 6: { Cloud: ["GCP", "AWS", "Azure"] }, 7: { Security: ["BitLocker", "Windows Defender Antivirus", "Malwarebytes"] } } },
  
  "2-3": { head: "TRL & Time Estimation with ERP", levels: { 1: { Software: ["Siemens Teamcenter + SAP ERP", "NASA OpenMBEE+Digital Engineering", "SAP Portfolio & Project Management (PPM)"] }, 2: { Languages: ["Java, C++, .NET, SQL", "Oracle", "ABAP, SAP HANA"] }, 3: { Hardware: ["Enterprise servers", "Private data centre", "Cloud"] }, 4: { Protocols: ["SQL+REST API", "SOAP", "Event-driven system"] }, 5: { Filters: ["SQL+REST API", "SOAP", "Event-driven system"] }, 6: { Cloud: ["Azure", "SAP Cloud", "AWS"] }, 7: { Security: ["SAP Security", "Oracle Database Vault", "Palo Alto Networks NGFW"] } } },
  
  "2-4": { head: "TRL & Time Estimation with AI/ML", levels: { 1: { Software: ["IBM Engineering Lifecycle Management", "Siemens TeamCenter + Predictive Engineering analytics", "Oracle Primavera P6 + AI Risk Analysis"] }, 2: { Languages: ["Java, C++", "JavaScript", "Python"] }, 3: { Hardware: ["Cloud servers, enterprise workstation", "Industrial servers, HPC clusters"] }, 4: { Protocols: ["ML pipeline + REST API", "Cloud orchestration", "gRPC"] }, 5: { Filters: ["ML pipeline + REST API", "Cloud orchestration", "gRPC"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Darktrace", "Microsoft Defender for Cloud", "TensorFlow Privacy"] } } },
  
  "2-5": { head: "TRL & Time Estimation with AI/ML social media", levels: { 1: { Software: ["IBM Engineering Lifecycle Management", "Siemens TeamCenter + Predictive Engineering analytics", "Oracle Primavera P6 + AI Risk Analysis"] }, 2: { Languages: ["Python", "C++", "Java, PL/SQL"] }, 3: { Hardware: ["Industrial server", "Enterprise Workstation", "Linux servers, research workstation"] }, 4: { Protocols: ["Streaming (Kafka)", "REST APIs", "Distributed microservices"] }, 5: { Filters: ["Streaming (Kafka)", "REST APIs", "Distributed microservices"] }, 6: { Cloud: ["AWS", "GCP", "Azure"] }, 7: { Security: ["Zscaler Internet Access", "Cisco", "Umbrella Netskope"] } } }
};

// ─── Palette ──────────────────────────────────────────────────────────────────
const palette = {
  blue:   { bg: "#DBEAFE", dark: "#1E3A8A", mid: "#2563EB", light: "#93C5FD", text: "#1E3A8A" },
  green:  { bg: "#DCFCE7", dark: "#14532D", mid: "#16A34A", light: "#86EFAC", text: "#14532D" },
  purple: { bg: "#EDE9FE", dark: "#3B0764", mid: "#7C3AED", light: "#C4B5FD", text: "#3B0764" },
  teal:   { bg: "#CCFBF1", dark: "#0F4C37", mid: "#0D9488", light: "#5EEAD4", text: "#0F4C37" },
  coral:  { bg: "#FFE4E6", dark: "#881337", mid: "#E11D48", light: "#FDA4AF", text: "#881337" },
  amber:  { bg: "#FEF3C7", dark: "#78350F", mid: "#D97706", light: "#FCD34D", text: "#78350F" },
  gray:   { bg: "#F1F5F9", dark: "#1E293B", mid: "#64748B", light: "#CBD5E1", text: "#1E293B" },
};

function accentColor(key) { return palette[key]?.mid || "#64748B"; }

// ─── Detail Panel ─────────────────────────────────────────────────────────────
function DetailPanel({ selection, onClose }) {
  const { item, cellHead, glossary } = selection;
  const c = palette[glossary?.color || "blue"];
  const hasGlossary = !!glossary;

  return (
    <div style={{
      margin: "0 20px 20px",
      borderRadius: 16,
      border: `1.5px solid ${c.light}`,
      background: "#fff",
      overflow: "hidden",
      boxShadow: `0 8px 32px ${c.mid}18, 0 2px 8px rgba(0,0,0,0.06)`,
      animation: "slideDown 0.28s cubic-bezier(.4,0,.2,1)",
    }}>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Accent bar */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${c.mid}, ${c.mid}77)` }} />

      <div style={{ padding: "22px 26px 26px" }}>
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 5 }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em" }}>
                {hasGlossary ? glossary.label : item}
              </span>
              {hasGlossary && (
                <span style={{
                  fontSize: 11, fontWeight: 700, color: c.text,
                  background: c.bg, border: `1px solid ${c.light}`,
                  borderRadius: 20, padding: "3px 12px", letterSpacing: "0.04em",
                }}>
                  {glossary.role}
                </span>
              )}
            </div>
            <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>
              Context: <span style={{ color: c.mid, fontWeight: 700 }}>{cellHead}</span>
            </div>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 8, border: "1.5px solid #E2E8F0",
            background: "#F8FAFC", cursor: "pointer", fontSize: 14, color: "#64748B",
            display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
            flexShrink: 0,
          }}>✕</button>
        </div>

        {hasGlossary ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 130px", gap: 22, alignItems: "start" }}>
            <div>
              {/* Description box */}
              <div style={{
                fontSize: 14, color: "#1E293B", lineHeight: 1.8, fontWeight: 400,
                background: "#F8FAFC", borderRadius: 12, padding: "16px 18px",
                border: "1px solid #E2E8F0",
                marginBottom: (glossary.note || glossary.libraries) ? 14 : 0,
              }}>
                {glossary.description}
              </div>

              {/* Libraries */}
              {glossary.libraries && (
                <div style={{ marginBottom: glossary.note ? 14 : 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                    Key Libraries
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {glossary.libraries.map((lib, i) => (
                      <span key={i} style={{
                        fontSize: 12, fontWeight: 700, padding: "5px 11px",
                        borderRadius: 6, background: c.bg, color: c.text,
                        border: `1px solid ${c.light}`,
                      }}>{lib}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* SQL vs NoSQL note */}
              {glossary.note && (
                <div style={{ borderRadius: 12, overflow: "hidden", border: `1.5px solid ${c.light}` }}>
                  <div style={{
                    background: c.mid, color: "#fff",
                    padding: "9px 16px", fontSize: 11, fontWeight: 800,
                    letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span>⚖</span> {glossary.note.title}
                  </div>
                  <div style={{
                    background: c.bg, padding: "14px 16px",
                    fontSize: 13, color: c.dark, lineHeight: 1.75, fontWeight: 500,
                  }}>
                    {glossary.note.body}
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                Tags
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {glossary.tags?.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: 12, fontWeight: 700, padding: "6px 12px",
                    borderRadius: 8, background: "#F1F5F9", color: "#334155",
                    border: "1px solid #E2E8F0", textAlign: "center",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            fontSize: 14, color: "#64748B", lineHeight: 1.7,
            background: "#F8FAFC", borderRadius: 12, padding: "16px 18px",
            border: "1px solid #E2E8F0",
          }}>
            <span style={{ fontWeight: 700, color: "#0F172A" }}>{item}</span> is used in <span style={{ fontWeight: 700 }}>{cellHead}</span>. Glossary data is not available for this item.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Clickable Chip ───────────────────────────────────────────────────────────
function ClickableChip({ item, colorKey, cellHead, activeItem, onSelect, size = "sm" }) {
  const glossary = lookupGlossary(item);
  const isActive = activeItem === item;
  const isClickable = !!glossary;
  const [hover, setHover] = useState(false);

  const c = palette[colorKey] || palette.gray;
  const bg = isActive ? c.mid : hover && isClickable ? c.light : c.bg;
  const color = isActive ? "#fff" : c.text;

  return (
    <span
      onClick={() => isClickable && onSelect(item, cellHead, glossary)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: bg, color,
        border: `1px solid ${isActive ? c.mid : c.light}`,
        borderRadius: 6,
        fontSize: size === "lg" ? 13 : 12,
        fontWeight: 700,
        padding: size === "lg" ? "6px 14px" : "4px 10px",
        display: "inline-flex", alignItems: "center", gap: 4,
        lineHeight: 1.5, whiteSpace: "nowrap", letterSpacing: "0.01em",
        cursor: isClickable ? "pointer" : "default",
        transition: "all .15s",
        boxShadow: isActive ? `0 4px 12px ${c.mid}55` : hover && isClickable ? `0 2px 8px ${c.mid}33` : "none",
        transform: hover && isClickable && !isActive ? "translateY(-1px)" : "none",
        userSelect: "none",
      }}
      title={isClickable ? `View glossary: ${item}` : item}
    >
      {item}
      {isClickable && (
        <span style={{ fontSize: 9, opacity: isActive ? 0.8 : hover ? 0.7 : 0.35, transition: "opacity .15s" }}>
          {isActive ? "●" : "▸"}
        </span>
      )}
    </span>
  );
}

// ─── Matrix Card ──────────────────────────────────────────────────────────────
function Sample({ cell, globalLevel, accent, onCardClick, activeItem, onChipSelect }) {
  const [hover, setHover] = useState(false);
  const lvlData = cell.levels[globalLevel] || {};
  const items = Object.values(lvlData).flat().slice(0, 3);
  const chipColor = CHIP_COLORS[globalLevel];
  const ac = accentColor(accent);

  return (
    <div
      onClick={() => onCardClick(cell, accent)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 12, border: hover ? `1.5px solid ${ac}` : "1.5px solid #E2E8F0",
        background: hover ? "#FAFCFF" : "#fff",
        padding: "14px 14px 22px", cursor: "pointer",
        position: "relative", minHeight: 100, overflow: "hidden",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "all .18s cubic-bezier(.4,0,.2,1)",
        boxShadow: hover ? `0 8px 24px ${ac}22, 0 2px 8px rgba(0,0,0,0.06)` : "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, borderRadius: "12px 12px 0 0", background: `linear-gradient(90deg, ${ac}, ${ac}bb)` }} />
      <div style={{ fontSize: 12, fontWeight: 800, color: "#1E293B", marginBottom: 9, lineHeight: 1.3 }}>
        {cell.head}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }} onClick={e => e.stopPropagation()}>
        {items.map((item, i) => (
          <ClickableChip key={i} item={item} colorKey={chipColor} cellHead={cell.head} activeItem={activeItem} onSelect={onChipSelect} />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 6, right: 9, fontSize: 9.5, color: ac, fontWeight: 800, opacity: 0.65 }}>
        L{globalLevel}
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ open, onClose, cell, accent, initialLevel, activeItem, onChipSelect }) {
  const [activeLevel, setActiveLevel] = useState(initialLevel);
  useEffect(() => { setActiveLevel(initialLevel); }, [initialLevel, open]);
  if (!cell) return null;

  const ac = accentColor(accent);
  const lvlData = cell.levels[activeLevel] || {};
  const chipColor = CHIP_COLORS[activeLevel];

  return (
    <div onClick={(e) => e.target === e.currentTarget && onClose()} style={{
      position: "fixed", inset: 0, background: "rgba(15,23,42,0.55)",
      backdropFilter: "blur(4px)", display: "flex", alignItems: "center",
      justifyContent: "center", zIndex: 999,
      opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity .2s",
    }}>
      <div style={{
        background: "#fff", borderRadius: 18, border: "1.5px solid #E2E8F0",
        width: 580, maxWidth: "94vw", maxHeight: "88vh", overflowY: "auto",
        padding: 28, position: "relative",
        transform: open ? "scale(1) translateY(0)" : "scale(.95) translateY(16px)",
        transition: "transform .2s cubic-bezier(.4,0,.2,1)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 18, right: 18, width: 32, height: 32,
          borderRadius: 8, border: "1.5px solid #E2E8F0", background: "#F8FAFC",
          cursor: "pointer", fontSize: 14, color: "#475569", fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>✕</button>
        <div style={{ height: 4, borderRadius: 4, background: `linear-gradient(90deg, ${ac}, ${ac}88)`, marginBottom: 18 }} />
        <div style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", marginBottom: 4, letterSpacing: "-0.02em" }}>{cell.head}</div>
        <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 18, fontWeight: 600 }}>
          Click any chip ▸ to open glossary · Switch tabs to explore layers
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {[1,2,3,4,5,6,7].map((lvl) => {
            const isA = lvl === activeLevel;
            const p = palette.purple;
            return (
              <button key={lvl} onClick={() => setActiveLevel(lvl)} style={{
                fontSize: 12, padding: "6px 14px", borderRadius: 8,
                border: isA ? `2px solid ${p.mid}` : "1.5px solid #E2E8F0",
                background: isA ? p.mid : "#F8FAFC", color: isA ? "#fff" : "#475569",
                fontWeight: 700, cursor: "pointer", transition: "all .12s",
                boxShadow: isA ? `0 4px 12px ${p.mid}44` : "none",
              }}>{LEVEL_NAMES[lvl].split("—")[1]?.trim()}</button>
            );
          })}
        </div>
        {Object.entries(lvlData).map(([section, items]) => (
          <div key={section} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#94A3B8", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".08em" }}>{section}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map((item, i) => (
                <ClickableChip key={i} item={item} colorKey={chipColor} cellHead={cell.head}
                  activeItem={activeItem} size="lg"
                  onSelect={(it, cellH, gloss) => { onChipSelect(it, cellH, gloss); onClose(); }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar Button ───────────────────────────────────────────────────────────
function LvlBtn({ lvl, active, onClick }) {
  const c = palette.purple;
  return (
    <button onClick={onClick} style={{
      width: 52, height: 52, borderRadius: 12,
      border: active ? `2px solid ${c.mid}` : "1.5px solid #E2E8F0",
      background: active ? c.mid : "#fff", cursor: "pointer",
      fontWeight: 800, color: active ? "#fff" : "#475569",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 2, transition: "all .15s", lineHeight: 1,
      boxShadow: active ? `0 4px 12px ${c.mid}44` : "0 1px 3px rgba(0,0,0,0.06)",
    }}>
      <span style={{ fontSize: 13, fontWeight: 900 }}>L{lvl}</span>
      <span style={{ fontSize: 8.5, opacity: active ? 0.85 : 0.6, fontWeight: 600 }}>
        {LEVEL_NAMES[lvl].split("—")[1]?.trim().slice(0, 5)}
      </span>
    </button>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function TRLMatrixDashboard() {
  const [globalLevel, setGlobalLevel] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCell, setModalCell] = useState(null);
  const [modalAccent, setModalAccent] = useState("blue");
  const [activeSelection, setActiveSelection] = useState(null);
  const detailRef = useRef(null);

  const colHeaders = [
    { label: "Tool", color: "blue" }, { label: "Assessment", color: "blue" },
    { label: "Standalone", color: "blue" }, { label: "+ ERP", color: "teal" },
    { label: "+ AI/ML", color: "purple" }, { label: "+ Social", color: "coral" },
  ];

  function handleChipSelect(item, cellHead, glossary) {
    setActiveSelection({ item, cellHead, glossary });
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  return (
    <><Header/>
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif", background: "#F1F5F9" }}>
      {/* Sidebar */}
      <div style={{
        width: 76, flexShrink: 0, background: "#fff",
        borderRight: "1.5px solid #E2E8F0", display: "flex",
        flexDirection: "column", alignItems: "center", padding: "20px 0", gap: 8,
        boxShadow: "2px 0 8px rgba(0,0,0,0.04)",
      }}>
        <div style={{ fontSize: 9, color: "#94A3B8", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 800, writingMode: "vertical-lr", transform: "rotate(180deg)", marginBottom: 12 }}>
          Levels
        </div>
        {[1,2,3,4,5,6,7].map(lvl => <LvlBtn key={lvl} lvl={lvl} active={globalLevel === lvl} onClick={() => setGlobalLevel(lvl)} />)}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <div style={{
          padding: "16px 24px", borderBottom: "1.5px solid #E2E8F0",
          display: "flex", alignItems: "center", gap: 16, background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
              TRL &amp; Duration Estimation Matrix
            </div>
            <div style={{ fontSize: 13, color: "#64748B", display: "flex", gap: 6, marginTop: 2, fontWeight: 500, flexWrap: "wrap" }}>
              <span>Ground Level</span>
              <span style={{ opacity: .4 }}>›</span>
              <span style={{ color: palette.purple.mid, fontWeight: 700 }}>{LEVEL_NAMES[globalLevel]}</span>
              {activeSelection && (
                <><span style={{ opacity: .4 }}>›</span>
                <span style={{ color: palette.teal.mid, fontWeight: 700 }}>Viewing: {activeSelection.item}</span></>
              )}
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 10px" }}>
              ▸ Click any chip to explore
            </span>
            {[["blue","TRL"],["green","Duration"],["purple","Combined"]].map(([c,label]) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#475569", fontWeight: 600 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: palette[c].mid }} />{label}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix */}
        <div style={{ flex: 1, padding: "18px 20px 0", overflowY: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "90px repeat(6, 1fr)", gap: 8, marginBottom: 8 }}>
            <div />
            {colHeaders.map(({ label, color }, ci) => (
              <div key={ci} style={{
                textAlign: "center", fontSize: 11, fontWeight: 800, color: palette[color].dark,
                textTransform: "uppercase", letterSpacing: ".08em", padding: "5px 4px",
                background: palette[color].bg, borderRadius: 8, border: `1px solid ${palette[color].light}`,
              }}>{label}</div>
            ))}
          </div>

          {ROWS.map((row, ri) => (
            <div key={ri} style={{ display: "grid", gridTemplateColumns: "90px repeat(6, 1fr)", gap: 8, marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}>
                <div style={{
                  background: palette[ROW_COLORS[ri]].bg, border: `1px solid ${palette[ROW_COLORS[ri]].light}`,
                  borderRadius: 8, padding: "6px 10px", color: palette[ROW_COLORS[ri]].dark, fontWeight: 800, fontSize: 11,
                }}>{row}</div>
              </div>
              {COLS.map((col, ci) => {
                const key = `${ri}-${ci}`;
                const cell = CELLS[key];
                const accent = ci >= 3 ? COL_COLORS[ci] : ROW_COLORS[ri];
                return (
                  <Sample key={ci} cell={cell} globalLevel={globalLevel} accent={accent}
                    onCardClick={(c, a) => { setModalCell(c); setModalAccent(a); setModalOpen(true); }}
                    activeItem={activeSelection?.item} onChipSelect={handleChipSelect}
                  />
                );
              })}
            </div>
          ))}

          {/* Spacer so panel doesn't get hidden under content */}
          <div style={{ height: 16 }} />
        </div>

        {/* Detail Panel */}
        <div ref={detailRef}>
          {activeSelection && (
            <DetailPanel selection={activeSelection} onClose={() => setActiveSelection(null)} />
          )}
        </div>
      </div>

      <Modal
        open={modalOpen} onClose={() => setModalOpen(false)}
        cell={modalCell} accent={modalAccent} initialLevel={globalLevel}
        activeItem={activeSelection?.item}
        onChipSelect={(item, cellH, gloss) => {
          handleChipSelect(item, cellH, gloss);
          setModalOpen(false);
        }}
      />
    </div>
    </>
  );
}
