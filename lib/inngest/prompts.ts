/* ----------------------------------------------------------
 🎨  AI PROMPT LIBRARY — Email & Market Intelligence
 Author: Aditya Soni
 Description: Improved, structured, and visually styled prompts
 for consistent AI responses in your email automation system.
----------------------------------------------------------- */

/* ==========================================================
 📨  PERSONALIZED WELCOME EMAIL PROMPT
========================================================== */
export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `
Generate **highly personalized HTML content** to be inserted into the email template at the {{intro}} placeholder.

User Profile Data:
{{userProfile}}

🎯 PERSONALIZATION RULES:
You must craft content that feels *directly written for this specific user*.

⚡ Opening Rules:
- DO NOT start with "Welcome" (the email header already says "Welcome aboard {{name}}").
- Use alternatives like “Thanks for joining”, “Great to have you”, “You’re all set”, or “Perfect timing”.

💡 PERSONALIZATION REQUIREMENTS:
1. **Direct Reference to User Details**
   - Use their exact <strong>investment goals</strong>
   - Mention their <strong>risk tolerance</strong> level
   - Include their <strong>preferred sectors/industries</strong>
   - Reflect their <strong>experience level or background</strong>
   - Mention any <strong>stocks/companies</strong> they follow
   - Include their <strong>investment timeline</strong> (short-term, long-term, retirement)

2. **Contextual Messaging**
   - New investors → “starting your journey” tone
   - Experienced traders → “advanced tools and strategy” tone
   - Retirement planners → “steady growth and long-term wealth” tone
   - Specific sectors → name those industries
   - Conservative users → emphasize safety & informed choices
   - Aggressive users → highlight growth & opportunity

3. **Personal Touch**
   - Tie the user’s goals directly into the message
   - Make it sound human, not generic
   - Reflect their interests naturally

💅 FORMATTING REQUIREMENTS:
- Output **ONLY HTML** — no markdown, no code blocks, no backticks.
- Single paragraph structure:
  <p class="mobile-text" style="margin:0 0 30px 0;font-size:16px;line-height:1.6;color:#CCDADC;">content</p>
- Exactly **two sentences**, total 35–50 words.
- Use <strong> tags for personal keywords.
- Do not include “Here’s what you can do right now”.
- Focus on empathy, personality, and clarity.

✨ EXAMPLES:
<p class="mobile-text" style="margin:0 0 30px 0;font-size:16px;line-height:1.6;color:#CCDADC;">Thanks for joining Signalist! As someone focused on <strong>technology growth stocks</strong>, you'll love our real-time alerts for companies like the ones you're tracking. We'll help you spot opportunities before they become mainstream news.</p>

<p class="mobile-text" style="margin:0 0 30px 0;font-size:16px;line-height:1.6;color:#CCDADC;">Great to have you aboard! Perfect for your <strong>conservative retirement strategy</strong> — we'll help you monitor dividend stocks without overwhelming you with noise. You can finally track your portfolio progress with confidence and clarity.</p>

<p class="mobile-text" style="margin:0 0 30px 0;font-size:16px;line-height:1.6;color:#CCDADC;">You're all set! Since you're new to investing, we've designed simple tools to help you build confidence while learning the <strong>healthcare sector</strong> you're interested in. Our beginner-friendly alerts will guide you without the confusing jargon.</p>
`;


/* ==========================================================
 🗞️  NEWS SUMMARY EMAIL PROMPT
========================================================== */
export const NEWS_SUMMARY_EMAIL_PROMPT = `
Generate clean, structured HTML for a **market news summary email** to be placed inside the {{newsContent}} placeholder.

News Data:
{{newsData}}

🎨 STYLE & STRUCTURE:
- Use only **HTML** — no markdown or code blocks.
- Organize content into well-defined sections (e.g., Market Overview, Top Gainers, etc.).
- Match CSS classes and inline styles exactly as listed.

📚 SECTION HEADINGS:
<h3 class="mobile-news-title dark-text" style="margin:30px 0 15px 0;font-size:18px;font-weight:600;color:#f8f9fa;line-height:1.3;">Section Title</h3>

📝 PARAGRAPHS:
<p class="mobile-text dark-text-secondary" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#CCDADC;">Content here</p>

💹 STOCK / COMPANY MENTIONS:
- <strong style="color:#FDD458;">Ticker</strong> for stock symbols  
- <strong style="color:#CCDADC;">Company Name</strong> for companies

📈 PERFORMANCE INDICATORS:
Use 📈 (gains), 📉 (losses), 📊 (neutral/mixed).

🧱 ARTICLE TEMPLATE:
Each article should use this structure:

<div class="dark-info-box" style="background-color:#212328;padding:24px;margin:20px 0;border-radius:8px;">
  <h4 class="dark-text" style="margin:0 0 16px 0;font-size:18px;font-weight:600;color:#FFFFFF;line-height:1.4;">Article Title</h4>

  <ul style="margin:16px 0 20px 0;padding-left:0;list-style:none;">
    <li style="margin:0 0 16px 0;font-size:16px;color:#CCDADC;line-height:1.6;"><span style="color:#FDD458;font-weight:bold;font-size:20px;margin-right:8px;">•</span>Short, clear insight.</li>
    <li style="margin:0 0 16px 0;font-size:16px;color:#CCDADC;line-height:1.6;"><span style="color:#FDD458;font-weight:bold;font-size:20px;margin-right:8px;">•</span>Explain key number in simple language.</li>
    <li style="margin:0 0 16px 0;font-size:16px;color:#CCDADC;line-height:1.6;"><span style="color:#FDD458;font-weight:bold;font-size:20px;margin-right:8px;">•</span>Plain English takeaway.</li>
  </ul>

  <div style="background-color:#141414;border:1px solid #374151;padding:15px;border-radius:6px;margin:16px 0;">
    <p style="margin:0;font-size:14px;color:#CCDADC;line-height:1.4;">💡 <strong style="color:#FDD458;">Bottom Line:</strong> Simple, friendly explanation of why this matters for everyday investors.</p>
  </div>

  <div style="margin:20px 0 0 0;">
    <a href="ARTICLE_URL" style="color:#FDD458;text-decoration:none;font-weight:500;font-size:14px;" target="_blank" rel="noopener noreferrer">Read Full Story →</a>
  </div>
</div>

💬 SECTION DIVIDER:
<div style="border-top:1px solid #374151;margin:32px 0 24px 0;"></div>

✨ CONTENT RULES:
- Each section appears only once (no repeats).
- Each article must have at least 3 concise, easy-to-read bullet points.
- Use **simple English** — explain terms like you’re talking to a friend new to investing.
- Include **numbers with meaning** (not just data dumps).
- Keep tone conversational, warm, and easy to scan.
- Always include “Read Full Story” links with actual URLs.
- Explain **why** the news matters — focus on impact for regular people.

Example included above — use as a visual guide.
`;


/* ==========================================================
 💹  TRADINGVIEW SYMBOL MAPPING PROMPT
========================================================== */
export const TRADINGVIEW_SYMBOL_MAPPING_PROMPT = `
You are a financial markets expert.  
Your task: map a given **Finnhub stock symbol** to its **correct TradingView format**.

Input Data:
Symbol: {{symbol}}
Company: {{company}}
Exchange: {{exchange}}
Currency: {{currency}}
Country: {{country}}

📘 RULES:
1. US stocks → usually just the ticker (e.g., AAPL)
2. International → include exchange prefix (e.g., LSE:BARC)
3. ADRs / dual listings → adjust suffix as needed
4. Return highest-confidence mapping based on context

🧠 OUTPUT FORMAT:
Return ONLY a **valid JSON object**:
{
  "tradingViewSymbol": "EXCHANGE:SYMBOL",
  "confidence": "high|medium|low",
  "reasoning": "Brief explanation"
}

✅ EXAMPLES:
- Apple Inc. → {"tradingViewSymbol": "NASDAQ:AAPL", "confidence": "high", "reasoning": "Apple trades on NASDAQ as AAPL"}
- Microsoft → {"tradingViewSymbol": "NASDAQ:MSFT", "confidence": "high", "reasoning": "Microsoft trades on NASDAQ as MSFT"}
- Barclays PLC → {"tradingViewSymbol": "LSE:BARC", "confidence": "high", "reasoning": "Barclays trades on the London Stock Exchange"}
`;

