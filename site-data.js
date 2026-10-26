/**
 * PORTFOLIO CONTENT — Edit this file to personalize the website.
 * You can safely change text, items, project links and demo links here.
 * The bundled showroom demos work immediately after deployment.
 *
 * To show a REAL Figma prototype, add an item with:
 *   figmaUrl: 'https://www.figma.com/proto/...'
 *   previewType: 'figma'
 * To show a LIVE coded website, set:
 *   liveUrl: 'https://your-deployed-project.com'
 *   previewType: 'website'
 * You can include both links. Figma itself does not host coded websites.
 */
export const siteData = {
  name: 'Sylvon James',
  fullName: 'Sylvon James D. Gonzaga',
  initials: 'SJ',
  role: 'Developer · Designer · Creative Builder',
  location: 'Based in the Philippines',
  availability: 'Open for collaborations',
  email: 'hello@yourdomain.com', // REPLACE before publishing your contact details
  github: 'https://github.com/sylvonjamesgonzaga',
  linkedin: '', // Optional
  resumeUrl: '', // Optional: e.g. './assets/resume.pdf'
  heroEyebrow: 'Independent creative developer / 2026',
  heroTitleTop: 'Turning ideas',
  heroTitleBottom: 'into experiences.',
  heroDescription: 'I build thoughtful digital products, explore bold interfaces, and turn ambitious concepts into things you can actually use.',
  about: 'I’m an Information Technology student and hands-on builder who loves connecting design and engineering. My work moves between immersive websites, practical web tools, and hardware projects — always with the same goal: make complex ideas feel effortless.',
  projects: [
    {
      number: '01',
      title: 'YESHEN Massage & Spa',
      category: 'WEB EXPERIENCE / CMS',
      summary: 'A refined home-service wellness website with thoughtful mobile design and content management.',
      tags: ['Web design', 'CMS', 'Responsive'],
      art: 'yeshen',
      detail: 'A digital presence centered on clarity, service discovery, and an understated, elevated visual identity.',
      url: ''
    },
    {
      number: '02',
      title: 'Project W.H.E.E.L.C.H.A.I.R.',
      category: 'ROBOTICS / EMBEDDED SYSTEMS',
      summary: 'An assistive mobility prototype combining joystick control, connected input, and obstacle awareness.',
      tags: ['Arduino', 'C++', 'Hardware'],
      art: 'wheelchair',
      detail: 'A student-led electronics build exploring safety, accessibility, and intuitive wheelchair controls.',
      url: ''
    },
    {
      number: '03',
      title: 'Von’s Reviewer',
      category: 'EDTECH / INTERACTIVE WEB',
      summary: 'A focused certification study experience designed around clear topics and interactive practice.',
      tags: ['JavaScript', 'UI/UX', 'Education'],
      art: 'reviewer',
      detail: 'A responsive reviewer concept with an emphasis on readable layouts and practical learning interactions.',
      url: ''
    }
  ],
  showroom: [
    {
      id: 'horizon',
      number: '01',
      name: 'Horizon Finance',
      subtitle: 'A calmer way to see your money.',
      kind: 'Website',
      category: 'Dashboard',
      year: '2026',
      color: '#b4d5c1',
      art: 'horizon',
      previewType: 'website',
      liveUrl: './previews/horizon.html',
      figmaUrl: '',
      description: 'An interactive fintech dashboard concept with a warm, focused data experience.'
    },
    {
      id: 'formandform',
      number: '02',
      name: 'Form & Form',
      subtitle: 'Objects with a point of view.',
      kind: 'Website',
      category: 'E-commerce',
      year: '2026',
      color: '#e4cfb1',
      art: 'form',
      previewType: 'website',
      liveUrl: './previews/form-and-form.html',
      figmaUrl: '',
      description: 'An editorial storefront experiment with interactive collections, product cards, and a cart.'
    },
    {
      id: 'morrow',
      number: '03',
      name: 'Morrow',
      subtitle: 'Create space for better days.',
      kind: 'Mobile App',
      category: 'Mobile',
      year: '2026',
      color: '#d6cdf0',
      art: 'morrow',
      previewType: 'website',
      liveUrl: './previews/morrow.html',
      figmaUrl: '',
      description: 'A mobile wellness concept featuring a daily check-in, calming rituals, and habit tracking.'
    }
  ],
  skills: [
    { title: 'Development', icon: '⌘', items: ['HTML / CSS', 'JavaScript', 'C++', 'Web apps', 'Responsive interfaces'] },
    { title: 'Design', icon: '✳', items: ['UI / UX', 'Figma workflows', 'Prototyping', 'Design systems', 'Motion concepts'] },
    { title: 'Hardware & tools', icon: '✧', items: ['Arduino', 'ESP32', 'Supabase', 'GitHub', 'System integration'] }
  ]
};
