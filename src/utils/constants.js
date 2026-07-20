import { 
  Home, 
  Users, 
  Leaf, 
  TrendingUp, 
  GraduationCap,
  Handshake,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Compass,
  Target,
  Cloud,
  Droplets,
  Thermometer,
  BarChart,
  Wifi,
  Settings,
  Smartphone,
  Database,
  Shield,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle,
  Play,
  ArrowRight,
  Menu,
  X,
  User,
  LogIn,
  UserPlus,
  Eye,
  EyeOff,
  Send,
  ChevronRight,
  Wind,
  Sparkles,
  Sprout,
  Bot,
  Microscope,
  Zap,
  Timer,
  Apple,
  Wheat,
  Sun,
  CloudRain,
  ThermometerSun,
  Droplet,
  Waves,
  Combine,
  Truck,
  Store,
  LineChart,
  PieChart,
  Activity,
  Heart,
  Globe,
  TreePine,
  Flower2,
  Recycle,
  Coffee,
  Lightbulb
} from 'lucide-react'

// Import social media icons from react-icons (ONLY from here)
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa'

// ============================================
// NAVIGATION
// ============================================
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Projects', path: '/projects' },
  { name: 'Training', path: '/training' },
  { name: 'Partners', path: '/partners' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

// ============================================
// SOCIAL MEDIA
// ============================================
export const SOCIAL_ICONS = [
  { icon: FaFacebook, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaInstagram, href: '#' },
]

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO = {
  phone: '+250 785 599 926',
  email: 'info@cbgagrihub.rw',
  address: 'Gikondo, Kigali - Rwanda',
  workingHours: 'Monday - Friday, 8:00 AM - 5:00 PM',
  social: {
    facebook: 'https://facebook.com/cbgagrihub',
    twitter: 'https://twitter.com/cbgagrihub',
    linkedin: 'https://linkedin.com/company/cbgagrihub',
    youtube: 'https://youtube.com/cbgagrihub',
    instagram: 'https://instagram.com/cbgagrihub',
  }
}

// ============================================
// HOME PAGE
// ============================================

// Hero Stats
export const HERO_STATS = [
  { value: '45%', label: 'Soil Moisture', icon: Droplets },
  { value: '26°C', label: 'Temperature', icon: Thermometer },
  { value: '68%', label: 'Humidity', icon: Wind },
]

// Impact Stats
export const IMPACT_STATS = [
  { number: '10,000+', label: 'Farmers Empowered' },
  { number: '5,000+', label: 'Youth Trained' },
  { number: '50+', label: 'Innovative Solutions' },
  { number: '100+', label: 'Partners & Collaborators' },
  { number: '200+', label: 'Jobs Created' },
  { number: '15+', label: 'Ongoing Projects' },
]

// What We Do (Home Page Teaser)
export const WHAT_WE_DO_ITEMS = [
  { 
    icon: Leaf, 
    title: 'Smart Farming', 
    description: 'Precision agriculture techniques for optimal yields and sustainable practices' 
  },
  { 
    icon: Droplets, 
    title: 'Smart Irrigation', 
    description: 'Water-efficient irrigation systems powered by IoT sensors' 
  },
  { 
    icon: Home, 
    title: 'IMARA Platform', 
    description: 'Digital agriculture management platform for farmers' 
  },
  { 
    icon: BarChart, 
    title: 'Data & Analytics', 
    description: 'Farm data collection, analysis, and actionable insights' 
  },
  { 
    icon: GraduationCap, 
    title: 'Training & Capacity Building', 
    description: 'Skills development programs for youth and farmers' 
  },
  { 
    icon: Handshake, 
    title: 'Incubation & Partnerships', 
    description: 'Supporting agripreneurs and building strategic collaborations' 
  },
]

// About Teaser (Home Page)
export const ABOUT_TEASER = {
  title: 'Who We Are',
  description: 'CBG Agri Innovation Hub is a leading agricultural technology and innovation center based at College Baptiste GACUBA (CBG) in Gikondo, Kigali, Rwanda. We are committed to transforming agriculture through innovation, technology, and capacity building.',
  checkmarks: [
    'Innovation Driven',
    'Youth Empowerment',
    'Practical Solutions',
    'Sustainable Impact'
  ]
}

// IMARA Platform Features
export const IMARA_FEATURES = [
  'Smart Farm Monitoring',
  'Crop and Soil Management',
  'Weather and Environmental Monitoring',
  'Agricultural Data Analytics',
  'AI-Powered Advisory Services',
  'Farmer Digital Records',
  'Market Linkages'
]

// ============================================
// ABOUT PAGE
// ============================================
export const ABOUT_CONTENT = {
  intro: {
    title: 'Empowering Agriculture Through Innovation',
    description: 'CBG Agri Innovation Hub is a premier agricultural technology and innovation center based at College Baptiste GACUBA (CBG) in Gikondo, Kigali, Rwanda. We are dedicated to transforming agriculture by bridging the gap between technology and farming communities.',
    details: [
      'Our hub serves as a catalyst for agricultural innovation, providing cutting-edge solutions, training, and support to farmers, youth, students, agripreneurs, and extension officers across Rwanda and beyond.',
      'Through our work, we aim to create a sustainable agricultural ecosystem that drives economic growth, food security, and climate resilience.'
    ]
  },
  belief: {
    quote: 'We believe that technology and innovation are the keys to unlocking agriculture\'s potential to feed the world, create jobs, and build resilient communities.',
    author: '— CBG Agri Innovation Hub Team'
  },
  vision: {
    title: 'Our Vision',
    text: 'To be the leading agricultural innovation hub in East Africa, driving sustainable agricultural transformation through technology, research, and inclusive capacity building.'
  },
  mission: {
    title: 'Our Mission',
    text: 'To empower farmers, youth, and communities with innovative agricultural technologies, knowledge, and skills that enhance productivity, ensure food security, and create sustainable livelihoods.'
  },
  whyChooseUs: [
    'Innovation-driven approach to agricultural challenges',
    'Youth-focused programs for sustainable employment',
    'Practical, hands-on training and solutions',
    'Strong partnerships with government and private sector',
    'Technology integration for modern agriculture',
    'Commitment to food security and climate resilience',
    'Data-driven decision making and impact measurement'
  ]
}

// ============================================
// WHAT WE DO PAGE
// ============================================
export const WHAT_WE_DO_CONTENT = {
  digitalAgriculture: {
    title: 'Digital Agriculture Solutions',
    description: 'We leverage cutting-edge digital technologies to transform traditional farming practices into data-driven, efficient, and sustainable agricultural systems.',
    details: 'Our digital agriculture solutions help farmers make informed decisions, optimize resource usage, and increase productivity while reducing environmental impact.'
  },
  research: {
    title: 'Research & Innovation',
    description: 'We conduct cutting-edge research and pilot projects to develop and test innovative agricultural technologies and practices that address real-world challenges.',
    details: 'Our research focuses on climate-smart agriculture, sustainable farming practices, and the integration of emerging technologies like AI, IoT, and data analytics in agriculture.'
  },
  incubation: {
    title: 'Business Incubation',
    description: 'We support agripreneurs and startups with mentorship, technical support, networking opportunities, and business development services.',
    stats: [
      { number: '25+', label: 'Startups Incubated' },
      { number: '50+', label: 'Jobs Created' },
      { number: '15+', label: 'Active Ventures' },
      { number: '$2M', label: 'Investment Raised' }
    ],
    features: [
      'Mentorship from industry experts',
      'Technical support and resources',
      'Networking and partnership opportunities',
      'Business development services'
    ]
  }
}

// ============================================
// SOLUTIONS PAGE
// ============================================
export const SOLUTIONS_CONTENT = {
  imaraFeatures: [
    'Smart Farm Monitoring',
    'Crop and Soil Management',
    'Weather and Environmental Monitoring',
    'Agricultural Data Analytics',
    'AI-Powered Advisory Services',
    'Farmer Digital Records',
    'Market Linkages'
  ]
}

// Smart Farming Technologies (Detailed)
export const SMART_FARMING_TECH = [
  {
    icon: Wifi,
    title: 'IoT-Based Farm Monitoring',
    description: 'Real-time monitoring of farm conditions using connected sensors and devices that track soil moisture, temperature, humidity, and crop health.'
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation Systems',
    description: 'Automated irrigation that optimizes water usage based on real-time soil moisture data, weather forecasts, and crop water requirements.'
  },
  {
    icon: Settings,
    title: 'Greenhouse Automation',
    description: 'Automated climate control systems for optimal plant growth in greenhouse environments, including temperature, humidity, and lighting management.'
  },
  {
    icon: Cloud,
    title: 'Environmental Monitoring',
    description: 'Track weather patterns, soil conditions, and environmental factors that affect crop growth and agricultural productivity.'
  },
  {
    icon: TrendingUp,
    title: 'Precision Agriculture Technologies',
    description: 'Data-driven farming techniques that maximize yield and resource efficiency through precise application of inputs and advanced analytics.'
  }
]

// Focus Areas
export const FOCUS_AREAS = [
  'Digital Agriculture',
  'Smart Irrigation',
  'IoT Solutions',
  'Data Analytics',
  'AI Advisory',
  'Greenhouse Tech',
  'Precision Farming',
  'Weather Monitoring',
  'Market Linkages',
  'Youth Empowerment'
]

// ============================================
// PROJECTS PAGE
// ============================================
export const PROJECT_FILTERS = ['All', 'Smart Farming', 'IoT', 'Research', 'Training']

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Smart Irrigation Pilot Project',
    category: 'Smart Farming',
    excerpt: 'Implementing IoT-based irrigation systems to optimize water usage in smallholder farms across Rwanda.',
    image: 'https://i.pinimg.com/736x/05/b3/d9/05b3d9cd5470116bace35bb4ac1df75b.jpg',
    date: '2024-01-15',
    location: 'Gikondo, Kigali',
    status: 'Ongoing'
  },
  {
    id: 2,
    title: 'IoT Sensor Network Deployment',
    category: 'IoT',
    excerpt: 'Deploying a network of IoT sensors for real-time farm monitoring and comprehensive agricultural data collection.',
    image: '/images/project-iot.jpg',
    date: '2024-01-10',
    location: 'Eastern Province',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Climate-Smart Agriculture Research',
    category: 'Research',
    excerpt: 'Research on climate-resilient farming practices and crop varieties for changing weather patterns in Rwanda.',
    image: 'https://i.pinimg.com/736x/65/28/52/652852c3a0db6da69386bfed7b4bdfb8.jpg',
    date: '2024-01-05',
    location: 'Multiple Sites',
    status: 'Ongoing'
  },
  {
    id: 4,
    title: 'Youth Agripreneurship Program',
    category: 'Training',
    excerpt: 'Intensive training program empowering youth with agricultural entrepreneurship and digital skills.',
    image: 'https://i.pinimg.com/736x/fa/b5/31/fab5313c555ea2c4265eebb22646861d.jpg',
    date: '2024-01-01',
    location: 'Kigali',
    status: 'Completed'
  },
  {
    id: 5,
    title: 'Digital Farmer Registry System',
    category: 'Smart Farming',
    excerpt: 'Developing a comprehensive digital registry system to track farmer profiles and agricultural activities.',
    image: '/images/project-registry.jpg',
    date: '2023-12-20',
    location: 'National Level',
    status: 'Ongoing'
  },
  {
    id: 6,
    title: 'Greenhouse Automation Pilot',
    category: 'IoT',
    excerpt: 'Testing automated greenhouse systems for optimal crop production and resource efficiency.',
    image: 'https://i.pinimg.com/1200x/bd/99/1b/bd991b97f1f8442ef7a4f0a9f8c3ad1e.jpg',
    date: '2023-12-15',
    location: 'Gikondo, Kigali',
    status: 'Completed'
  }
]

// ============================================
// TRAINING PAGE
// ============================================
export const TRAINING_AUDIENCES = [
  { icon: Users, label: 'Youth' },
  { icon: Users, label: 'Farmers' },
  { icon: GraduationCap, label: 'Students' },
  { icon: Briefcase, label: 'Agripreneurs' },
  { icon: Award, label: 'Extension Officers' },
]

export const TRAINING_THEMES = [
  'Agriculture', 
  'Digital Technology', 
  'Artificial Intelligence', 
  'IoT', 
  'Entrepreneurship', 
  'Innovation'
]

export const UPCOMING_TRAININGS = [
  {
    id: 1,
    title: 'Digital Agriculture Fundamentals',
    date: '2024-02-15',
    location: 'Gikondo, Kigali',
    excerpt: 'Learn the basics of digital agriculture and how technology can transform farming practices.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3IxMdKvsmyuLZDZTuk8g4oMongSGpprlUTs1ZMselo-aWhxAj7rVhEQ&s=10',
    capacity: 50
  },
  {
    id: 2,
    title: 'IoT Applications in Agriculture',
    date: '2024-02-22',
    location: 'Eastern Province',
    excerpt: 'Hands-on training on IoT sensors, data collection, and smart farming applications.',
    image: '/images/training-iot.jpg',
    capacity: 40
  },
  {
    id: 3,
    title: 'Agripreneurship Workshop',
    date: '2024-03-01',
    location: 'Kigali',
    excerpt: 'Business development and entrepreneurship training for agricultural innovators.',
    image: '/images/training-entrepreneurship.jpg',
    capacity: 60
  }
]

// ============================================
// PARTNERS PAGE
// ============================================
export const PARTNER_CATEGORIES = [
  { icon: Building2, label: 'Government Institutions' },
  { icon: GraduationCap, label: 'Universities & TVET Schools' },
  { icon: BookOpen, label: 'Research Institutions' },
  { icon: Handshake, label: 'Development Partners' },
  { icon: Users, label: 'NGOs' },
  { icon: Briefcase, label: 'Private Sector Companies' },
  { icon: Users, label: 'Farmer Cooperatives' },
  { icon: TrendingUp, label: 'Investors & Innovation Ecosystems' },
]

export const PARTNER_LOGOS = [
  { name: 'Rwanda Agriculture Board', logo: '/images/logo-rab.png' },
  { name: 'University of Rwanda', logo: '/images/logo-ur.png' },
  { name: 'IFAD', logo: '/images/logo-ifad.png' },
  { name: 'Mastercard Foundation', logo: '/images/logo-mastercard.png' },
  { name: 'World Food Programme', logo: '/images/logo-wfp.png' },
  { name: 'Kigali Innovation City', logo: '/images/logo-kic.png' },
  { name: 'Rwanda Development Board', logo: '/images/logo-rdb.png' },
  { name: 'Catholic Relief Services', logo: '/images/logo-crs.png' },
]

// ============================================
// NEWS PAGE
// ============================================
export const NEWS_FILTERS = ['All', 'Events', 'Announcements', 'Research']

export const FEATURED_ARTICLE = {
  id: 1,
  title: 'CBG Agri Innovation Hub Launches New Digital Farming Initiative',
  category: 'Announcements',
  date: '2024-01-20',
  author: 'John Mugisha',
  excerpt: 'The new initiative aims to connect 10,000 farmers with digital tools and resources to enhance agricultural productivity and sustainability.',
  image: '/images/news-featured.jpg'
}

export const NEWS_ARTICLES = [
  {
    id: 2,
    title: 'Smart Irrigation Workshop Draws 200+ Farmers',
    category: 'Events',
    date: '2024-01-18',
    author: 'Sarah Uwimana',
    excerpt: 'Farmers from across Rwanda gathered to learn about IoT-based irrigation systems and water conservation techniques.',
    image: '/images/news-workshop.jpg'
  },
  {
    id: 3,
    title: 'Research on Climate-Resilient Crops Shows Promise',
    category: 'Research',
    date: '2024-01-15',
    author: 'Dr. Jean Pierre',
    excerpt: 'Early results from our climate-smart agriculture research indicate significant potential for drought-resistant crop varieties.',
    image: '/images/news-research.jpg'
  },
  {
    id: 4,
    title: 'Youth Agripreneurship Program Graduates 50 Students',
    category: 'Events',
    date: '2024-01-12',
    author: 'Grace Uwimana',
    excerpt: 'Fifty young agripreneurs completed our intensive training program and are now starting their own agricultural businesses.',
    image: '/images/news-graduation.jpg'
  },
  {
    id: 5,
    title: 'New Partnership with University of Rwanda Announced',
    category: 'Announcements',
    date: '2024-01-10',
    author: 'John Mugisha',
    excerpt: 'Collaboration to strengthen agricultural research and training programs across Rwanda.',
    image: '/images/news-partnership.jpg'
  },
  {
    id: 6,
    title: 'IoT Sensors Deployed in 50 Farms Across Eastern Province',
    category: 'Research',
    date: '2024-01-08',
    author: 'Dr. Jean Pierre',
    excerpt: 'The deployment marks a significant milestone in our efforts to bring smart farming technologies to smallholder farmers.',
    image: '/images/news-sensors.jpg'
  }
]

// ============================================
// AUTH PAGES
// ============================================
export const ROLES = [
  { value: 'farmer', label: 'Farmer' },
  { value: 'student', label: 'Student' },
  { value: 'partner', label: 'Partner' },
  { value: 'agripreneur', label: 'Agripreneur' },
  { value: 'extension', label: 'Extension Officer' }
]

// ============================================
// FOOTER
// ============================================
export const FOOTER_LINKS = {
  quickLinks: NAV_LINKS.slice(0, 6),
  services: [
    'Smart Farming Solutions',
    'IoT Systems',
    'Training Programs',
    'Business Incubation',
    'Research & Innovation',
    'Consulting Services'
  ]
}

// ============================================
// IMAGE PLACEHOLDERS
// ============================================
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=800&q=80',
  training: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
  partners: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
  projects: 'https://images.unsplash.com/photo-1578575437138-9e65f0d1b6e4?w=800&q=80',
  solutions: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
  news: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  headerBg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80'
}

// ============================================
// CTA SECTIONS
// ============================================
export const CTA_CONTENT = {
  home: {
    title: 'Ready to Transform Agriculture?',
    subtitle: 'Join us in building a sustainable agricultural future for Rwanda and beyond.',
    buttonText: 'Get In Touch',
    buttonLink: '/contact'
  },
  about: {
    title: 'Partner With Us',
    subtitle: 'Join us in transforming agriculture and building a sustainable future.',
    buttonText: 'Contact Us',
    buttonLink: '/contact'
  },
  whatWeDo: {
    title: 'Ready to Make an Impact?',
    subtitle: 'Join us in driving agricultural innovation and transformation.',
    buttonText: 'Get Involved',
    buttonLink: '/contact'
  },
  solutions: {
    title: 'Ready to Transform Your Farming?',
    subtitle: 'Discover how our solutions can help you achieve sustainable agricultural success.',
    buttonText: 'Contact Our Team',
    buttonLink: '/contact'
  },
  projects: {
    title: 'Interested in Our Work?',
    subtitle: 'Partner with us to scale impactful agricultural projects.',
    buttonText: 'Partner With Us',
    buttonLink: '/partners'
  },
  training: {
    title: 'Partner on a Training Program',
    subtitle: 'Collaborate with us to deliver impactful training programs.',
    buttonText: 'Partner With Us',
    buttonLink: '/partners'
  },
  partners: {
    title: 'Join Us in Transforming Agriculture',
    subtitle: 'Partner with CBG Agri Innovation Hub to drive agricultural innovation, create sustainable impact, and build a better future for farming communities.',
    buttonText: 'Become a Partner',
    buttonLink: '/contact'
  },
  news: {
    title: 'Have a Story to Share?',
    subtitle: 'We\'d love to hear about agricultural innovations and successes in your community.',
    buttonText: 'Contact Our Media Team',
    buttonLink: '/contact'
  },
  contact: {
    title: 'Partner With Us',
    subtitle: 'Join our mission to transform agriculture through innovation and collaboration.',
    buttonText: 'Become a Partner',
    buttonLink: '/partners'
  }
}

// ============================================
// EXPORT ALL ICONS (without Facebook, Twitter, etc from lucide-react)
// ============================================
export const ICONS = {
  Home,
  Users,
  Leaf,
  TrendingUp,
  GraduationCap,
  Handshake,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Compass,
  Target,
  Cloud,
  Droplets,
  Thermometer,
  BarChart,
  Wifi,
  Settings,
  CheckCircle,
  Play,
  ArrowRight,
  Menu,
  X,
  User,
  LogIn,
  UserPlus,
  Eye,
  EyeOff,
  Send,
  ChevronRight,
  Wind,
  Building2,
  Smartphone,
  Database,
  Shield,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  Sprout,
  Bot,
  Microscope,
  Zap,
  Timer,
  Apple,
  Wheat,
  Sun,
  CloudRain,
  ThermometerSun,
  Droplet,
  Waves,
  Combine,
  Truck,
  Store,
  LineChart,
  PieChart,
  Activity,
  Heart,
  Globe,
  TreePine,
  Flower2,
  Recycle,
  Coffee,
  Lightbulb,
  // Social icons from react-icons
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram
}