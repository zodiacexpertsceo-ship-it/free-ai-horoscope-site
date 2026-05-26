# Developer Brief

Build and deploy this as a free AI horoscope and palm reading website.

## Core objective

A visitor should be able to open the website, enter personal details, upload a palm photo if needed, and receive a free AI-generated reading instantly.

## Must-have production tasks

1. Replace placeholder branding with final domain/site name.
2. Add real logo.
3. Add OpenAI API key in hosting environment variables.
4. Test `/api/reading` for text readings.
5. Test `/api/palm` for image readings.
6. Add database later for saved readings.
7. Add authentication later for user dashboard.
8. Add analytics.
9. Add AdSense code after approval.
10. Expand blog content for SEO.

## Suggested database tables for phase 2

users:
- id
- name
- email
- created_at

readings:
- id
- user_id
- reading_type
- name
- birth_date
- zodiac_sign
- question
- result
- created_at

palm_readings:
- id
- user_id
- image_url
- hand_type
- result
- created_at

## Monetization path

Phase 1: Free AI tools and SEO articles.
Phase 2: AdSense and affiliate links.
Phase 3: Email list and returning-user dashboard.
Phase 4: Optional paid human advisor chat/call system.
