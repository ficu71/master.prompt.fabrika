# Gemini Proxy

This project exposes a simple backend endpoint that proxies requests to the Gemini API. The API key is read from a server-side environment variable so it is never exposed to the client.

## Configuration

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the Gemini API key before starting the server:
   ```bash
   export GEMINI_API_KEY=your_key_here
   ```
   Any other method of setting environment variables (such as a `.env` file) works as long as `GEMINI_API_KEY` is available to the server.
3. Start the server:
   ```bash
   npm start
   ```

The client script calls `/api/gemini` which relays the request to the Gemini API using the key on the server. If the key is missing or invalid the server responds with an error message.
