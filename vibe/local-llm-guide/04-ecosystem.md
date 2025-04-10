---
layout: page
title: "Ecosystem of Tools Enabling Personal LLM Systems"
subtitle: "A survey of software and projects to build your local AI stack"
---

# Ecosystem of Tools Enabling Personal LLM Systems

![Tools Ecosystem](/local-llm-guide/assets/tools-ecosystem.jpg)

<div class="chapter-nav">
  <a href="/vibe/local-llm-guide/03-architecture.html" class="prev">← Previous Chapter</a>
  <span class="sep">|</span>
  <a href="/vibe/local-llm-guide/05-feasibility.html" class="next">Next Chapter →</a>
</div>

Building a local LLM-powered assistant is facilitated by a rich ecosystem. Below we map each layer of the architecture to representative **open-source projects and platforms** that provide relevant capabilities. Wherever possible, these tools are chosen for being self-hostable or privacy-preserving.

## Local Inference Engines & Runtimes

<div class="tool-grid">
  <div class="tool-card">
    <div class="header">
      <h4>LM Studio</h4>
      <div class="tags">
        <span class="tag">Desktop App</span>
        <span class="tag">User-friendly</span>
      </div>
    </div>
    <p>A cross-platform desktop application that lets users <strong>download and run open-source LLMs locally</strong> with a user-friendly UI.</p>
    <div class="features">
      <ul>
        <li>Supports models in the <code>gguf</code> format (for llama.cpp)</li>
        <li>Can serve models as a local API</li>
        <li>No data collection or usage telemetry</li>
        <li>Features chat interface, model parameter tuning, and multi-model management</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://lmstudio.ai/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>GPT4All</h4>
      <div class="tags">
        <span class="tag">Ecosystem</span>
        <span class="tag">Privacy-focused</span>
      </div>
    </div>
    <p>An ecosystem by Nomic AI, including an easy installer and UI for running various smaller models.</p>
    <div class="features">
      <ul>
        <li>Built with a "privacy first" motto – works fully offline</li>
        <li>Can ingest local documents for question answering</li>
        <li>Beginner-friendly GUI and Python library for developers</li>
        <li>Enterprise edition available for businesses</li>
      </ul>
    </div>
    <div class="note">
      <p>Note: By default the app may collect anonymous usage analytics, but you can opt-out.</p>
    </div>
    <div class="links">
      <a href="https://gpt4all.io/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Ollama</h4>
      <div class="tags">
        <span class="tag">CLI</span>
        <span class="tag">Server</span>
      </div>
    </div>
    <p>A command-line tool and server that specializes in one-line deployment of models.</p>
    <div class="features">
      <ul>
        <li>Simple <code>ollama run</code> commands to fetch and run models</li>
        <li>Good integration on macOS (leveraging Apple's Neural Engine)</li>
        <li>Community-contributed integrations (Home Assistant plugin, Node-RED node)</li>
        <li>Popular for quickly spinning up a ChatGPT-like local chatbot</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://ollama.ai/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>llama.cpp and Derivatives</h4>
      <div class="tags">
        <span class="tag">Core Library</span>
        <span class="tag">Lightweight</span>
      </div>
    </div>
    <p>The foundational C++ library that made running LLaMA models on modest hardware feasible.</p>
    <div class="features">
      <ul>
        <li>Many UIs (LM Studio, GPT4All, etc.) use llama.cpp under the hood</li>
        <li>Can be used directly via CLI or Python bindings (llama-cpp-python)</li>
        <li>Extremely lightweight – just an executable that loads the model file</li>
        <li>Has spawned forks like GPTQ-for-LLaMA for GPU quantized inference</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://github.com/ggerganov/llama.cpp" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Jan</h4>
      <div class="tags">
        <span class="tag">Desktop App</span>
        <span class="tag">New (2024)</span>
      </div>
    </div>
    <p>An open-source ChatGPT alternative focusing on user-owned philosophy.</p>
    <div class="features">
      <ul>
        <li>Electron-based app with a simple interface</li>
        <li>Pre-downloaded models out-of-the-box for convenience</li>
        <li>Cross-platform with model imports and parameter tuning</li>
        <li>Emphasis on accessibility – turning "consumer machines into AI supercomputers"</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://jan.ai/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Enterprise/Developer Frameworks</h4>
      <div class="tags">
        <span class="tag">Advanced</span>
        <span class="tag">Server</span>
      </div>
    </div>
    <p>For more advanced deployments, there are professional-grade toolkits.</p>
    <div class="features">
      <ul>
        <li><strong>BentoML's OpenLLM</strong>: Wraps models into a local server with an API</li>
        <li><strong>LMDeploy</strong>: Optimizes serving for throughput on multi-GPU setups</li>
        <li><strong>vLLM</strong>: Berkeley's optimized inference engine focusing on efficient GPU memory use</li>
        <li>Mirror capabilities of cloud model serving frameworks but on local hardware</li>
      </ul>
    </div>
  </div>
</div>

<div class="insight-box highlight">
  <h4>Supported Models</h4>
  <p>The above tools support a range of open models suitable for home use:</p>
  <ul>
    <li><strong>Meta's LLaMA family</strong>: LLaMA 2 (and LLaMA 3) in 7B, 13B, and 70B parameter sizes</li>
    <li><strong>Mistral 7B</strong>: Strong performance for its size, Apache-2 licensed, efficient on CPU-only systems</li>
    <li><strong>Falcon models</strong>: Royalty-free models from UAE's TII in 7B and 40B sizes</li>
    <li><strong>Code-specialized models</strong>: SantaCoder, StarCoder, Meta's Code LLaMA</li>
    <li><strong>Various fine-tunes</strong>: Vicuna, Alpaca, Guanaco, OpenAssistant, Pythia, etc.</li>
  </ul>
  <p>As of early 2025, the <strong>trend is an explosion of open models</strong> – open-source LLM releases have nearly doubled those of closed models since 2023.</p>
</div>

Local inference tech has reached a point where non-experts can get a model running with minimal hassle. These tools hide the complexity of model formats and optimization, offering a plug-and-play experience similar to installing an app.

## Personal Data Integration & Knowledge Management

<div class="tool-grid">
  <div class="tool-card">
    <div class="header">
      <h4>Danswer (Onyx)</h4>
      <div class="tags">
        <span class="tag">Self-hosted</span>
        <span class="tag">QA System</span>
      </div>
    </div>
    <p>An open-source self-hosted Q&A system originally for workplace docs, which can be repurposed for personal use.</p>
    <div class="features">
      <ul>
        <li>Connectors for dozens of sources (Slack, Google Drive, Notion, local files, etc.)</li>
        <li>Builds a hybrid index (vector + keyword) of all ingested content</li>
        <li>ChatGPT-like interface where queries are answered with citations from your data</li>
        <li>Deployed as Docker containers on your own machine</li>
        <li>Can use a locally hosted LLM for a fully air-gapped solution</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://github.com/danswer-ai/danswer" target="_blank">GitHub</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>LlamaIndex (GPT Index)</h4>
      <div class="tags">
        <span class="tag">Library</span>
        <span class="tag">Framework</span>
      </div>
    </div>
    <p>A library that helps connect LLMs to your custom data.</p>
    <div class="features">
      <ul>
        <li>Provides data loaders for various formats</li>
        <li>Creates indices that an LLM can query</li>
        <li>Very flexible and often used in RAG pipelines</li>
        <li>Supports composing multiple indices (useful for separate embeddings for emails vs notes)</li>
        <li>Open-source and works with any LLM backend (OpenAI API or local)</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://www.llamaindex.ai/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Haystack by Deepset</h4>
      <div class="tags">
        <span class="tag">Framework</span>
        <span class="tag">Production</span>
      </div>
    </div>
    <p>Another open-source framework for building QA systems over documents.</p>
    <div class="features">
      <ul>
        <li>Includes a pipeline for retrieval and generation</li>
        <li>Can be set up to read PDFs, websites, etc.</li>
        <li>Has a UI called Haystack Explorer for testing queries</li>
        <li>Supports document search with feedback (learning from corrections)</li>
        <li>Robust and used in production for enterprise search</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://haystack.deepset.ai/" target="_blank">Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>MemGPT / Long-term memory frameworks</h4>
      <div class="tags">
        <span class="tag">Experimental</span>
        <span class="tag">Research</span>
      </div>
    </div>
    <p>Frameworks to give LLMs unbounded memory by automatically storing and retrieving past conversation context.</p>
    <div class="features">
      <ul>
        <li><strong>MemGPT</strong>: Framework from a 2023 paper allowing LLMs to manage their own memory</li>
        <li><strong>LangChain's conversation memory components</strong>: Can swap old messages in/out of context</li>
        <li>Work on "personal memory databases" - private knowledge graphs built from your data</li>
        <li>Important for personal assistants that you interact with over months</li>
      </ul>
    </div>
    <div class="note">
      <p>Note: These are currently experimental but show promise for enhancing AI's long-term memory.</p>
    </div>
    <div class="links">
      <a href="https://memgpt.ai/" target="_blank">MemGPT Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Vector Databases</h4>
      <div class="tags">
        <span class="tag">Storage</span>
        <span class="tag">Essential</span>
      </div>
    </div>
    <p>Databases specialized in storing embeddings for semantic search.</p>
    <div class="features">
      <ul>
        <li><strong>Chroma</strong>: Simple to set up (just a pip install), stores data in a local SQLite or DuckDB file</li>
        <li><strong>Weaviate</strong> and <strong>Milvus</strong>: Heavier-duty with more clustering and production features</li>
        <li><strong>Vespa</strong>: Known for hybrid search capabilities, used in Danswer</li>
        <li><strong>FAISS</strong>: Lightweight option that computes similarity in-memory or with mmap</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://www.trychroma.com/" target="_blank">Chroma</a> |
      <a href="https://weaviate.io/" target="_blank">Weaviate</a> |
      <a href="https://milvus.io/" target="_blank">Milvus</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>"Personal CRM/Notes with LLM" Apps</h4>
      <div class="tags">
        <span class="tag">Emerging</span>
        <span class="tag">Personal Knowledge</span>
      </div>
    </div>
    <p>Combining note-taking or personal CRM with built-in LLM smarts.</p>
    <div class="features">
      <ul>
        <li>Most are cloud-based (Mem AI, Reflect, Notion AI), but local-first variants emerging</li>
        <li><strong>Logseq GPT</strong>: Add-on to Logseq note-taking system for querying notes with an LLM</li>
        <li><strong>privateGPT</strong>: Simple script for local doc Q&A using GPT4All</li>
        <li>Aim to be an AI-augmented memory system</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://github.com/imartinez/privateGPT" target="_blank">privateGPT</a>
    </div>
  </div>
</div>

In the commercial realm, big players are also moving toward on-device AI which overlaps with this layer (e.g., Apple is developing on-device LLM capabilities), but currently, the open-source community is leading in giving people tools to integrate their own data.

## Agent & Orchestration Frameworks

<div class="comparison-table">
  <table>
    <thead>
      <tr>
        <th>Tool</th>
        <th>Type</th>
        <th>Key Features</th>
        <th>Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>LangChain</strong></td>
        <td>Library</td>
        <td>
          <ul>
            <li>Composing LLM "chains" and agents</li>
            <li>Tools for conversation memory, workflows</li>
            <li>Can run entirely locally</li>
            <li>Wrappers for local models</li>
          </ul>
        </td>
        <td>General purpose orchestration and agent development</td>
      </tr>
      <tr>
        <td><strong>AutoGen (Microsoft)</strong></td>
        <td>Framework</td>
        <td>
          <ul>
            <li>Creating multi-agent conversations</li>
            <li>Complex workflows with specialized agents</li>
            <li>Determinism and modularity</li>
            <li>Agents that talk to each other</li>
          </ul>
        </td>
        <td>Multi-agent systems with distinct roles and collaboration</td>
      </tr>
      <tr>
        <td><strong>CrewAI</strong></td>
        <td>Framework</td>
        <td>
          <ul>
            <li>Orchestrating teams of AI agents</li>
            <li>Python framework independent of LangChain</li>
            <li>Define roles for agents and communication</li>
            <li>Aims for speed and lean design</li>
          </ul>
        </td>
        <td>Creating AI "crews" with specialized members</td>
      </tr>
      <tr>
        <td><strong>Other Platforms</strong><br>(SuperAGI, Camel, BabyAGI)</td>
        <td>Varied</td>
        <td>
          <ul>
            <li>Configurable environments for goals</li>
            <li>"AutoGPT"-like systems</li>
            <li>Many are open source</li>
            <li>Can be tuned for personal use</li>
          </ul>
        </td>
        <td>Experimentation with autonomous agents</td>
      </tr>
      <tr>
        <td><strong>Home Assistant's Assist</strong></td>
        <td>Integration</td>
        <td>
          <ul>
            <li>Using LLMs as NLU engine for smart home</li>
            <li>Custom components like Home-LLM</li>
            <li>Mapping natural language to device actions</li>
            <li>Integrates with existing automation system</li>
          </ul>
        </td>
        <td>Smart home control specifically</td>
      </tr>
      <tr>
        <td><strong>Flow and Automation Tools</strong><br>(Node-RED, n8n)</td>
        <td>Visual Workflow</td>
        <td>
          <ul>
            <li>Visual wiring of LLM into triggers</li>
            <li>Nodes like node-red-contrib-ollama</li>
            <li>Integrating AI into existing automation flows</li>
            <li>Low-code approach to automation</li>
          </ul>
        </td>
        <td>Visual creation of LLM-powered workflows</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="insight-box">
  <p><strong>Development Spectrum:</strong> While one can start simple (single-agent with basic API calls), there's a spectrum up to very complex orchestrations (multi-agent systems solving complex goals). The tooling to support this is maturing rapidly.</p>
</div>

## Smart Home & IoT Integration

<div class="tool-grid">
  <div class="tool-card large">
    <div class="header">
      <h4>Home Assistant (HA)</h4>
      <div class="tags">
        <span class="tag">Platform</span>
        <span class="tag">Mature</span>
      </div>
    </div>
    <p>The de facto open-source home automation platform. It can run on a Raspberry Pi or any local server and integrate with hundreds of IoT devices and services.</p>
    <div class="features">
      <ul>
        <li>Built-in <strong>Assist</strong> feature allows typing or speaking commands to control devices</li>
        <li>Support for local LLM handling via custom components like <strong>home-llm</strong></li>
        <li>Extensive automation capabilities to call external LLM servers</li>
        <li>Active community sharing recipes for using local AI</li>
        <li>Central interface for a personal assistant that can control your smart home</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://www.home-assistant.io/" target="_blank">Website</a> |
      <a href="https://github.com/acon96/home-llm" target="_blank">home-llm</a>
    </div>
  </div>

  <div class="tool-card large">
    <div class="header">
      <h4>Node-RED</h4>
      <div class="tags">
        <span class="tag">Visual Programming</span>
        <span class="tag">IoT</span>
      </div>
    </div>
    <p>A visual "wiring" tool widely used for home automation and IoT. It can integrate devices (MQTT, sensors) and cloud APIs.</p>
    <div class="features">
      <ul>
        <li>LLM integration nodes like <code>node-red-contrib-ollama</code></li>
        <li>Can serve as glue between IoT events and the LLM</li>
        <li>Create flows that trigger the LLM based on sensor data</li>
        <li>Send LLM outputs to home devices (speakers, displays)</li>
        <li>Allows non-programmers to craft sophisticated behavior</li>
      </ul>
    </div>
    <div class="use-case">
      <p><strong>Example Flow:</strong> If a bed pressure sensor detects you woke up → Node-RED triggers the LLM to generate a morning briefing using your calendar data → sends that to a TTS node to speak it</p>
    </div>
    <div class="links">
      <a href="https://nodered.org/" target="_blank">Website</a> |
      <a href="https://flows.nodered.org/node/node-red-contrib-ollama" target="_blank">Ollama Node</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Homebrew DIY setups</h4>
      <div class="tags">
        <span class="tag">Custom</span>
        <span class="tag">Advanced</span>
      </div>
    </div>
    <p>Outside of Home Assistant, enthusiasts have built custom systems using tools like <strong>MQTT</strong> (a lightweight pub-sub for IoT).</p>
    <div class="features">
      <ul>
        <li>Run a local MQTT broker where sensors publish events</li>
        <li>Python script subscribes, and when it sees certain events, queries the LLM</li>
        <li>LLM agent can publish commands to MQTT topics that smart devices listen to</li>
        <li>Highly DIY but flexible integration at many levels of complexity</li>
      </ul>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Voice Assistant Integration</h4>
      <div class="tags">
        <span class="tag">Voice</span>
        <span class="tag">Hands-free</span>
      </div>
    </div>
    <p>Projects focused on offline voice interaction.</p>
    <div class="features">
      <ul>
        <li><strong>Rhasspy</strong>: Can take voice commands and output an intent JSON to Home Assistant</li>
        <li><strong>OVOS (OpenVoiceOS)</strong>: Community fork of Mycroft continuing offline development</li>
        <li>Pipeline can include LLM interpretation for flexible commands</li>
        <li>Provide mic handling, wake word detection, etc. that can be married to the LLM brain</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://rhasspy.readthedocs.io/" target="_blank">Rhasspy Docs</a> |
      <a href="https://openvoiceos.com/" target="_blank">OVOS Website</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Hardware</h4>
      <div class="tags">
        <span class="tag">Physical</span>
        <span class="tag">Devices</span>
      </div>
    </div>
    <p>Some enthusiasts use dedicated devices for their local assistants.</p>
    <div class="features">
      <ul>
        <li>DIY smart speakers using a Pi with a mic and speaker</li>
        <li>Commercial products like <strong>Nunai (Nice)</strong> aimed to be offline voice assistants</li>
        <li>The <strong>Almond/Genie</strong> project from Stanford integrated with smart speakers</li>
        <li>Combining existing IoT hubs with new AI capabilities</li>
      </ul>
    </div>
  </div>
</div>

## Privacy-Preserving UI & Interaction

This overlaps with UI and smart home, but focusing on **input methods that respect privacy**:

<div class="tool-grid">
  <div class="tool-card">
    <div class="header">
      <h4>Offline Speech-to-Text</h4>
      <div class="tags">
        <span class="tag">Voice Input</span>
        <span class="tag">Privacy</span>
      </div>
    </div>
    <p>Voice transcription that happens entirely on your device.</p>
    <div class="features">
      <ul>
        <li><strong>Vosk</strong>: Small models for many languages</li>
        <li><strong>Whisper</strong>: Larger but very accurate multi-language model, can run on GPUs or Apple Silicon</li>
        <li><strong>Mozilla's DeepSpeech/Coqui STT</strong>: Open models for transcription</li>
        <li>Ensures your spoken words aren't sent to cloud services for transcription</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://alphacephei.com/vosk/" target="_blank">Vosk</a> |
      <a href="https://github.com/openai/whisper" target="_blank">Whisper</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>Offline Text-to-Speech</h4>
      <div class="tags">
        <span class="tag">Voice Output</span>
        <span class="tag">Synthesis</span>
      </div>
    </div>
    <p>Voice generation that happens entirely on your device.</p>
    <div class="features">
      <ul>
        <li><strong>Piper</strong> (uses the Mimic3 TTS engine): Can run on a Pi or PC to generate speech</li>
        <li><strong>Coqui TTS</strong>: Provides tools to train custom voices</li>
        <li>Ensures even the content of responses isn't sent out to cloud services</li>
        <li>Choose a voice and it will speak the assistant's response locally</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://github.com/rhasspy/piper" target="_blank">Piper</a> |
      <a href="https://github.com/coqui-ai/TTS" target="_blank">Coqui TTS</a>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>On-device UIs</h4>
      <div class="tags">
        <span class="tag">Interface</span>
        <span class="tag">Local</span>
      </div>
    </div>
    <p>User interfaces that run entirely on your local network.</p>
    <div class="features">
      <ul>
        <li>Web apps served from your machine (e.g., on <code>http://home.local:5000</code>)</li>
        <li>Option to restrict to localhost only for maximum privacy</li>
        <li>Mobile integration via local network or personal VPN</li>
        <li>No keystroke or chat content going through third-party servers</li>
      </ul>
    </div>
    <div class="note">
      <p>Many UIs like LM Studio and GPT4All ensure no logging of your content beyond your machine.</p>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>No cloud dependency for triggers</h4>
      <div class="tags">
        <span class="tag">Input</span>
        <span class="tag">Local Processing</span>
      </div>
    </div>
    <p>Ensuring all inputs to your AI system stay local.</p>
    <div class="features">
      <ul>
        <li>Offline wake word engines (Porcupine, etc.) instead of cloud services</li>
        <li>Local computer vision models for image processing (if used)</li>
        <li>OpenCV and Tesseract for OCR, YOLO for object detection</li>
        <li>Wherever the assistant takes in data, opt for local AI processing</li>
      </ul>
    </div>
  </div>

  <div class="tool-card">
    <div class="header">
      <h4>User Data Safeguards</h4>
      <div class="tags">
        <span class="tag">Security</span>
        <span class="tag">Privacy</span>
      </div>
    </div>
    <p>Making sure the system itself is secure.</p>
    <div class="features">
      <ul>
        <li>Store data in encrypted databases</li>
        <li>Ensure the machine's disk is encrypted</li>
        <li>Apply traditional infosec practices (firewalls, port security)</li>
        <li><strong>Vaultwarden</strong> for managing secrets</li>
        <li>OS-level encryption and good authentication on the UI</li>
      </ul>
    </div>
    <div class="note">
      <p>A personal LLM OS aggregates a lot of data in one place, creating a potential honeypot that needs protection.</p>
    </div>
  </div>
</div>

<div class="chapter-summary">
  <h4>Summary</h4>
  <p>Practically every piece needed to build a local "Jarvis" is available in some form – from core model runners, to data connectors, to voice interface, to home automation tie-ins. Many of these projects are <strong>production-grade or close to it</strong>, while others (agent orchestration, long-term memory) are more experimental.</p>
  <p>The next chapter will evaluate how feasible it is today to assemble these into a coherent system, and where there are still gaps or rough edges.</p>
</div>

<div class="chapter-nav">
  <a href="/vibe/local-llm-guide/03-architecture.html" class="prev">← Previous Chapter</a>
  <span class="sep">|</span>
  <a href="/vibe/local-llm-guide/05-feasibility.html" class="next">Next Chapter →</a>
</div>

<div class="resources-box">
  <h4>Popular Repositories</h4>
  <ul>
    <li><a href="https://github.com/ggerganov/llama.cpp" target="_blank">llama.cpp</a>: Core library for running LLaMA models efficiently</li>
    <li><a href="https://github.com/ollama/ollama" target="_blank">Ollama</a>: Run large language models locally</li>
    <li><a href="https://github.com/langchain-ai/langchain" target="_blank">LangChain</a>: Building applications with LLMs through composability</li>
    <li><a href="https://github.com/chroma-core/chroma" target="_blank">Chroma</a>: Open-source embedding database</li>
  </ul>
</div> 