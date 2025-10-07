# Sushil Chaudhari - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Python FastAPI backend. Features beautiful animations, interactive components, and a foundation for future AI integrations.

## 🚀 Features

### Frontend
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Animated progress bars, hover effects, and transitions
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Friendly**: Proper meta tags and structured data

### Sections
- **Hero Section**: Dynamic typing animation and floating elements
- **About Me**: Professional summary with statistics and highlights
- **Skills**: Animated progress bars and categorized skill sets
- **Experience**: Timeline view of work experience and education
- **Projects**: Interactive project cards with detailed modals
- **Contact**: Functional contact form with validation

### Backend (Future AI Features)
- **FastAPI Backend**: RESTful API with automatic documentation
- **Contact Form Handling**: Message submission and storage
- **Analytics Tracking**: Project views and user interactions
- **AI Endpoints**: Placeholder for future AI features
- **Career Insights**: AI-powered career analysis (coming soon)

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - CSS framework for responsive design
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend
- **Python FastAPI** - Modern, fast web framework
- **Pydantic** - Data validation using Python type hints
- **Uvicorn** - ASGI server for production
- **SQLAlchemy** - SQL toolkit and ORM (future database integration)

### Styling
- **Custom CSS** - Modern CSS with CSS variables
- **Bootstrap Components** - Pre-built responsive components
- **Animations** - CSS animations and transitions

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.8+ and pip
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SushilChaudhari/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Backend Setup (Optional)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server**
   ```bash
   python main.py
   ```

5. **API Documentation**
   Visit [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for interactive API docs

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, and description
- `components/About.tsx` - Professional summary and stats
- `components/Experience.tsx` - Work experience and education
- `components/Projects.tsx` - Your projects and achievements
- `components/Contact.tsx` - Contact information
- `.env.local` - Environment variables

### Styling
- `app/globals.css` - Global styles and CSS variables
- Component-specific styles are included in each component file
- Modify CSS variables in `:root` to change the color scheme

### Content
- Replace placeholder images with your actual photos
- Update project descriptions and links
- Modify skill levels and technologies
- Add your resume PDF to the `public` folder

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `python main.py` - Start FastAPI development server
- `uvicorn main:app --reload` - Alternative way to start server

## 🚀 Deployment

### Frontend (Vercel - Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Frontend (Netlify)
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

### Backend (Railway/Render)
1. Create a new service
2. Connect your GitHub repository
3. Set Python version and install command
4. Configure environment variables

## 🎯 Future Enhancements

### Planned Features
- **AI Resume Analysis** - AI-powered resume optimization
- **Project Recommendations** - AI-suggested projects based on skills
- **Career Insights** - Market analysis and career guidance
- **Admin Dashboard** - Content management system
- **Analytics Dashboard** - Visitor and engagement analytics

### Technical Improvements
- Database integration (PostgreSQL/MongoDB)
- User authentication system
- Content Management System (CMS)
- Advanced SEO optimization
- Performance monitoring
- Automated testing

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Loading Speed**: < 2s on 3G networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Sushil Chaudhari**
- Email: chaudharisushil96@gmail.com
- LinkedIn: [linkedin.com/in/Sushil-Chaudhari](https://www.linkedin.com/in/sushil-chaudhari-54460319b/)
- GitHub: [github.com/SushilChaudhari](https://github.com/SushilChaudhari)
- Phone: +91 8830889788
- Location: Pune, Maharashtra, India

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons library
- Images from Unsplash (replace with your own)
- Animations powered by CSS and Framer Motion
- Built with love using Next.js and React