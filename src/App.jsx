const whatsappLink =
  'https://wa.me/523333738662?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web%20express%20para%20mi%20negocio.'

const businessTypes = [
  'Barberías',
  'Estéticas, uñas y pestañas',
  'Restaurantes y comida',
  'Servicios locales',
  'Viajes y eventos',
  'Negocios que venden por WhatsApp',
]

const packages = [
  {
    name: 'Paquete Básico',
    price: '$2,500 MXN',
    description: 'Ideal para negocios que necesitan presencia rápida en internet.',
    items: [
      'Página sencilla tipo landing',
      'Botón directo a WhatsApp',
      'Sección de servicios',
      'Ubicación',
      'Horarios',
      'Diseño adaptable a celular',
    ],
  },
  {
    name: 'Paquete Pro',
    price: '$4,500 MXN',
    description:
      'Ideal para negocios que quieren verse más profesionales y generar más confianza.',
    items: [
      'Todo lo del Básico',
      'Galería de fotos',
      'Formulario de contacto',
      'Textos optimizados para vender mejor',
      'Mapa de ubicación',
      'Diseño más completo y visual',
    ],
    featured: true,
  },
  {
    name: 'Paquete Premium',
    price: '$6,500 MXN',
    description:
      'Ideal para negocios que quieren página web y apoyo inicial para promocionarse.',
    items: [
      'Todo lo del Pro',
      '30 ideas de contenido para redes sociales',
      'Revisión y mejora de textos',
      'Optimización inicial de la página',
      'Mantenimiento inicial',
      'Cambios menores después de la entrega',
      'Sugerencias para usar la página en WhatsApp, Instagram y Facebook',
    ],
  },
]

const demos = [
  {
    name: 'Demo Barbería',
    href: '#demo-barberia',
    description:
      'Ejemplo de página para barbería con servicios, ubicación, horarios, galería y botón directo a WhatsApp.',
  },
  {
    name: 'Demo Estética / Uñas',
    href: '#demo-estetica',
    description:
      'Ejemplo de página para estética, uñas o pestañas, diseñada para mostrar servicios, precios, fotos y contacto rápido.',
  },
]

const processSteps = [
  {
    label: 'Paso 1',
    title: 'Me escribes por WhatsApp',
    text: 'El primer paso es mandarme mensaje para contarme qué tipo de negocio tienes y qué necesitas mostrar.',
  },
  {
    label: 'Paso 2',
    title: 'Reunimos la información',
    text: 'Me compartes tus servicios, horarios, ubicación, fotos y datos de contacto.',
  },
  {
    label: 'Paso 3',
    title: 'Diseño tu página',
    text: 'Creo una página profesional, clara y adaptada a celular para que tus clientes puedan conocerte y contactarte.',
  },
  {
    label: 'Paso 4',
    title: 'Revisamos y publicamos',
    text: 'Hacemos una revisión final, aplicamos cambios incluidos y dejamos tu página lista para compartir.',
  },
]

const faqs = [
  {
    question: '¿Cuánto tarda en estar lista mi página?',
    answer:
      'Depende del paquete y de qué tan rápido tenga la información del negocio, pero la idea es que sea un proceso express y sin complicaciones.',
  },
  {
    question: '¿Necesito tener dominio o hosting?',
    answer:
      'No necesariamente para empezar. Te puedo orientar con opciones sencillas dependiendo de lo que necesite tu negocio.',
  },
  {
    question: '¿La página funciona en celular?',
    answer:
      'Sí. Todas las páginas están pensadas para verse bien en celular, tablet y computadora.',
  },
  {
    question: '¿Puedo pedir cambios?',
    answer:
      'Sí. Cada proyecto incluye una ronda de cambios. Cambios extra pueden tener costo adicional.',
  },
  {
    question: '¿La página incluye tienda en línea?',
    answer:
      'No en los paquetes base. Los paquetes están enfocados en mostrar servicios, ubicación y recibir mensajes por WhatsApp. Si necesitas tienda o pagos en línea, se cotiza aparte.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegacion principal">
        <a className="brand" href="#inicio" aria-label="Web Local Express inicio">
          <span className="brand-mark">WL</span>
          <span>Web Local Express</span>
        </a>
        <nav className="nav-links" aria-label="Secciones">
          <a href="#paquetes">Paquetes</a>
          <a href="#ejemplos">Ejemplos</a>
          <a href="#proceso">Proceso</a>
        </nav>
        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Cotizar
        </a>
      </header>

      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Web Local Express</p>
          <h1>Páginas web express para negocios locales</h1>
          <p className="hero-subtitle">
            Consigue una página profesional para mostrar tus servicios, ubicación y recibir
            mensajes por WhatsApp.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Quiero mi página web
            </a>
            <a className="btn btn-secondary" href="#ejemplos">
              Ver ejemplos
            </a>
          </div>
          <div className="hero-proof" aria-label="Puntos de valor">
            <span>Diseño mobile-first</span>
            <span>WhatsApp listo</span>
            <span>Entrega express</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista conceptual de una página para negocio local">
          <img
            src="/assets/web-local-express-hero.png"
            alt="Mockup premium de página web para negocio local con contacto por WhatsApp"
          />
          <div className="metric-card metric-card-top">
            <strong>+ confianza</strong>
            <span>Servicios, horarios y ubicación claros</span>
          </div>
          <div className="metric-card metric-card-bottom">
            <strong>WhatsApp directo</strong>
            <span>Un toque para recibir mensajes</span>
          </div>
        </div>
      </section>

      <section className="section intro-section" id="que-hacemos">
        <div className="section-heading">
          <p className="eyebrow">Qué haces</p>
          <h2>Presencia digital clara para negocios que venden en su colonia, ciudad o zona.</h2>
        </div>
        <p className="intro-text">
          Creamos páginas web express para negocios locales que quieren verse más profesionales,
          mostrar sus servicios y facilitar que sus clientes los contacten por WhatsApp. Ideal para
          negocios que quieren tener presencia en internet sin complicarse con procesos largos o
          costosos.
        </p>
      </section>

      <section className="section audience-section" id="para-quien-es">
        <div className="section-heading center">
          <p className="eyebrow">Para quién es</p>
          <h2>Una página para convertir búsquedas, recomendaciones y visitas de redes en mensajes.</h2>
        </div>
        <div className="business-grid">
          {businessTypes.map((type, index) => (
            <article className="business-card" key={type}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{type}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section packages-section" id="paquetes">
        <div className="section-heading center">
          <p className="eyebrow">Paquetes</p>
          <h2>Elige el nivel de presencia que necesita tu negocio.</h2>
        </div>
        <div className="packages-grid">
          {packages.map((plan) => (
            <article className={`package-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="featured-badge">Más solicitado</span>}
              <div>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="package-description">{plan.description}</p>
              </div>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn btn-package" href={whatsappLink} target="_blank" rel="noreferrer">
                Pedir información
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section examples-section" id="ejemplos">
        <div className="section-heading">
          <p className="eyebrow">Ejemplos</p>
          <h2>Demos pensados para que el cliente entienda rápido qué vendes y cómo contactarte.</h2>
        </div>
        <div className="demo-grid">
          {demos.map((demo) => (
            <article className="demo-card" key={demo.name}>
              <div className="demo-preview" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>{demo.name}</h3>
                <p>{demo.description}</p>
              </div>
              <a className="demo-link" href={demo.href}>
                Ver demo
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="section-heading center">
          <p className="eyebrow">Proceso de trabajo</p>
          <h2>Simple, guiado y sin vueltas.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="preguntas">
        <div className="section-heading">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Resuelve las dudas principales antes de pedir tu página.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div>
          <p className="eyebrow">Listo para empezar</p>
          <h2>Tu negocio puede verse profesional esta semana.</h2>
          <p>
            Manda un mensaje y revisamos qué paquete encaja mejor con lo que quieres mostrar.
          </p>
        </div>
        <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Quiero mi página web
        </a>
      </section>

      <footer className="footer">
        <p>Web Local Express</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp: +52 3333738662
        </a>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Enviar mensaje por WhatsApp"
      >
        WA
      </a>
    </main>
  )
}

export default App
