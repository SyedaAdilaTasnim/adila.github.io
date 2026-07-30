import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Stack,
  TextField,
  IconButton,
} from '@mui/material';
import {
  Email,
  Phone,
  LinkedIn,
  Language,
  Business,
  Search,
  Insights,
  TrendingUp,
  AutoAwesome,
  Work,
  Menu,
  Close,
  ArrowOutward,
  KeyboardArrowUp,
  School,
  EmojiEvents,
} from '@mui/icons-material';

const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');

  const developer = {
    name: 'Adila Tasnim',
    role: 'Digital Marketer',
    skills: [
      'SEO',
      'Content Strategy',
      'Conversion Rate Optimization (CRO)',
      'Google Analytics (GA4)',
      'Google Ads',
    ],
    isHireable: () => true,
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Drive targeted visibility through technical SEO, keyword strategy, and search-intent-led content planning.',
      icon: <Search />,
      accent: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)',
    },
    {
      title: 'Content Strategy',
      description: 'Build editorial systems that strengthen authority, nurture audiences, and create sustainable organic growth.',
      icon: <AutoAwesome />,
      accent: 'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)',
    },
    {
      title: 'Conversion Optimization',
      description: 'Sharpen messaging, CTA flow, and user journeys so every visit has a clearer path to action.',
      icon: <TrendingUp />,
      accent: 'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Translate campaign performance into strategic decisions with clean reporting and growth insights.',
      icon: <Insights />,
      accent: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
    },
  ];

  const experiences = [
    {
      title: 'Digital Skills & Marketing Trainer',
      company: 'Freelance',
      description: 'Teach aspiring creators and students digital marketing fundamentals, SEO, content strategy, audience growth, branding, digital tools, and practical workflows that help build successful online businesses and personal brands.',
      icon: <School />,
      color: '#22d3ee',
    },
    {
      title: 'Digital Marketer',
      company: 'HindukushSoft Technologies',
      description: 'Lead growth-centered campaigns, brand storytelling, and conversion-focused initiatives with a strategic blend of creativity, audience understanding, and market insight.',
      icon: <Work />,
      color: '#f472b6',
    },
    {
      title: 'Computer Science Graduate',
      company: 'University of Chitral',
      description: 'Apply a technical foundation in website optimization, marketing automation, analytics, data-driven decision making, and performance optimization to strengthen digital campaigns and marketing systems.',
      icon: <EmojiEvents />,
      color: '#8b5cf6',
    },
  ];

  const skillGroups = [
    {
      title: 'Strategy & SEO',
      items: [
        { name: 'Technical SEO', level: 94, color: '#2563EB' },
        { name: 'Local SEO', level: 90, color: '#7C3AED' },
        { name: 'Keyword Research', level: 91, color: '#06B6D4' },
        { name: 'Content Strategy', level: 92, color: '#2563EB' },
      ],
    },
    {
      title: 'Paid & Channels',
      items: [
        { name: 'Google Ads', level: 90, color: '#7C3AED' },
        { name: 'Meta Ads', level: 87, color: '#06B6D4' },
        { name: 'Email Marketing', level: 85, color: '#2563EB' },
        { name: 'Social Media Marketing', level: 88, color: '#7C3AED' },
      ],
    },
    {
      title: 'Analytics & Optimization',
      items: [
        { name: 'Conversion Rate Optimization (CRO)', level: 90, color: '#06B6D4' },
        { name: 'Google Analytics (GA4)', level: 91, color: '#2563EB' },
        { name: 'Google Search Console', level: 88, color: '#7C3AED' },
        { name: 'Copywriting', level: 93, color: '#06B6D4' },
      ],
    },
  ];

  const projects = [
    {
      title: 'Local SEO Campaign — Home Services Business',
      summary: 'Ran a technical SEO audit, rebuilt local citations, and optimized the Google Business Profile to lift visibility for a service-area business competing in a crowded local market.',
      tools: ['Google Search Console', 'GA4', 'SEMrush'],
      result: '+180% organic traffic · Top 3 rankings for 12 local keywords in 4 months',
      gradient: 'linear-gradient(135deg, rgba(37,99,235,0.85), rgba(6,182,212,0.75))',
    },
    {
      title: 'Google Ads Lead Generation Campaign',
      summary: 'Built a search and retargeting campaign structure with tightened audience segmentation and conversion tracking to lower acquisition cost for a B2B service brand.',
      tools: ['Google Ads', 'GA4', 'Google Tag Manager'],
      result: '3.2x ROAS · 42% lower cost-per-lead in 90 days',
      gradient: 'linear-gradient(135deg, rgba(124,58,237,0.82), rgba(37,99,235,0.75))',
    },
    {
      title: 'Social Media Growth Strategy',
      summary: 'Designed a content calendar and engagement system for a lifestyle brand, pairing consistent posting cadence with community-building to accelerate organic reach.',
      tools: ['Meta Business Suite', 'Canva', 'Later'],
      result: '4x follower growth · +65% engagement rate in 6 months',
      gradient: 'linear-gradient(135deg, rgba(6,182,212,0.82), rgba(124,58,237,0.7))',
    },
    {
      title: 'Email Marketing Funnel Optimization',
      summary: 'Rebuilt the welcome series and abandoned-cart sequence with clearer segmentation and A/B-tested subject lines to recover more revenue from existing subscribers.',
      tools: ['Mailchimp', 'A/B Testing', 'Copywriting'],
      result: 'Open rate 18% → 34% · Recovered 12% of abandoned carts',
      gradient: 'linear-gradient(135deg, rgba(37,99,235,0.8), rgba(96,165,250,0.7))',
    },
    {
      title: 'Landing Page CRO Project',
      summary: 'Rewrote page messaging, simplified the lead form, and restructured CTA hierarchy based on user session recordings and heatmap analysis.',
      tools: ['Hotjar', 'Google Optimize', 'Figma'],
      result: 'Conversion rate 2.1% → 5.6% · +167% lift',
      gradient: 'linear-gradient(135deg, rgba(124,58,237,0.8), rgba(6,182,212,0.7))',
    },
  ];

  const contactInfo = [
    { icon: <Phone />, text: '+92 343 0891330', href: 'tel:+923430891330' },
    { icon: <Email />, text: 'adila@hindukushsoft.com', href: 'mailto:adila@hindukushsoft.com' },
    { icon: <LinkedIn />, text: 'LinkedIn', href: 'https://linkedin.com/in/adila-tasnim-09b073265' },
    { icon: <Language />, text: 'adila.is-a.dev', href: 'https://adila.is-a.dev' },
    { icon: <Business />, text: 'HindukushSoft', href: 'https://www.hindukushsoft.com' },
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Campaigns shaped' },
    { value: 20, suffix: 'k+', label: 'Engaged users' },
    { value: 8, suffix: 'x', label: 'Growth-minded focus' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const phrases = ['Digital Marketer', 'SEO Strategist', 'Growth Storyteller'];
    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeoutId: number | undefined;

    const tick = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!deleting) {
        setTypedText(currentPhrase.slice(0, characterIndex + 1));
        characterIndex += 1;
        if (characterIndex === currentPhrase.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, 1400);
          return;
        }
      } else {
        setTypedText(currentPhrase.slice(0, characterIndex - 1));
        characterIndex -= 1;
        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = window.setTimeout(tick, deleting ? 55 : 95);
    };

    timeoutId = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <Box className="portfolio-shell">
      <Box className="portfolio-container">
        <Box component="nav" className="top-nav reveal">
          <Box className="brand-mark">AT</Box>
          <Stack direction="row" spacing={1} className="nav-links">
            {navItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <IconButton className="mobile-toggle" onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {mobileMenuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>

        {mobileMenuOpen && (
          <Box className="mobile-nav-panel reveal">
            {navItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box id="home" data-section className="hero-shell reveal">
          <Box className="hero-copy">
            <Typography variant="overline" className="eyebrow">
              Available for select collaborations
            </Typography>
            <Typography variant="h1" className="hero-title">
              {developer.name}
            </Typography>
            <Typography variant="h4" className="hero-subtitle">
              I&apos;m a <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </Typography>
            <Typography variant="body1" className="hero-description">
              I craft growth-focused marketing strategies that blend consumer psychology, creative storytelling, and conversion optimization.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" className="primary-btn" href="#contact">
                Let&apos;s talk
              </Button>
              <Button variant="outlined" className="secondary-btn" href="#projects">
                View projects
              </Button>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }} className="social-row">
              {contactInfo.slice(0, 4).map((item) => (
                <Button key={item.text} href={item.href} className="social-pill" component="a" target="_blank" rel="noreferrer">
                  {item.icon}
                </Button>
              ))}
            </Stack>
          </Box>

          <Box className="hero-visual">
            <Box className="orb orb-one" />
            <Box className="orb orb-two" />
            <Box className="hero-card">
              <Box component="img" src="/Adila.webp" alt="Adila Tasnim" className="profile-image" />
              <Box className="hero-card-copy">
                <Typography variant="overline" className="eyebrow">Core focus</Typography>
                <Typography variant="h6">{developer.role}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                  {developer.skills.map((skill) => (
                    <Chip key={skill} label={skill} className="skill-chip small" />
                  ))}
                </Stack>
                <Button className="inline-link" href="#about" sx={{ mt: 2 }}>
                  Explore my approach <ArrowOutward fontSize="small" />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box id="about" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            About me
          </Typography>
          <Typography variant="h2" className="section-title large">
            A marketer who blends strategy, storytelling, and technology to create measurable growth.
          </Typography>
          <Box className="about-grid">
            <Box>
              <Typography variant="body1" className="section-copy">
                I’m a passionate Digital Marketer specializing in SEO, content strategy, digital growth, conversion optimization, and data-driven marketing. My Computer Science background gives me a unique advantage in connecting technology with marketing to create measurable business impact.
              </Typography>
              <Typography variant="body1" className="section-copy" sx={{ mt: 2 }}>
                I focus on building clear, conversion-oriented marketing systems that turn audience attention into meaningful action, combining user psychology, creative storytelling, and data-led decision making.
              </Typography>
            </Box>
            <Stack spacing={1.5} className="stats-grid">
              {stats.map((stat) => (
                <Card key={stat.label} className="stat-card">
                  <Typography variant="h4" className="stat-value">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    {stat.label}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box id="services" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            Services
          </Typography>
          <Typography variant="h2" className="section-title large">
            Premium digital marketing services designed for modern growth.
          </Typography>
          <Box className="services-grid">
            {services.map((service) => (
              <Card key={service.title} className="service-card">
                <Box className="service-icon" sx={{ background: service.accent }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" className="service-title">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="section-copy">
                  {service.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        <Box id="experience" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            Experience
          </Typography>
          <Typography variant="h2" className="section-title large">
            Growth-minded experience shaped by education, strategy, and execution.
          </Typography>
          <Stack spacing={2} className="timeline-stack">
            {experiences.map((item) => (
              <Card key={item.title} className="timeline-card">
                <Box className="timeline-dot" sx={{ background: item.color }} />
                <Box className="timeline-icon" sx={{ background: item.color }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="h6" className="service-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="timeline-company">
                    {item.company}
                  </Typography>
                  <Typography variant="body2" className="section-copy">
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </Box>

        <Box id="skills" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            Skills
          </Typography>
          <Typography variant="h2" className="section-title large">
            A premium toolkit for strategy, content, and conversion.
          </Typography>
          <Box className="skills-grid">
            {skillGroups.map((group) => (
              <Card key={group.title} className="skill-card">
                <Typography variant="h6" className="service-title">
                  {group.title}
                </Typography>
                <Stack spacing={1.6} sx={{ mt: 2 }}>
                  {group.items.map((item) => (
                    <Box key={item.name}>
                      <Box className="skill-meta">
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="body2">{item.level}%</Typography>
                      </Box>
                      <Box className="progress-track">
                        <Box className="progress-fill" sx={{ width: `${item.level}%`, background: item.color }} />
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Card>
            ))}
          </Box>
        </Box>

        <Box id="projects" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            Projects
          </Typography>
          <Typography variant="h2" className="section-title large">
            Results-driven work shaped by growth strategy and thoughtful design.
          </Typography>
          <Box className="projects-grid">
            {projects.map((project) => (
              <Card key={project.title} className="project-card">
                <Box className="project-media" sx={{ background: project.gradient }}>
                  <Box className="project-overlay">
                    <Typography variant="overline">Case study</Typography>
                    <Typography variant="h6">{project.title}</Typography>
                  </Box>
                </Box>
                <Box className="project-body">
                  <Typography variant="h6" className="service-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="section-copy" sx={{ mt: 1 }}>
                    {project.summary}
                  </Typography>
                  <Typography variant="body2" className="project-result">
                    {project.result}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
                    {project.tools.map((tool) => (
                      <Chip key={tool} label={tool} className="skill-chip small" />
                    ))}
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2 }}>
                    <Button className="primary-btn" href="#contact">
                      Let&apos;s talk
                    </Button>
                    <Button className="secondary-btn" href="#about">
                      View approach
                    </Button>
                  </Stack>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

        <Box id="contact" data-section className="section-card reveal">
          <Typography variant="overline" className="section-tag">
            Contact
          </Typography>
          <Typography variant="h2" className="section-title large">
            Let&apos;s build a marketing experience that feels as refined as the brand behind it.
          </Typography>
          <Box className="contact-grid">
            <Box className="contact-list">
              {contactInfo.map((item) => (
                <Button key={item.text} href={item.href} startIcon={item.icon} className="contact-link" component="a" target="_blank" rel="noreferrer">
                  {item.text}
                </Button>
              ))}
            </Box>
            <Box component="form" className="contact-form">
              <TextField label="Name" variant="outlined" className="form-field" />
              <TextField label="Email" variant="outlined" className="form-field" />
              <TextField label="Message" variant="outlined" multiline rows={4} className="form-field" />
              <Button type="submit" variant="contained" className="primary-btn">
                Send message
              </Button>
            </Box>
          </Box>
        </Box>

        <Box className="footer-card reveal">
          <Typography variant="body2" className="section-copy">
            © 2026 Adila Tasnim • Building thoughtful marketing experiences.
          </Typography>
          <Button className="back-to-top" href="#home">
            <KeyboardArrowUp />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const AnimatedCounter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = '' }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1200, 1);
      setValue(Math.round(progress * end));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [end]);

  return <>{value}{suffix}</>;
};

export default Portfolio;
