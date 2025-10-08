# 🏨 Brundhavan Hotel Management System

A modern, responsive hotel booking and management platform built with Next.js 15, featuring user authentication, room management, and a beautiful UI.

## ✨ Features

- **🏠 Homepage**: Beautiful landing page with hero section, amenities showcase, and testimonials
- **🔐 Authentication System**: Complete sign-in/sign-up flow with password reset functionality
- **🏨 Room Management**: Browse and view detailed room information
- **📱 Responsive Design**: Mobile-first approach with elegant sidebar navigation
- **🎨 Modern UI**: Built with Tailwind CSS and Radix UI components
- **⚡ Performance**: Optimized with Next.js 15 and Turbopack
- **🌙 Animations**: Smooth animations powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Carousel**: Keen Slider

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (grouped)
│   │   ├── sign-in/       # Sign in page
│   │   ├── sign-up/       # Sign up page
│   │   └── reset-password/ # Password reset
│   ├── aboutus/           # About us page
│   ├── allrooms/          # All rooms listing
│   ├── room/[id]/         # Dynamic room details
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Home/             # Homepage components
│   ├── Room/             # Room-related components
│   ├── ui/               # UI primitives
│   └── ...
├── lib/                  # Utilities and actions
│   ├── actions/          # Server actions
│   └── utils.ts          # Utility functions
├── constants/            # App constants
└── public/              # Static assets
```

## 🏨 Key Features

### Authentication
- User registration and login
- Password reset functionality
- JWT token-based authentication
- Protected routes

### Room Management
- Browse available rooms
- Detailed room information
- Room booking system
- Image galleries with Keen Slider

### User Experience
- Responsive mobile navigation
- Toast notifications
- Loading states
- Error handling
- Form validation

### Amenities Showcase
- Swimming Pool
- 24/7 Security
- CCTV Surveillance
- Free WiFi
- Play Area
- Daily Housekeeping
- Flat Screen TV
- Tea/Coffee Maker

## 🎨 UI Components

Built with a comprehensive design system including:
- Custom buttons and forms
- Modal dialogs
- Accordion components
- Toast notifications
- Responsive navigation
- Animation components

## 📱 Responsive Design

- Mobile-first approach
- Elegant sidebar navigation for mobile
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)

---

Built with ❤️ using Next.js and modern web technologies.
