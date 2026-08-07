<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<p align="center">
  <a href="https://github.com/Kuruin/MediSynth/graphs/contributors">
    <img src="https://shieldcn.dev/github/contributors/Kuruin/MediSynth.svg?variant=outline&theme=zinc" alt="Contributors" />
  </a>
  <a href="https://github.com/Kuruin/MediSynth/network/members">
    <img src="https://shieldcn.dev/github/forks/Kuruin/MediSynth.svg?variant=outline&theme=zinc" alt="Forks" />
  </a>
  <a href="https://github.com/Kuruin/MediSynth/stargazers">
    <img src="https://shieldcn.dev/github/stars/Kuruin/MediSynth.svg?variant=outline&theme=zinc" alt="Stars" />
  </a>
  <a href="https://github.com/Kuruin/MediSynth/issues">
    <img src="https://shieldcn.dev/github/issues/Kuruin/MediSynth.svg?variant=outline&theme=zinc" alt="Issues" />
  </a>
  <a href="https://github.com/Kuruin/MediSynth/blob/master/LICENSE">
    <img src="https://shieldcn.dev/github/license/Kuruin/MediSynth.svg?variant=outline&theme=zinc" alt="License" />
  </a>
</p>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <picture>
  <img alt="MediSynth Banner" src="https://shieldcn.dev/header/surface.svg?title=MediSynth&subtitle=Unified+Multimodal+Medical+Report+Analysis+and+Timeline+Generation+Engine&logo=ri:HeartPulseFill&logoColor=10b981&theme=emerald&font=space-grotesk&align=left&overlay=0.6&radius=20&image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530210124550-912dc1381cb8%3Fq%3D80%26w%3D1170%26auto%3Dformat%26fit%3Dcrop" width="100%"/>
  </picture>
</p>

<div align="center">
  <p align="center">
    An AI-Powered Patient-Centric Healthcare Platform transforming scattered medical data into unified, actionable clinical insights.
    <br />
    <a href="https://github.com/Kuruin/MediSynth"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Kuruin/MediSynth">View Demo</a>
    &middot;
    <a href="https://github.com/Kuruin/MediSynth/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Kuruin/MediSynth/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#the-problem">The Problem</a></li>
        <li><a href="#our-solution">Our Solution</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#system-architecture">System Architecture</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MediSynth is an AI-powered healthcare intelligence platform designed to centralize lifelong medical records and transform scattered health data into actionable medical insights. Instead of carrying physical documents, patients manage all health information under a secure, unique **Medical ID**, providing doctors with immediate, permissioned access to their longitudinal health history.

### The Problem

- **Fragmentation:** Healthcare records are scattered across different clinics, labs, and hospitals.
- **Loss & Inefficiency:** Patients lose physical reports, leading to duplicate tests and incomplete history.
- **Cognitive Load on Clinicians:** Doctors spend valuable consultation time piecing together historical data from messy documents rather than focusing on the patient.

### Our Solution

MediSynth integrates a secure digital ledger with an intelligent processing pipeline. When a document is uploaded, the platform extracts text via OCR, identifies medical entities, updates the patient's unified medical file, and surfaces key diagnostic trends.

### Built With

- [![Next.js](https://shieldcn.dev/npm/next.svg?variant=secondary&logo=nextdotjs&label=Next.js)](https://nextjs.org/)
- [![React](https://shieldcn.dev/npm/react.svg?variant=secondary&logo=react&label=React)](https://reactjs.org/)
- [![TypeScript](https://shieldcn.dev/badge/TypeScript-v5-blue.svg?variant=secondary&logo=typescript)](https://www.typescriptlang.org/)
- [![Tailwind CSS](https://shieldcn.dev/npm/tailwindcss.svg?variant=secondary&logo=tailwind-css&label=Tailwind+CSS)](https://tailwindcss.com/)
- [![Node.js](https://shieldcn.dev/badge/Node.js-v18+-green.svg?variant=secondary&logo=nodedotjs)](https://nodejs.org/)
- [![Express.js](https://shieldcn.dev/npm/express.svg?variant=secondary&logo=express&label=Express.js)](https://expressjs.com/)
- [![PostgreSQL](https://shieldcn.dev/badge/PostgreSQL-v15+-blue.svg?variant=secondary&logo=postgresql)](https://www.postgresql.org/)
- [![Prisma](https://shieldcn.dev/npm/@prisma/client.svg?variant=secondary&logo=prisma&label=Prisma)](https://www.prisma.io/)
- [![Qdrant](https://shieldcn.dev/badge/Qdrant-Vector_DB-red.svg?variant=secondary&logo=qdrant)](https://qdrant.tech/)

---

## Key Features

1. **AI-Powered Medical Summary Generation**
   Automatically generates concise, evidence-based medical summaries from patient records, highlighting diagnoses, medications, allergies, laboratory findings, and treatment history to assist both patients and healthcare professionals.
2. **Multi-Language Medical Communication**
   Translates medical records, AI-generated summaries, and health insights into multiple regional and international languages while preserving clinical accuracy and medical terminology.
3. **Intelligent Audio Generation**
   Converts medical summaries, prescriptions, reminders, and health recommendations into natural voice output, improving accessibility for elderly, visually impaired, and low-literacy users.
4. **Smart Healthcare Scheduling & Management**
   Intelligently manages patient healthcare activities, including appointments, follow-ups, laboratory tests, vaccinations, and medication schedules through AI-powered planning and reminders.
5. **Centralized Digital Health Ledger**
   Maintains a secure, patient-controlled lifelong digital repository of medical records, including prescriptions, laboratory reports, imaging reports, discharge summaries, and treatment history with consent-based access.
6. **AI-Powered Clinical Decision Support**
   Provides doctors with evidence-based clinical insights, intelligent patient summaries, disease progression analysis, abnormal laboratory detection, medication conflict alerts, and explainable AI recommendations to support informed medical decision-making.
7. **Smart Digital Health Card**
   Generates a secure digital health card containing a unique patient identity, QR code, emergency medical information, and authenticated access to essential healthcare records.
8. **Intelligent Appointment, Medication & Follow-up Automation**
   Automatically extracts medication details from prescriptions, schedules medicine reminders, books follow-up appointments, tracks treatment adherence, and sends timely notifications to patients.
9. **Unified Medical Terminology Intelligence**
   Maintains a comprehensive medical terminology knowledge base that maps equivalent disease names, symptoms, and treatments across Ayurveda, Allopathy, Homeopathy, regional languages, and common terminology (e.g., Raktachap = Blood Pressure = BP), enabling seamless understanding across different healthcare systems.
10. **Intelligent Doctor Profile & Recommendation System**
    Provides verified doctor profiles, including specialization, qualifications, years of experience, consultation details, patient ratings, reviews, and personalized recommendations, enabling patients to make informed healthcare decisions before booking consultations.

---

## System Architecture

```
Patient / Doctor
       │
       ▼
Frontend (Next.js, React, Tailwind)
       │
       ▼
Backend API (Node.js, Express)
       │
       ├─► Database (PostgreSQL + Prisma)
       │
       └─► AI Pipeline (PaddleOCR ➔ NLP Extraction ➔ Embeddings ➔ Qdrant Vector DB ➔ LLM)
```

---

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up the project locally in your development workspace.

### Prerequisites

- Node.js (version 18 or above)
- npm (version 10 or above)
- PostgreSQL database instance

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Kuruin/MediSynth.git
   ```
2. Install dependencies at the monorepo root
   ```sh
   npm install
   ```
3. Set up your environment files. Create a `.env` file in the root folder with:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/medirec"
   QDRANT_URL="http://localhost:6333"
   LLM_API_KEY="your-llm-api-key"
   ```
4. Run Prisma migrations to set up database schemas
   ```sh
   npx prisma migrate dev
   ```
5. Start the local development server (runs frontend and backend concurrently via Turbo)
   ```sh
   npm run dev
   ```

---

<!-- ROADMAP -->

## Upcoming Features

- <input type="checkbox"> Core patient profile and record uploading system
- <input type="checkbox"> OCR parsing and medical information extraction pipeline
- <input type="checkbox"> Chronological health timeline builder
- <input type="checkbox"> Semantic search & Qdrant vector index integration
- <input type="checkbox"> Emergency QR Card generation and UI
- <input type="checkbox"> AI voice assistant console & language translations
