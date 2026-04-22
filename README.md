<div align="center">

```
    ╔══════════════════════════════════════════════════════════════════╗
    ║                                                                  ║
    ║   ██╗  ██╗██╗  ██╗ ██████╗ ███╗   ██╗███████╗██╗   ██╗██╗   ██╗  ║
    ║   ██║  ██║██║  ██║██╔═══██╗████╗  ██║╚══███╔╝██║   ██║╚██╗ ██╔╝  ║
    ║   ███████║███████║██║   ██║██╔██╗ ██║  ███╔╝ ██║   ██║ ╚████╔╝   ║
    ║   ██╔══██║██╔══██║██║   ██║██║╚██╗██║ ███╔╝  ██║   ██║  ╚██╔╝    ║
    ║   ██║  ██║██║  ██║╚██████╔╝██║ ╚████║███████╗╚██████╔╝   ██║     ║
    ║   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝    ╚═╝     ║
    ║                                                                  ║
    ║              BACKEND ENGINEER / AI INFRASTRUCTURE                ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
```

<br/>

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&width=600&lines=RAG+Systems+%C2%B7+Vector+Databases+%C2%B7+LLM+Architecture;Building+retrieval+pipelines+that+scale;From+query+to+context+to+response" alt="Typing SVG" />
</a>

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/jhonzuluaga)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jhon.zuluaga.dev@gmail.com)

</div>

---

## System Profile

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ROLE        │  Backend Engineer / AI Infrastructure                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOCUS       │  RAG pipelines · Vector search · LLM backend systems       │
├─────────────────────────────────────────────────────────────────────────────┤
│  RUNTIME     │  TypeScript · Node.js · Python                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  STATUS      │  Active — Building production RAG systems                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

I engineer systems that bridge data infrastructure with AI capabilities. My work centers on **Retrieval-Augmented Generation architecture** — designing the complete flow from query ingestion through vector retrieval to LLM response generation.

I prioritize correctness first, clear data flow second, and observable behavior throughout. I build systems that need to hold together under real operational constraints, not just in demo environments.

---

## Active Build: RAG Chatbot System

```
ARCHITECTURE OVERVIEW
═════════════════════

    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
    │   Client    │────▶│    API      │────▶│   Query     │
    │   Request   │     │   Layer     │     │  Processor  │
    └─────────────┘     └─────────────┘     └──────┬──────┘
                                                   │
                    ┌──────────────────────────────┘
                    │
                    ▼
    ┌─────────────────────────────────────────────────────────┐
    │              VECTOR RETRIEVAL ENGINE                      │
    │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
    │  │   Supabase   │  │   pgvector   │  │   Semantic   │  │
    │  │   (host)     │  │   (index)    │  │   Search     │  │
    │  └──────────────┘  └──────────────┘  └──────────────┘  │
    └────────────────────┬────────────────────────────────────┘
                         │
                         ▼
    ┌─────────────────────────────────────────────────────────┐
    │              CONTEXT ASSEMBLY LAYER                     │
    │  • Query vectorization                                  │
    │  • Top-K similarity search                              │
    │  • Relevance scoring & filtering                        │
    │  • Context window construction                          │
    └────────────────────┬────────────────────────────────────┘
                         │
                         ▼
    ┌─────────────────────────────────────────────────────────┐
    │              LLM INTERFACE                              │
    │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
    │  │   Prompt     │  │   OpenAI     │  │   Response   │  │
    │  │   Builder    │  │    API       │  │   Stream     │  │
    │  └──────────────┘  └──────────────┘  └──────────────┘  │
    └────────────────────┬────────────────────────────────────┘
                         │
                         ▼
    ┌─────────────┐
    │   Response  │
    │   Delivery  │
    └─────────────┘
```

**System Components Implemented:**

| Layer | Status | Details |
|-------|--------|---------|
| **Document Ingestion** | ✅ Operational | CRUD pipeline for document management |
| **Embedding Pipeline** | ✅ Operational | Vector generation + storage in Supabase |
| **Vector Search** | ✅ Operational | pgvector-powered semantic retrieval |
| **Context Assembly** | ✅ Operational | Query → retrieval → prompt construction |
| **LLM Integration** | ✅ Operational | OpenAI API with context window control |
| **Response Streaming** | 🔄 In Progress | Latency optimization underway |

**Current Focus:** Refining context relevance scoring algorithms and optimizing end-to-end response latency.

---

## Technology Arsenal

<div align="center">

**Primary Stack**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

**AI & Data Infrastructure**

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

**Development & Testing**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Active Expansion**

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)

---

## Engineering Domains

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  RAG SYSTEMS                                                                │
│  ├─ Hybrid search (dense + sparse retrieval)                               │
│  ├─ Contextual chunking strategies                                           │
│  └─ Relevance scoring & ranking algorithms                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  VECTOR DATABASES                                                           │
│  ├─ pgvector for Postgres-native semantic search                             │
│  ├─ Embedding pipeline design & optimization                                 │
│  └─ Semantic coherence in vector space                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  LLM INFRASTRUCTURE                                                         │
│  ├─ Model-agnostic API layers                                                │
│  ├─ Context window budgeting                                                 │
│  ├─ Streaming response architecture                                          │
│  └─ Prompt versioning & management                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  BACKEND ARCHITECTURE                                                       │
│  ├─ Data modeling for AI workloads                                         │
│  ├─ API surface design with clear contracts                                  │
│  └─ System observability & monitoring                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Metrics & Activity

<div align="center">

<img height="180" src="https://github-readme-stats.vercel.app/api?username=JhonZuluaga-J&show_icons=true&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=8b949e&ring_color=58a6ff&hide=issues&count_private=true" />
<img height="180" src="https://github-readme-stats.vercel.app/api/top-langs/?username=JhonZuluaga-J&layout=compact&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=8b949e&langs_count=6" />

</div>

---

## Contribution Matrix

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/JhonZuluaga-J/JhonZuluaga-J/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/JhonZuluaga-J/JhonZuluaga-J/output/github-contribution-grid-snake.svg" />
  <img alt="github-snake" src="https://raw.githubusercontent.com/JhonZuluaga-J/JhonZuluaga-J/output/github-contribution-grid-snake-dark.svg" />
</picture>

</div>

---

<div align="center">

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║            "Building systems that retrieve, reason, and respond."             ║
║                                                                               ║
║                          JHON ZULUAGA · BACKEND ENGINEER                       ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

</div>
