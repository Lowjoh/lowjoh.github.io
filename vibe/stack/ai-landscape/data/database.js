const database = {
  categories: [
    {
      id: "orchestration",
      name: "LLM Orchestration Frameworks",
      description: "Frameworks that help developers orchestrate LLM calls, tools, and data."
    },
    {
      id: "observability",
      name: "LLM Observability and Evaluation",
      description: "Tools for monitoring, tracing, and evaluating LLM outputs."
    },
    {
      id: "access-control",
      name: "Access Control and Policy Enforcement",
      description: "Solutions for role-based access control and policy enforcement in LLM systems."
    },
    {
      id: "api-gateways",
      name: "API Gateways and Service Routing",
      description: "API gateways and routing solutions for managing LLM service calls."
    },
    {
      id: "llm-providers",
      name: "LLM Providers and Model Hosting",
      description: "Providers of foundation models and hosting solutions."
    },
    {
      id: "vector-dbs",
      name: "Vector Databases and Knowledge Retrieval",
      description: "Databases and systems for storing and retrieving embeddings for LLMs."
    },
    {
      id: "big-tech",
      name: "Big Tech Integrations",
      description: "LLM integrations by major technology companies."
    },
    {
      id: "dev-tools",
      name: "Developer Tools",
      description: "Tools for developers building LLM applications."
    },
    {
      id: "secure-agents",
      name: "Secure LLM Agents",
      description: "Platforms for building secure, enterprise-grade LLM agents."
    }
  ],
  companies: [
    {
      id: "openai",
      name: "OpenAI",
      description: "Creator of GPT models and ChatGPT",
      categories: ["llm-providers"],
      products: ["gpt-4", "chatgpt-enterprise"],
      founded: 2015,
      funding: "$11B+"
    },
    {
      id: "anthropic",
      name: "Anthropic",
      description: "Creator of Claude models with a focus on safety",
      categories: ["llm-providers"],
      products: ["claude-2", "claude-enterprise"],
      founded: 2021,
      funding: "$4B+"
    },
    {
      id: "cohere",
      name: "Cohere",
      description: "Provider of LLMs for business with private deployment options",
      categories: ["llm-providers", "secure-agents"],
      products: ["command", "north", "coral"],
      founded: 2019,
      funding: "$445M+"
    },
    {
      id: "langchain",
      name: "LangChain (Sequoia-backed startup)",
      description: "Creator of the popular LangChain orchestration framework",
      categories: ["orchestration", "observability"],
      products: ["langchain", "langsmith", "langgraph"],
      founded: 2022,
      funding: "$35M+"
    },
    {
      id: "llamaindex",
      name: "LlamaIndex",
      description: "Data orchestration framework for LLMs",
      categories: ["orchestration"],
      products: ["llamaindex", "llamacloud"],
      founded: 2022,
      funding: "$19M+"
    },
    {
      id: "microsoft",
      name: "Microsoft",
      description: "Major technology company integrating LLMs across its ecosystem",
      categories: ["big-tech", "llm-providers", "orchestration"],
      products: ["azure-openai", "copilot", "semantic-kernel"],
      founded: 1975,
      funding: "Public (MSFT)"
    },
    {
      id: "pinecone",
      name: "Pinecone",
      description: "Vector database as a service for similarity search",
      categories: ["vector-dbs"],
      products: ["pinecone-vector-db"],
      founded: 2019,
      funding: "$130M+"
    },
    {
      id: "weaviate",
      name: "Weaviate",
      description: "Open-source vector database with cloud offering",
      categories: ["vector-dbs"],
      products: ["weaviate-db", "weaviate-cloud"],
      founded: 2019,
      funding: "$58M+"
    },
    {
      id: "milvus",
      name: "Milvus (Zilliz)",
      description: "Open-source vector database for large-scale similarity search",
      categories: ["vector-dbs"],
      products: ["milvus"],
      founded: 2019,
      funding: "$113M+"
    },
    {
      id: "langfuse",
      name: "Langfuse",
      description: "Open-source LLM observability platform",
      categories: ["observability"],
      products: ["langfuse"],
      founded: 2023,
      funding: "Seed stage"
    },
    {
      id: "arize",
      name: "Arize AI",
      description: "AI observability platform",
      categories: ["observability"],
      products: ["phoenix"],
      founded: 2019,
      funding: "$62M+"
    },
    {
      id: "kong",
      name: "Kong",
      description: "API gateway provider with AI extensions",
      categories: ["api-gateways"],
      products: ["kong-gateway", "ai-gateway"],
      founded: 2017,
      funding: "$171M+"
    },
    {
      id: "fixie",
      name: "Fixie AI",
      description: "Platform for building and deploying AI agents",
      categories: ["secure-agents"],
      products: ["fixie-platform"],
      founded: 2022,
      funding: "$17M+"
    },
    {
      id: "dust",
      name: "Dust",
      description: "Platform for building custom AI workflows",
      categories: ["secure-agents", "orchestration"],
      products: ["dust-platform"],
      founded: 2021,
      funding: "$5M+"
    },
    {
      id: "reka",
      name: "Reka AI",
      description: "Enterprise-grade on-prem AI assistants",
      categories: ["secure-agents", "llm-providers"],
      products: ["reka-core"],
      founded: 2023,
      funding: "$58M"
    }
  ],
  products: [
    {
      id: "gpt-4",
      name: "GPT-4",
      company: "openai",
      category: "llm-providers",
      description: "Advanced large language model with strong reasoning capabilities",
      features: ["32k context window", "multimodal (vision)", "reasoning"],
      pricing: "Usage-based API"
    },
    {
      id: "chatgpt-enterprise",
      name: "ChatGPT Enterprise",
      company: "openai",
      category: "llm-providers",
      description: "Enterprise version of ChatGPT with additional security and features",
      features: ["SOC2 compliance", "no training on data", "unlimited GPT-4 usage", "SSO"],
      pricing: "Enterprise subscription"
    },
    {
      id: "claude-2",
      name: "Claude 2",
      company: "anthropic",
      category: "llm-providers",
      description: "LLM with 100k+ token context window and focus on safety",
      features: ["100k context window", "constitutional AI", "safety-focused"],
      pricing: "Usage-based API"
    },
    {
      id: "langchain",
      name: "LangChain",
      company: "langchain",
      category: "orchestration",
      description: "Open-source library for chaining LLM operations and tools",
      features: ["agents", "chains", "memory", "tools", "document loaders"],
      pricing: "Open source (free)"
    },
    {
      id: "langsmith",
      name: "LangSmith",
      company: "langchain",
      category: "observability",
      description: "Managed platform for tracing and testing LLM chains",
      features: ["prompt management", "evaluation", "debugging", "analytics"],
      pricing: "Freemium + paid plans"
    },
    {
      id: "llamaindex",
      name: "LlamaIndex",
      company: "llamaindex",
      category: "orchestration",
      description: "Data framework for connecting LLMs with external data",
      features: ["data connectors", "indexing", "retrieval", "query engines"],
      pricing: "Open source (free)"
    },
    {
      id: "pinecone-vector-db",
      name: "Pinecone Vector Database",
      company: "pinecone",
      category: "vector-dbs",
      description: "Managed vector database for similarity search",
      features: ["serverless", "high-performance", "filtering", "hybrid search"],
      pricing: "Freemium + usage-based"
    },
    {
      id: "weaviate-db",
      name: "Weaviate",
      company: "weaviate",
      category: "vector-dbs",
      description: "Open-source vector database with GraphQL API",
      features: ["hybrid search", "auto-embeddings", "GraphQL", "modular architecture"],
      pricing: "Open source (free)"
    },
    {
      id: "langfuse",
      name: "Langfuse",
      company: "langfuse",
      category: "observability",
      description: "Open-source LLM monitoring and analytics",
      features: ["tracing", "prompt management", "evaluation", "analytics"],
      pricing: "Open source + cloud offering"
    },
    {
      id: "phoenix",
      name: "Arize Phoenix",
      company: "arize",
      category: "observability",
      description: "Open-source tool for LLM tracing and evaluation",
      features: ["tracing", "evaluation", "debugging", "visualization"],
      pricing: "Open source (free)"
    },
    {
      id: "ai-gateway",
      name: "Kong AI Gateway",
      company: "kong",
      category: "api-gateways",
      description: "AI-aware API gateway for managing LLM services",
      features: ["multi-LLM routing", "prompt processing", "security", "rate limiting"],
      pricing: "Free extension (Enterprise for support)"
    },
    {
      id: "semantic-kernel",
      name: "Semantic Kernel",
      company: "microsoft",
      category: "orchestration",
      description: "SDK for building LLM workflows with .NET or Python",
      features: ["memory", "skills", "connectors", "planners"],
      pricing: "Open source (free)"
    },
    {
      id: "copilot",
      name: "Microsoft 365 Copilot",
      company: "microsoft",
      category: "big-tech",
      description: "AI assistant integrated into Microsoft 365 apps",
      features: ["document generation", "email summarization", "meeting transcription", "data analysis"],
      pricing: "$30/user/month (requires M365)"
    },
    {
      id: "fixie-platform",
      name: "Fixie Platform",
      company: "fixie",
      category: "secure-agents",
      description: "Platform for building conversational AI agents",
      features: ["skills library", "API connectors", "memory", "hosting"],
      pricing: "Developer preview"
    },
    {
      id: "dust-platform",
      name: "Dust",
      company: "dust",
      category: "secure-agents",
      description: "Platform for building AI workflows with visual canvas",
      features: ["visual editor", "LLM chaining", "API integration", "self-hosting"],
      pricing: "Free + paid plans"
    }
  ],
  layers: [
    {
      id: "model-layer",
      name: "Model Layer",
      description: "Foundation models, either external APIs or on-prem deployments",
      components: ["llm-providers"]
    },
    {
      id: "data-layer",
      name: "Data/Knowledge Layer",
      description: "Storage and retrieval of data for LLM context",
      components: ["vector-dbs"]
    },
    {
      id: "orchestration-layer",
      name: "Orchestration and Agent Layer",
      description: "Coordination of LLM calls, tools, and workflows",
      components: ["orchestration", "secure-agents"]
    },
    {
      id: "policy-layer",
      name: "Policy/Guardrails Layer",
      description: "Enforcement of security, permissions, and compliance",
      components: ["access-control"]
    },
    {
      id: "interaction-layer",
      name: "Interaction Layer",
      description: "User interfaces and integration points",
      components: ["big-tech", "dev-tools"]
    },
    {
      id: "observability-layer",
      name: "Observability & Feedback Layer",
      description: "Monitoring, evaluation, and improvement of LLM systems",
      components: ["observability"]
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined') {
  module.exports = database;
} 