export async function callGeminiAPI(prompt) {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      let message = 'Gemini API error';
      try {
        const data = await response.json();
        if (data && data.error) {
          message =
            data.error === 'Gemini API key not configured'
              ? 'Brak klucza Gemini API. Skontaktuj się z administratorem.'
              : data.error;
        }
      } catch (e) {
        // ignore JSON parse errors
      }
      return { error: message };
    }

    const data = await response.json();
    return { data };
  } catch (err) {
    return { error: 'Connection to Gemini API failed' };
  }
}
