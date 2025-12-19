// api/generate.js (Node.js environment)
export default async function handler(req, res) {
    // 1. Get the key from the ENVIRONMENT, not the code
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 
    const { modelName, components, scenario } = req.body;

    const systemInstruction = `You are an expert communication coach...`; // Copy your instruction here
    
    const payload = {
        contents: [{ parts: [{ text: `Generate a draft for: ${scenario}` }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] }
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch from Gemini" });
    }
}
