import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  Email,
  Language,
  LinkedIn,
  Phone,
  TrendingUp,
  Search,
  Brush,
} from '@mui/icons-material';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorLarge, setCursorLarge] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  const services = [
    {
      title: 'Search strategy',
      description: 'Technical audits, keyword planning, and content systems tuned to real search intent.',
      icon: <Search fontSize="small" />,
    },
    {
      title: 'Editorial design',
      description: 'Warm, high-contrast storytelling that turns campaigns into memorable brand moments.',
      icon: <Brush fontSize="small" />,
    },
    {
      title: 'Growth systems',
      description: 'Performance loops that connect messaging, analytics, and conversion every step of the way.',
      icon: <TrendingUp fontSize="small" />,
    },
  ];

  const projects = [
    {
      title: 'Local visibility lift',
      summary: 'Rebuilt a regional service brand’s search presence through structured content and conversion-focused pages.',
      result: 'Top 3 rankings for 12 local keywords',
    },
    {
      title: 'Editorial launch campaign',
      summary: 'Designed a narrative-first launch sequence for a cultural product with a refined, premium tone.',
      result: '4.2x engagement across launch weeks',
    },
    {
      title: 'Conversion refresh',
      summary: 'Simplified the funnel, sharpened copy, and clarified the value proposition on a B2B landing experience.',
      result: 'Conversion rate uplift of 167%',
    },
  ];

  const stats = [
    { value: '50+', label: 'campaigns shaped' },
    { value: '20k+', label: 'people reached' },
    { value: '8x', label: 'growth-minded focus' },
  ];

  const contactInfo = [
    { label: 'adila@hindukushsoft.com', href: 'mailto:adila@hindukushsoft.com', icon: <Email fontSize="small" /> },
    { label: '+92 343 0891330', href: 'tel:+923430891330', icon: <Phone fontSize="small" /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/adila-tasnim-09b073265', icon: <LinkedIn fontSize="small" /> },
    { label: 'adila.is-a.dev', href: 'https://adila.is-a.dev', icon: <Language fontSize="small" /> },
  ];

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
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -40% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const phrases = ['digital marketer', 'SEO strategist', 'growth storyteller'];
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const phrase = phrases[index];
      if (!deleting) {
        setTypedText(phrase.slice(0, charIndex + 1));
        charIndex += 1;
        if (charIndex === phrase.length) {
          deleting = true;
          window.setTimeout(tick, 1400);
          return;
        }
      } else {
        setTypedText(phrase.slice(0, charIndex - 1));
        charIndex -= 1;
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % phrases.length;
        }
      }

      window.setTimeout(tick, deleting ? 55 : 95);
    };

    const timeoutId = window.setTimeout(tick, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursorPos({ x: event.clientX, y: event.clientY });
    const onHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setCursorLarge(Boolean(target?.closest('a, button, [data-hover]')));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHover);
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', px: { xs: 2, md: 4 }, pt: { xs: 1.5, md: 2.5 }, pb: { xs: 3, md: 5 } }}>
      <Box
        className="hidden md:block"
        sx={{
          position: 'fixed',
          left: cursorPos.x,
          top: cursorPos.y,
          width: cursorLarge ? 56 : 16,
          height: cursorLarge ? 56 : 16,
          marginLeft: cursorLarge ? -28 : -8,
          marginTop: cursorLarge ? -28 : -8,
          borderRadius: '9999px',
          border: '1px solid var(--accent)',
          background: 'oklch(0.62 0.16 45 / 0.14)',
          backdropFilter: 'blur(2px)',
          pointerEvents: 'none',
          transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease',
          zIndex: 200,
        }}
      />

      <Box sx={{ maxWidth: 1240, mx: 'auto', position: 'relative' }}>
        <Box component="nav" className="reveal" sx={{ position: 'sticky', top: 16, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '999px', px: 2, py: 1.25, background: 'oklch(0.96 0.005 80 / 0.86)', backdropFilter: 'blur(16px)', boxShadow: 'var(--glow-shadow)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 38, height: 38, borderRadius: '999px', display: 'grid', placeItems: 'center', border: '1px solid var(--border)', background: 'linear-gradient(135deg, var(--accent), var(--accent-glow))', color: 'var(--bg)', fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700 }}>
              AT
            </Box>
          </Box>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item.id} href={`#${item.id}`} sx={{ textTransform: 'none', color: activeSection === item.id ? 'var(--accent)' : 'var(--muted)', fontWeight: activeSection === item.id ? 700 : 500, px: 2.5, py: 1, borderRadius: '999px', '&:hover': { color: 'var(--fg)', background: 'oklch(0.62 0.16 45 / 0.08)' } }}>
                {item.label}
              </Button>
            ))}
          </Stack>
          <Button href="#contact" sx={{ borderRadius: '999px', background: 'linear-gradient(135deg, var(--accent), var(--accent-glow))', color: 'var(--bg)', px: 3, py: 1, textTransform: 'none', fontWeight: 700 }}>
            Let&apos;s talk now
          </Button>
        </Box>

        <Box id="home" data-section className="reveal" sx={{ mt: 2.5, position: 'relative', border: '1px solid var(--border)', borderRadius: '32px', overflow: 'hidden', background: 'linear-gradient(135deg, var(--card), var(--surface))', boxShadow: 'var(--glow-shadow)', p: { xs: 3, md: 6 } }}>
          <Box className="orb" sx={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'oklch(0.62 0.16 45 / 0.12)', filter: 'blur(70px)' }} />
          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' }, alignItems: 'center' }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography sx={{ letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>
                Available for select collaborations
              </Typography>
              <Typography sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2rem', sm: '2.8rem', lg: '3.8rem' }, lineHeight: 1.05, letterSpacing: '-0.02em', mb: 0.4 }}>
                Hello, I&apos;m
              </Typography>
              <Typography variant="h1" sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2.8rem', sm: '3.7rem', lg: '5.8rem' }, lineHeight: 0.95, letterSpacing: '-0.02em', mb: 1.4, fontStyle: 'italic', fontWeight: 700 }}>
                ADILA TASNIM
              </Typography>
              <Typography sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '1.6rem', sm: '2rem', lg: '2.6rem' }, lineHeight: 1.05, letterSpacing: '-0.02em', mb: 2, color: 'var(--fg)' }}>
                I build warm, precise digital stories.
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.35rem' }, color: 'var(--fg)', fontWeight: 500, mb: 2 }}>
                I&apos;m a <span className="shimmer-text">{typedText}</span>
                <Box component="span" sx={{ ml: 0.5, color: 'var(--accent)' }}>|</Box>
              </Typography>
              <Typography sx={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: 620, fontSize: '1rem' }}>
                I shape strategy, content, and design into a calm, editorial experience that helps brands feel clearer, bolder, and easier to remember.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                <Button href="#contact" sx={{ borderRadius: '999px', background: 'linear-gradient(135deg, var(--accent), var(--accent-glow))', color: 'var(--bg)', px: 3, py: 1.2, textTransform: 'none', fontWeight: 700, boxShadow: 'var(--glow-shadow)' }}>
                  Start a project
                </Button>
                <Button href="#projects" sx={{ borderRadius: '999px', border: '1px solid var(--border)', color: 'var(--fg)', px: 3, py: 1.2, textTransform: 'none' }}>
                  See recent work
                </Button>
              </Stack>
            </Box>

            <Box sx={{ position: 'relative', minHeight: { xs: 280, md: 360 } }}>
              <Box sx={{ position: 'absolute', inset: 0, borderRadius: '28px', background: 'linear-gradient(135deg, var(--accent), var(--accent-glow))', opacity: 0.18 }} />
              <Box sx={{ position: 'absolute', inset: 0, borderRadius: '28px', border: '1px solid var(--border)', background: 'var(--card)', boxShadow: 'var(--glow-shadow)' }} />
              <Box sx={{ position: 'absolute', inset: '12%', borderRadius: '24px', background: 'radial-gradient(circle at top, oklch(0.62 0.16 45 / 0.12), transparent 70%)', filter: 'blur(16px)' }} />
              <Box sx={{ position: 'absolute', inset: '10%', borderRadius: '24px', border: '1px solid var(--border)', overflow: 'hidden', background: 'linear-gradient(145deg, var(--card), var(--surface))' }}>
                <Box component="img" src="/Adila.webp" alt="Adila portrait" sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, oklch(0.62 0.16 45 / 0.08) 100%)' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="reveal" sx={{ mt: 4, overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '999px', py: 2.5, background: 'oklch(0.96 0.005 80 / 0.9)' }}>
          <Box className="marquee-track" sx={{ display: 'flex', gap: 6, whiteSpace: 'nowrap', width: '200%' }}>
            {[...Array(2)].map((_, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 6 }}>
                {['Strategy', 'Content', 'SEO', 'Design', 'Analytics', 'Storytelling'].map((label) => (
                  <Box key={label} sx={{ px: 3, py: 1, borderRadius: '999px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>
                    {label}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        <Box id="about" data-section className="reveal" sx={{ mt: 4, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' } }}>
          <Box sx={{ border: '1px solid var(--border)', borderRadius: '28px', p: { xs: 3, md: 4 }, background: 'linear-gradient(135deg, var(--card), var(--surface))', boxShadow: 'var(--glow-shadow)' }}>
            <Typography sx={{ textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>About</Typography>
            <Typography variant="h3" sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, letterSpacing: '-0.02em' }}>
              A thoughtful marketer with a sharp eye for design and a grounded feel for growth.
            </Typography>
            <Typography sx={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              I blend research, storytelling, and calm systems thinking to help brands find clearer voices and stronger audiences. My work leans editorial, strategic, and conversion-aware without losing warmth or personality.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gap: 2 }}>
            {stats.map((item) => (
              <Box key={item.label} sx={{ border: '1px solid var(--border)', borderRadius: '22px', p: 3, background: 'var(--card)' }}>
                <Typography sx={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--accent)' }}>{item.value}</Typography>
                <Typography sx={{ color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.74rem', mt: 0.5 }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box id="services" data-section className="reveal" sx={{ mt: 4, border: '1px solid var(--border)', borderRadius: '28px', p: { xs: 3, md: 4 }, background: 'linear-gradient(135deg, var(--card), var(--surface))', boxShadow: 'var(--glow-shadow)' }}>
          <Typography sx={{ textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>Services</Typography>
          <Typography variant="h3" sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2rem', md: '2.4rem' }, mb: 3, letterSpacing: '-0.02em' }}>
            Focused support for brand, growth, and calm execution.
          </Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
            {services.map((service) => (
              <Box key={service.title} data-hover sx={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '20px', p: 3, bgcolor: 'var(--card)', transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
                <Box sx={{ width: 38, height: 38, borderRadius: '999px', display: 'grid', placeItems: 'center', bgcolor: 'oklch(0.62 0.16 45 / 0.12)', color: 'var(--accent)', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{service.title}</Typography>
                <Typography sx={{ color: 'var(--muted)', lineHeight: 1.7 }}>{service.description}</Typography>
                <Box sx={{ position: 'absolute', left: 0, bottom: 0, height: '2px', width: '100%', transform: 'scaleX(0)', transformOrigin: 'left', background: 'linear-gradient(90deg, var(--accent), var(--accent-glow))', transition: 'transform 0.25s ease', '&:hover': { transform: 'scaleX(1)' } }} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box id="projects" data-section className="reveal" sx={{ mt: 4, border: '1px solid var(--border)', borderRadius: '28px', p: { xs: 3, md: 4 }, background: 'linear-gradient(135deg, var(--card), var(--surface))', boxShadow: 'var(--glow-shadow)' }}>
          <Typography sx={{ textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>Projects</Typography>
          <Typography variant="h3" sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2rem', md: '2.4rem' }, mb: 3, letterSpacing: '-0.02em' }}>
            Selected work that moved with clarity and pace.
          </Typography>
          <Stack spacing={2}>
            {projects.map((project, index) => (
              <Box key={project.title} sx={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '22px', p: 3, background: 'var(--card)', '&:hover': { transform: 'translateX(6px)', transition: 'transform 0.25s ease' } }}>
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, oklch(0.62 0.16 45 / 0.1) 50%, transparent 100%)', transform: 'translateX(-100%)', transition: 'transform 0.35s ease', '&:hover': { transform: 'translateX(100%)' } }} />
                <Typography sx={{ color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', mb: 1 }}>0{index + 1}</Typography>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{project.title}</Typography>
                <Typography sx={{ color: 'var(--muted)', lineHeight: 1.7, mb: 1.5 }}>{project.summary}</Typography>
                <Typography sx={{ color: 'var(--fg)' }}>{project.result}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box id="contact" data-section className="reveal" sx={{ mt: 4, border: '1px solid var(--border)', borderRadius: '28px', p: { xs: 3, md: 4 }, background: 'linear-gradient(135deg, var(--card), var(--surface))', boxShadow: 'var(--glow-shadow)' }}>
          <Typography sx={{ textTransform: 'uppercase', letterSpacing: '0.24em', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>Contact</Typography>
          <Typography variant="h3" className="shimmer-text" sx={{ fontFamily: 'var(--font-serif)', fontSize: { xs: '2rem', md: '2.8rem' }, mb: 3, letterSpacing: '-0.02em' }}>
            Let&apos;s shape something memorable.
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Stack spacing={1.5} sx={{ flex: 1 }}>
              {contactInfo.map((item) => (
                <Button key={item.label} href={item.href} target="_blank" rel="noreferrer" sx={{ justifyContent: 'flex-start', borderRadius: '999px', border: '1px solid var(--border)', color: 'var(--fg)', px: 2.5, py: 1.2, textTransform: 'none' }}>
                  <Box sx={{ mr: 1.5 }}>{item.icon}</Box>
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Box sx={{ flex: 1, border: '1px solid var(--border)', borderRadius: '22px', p: 3, background: 'var(--card)' }}>
              <Typography sx={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                If you need a refined launch, a sharp content system, or a more composed digital presence, I’d love to hear what you’re building.
              </Typography>
              <Button href="mailto:adila@hindukushsoft.com" sx={{ mt: 2, borderRadius: '999px', background: 'linear-gradient(135deg, var(--accent), var(--accent-glow))', color: 'var(--bg)', px: 3, py: 1.2, textTransform: 'none', fontWeight: 700 }}>
                Email me directly
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
