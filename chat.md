# chat.md

> This file records the summary of interactions with generative AI during the development of the landing page (tools, prompts, and their influence).

## AI Tools and Roles
- Tool used: **ChatGPT (GPT-5 Thinking)**
- Involvement stages: information consolidation, copywriting drafts, page layout planning, CSS RWD suggestions, and accessibility (a11y) checklist review.

## Representative Prompts (4 excerpts) and Response Summaries
1. **Prompt**:  
   > “Based on our ‘MindMate’ presentation, organize 4 core features and differentiators, limited to the campus mental health scenario, in a professional and concise tone.”  
   **Response Summary**: Generated concise descriptions for `Proactive AI Triage / Early Warning / 24/7 AI Companion / AI Journal & Reports`, adding notes on institutional overview and crisis routing.

2. **Prompt**:  
   > “Design the landing page information architecture: Hero, feature cards, differentiators, plans, FAQ, and contact; provide 1–2 lines of Chinese copy and CTAs for each section.”  
   **Response Summary**: Produced section titles and summaries; suggested dual CTAs: “Request DEMO” and “GitHub Source.”

3. **Prompt**:  
   > “Implement light/dark theme switching with pure CSS (no framework); provide color variables and button event script.”  
   **Response Summary**: Supplied a CSS custom variable setup with a JS snippet using `localStorage` to remember the selected theme.

4. **Prompt**:  
   > “Provide accessible landing page details: skip-link, focusable buttons, semantic tags, RWD breakpoints.”  
   **Response Summary**: Listed a11y measures and RWD breakpoint guidelines, reminding about touch target sizes for mobile devices.

## Project Evolution
- The first draft featured card-based information layout, later enhanced with **theme switching** and a **demo form** for interactivity.  
- The hero image was replaced with a **vector SVG** to avoid external licensing issues and loading delays.  
- The copy was repeatedly compressed to one or two sentences, ensuring the core value proposition is readable on the first mobile screen.

## Sources
- Content points and phrasing derived from your provided presentation materials (Wellness / Mental Health Track, features, and UVP descriptions).
