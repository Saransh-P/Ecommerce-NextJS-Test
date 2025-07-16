# 🛒 Modern E-Commerce Store

**Live Demo:** [View Deployed Project](https://your-project-url.vercel.app)

A modern, responsive e-commerce application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a complete shopping experience with product browsing, detailed product views, shopping cart functionality, and persistent cart state.

## ✨ Features

- **Product Catalog**: Browse products with filtering by category, price range, and search
- **Product Details**: Detailed product pages with image galleries and specifications
- **Shopping Cart**: Add/remove items, update quantities, and persistent cart storage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js 15 features and static generation

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: localStorage for cart persistence
- **Deployment**: Vercel

## 📱 Pages & Features

### Home Page (`/`)
- Product grid with filtering and search
- Category-based filtering
- Price range filtering
- Responsive product cards

### Product Detail (`/product/[id]`)
- Detailed product information
- Image gallery
- Quantity selection
- Add to cart functionality

### Shopping Cart (`/cart`)
- View cart items
- Update quantities
- Remove items
- Order summary with totals

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ecommerce
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── product/[id]/      # Dynamic product detail pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── cart-page.tsx      # Cart page component
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header with navigation
│   ├── product-card.tsx   # Product card for listings
│   ├── product-detail.tsx # Product detail view
│   └── product-listing.tsx # Product grid with filters
└── lib/                   # Utilities and data
    ├── cart-context.tsx   # Shopping cart state management
    ├── products-data.ts   # Mock product data
    └── types.ts           # TypeScript type definitions
```

## 🎨 Key Components

### Cart Context
- Global state management for shopping cart
- localStorage persistence
- Add, remove, and update cart items

### Product Filtering
- Category-based filtering
- Price range slider
- Real-time search
- URL-based filter state

### Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Smooth animations and transitions

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. **Push your code to GitHub**
2. **Import your repository** on [Vercel](https://vercel.com/new)
3. **Deploy** - Vercel will automatically detect Next.js and configure the build

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo-name)

### Other Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Railway**: Deploy with `railway up`
- **Docker**: Use the included Dockerfile for containerized deployment

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
# Add any environment variables here
NEXT_PUBLIC_API_URL=your-api-url
```

### Customization
- **Products**: Update `src/lib/products-data.ts` with your product data
- **Styling**: Modify Tailwind classes or add custom CSS in `globals.css`
- **Components**: Extend or modify components in the `src/components/` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ using Next.js 15 and React 19**


