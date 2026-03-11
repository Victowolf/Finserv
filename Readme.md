# 🏦 Vivitri — AI-Powered Credit Appraisal Platform

> **Finserv Hackathon Project** — An end-to-end, multi-agent AI system that automates the entire bank loan appraisal workflow with zero-hallucination math, blockchain audit trails, and deep forensic fraud detection.

---

## 🚀 What is Vivitri?

Vivitri is a **real-world banking-grade AI platform** that replaces the slow, error-prone manual credit appraisal process with a team of **6 specialized AI agents** working in parallel. It ingests messy financial documents, enriches them with live external data, performs forensic fraud detection, calculates exact banking ratios, and delivers a tamper-proof Credit Appraisal Memo (CAM) — all secured on the blockchain.

---

## ✨ Key Features

### 1. 🔍 Vision-Native Data Ingestion
Flawlessly extracts unstructured text and tables from messy documents using **Vision AI (Qwen2.5-VL)**, while instantly enriching the borrower profile with live external APIs:
- **CIBIL Commercial** — credit history
- **MCA21 V3** — company registration & compliance
- **e-Courts** — litigation history

### 2. ⚙️ Parallel Multi-Agent System
Replaces slow single-model bottlenecks with a **Custom Python Orchestrator** that dynamically routes tasks to 6 specialized AI agents for simultaneous forensic, market, and financial analysis.

### 3. 🧮 Zero-Hallucination Math (Python Sandbox)
Eliminates "AI math errors." The financial agent writes and executes **deterministic Python (pandas) code** in a secure sandbox, guaranteeing 100% exact banking ratios such as **DSCR** and **TNW**.

### 4. 🔎 Deep Forensic Chain-of-Thought
Removes the AI "black box" by detailing step-by-step reasoning. Exposes hidden financial loopholes, shell company structures, and anomalies like **GSTR-2A vs 3B mismatches** between reported GST revenue and actual bank inflows.

### 5. 📚 Dynamic Vector RAG (The Rulebook)
Anchors AI knowledge to reality by semantically searching a **Vector Database** loaded with real-time **RBI guidelines** and internal bank credit policies before making compliance judgments.

### 6. ⛓️ Immutable Blockchain Auditing
Secures the final CAM and loan decision via **IPFS**, generating a **cryptographic hash on the blockchain** to create a 100% tamper-proof, regulator-ready audit trail.

---

## 🤖 The 6-Agent Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Custom Python Orchestrator               │
│        (Parallel CoT — all agents run simultaneously)       │
└────────┬──────────┬────────────┬──────────┬────────┬────────┘
         │          │            │          │        │
    Agent 1     Agent 2      Agent 3    Agent 4  Agent 5
    (Vision)  (Forensics)  (Algorithmic)(Market) (Human)
         │          │            │          │        │
         └──────────┴────────────┴──────────┴────────┘
                              │
                         Agent 6
                    (Central Engine)
                   Final CAM + Blockchain
```

| Agent | Name | Role |
|-------|------|------|
| 1 | **Vision** | Extracts text and data from messy documents using **Qwen2.5VL-7B** |
| 2 | **Forensics** | Detects circular trading and tax fraud via GSTR-2A vs 3B reconciliation |
| 3 | **Algorithmic** | Computes financial ratios (DSCR, TNW) in a secure Python sandbox |
| 4 | **Market** | Evaluates live industry news and market trends affecting the business |
| 5 | **Human** | Integrates physical on-site visit verifications into the digital pipeline |
| 6 | **Central Engine** | Synthesizes all 5 agent reports via Chain-of-Thought to generate the final CAM and commit to blockchain |

---

## 🛠️ Methods & AI Techniques

| Method | Description |
|--------|-------------|
| **Dynamic Persona Engineering** | Dynamically injects historical CAMs into the system prompt to align the agent with a senior credit manager's risk appetite — no fine-tuning needed |
| **Vector RAG (Policy Grounding)** | Semantic search on a Vector DB of live RBI guidelines, ensuring every compliance judgment is grounded in current regulation |
| **Python Sandboxing** | AI is restricted from doing its own math — it uses Function Calling to run deterministic pandas scripts, guaranteeing 100% precision |
| **Parallel CoT Orchestration** | Runs multi-agent ensemble simultaneously; forces each agent to output explicit Chain-of-Thought for cross-referencing and anomaly detection |

---

## 📁 Repository Structure

```
Finserv/
│
├── VivitriFront/                  # Frontend — TypeScript / React / Next.js
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Route-level pages
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── services/              # API call services
│   │   ├── utils/                 # Helper functions
│   │   └── styles/                # Global and module CSS / Tailwind
│   ├── .env.local                 # Frontend environment variables
│   ├── next.config.js             # Next.js configuration
│   ├── tsconfig.json              # TypeScript configuration
│   └── package.json               # Node dependencies
│
└── VivitriBack/                   # Backend — Python (FastAPI)
    ├── agents/                    # The 6 AI agent modules
    │   ├── agent_vision.py        # Agent 1: Document extraction (Qwen2.5-VL-7B)
    │   ├── agent_forensics.py     # Agent 2: GST fraud & circular trading detection
    │   ├── agent_algorithmic.py   # Agent 3: Financial ratio computation (DSCR, TNW)
    │   ├── agent_market.py        # Agent 4: Live market & news analysis
    │   ├── agent_human.py         # Agent 5: On-site visit integration
    │   └── agent_central.py       # Agent 6: CAM synthesis + blockchain commit
    │
    ├── orchestrator/              # Custom Python parallel orchestrator
    │   ├── orchestrator.py        # Core routing and parallel execution logic
    │   └── task_queue.py          # Task dispatching to agents
    │
    ├── sandbox/                   # Secure Python execution sandbox
    │   └── math_executor.py       # Deterministic financial ratio calculator
    │
    ├── rag/                       # Vector RAG — RBI policy grounding
    │   ├── vector_store.py        # FAISS / Chroma vector DB interface
    │   ├── embeddings.py          # Embedding generation
    │   └── policies/              # RBI guidelines & bank credit policy docs
    │
    ├── blockchain/                # IPFS + Blockchain audit trail
    │   ├── ipfs_client.py         # Upload CAM to IPFS
    │   └── chain_logger.py        # Write cryptographic hash to blockchain
    │
    ├── external_apis/             # Live data enrichment integrations
    │   ├── cibil_client.py        # CIBIL Commercial API
    │   ├── mca_client.py          # MCA21 V3 API
    │   └── ecourts_client.py      # e-Courts litigation API
    │
    ├── models/                    # Pydantic schemas / data models
    │   ├── borrower.py
    │   ├── cam_report.py
    │   └── risk_score.py
    │
    ├── routers/                   # FastAPI route definitions
    │   ├── appraisal.py           # POST /appraise — trigger full pipeline
    │   ├── documents.py           # POST /upload — document ingestion
    │   └── reports.py             # GET /report/{id} — fetch CAM report
    │
    ├── core/                      # App configuration & startup
    │   ├── config.py              # Environment variable loading
    │   └── logging.py             # Structured logging setup
    │
    ├── main.py                    # FastAPI app entry point
    ├── requirements.txt           # Python dependencies
    ├── .env                       # Backend environment variables (never commit)
    └── Dockerfile                 # Container definition
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **Python** 3.10+
- **pip** + **virtualenv**
- Access credentials for CIBIL, MCA21, e-Courts APIs
- An IPFS node or Pinata / Web3.Storage account

---

### 🖥️ Frontend Setup (`VivitriFront`)

```bash
cd VivitriFront

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:8000

# Start development server
npm run dev
```

Frontend runs at `http://localhost:3000`

---

### ⚙️ Backend Setup (`VivitriBack`)

```bash
cd VivitriBack

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Fill in your API keys (see Environment Variables below)

# Start the API server
uvicorn main:app --reload --port 8000
```

Backend API runs at `http://localhost:8000`  
Swagger docs available at `http://localhost:8000/docs`

---

## 🌍 Environment Variables

### Frontend (`VivitriFront/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (`VivitriBack/.env`)
```env
# AI Model
OPENAI_API_KEY=your_openai_key
QWEN_MODEL_PATH=Qwen/Qwen2.5-VL-7B-Instruct

# External Data APIs
CIBIL_API_KEY=your_cibil_key
MCA21_API_KEY=your_mca21_key
ECOURTS_API_KEY=your_ecourts_key

# Vector DB
VECTOR_DB_PATH=./rag/db

# Blockchain / IPFS
IPFS_GATEWAY=https://api.pinata.cloud
IPFS_API_KEY=your_pinata_key
BLOCKCHAIN_RPC_URL=your_rpc_url
WALLET_PRIVATE_KEY=your_wallet_key

# App
SECRET_KEY=your_secret_key
DATABASE_URL=postgresql://user:pass@localhost:5432/vivitri
```

> ⚠️ **Never commit `.env` files to version control.**

---

## 🔄 Real-World Banking Pipeline

```
Document Upload
      │
      ▼
Agent 1 (Vision AI) ── Extract data from PDFs, images, tables
      │
      ▼
Live API Enrichment ── CIBIL + MCA21 + e-Courts
      │
      ▼
Parallel Agent Analysis (Agents 2–5 run simultaneously)
  ├── Agent 2: Forensics   — GST fraud, circular trading
  ├── Agent 3: Math Sandbox — DSCR, TNW, financial ratios
  ├── Agent 4: Market Intel  — industry & news trends
  └── Agent 5: Human Visit  — physical on-site verification
      │
      ▼
Agent 6 (Central Engine) ── Chain-of-Thought synthesis
      │
      ▼
5C Credit Appraisal Memo (CAM) + Risk Score
      │
      ▼
IPFS Upload → Cryptographic Hash → Blockchain Commit
      │
      ▼
Tamper-Proof Audit Trail ✅
```

---

## 📊 Scalability & Real-World Advantages

| Feature | Vivitri | Traditional Systems |
|---------|---------|---------------------|
| Document parsing | Vision AI (Qwen2.5-VL) | Manual / OCR |
| Financial math | Python sandbox — 0% error | AI estimation — error-prone |
| Fraud detection | Forensic cross-referencing | Rule-based checks |
| Policy compliance | Live Vector RAG (RBI) | Static rule sets |
| Audit trail | IPFS + Blockchain | PDF reports |
| Scalability | Modular per-agent scaling | Monolithic bottleneck |
| Human oversight | Integrated site visit agent | Separate offline process |
| Policy updates | Vector DB update — instant | Model retraining required |

---

## 🧪 Running Tests

```bash
# Backend
cd VivitriBack
pytest tests/ -v

# Frontend
cd VivitriFront
npm run test
```

---

## 📦 Production Deployment

```bash
# Backend (Gunicorn + Uvicorn workers)
cd VivitriBack
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000

# Frontend
cd VivitriFront
npm run build && npm start

# Docker (backend)
docker build -t vivitri-back ./VivitriBack
docker run -p 8000:8000 --env-file VivitriBack/.env vivitri-back
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/agent-improvement`
3. Commit your changes: `git commit -m 'Improve forensics agent GST detection'`
4. Push to the branch: `git push origin feature/agent-improvement`
5. Open a Pull Request

---

## 📄 License

This project is open source. See the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Victowolf**  
GitHub: [@Victowolf](https://github.com/Victowolf)

---

> *Vivitri — Transforming credit appraisal from a weeks-long manual process into an instant, auditable, AI-powered decision.*