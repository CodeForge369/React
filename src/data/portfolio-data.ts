import type { Profile, Education, FocusArea, SkillGroup, Project, NavItem } from "../types";

export const profile: Profile = {
  name: "Sujal Shrestha",
  title: "Aspiring AI / ML Engineer",
  location: "Kathmandu, Nepal",
  email: "sujalstha79@gmail.com",
  phone: "+977-9860283247",
  github: "https://github.com/CodeForge369",
  linkedin: "https://www.linkedin.com/in/sujal-shrestha-1253b639a/",
  resumeUrl: "Cv.pdf",
  summary:
    "IT student from Nepal with a strong interest in AI and Machine Learning engineering. I build end-to-end projects spanning deep learning, NLP, RAG pipelines, and LLM applications, and I'm looking for an internship where I can contribute and grow alongside experienced engineers.",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const education: Education = {
  degree: "Bachelor in Information Technology Management",
  school: "National College of Computer Studies",
  location: "Kathmandu, Nepal",
  status: "Currently Enrolled",
};

export const focusAreas: FocusArea[] = [
  {
    title: "LLM Engineering & RAG",
    desc: "Hugging Face, Ollama, LangChain, FAISS, ChromaDB, prompt engineering",
    icon: "brain",
  },
  {
    title: "Deep Learning & Computer Vision",
    desc: "CNNs, transfer learning (EfficientNet, MobileNet), TensorFlow / Keras",
    icon: "eye",
  },
  {
    title: "NLP & Text Intelligence",
    desc: "Text classification, sentiment analysis, embeddings, TF-IDF",
    icon: "message",
  },
  {
    title: "Model Deployment",
    desc: "FastAPI, Docker, Streamlit — serving models in accessible applications",
    icon: "rocket",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "LLM & AI Frameworks",
    tags: ["Hugging Face", "LangChain", "Ollama", "Transformers", "FAISS", "ChromaDB"],
  },
  {
    label: "ML / DL Frameworks",
    tags: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"],
  },
  { label: "Languages", tags: ["Python", "SQL"] },
  {
    label: "Deployment & Tools",
    tags: ["FastAPI", "Docker", "Streamlit", "Git & GitHub", "Jupyter", "Kaggle"],
  },
  {
    label: "AI Concepts",
    tags: [
      "RAG Pipelines",
      "Prompt Engineering",
      "Embeddings",
      "Vector Search",
      "Fine-tuning",
      "Transfer Learning",
    ],
  },
];

export const projects: Project[] = [
  {
    tag: "LLM / RAG",
    featured: true,
    title: "Document Q&A System (RAG)",
    desc:
      "A Retrieval-Augmented Generation pipeline that lets users upload PDF or text documents and ask natural language questions over them. Built with LangChain for orchestration, FAISS for vector search, and Hugging Face or Ollama models for local inference.",
    tools: ["Python", "LangChain", "Hugging Face", "Ollama", "FAISS", "Streamlit"],
    github: "https://github.com/CodeForge369",
  },
  {
    tag: "Deep Learning",
    title: "Fruit Classification System",
    desc:
      "Deep learning model classifying 131 fruit and vegetable categories using MobileNetV2 transfer learning. Deployed as an interactive Streamlit app with real-time predictions and confidence scores.",
    tools: ["Python", "TensorFlow", "MobileNetV2", "Streamlit", "Kaggle"],
    github: "https://github.com/CodeForge369",
    live: "https://classy-ai.streamlit.app/",
  },
  {
    tag: "NLP",
    title: "News Article Classification",
    desc:
      "NLP classifier categorizing news articles into Politics, Sports, Technology, Entertainment, and Business using TF-IDF vectorization with Logistic Regression.",
    tools: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Streamlit"],
    github: "https://github.com/CodeForge369",
    live: "https://codeforge-newsapp.streamlit.app/",
  },
  {
    tag: "Deep Learning",
    title: "Monkey Species Classifier",
    desc:
      "CNN-based image classifier identifying 10 monkey species using EfficientNet transfer learning, trained on a Kaggle dataset with high validation accuracy.",
    tools: ["Python", "TensorFlow", "CNN", "EfficientNet", "Kaggle"],
    github: "https://github.com/CodeForge369",
    live: "https://ai-lens.streamlit.app/",
  },
  {
    tag: "NLP",
    title: "Sentiment Analysis Dashboard",
    desc:
      "Interactive Streamlit app for real-time sentiment analysis with confidence score visualizations and keyword contribution charts.",
    tools: ["Python", "Streamlit", "NLP", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/CodeForge369",
  },
  {
    tag: "Data",
    title: "Automated EDA Tool",
    desc:
      "Generates statistical summaries, correlation heatmaps, and distribution plots from any uploaded CSV, automating exploratory data analysis in seconds.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    github: "https://github.com/CodeForge369",
  },
  {
    tag: "Deployment",
    title: "ML Model Deployment with FastAPI",
    desc:
      "Production-ready service for serving trained ML models, featuring input validation, prediction endpoints, auto-generated docs, and Docker containerization.",
    tools: ["FastAPI", "Scikit-learn", "Docker", "Pydantic", "Python"],
    github: "https://github.com/CodeForge369",
  },
];
