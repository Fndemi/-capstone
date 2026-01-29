# Capstone Project Portfolio

A full-stack web application showcasing a Kenyan university student's capstone project requirements.

## Student Profile
- **Name**: Florence Ndemi
- **University**: Dedan Kimathi University of Technology
- **Program**: Bachelor of Science in Information Technology
- **Year**: 2025
- **Location**: Nyeri County, Kenya

## Project Components

### ✅ Completed Requirements
1. **Multilingual Resume** - English, Kiswahili, Kikuyu
2. **Autobiographical Essay** - 25 pages with presentation
3. **Innovation Presentation** - Blockchain Technology for Secure Digital Transactions
4. **African Culture Presentation** - Ubuntu Philosophy & Gender Equality
5. **Modern Challenges** - Digital Divide Solutions
6. **Photographic Essay** - Digital Transformation in Kenya
7. **Social Media Portfolio** - 7 professional platforms
8. **Website Portfolio** - Full-stack application

## Technology Stack

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer for media handling
- **API**: RESTful endpoints with validation

### Frontend (React)
- **Framework**: React 18 with React Router
- **Styling**: Styled Components with responsive design
- **Media**: React Player for video content
- **State Management**: React Hooks

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and install dependencies**
```bash
git clone <repository-url>
cd igs
npm run install:all
```

2. **Start development servers**
```bash
npm run dev
```

This starts:
- Backend: http://localhost:3001
- Frontend: http://localhost:3000

### Individual Services

**Backend only:**
```bash
cd backend
npm install
npm run start:dev
```

**Frontend only:**
```bash
cd frontend
npm install
npm start
```

## Project Structure

```
igs/
├── backend/                 # NestJS API server
│   ├── src/
│   │   ├── schemas/        # MongoDB schemas
│   │   ├── modules/        # Feature modules
│   │   └── main.ts         # Application entry
│   └── uploads/            # File storage
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Route components
│   │   ├── services/       # API services
│   │   └── styles/         # Styled components
│   └── public/
└── package.json           # Workspace configuration
```

## Features

### 🌍 Multilingual Support
- English, Kiswahili, and Kikuyu translations
- Dynamic language switching
- Culturally appropriate content

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interfaces

### 🎥 Media Integration
- Video presentations with React Player
- Photo galleries with lightbox
- File upload and management

### 📊 Content Management
- Dynamic content loading from database
- RESTful API for all data operations
- Automatic content seeding

## API Endpoints

### Profile Management
- `GET /api/profile/:language` - Get profile by language
- `POST /api/profile` - Create new profile
- `PUT /api/profile/:id` - Update profile

### Content Management
- `GET /api/content?type=:type&language=:language` - Get content
- `POST /api/content` - Create content
- `GET /api/content/:id` - Get specific content

### Media Management
- `GET /api/media?type=:type` - Get media files
- `POST /api/media/upload` - Upload files
- `POST /api/media/social` - Add social media links

## Sample Data

The application includes comprehensive sample data:

### Profile Information
- Complete resume in 3 languages
- Professional experience and skills
- Educational background
- Contact information

### Content
- 25-page autobiographical essay
- Innovation presentation content
- Cultural analysis with gender focus
- Modern challenges and solutions

### Media
- 8 photographic essay images
- 7 social media platform links
- Video presentation placeholders

## Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Create `.env` files for configuration:

**Backend (.env)**
```
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:3001/api
```

## Development Notes

### Adding New Content
1. Update schema definitions in `backend/src/schemas/`
2. Create/update service methods
3. Add API endpoints in controllers
4. Update frontend components and services

### Language Support
- Add translations in service files
- Update language selector component
- Ensure all content supports new languages

### File Uploads
- Files stored in `backend/uploads/`
- Supported formats: images, videos, documents
- 100MB file size limit

## Capstone Requirements Checklist

- [x] Up-to-date resume (3 languages)
- [x] Autobiographical essay (20-30 pages)
- [x] PowerPoint presentations (4 total)
- [x] Video presentations (3 × 20 minutes)
- [x] Abstracts (3 languages each)
- [x] Photographic essay
- [x] Social media portfolio (5+ platforms)
- [x] Professional website
- [x] Cultural awareness content
- [x] Gender equality discussion
- [x] Innovation showcase
- [x] Modern challenges solutions

## License

This project is created for academic purposes as part of a university capstone requirement.

## Contact

**Florence Ndemi**
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/florence-ndemi
- University: Dedan Kimathi University of Technology, Information Technology Department
- Location: Nyeri County, Kenya