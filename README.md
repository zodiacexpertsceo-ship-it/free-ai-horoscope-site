# Free AI Horoscope Website

This is a complete starter website for a free AI horoscope, palm reading, love compatibility, and spiritual insight platform.

## What is included

- Home page
- Free AI reading form
- Free palm reading upload form
- Love compatibility section
- Tarot-style guidance section
- Client dashboard design
- Blog page
- Privacy, Terms, and Contact pages
- API route for text readings
- API route for palm image readings
- Demo mode when no API key is added
- OpenAI integration ready
- Ad spaces for future Google AdSense

## How the client flow works

1. Client opens the website.
2. Client enters name, date of birth, zodiac sign, reading type, and question.
3. Client clicks “Get My Free Reading.”
4. The website sends the details to `/api/reading`.
5. The backend creates a prompt and sends it to the AI model.
6. The AI returns a reading.
7. The website displays the reading on the page.

Palm reading flow:

1. Client uploads a palm image.
2. Client clicks “Get Free Palm Reading.”
3. The image is sent to `/api/palm`.
4. The backend sends the image and prompt to the AI vision model.
5. The result appears on the website.

## Local setup

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.example .env.local
```

Add your API key inside `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-5.5
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Run the website:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Deploying on Vercel

1. Upload this project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Add environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy.
6. Connect your domain in Vercel domain settings.

## Important notes

- The site works in demo mode without an API key.
- Real AI readings require an API key.
- Palm image reading requires a model that supports image input.
- Add more original blog content before applying for AdSense.
- Keep Privacy Policy and Terms updated before launch.
- This website should present readings as entertainment and self-reflection, not guaranteed predictions.
