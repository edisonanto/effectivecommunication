# 🚀 Communication Mastery Framework Generator

A visual, interactive tool designed to help professionals master 7 core communication frameworks (SCQA, SMART, 5W2H, PDCA, ACE, AIDA, and STAR). This tool allows users to input real-world scenarios and instantly generate structured communication drafts using the Gemini 1.5 Flash API.

## 🛠️ Security Architecture

To protect the **Gemini API Key**, this project does not store credentials in the frontend (HTML/JavaScript). Instead, it uses a **Serverless Function (Proxy)**:

1.  **Frontend (`index.html`)**: Sends the user scenario to a secure internal endpoint (`/api/generate`).
2.  **Backend (`api/generate.js`)**: A Node.js function that resides on the server. It retrieves the API key from a secure **Environment Variable** and communicates with Google's servers.
3.  **The Result**: Your API key is never exposed to the public or visible in the browser's "Inspect Element" tool.

## 🚀 Quick Start & Deployment

This project is optimized for deployment on **Vercel** (which integrates perfectly with GitHub).

### 1. Prerequisites
* A [GitHub](https://github.com) account.
* A [Gemini API Key](https://aistudio.google.com/).

### 2. Repository Setup
1. Create a new repository on GitHub.
2. Upload `index.html` to the root folder.
3. Create a folder named `api` and upload `generate.js` into it.

### 3. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. **IMPORTANT: Configure Environment Variables**:
   * Under the "Environment Variables" section, add a new entry.
   * **Key**: `GEMINI_API_KEY`
   * **Value**: *Paste your actual Gemini API Key here.*
5. Click **"Deploy"**.

## 📊 Included Frameworks

| Model | Best For... |
| :--- | :--- |
| **SCQA** | Professional work reporting and status updates. |
| **SMART** | Setting clear, actionable goals and metrics. |
| **5W2H** | Deep-dive critical thinking and project planning. |
| **PDCA** | Continuous improvement and process review. |
| **ACE** | Balanced and analytical decision making. |
| **AIDA** | Persuasive marketing and internal pitching. |
| **STAR** | Compelling storytelling for interviews or achievements. |

## 🛡️ License
This project is open-source. Feel free to modify and adapt the frameworks for your specific business needs.
