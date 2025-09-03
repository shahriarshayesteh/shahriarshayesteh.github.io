---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

> Building sector-aware NLP systems, robust agentic workflows, and large-scale privacy-policy analytics.

## Highlights
- **SoACer**: Sector-aware website classification with **LexRank** (graph-based summarization) + **LLaMA embeddings** → stronger sector signals from noisy webpages.
- **SoAC Corpus**: Released dataset for multi-sector website analysis (research-ready splits and metadata).
- **PrivaSeer**: Privacy-policy IR system at scale (indexing + visualization; supports sectoral analysis).
- **Semi-supervised NLP**: GAN + **negative data augmentation** improved text classification with limited labels.

## Projects

### SoACer — Sector-Aware Website Classification
**Code**: [Repo](https://github.com/shahriarshayesteh/SoAC_DocEng2025) · **Dataset**: [SoAC Corpus](https://huggingface.co/datasets/Shahriar/SoAC_Corpus) · **Paper**: [ACM DocEng 2025](https://dl.acm.org/doi/abs/10.1145/3704268.3742691)

**Problem.** Classify websites into real-world sectors despite noisy/long HTML and heterogeneous content.  
**Contributions.**
- **LexRank summarization** (graph centrality) to extract salient site text (plain: most important sentences).
- **LLaMA embeddings** + a lightweight classifier head for efficient sector prediction.
- Released **dataset + evaluation** tailored to multi-sector web signals.

**Figure: Pipeline**  
<img alt="SoACer Pipeline" src="{{ '/images/portfolio/soacer_pipeline.png' | relative_url }}">
*End-to-end: HTML → LexRank → Embeddings → Classifier.*  
**Image needed:** `soacer_pipeline.png — End-to-end pipeline (HTML→Summarize→Embed→Classify)`

**Figure: Corpus Stats**  
<img alt="SoAC Corpus Stats" src="{{ '/images/portfolio/soac_corpus_stats.png' | relative_url }}">
*Distribution of samples by sector (coverage/imbalance).*  
**Image needed:** `soac_corpus_stats.png — Top-10 sectors bar chart (#sites)`

---

### PrivaSeer — Privacy Policy Search & Analytics
**Poster/Paper**: [SOUPS 2025](https://shomir.net/pdf/publications/privaseer_soups_2025_paper.pdf)  
**Personal report**: *PrivaSeer_report.pdf* (role & contributions)

**Problem.** Make privacy policies searchable and analyzable at scale; support exploration of practices across sectors.  
**Contributions.**
- Ingestion/crawling, indexing, and query experience for **millions** of policies.
- Visualization of entities, data types, and purposes (**ontology** = domain-specific concept list).
- Sector tagging and analytics to reveal **normative vs. outlier** practices.

**Figure: System Architecture**  
<img alt="PrivaSeer Architecture" src="{{ '/images/portfolio/privaseer_arch.png' | relative_url }}">
*Crawler → Indexer → Search UI → Visual Analytics.*  
**Image needed:** `privaseer_arch.png — High-level architecture block diagram`

---

### Master’s: GAN with Negative Data Augmentation (Semi-supervised NLP)
**Paper**: [FLAIRS](https://journals.flvc.org/FLAIRS/article/view/130722/133883) · **Thesis**: [uOttawa](https://ruor.uottawa.ca/server/api/core/bitstreams/a7ff8d44-c1f5-45fd-ac20-906571cc3ca6/content)

**Problem.** Improve text classification when labeled data is scarce.  
**Contributions.**
- **GAN framework** augmented with “negative” examples to sharpen decision boundaries.
- Gains under **semi-supervised** settings.

**Figure: Training Flow**  
<img alt="GAN with Negative Augmentation" src="{{ '/images/portfolio/gan_neg_aug.png' | relative_url }}">
*Generator/Discriminator with negative sampling path.*  
**Image needed:** `gan_neg_aug.png — GAN + negative augmentation flow`

---

## Publications & Posters
- **SoACer** — ACM DocEng 2025. [DOI](https://dl.acm.org/doi/abs/10.1145/3704268.3742691)  
- **PrivaSeer** — SOUPS 2025 Poster. [PDF](https://shomir.net/pdf/publications/privaseer_soups_2025_paper.pdf)  
- **Generative Adversarial Learning with Negative Data Augmentation** — FLAIRS. [Paper](https://journals.flvc.org/FLAIRS/article/view/130722/133883)  
- **Master’s Thesis** — University of Ottawa. [PDF](https://ruor.uottawa.ca/server/api/core/bitstreams/a7ff8d44-c1f5-45fd-ac20-906571cc3ca6/content)

## Datasets & Open Source
- **SoAC Corpus** — Multi-sector website dataset for classification and analysis.  
  Link: https://huggingface.co/datasets/Shahriar/SoAC_Corpus

## Skills
- **Programming**: Python, PyTorch, HF Transformers, IR tooling  
- **ML/NLP**: Semi-supervised learning, summarization, embeddings, evaluation  
- **Systems/IR**: Crawling, indexing, large-scale text processing, visualization  
- **Communication**: Academic writing, posters, talks, collaborative research

## Talks / Teaching
- **DocEng 2025** — SoACer presentation (slides TBD).  
- **SOUPS 2025** — PrivaSeer poster (link above).
