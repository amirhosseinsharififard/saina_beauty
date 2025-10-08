# Saina Beauty - Next.js Version

A modern beauty salon website built with Next.js, featuring booking system, live chat, and responsive design.

## Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Booking System**: Multi-step booking form with validation
- **Live Chat**: Real-time chat widget for customer support
- **Service Showcase**: Display of beauty and dental services
- **Image Optimization**: Next.js Image component for optimal performance
- **SEO Ready**: Built-in SEO optimization with Next.js

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.js         # Root layout
│   ├── page.js           # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── page-sections/   # Main page sections
│   ├── booking-forms/   # Booking form steps
│   └── shared-components/ # Reusable components
├── constants/           # App data and configuration
└── hooks/              # Custom React hooks
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## API Endpoints

- **Booking**: `https://n8n.sainabeauty.com/webhook-test/booking`
- **Chat**: `https://n8n.sainabeauty.com/webhook/ask`

## Conversion Notes

This project was successfully converted from Vite + React to Next.js while maintaining:

- All original functionality
- Component structure
- Styling and design
- State management
- API integrations

The conversion includes:

- Next.js App Router structure
- Client-side components for interactive features
- Image optimization with Next.js Image component
- SEO optimization
- Performance improvements
