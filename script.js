document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    const observerOptions = {
        threshold: 0.2
    };

    const translations = {
        es: {
            'page.title': 'BioSync | Ciencia viva para mentes jóvenes',
            'meta.description': 'BioSync fabrica kits y biorreactores educativos para inspirar a niños y jóvenes científicos en toda Latinoamérica.',
            'nav.home': 'Inicio',
            'nav.kits': 'Kits',
            'nav.about': 'Sobre Nosotros',
            'nav.contact': 'Contacto',
            'nav.cta': 'Comprar Ahora',
            'hero.badge': 'Educación científica accesible',
            'hero.title': 'Ciencia viva para mentes jóvenes',
            'hero.subtitle': 'En BioSync creemos que la ciencia debe ser accesible, inspiradora y cercana a quienes serán los futuros innovadores de nuestra región.',
            'hero.primaryCta': 'Explorar kits',
            'hero.secondaryCta': 'Nuestra misión',
            'hero.card.title': 'Biorreactor educativo',
            'hero.card.description': 'Un prototipo seguro y didáctico para que estudiantes comprendan procesos de biotecnología y microbiología con experimentos reales en el aula.',
            'hero.card.feature1': 'Diseño creado en Chile para más acceso y menor costo.',
            'hero.card.feature2': 'Soporte local inmediato y mejoras a medida.',
            'hero.card.feature3': 'Componentes impresos en 3D y PCB propias sin tiempos de espera.',
            'hero.card.button': 'Descubrir más',
            'products.badge': 'Nuestros Kits Estrella',
            'products.title': 'Experimenta, construye y comparte descubrimientos',
            'products.subtitle': 'Equipos pensados para escuelas, academias STEM y laboratorios juveniles que buscan experimentar sin barreras.',
            'products.kit1.description': 'Introduce conceptos clave de cultivo celular con actividades guiadas para aulas de enseñanza media.',
            'products.kit2.description': 'Componentes modulares para construir mini biorreactores y aprender sobre sensores, control y automatización.',
            'products.kit3.description': 'Incluye software educativo para monitoreo de datos en vivo y experimentos colaborativos entre escuelas.',
            'products.kit4.description': 'Plataforma digital para registrar experimentos, compartir resultados y construir comunidad científica joven.',
            'products.cta': 'Ver más',
            'why.badge': 'Por qué BioSync',
            'why.title': 'Fabricamos en Chile para democratizar la biotecnología educativa',
            'why.subtitle': 'Transformamos un mercado elitista en uno abierto y dinámico mediante fabricación aditiva y soporte local.',
            'why.value1.title': 'Innovación ágil',
            'why.value1.text': 'Mejoras rápidas y a medida gracias a impresión 3D y PCB propias.',
            'why.value2.title': 'Soporte cercano',
            'why.value2.text': 'Soporte local inmediato con repuestos al instante y acompañamiento docente.',
            'why.value3.title': 'Accesibilidad real',
            'why.value3.text': 'Reducimos costos eliminando importaciones y tiempos de espera.',
            'why.value4.title': 'Vocación educativa',
            'why.value4.text': 'Inspiramos vocaciones STEM con experiencias científicas vivas y colaborativas.',
            'mission.title': 'Nuestra misión',
            'mission.description': 'Impulsar que cada estudiante latinoamericano tenga acceso real a la experimentación científica, despertando curiosidad y habilidades STEM desde el aula.',
            'mission.point1': 'Laboratorios escolares y universitarios como espacios vivos de descubrimiento.',
            'mission.point2': 'Equipamiento flexible para docentes con recursos limitados.',
            'mission.point3': 'Comunidad que comparte datos y aprendizajes sin barreras.',
            'testimonials.badge': 'Historias reales',
            'testimonials.title': 'La inspiración detrás de BioSync',
            'testimonials.quote1': '“Si unas zapatillas hacen que un niño sueñe con ser futbolista, un biorreactor accesible puede hacer que sueñe con ser científico.”',
            'testimonials.author1': 'Equipo BioSync',
            'testimonials.quote2': '“Nuestro prototipo de biorreactor educativo despierta curiosidad y acerca procesos biotecnológicos a estudiantes que nunca habían experimentado con ellos.”',
            'testimonials.author2': 'Fernanda Rojas Morales',
            'testimonials.role2': 'Bióloga • Ganadora Endowment Emprendimiento Innovador (UNAB)',
            'carousel.prev': 'Anterior',
            'carousel.next': 'Siguiente',
            'contact.title': 'Hablemos de tu próximo laboratorio',
            'contact.subtitle': 'Escríbenos para recibir demostraciones, fichas técnicas o agendar un taller en tu colegio o academia.',
            'contact.emailLabel': 'Correo',
            'contact.emailValue': 'contacto@biosync.cl',
            'contact.locationLabel': 'Base',
            'contact.locationValue': 'Santiago, Chile',
            'form.nameLabel': 'Nombre',
            'form.namePlaceholder': 'Tu nombre',
            'form.emailLabel': 'Correo',
            'form.emailPlaceholder': 'nombre@correo.com',
            'form.institutionLabel': 'Institución',
            'form.institutionPlaceholder': 'Colegio, academia o laboratorio',
            'form.messageLabel': 'Mensaje',
            'form.messagePlaceholder': 'Cuéntanos qué necesitas',
            'form.submit': 'Enviar',
            'form.success': 'Mensaje enviado',
            'footer.description': 'Fabricamos ecosistemas científicos accesibles para despertar vocaciones STEM en toda Latinoamérica.',
            'footer.home': 'Inicio',
            'footer.kits': 'Kits',
            'footer.about': 'Sobre Nosotros',
            'footer.contact': 'Contacto',
            'footer.rights': 'Todos los derechos reservados.'
        },
        en: {
            'page.title': 'BioSync | Living science for young minds',
            'meta.description': 'BioSync creates educational lab kits and bioreactors to inspire young scientists across Latin America.',
            'nav.home': 'Home',
            'nav.kits': 'Kits',
            'nav.about': 'About Us',
            'nav.contact': 'Contact',
            'nav.cta': 'Buy Now',
            'hero.badge': 'Accessible science education',
            'hero.title': 'Living science for young minds',
            'hero.subtitle': 'At BioSync we believe science should be accessible, inspiring, and close to the future innovators of our region.',
            'hero.primaryCta': 'Explore kits',
            'hero.secondaryCta': 'Our mission',
            'hero.card.title': 'Educational bioreactor',
            'hero.card.description': 'A safe and didactic prototype so students can understand biotechnology and microbiology with real classroom experiments.',
            'hero.card.feature1': 'Designed in Chile for greater access and lower cost.',
            'hero.card.feature2': 'Immediate local support and tailor-made upgrades.',
            'hero.card.feature3': '3D printed components and custom PCBs without waiting times.',
            'hero.card.button': 'Discover more',
            'products.badge': 'Our Star Kits',
            'products.title': 'Experiment, build, and share discoveries',
            'products.subtitle': 'Equipment created for schools, STEM academies, and youth labs eager to experiment without barriers.',
            'products.kit1.description': 'Introduce key cell culture concepts with guided activities for middle and high school classrooms.',
            'products.kit2.description': 'Modular components to build mini bioreactors and learn about sensors, control, and automation.',
            'products.kit3.description': 'Includes educational software for live data monitoring and collaborative experiments between schools.',
            'products.kit4.description': 'Digital platform to log experiments, share results, and grow a young science community.',
            'products.cta': 'Learn more',
            'why.badge': 'Why BioSync',
            'why.title': 'We build in Chile to democratize educational biotechnology',
            'why.subtitle': 'We transform an elitist market into an open and dynamic one thanks to additive manufacturing and local support.',
            'why.value1.title': 'Agile innovation',
            'why.value1.text': 'Fast, tailor-made improvements powered by 3D printing and custom PCBs.',
            'why.value2.title': 'Close support',
            'why.value2.text': 'Local assistance with on-demand spare parts and teacher guidance.',
            'why.value3.title': 'Real accessibility',
            'why.value3.text': 'We reduce costs by eliminating imports and waiting times.',
            'why.value4.title': 'Education first',
            'why.value4.text': 'We inspire STEM vocations with live, collaborative science experiences.',
            'mission.title': 'Our mission',
            'mission.description': 'Ensure every Latin American student has real access to scientific experimentation, sparking curiosity and STEM skills from the classroom.',
            'mission.point1': 'School and university labs as living spaces for discovery.',
            'mission.point2': 'Flexible equipment for teachers with limited resources.',
            'mission.point3': 'A community that shares data and learning without barriers.',
            'testimonials.badge': 'Real stories',
            'testimonials.title': 'The inspiration behind BioSync',
            'testimonials.quote1': '“If sneakers can make a child dream of being a footballer, an accessible bioreactor can make them dream of becoming a scientist.”',
            'testimonials.author1': 'BioSync Team',
            'testimonials.quote2': '“Our educational bioreactor prototype sparks curiosity and brings biotech processes closer to students who had never experimented with them.”',
            'testimonials.author2': 'Fernanda Rojas Morales',
            'testimonials.role2': 'Biologist • Winner Endowment Innovative Entrepreneurship (UNAB)',
            'carousel.prev': 'Previous',
            'carousel.next': 'Next',
            'contact.title': "Let's talk about your next lab",
            'contact.subtitle': 'Write to us to request demos, tech sheets, or schedule a workshop at your school or academy.',
            'contact.emailLabel': 'Email',
            'contact.emailValue': 'contacto@biosync.cl',
            'contact.locationLabel': 'HQ',
            'contact.locationValue': 'Santiago, Chile',
            'form.nameLabel': 'Name',
            'form.namePlaceholder': 'Your name',
            'form.emailLabel': 'Email',
            'form.emailPlaceholder': 'name@email.com',
            'form.institutionLabel': 'Institution',
            'form.institutionPlaceholder': 'School, academy, or lab',
            'form.messageLabel': 'Message',
            'form.messagePlaceholder': 'Tell us what you need',
            'form.submit': 'Send',
            'form.success': 'Message sent!',
            'footer.description': 'We build accessible science ecosystems to spark STEM vocations across Latin America.',
            'footer.home': 'Home',
            'footer.kits': 'Kits',
            'footer.about': 'About Us',
            'footer.contact': 'Contact',
            'footer.rights': 'All rights reserved.'
        }
    };

    let currentLang = 'es';

    const updateLanguage = (lang) => {
        const langData = translations[lang];
        if (!langData) return;

        document.documentElement.lang = lang;
        document.body.dataset.lang = lang;

        if (langData['page.title']) {
            document.title = langData['page.title'];
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && langData['meta.description']) {
            metaDescription.setAttribute('content', langData['meta.description']);
        }

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (langData[key]) {
                el.innerHTML = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.dataset.i18nPlaceholder;
            if (langData[key]) {
                el.setAttribute('placeholder', langData[key]);
            }
        });

        const submitButton = document.querySelector('.contact-form button[type="submit"]');
        if (submitButton && langData['form.submit']) {
            submitButton.textContent = langData['form.submit'];
        }

        currentLang = lang;
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));

    const handleNavScroll = () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll);

    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });

    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            contactForm.reset();
            const button = contactForm.querySelector('button[type="submit"]');
            if (!button) return;
            const successText = translations[currentLang]['form.success'] || 'Mensaje enviado';
            const defaultText = translations[currentLang]['form.submit'] || button.textContent;
            button.textContent = successText;
            button.disabled = true;
            setTimeout(() => {
                button.textContent = defaultText;
                button.disabled = false;
            }, 3000);
        });
    }

    const langButtons = document.querySelectorAll('.btn-lang');

    const syncLangButtons = (activeLang) => {
        langButtons.forEach((btn) => {
            const isActive = btn.dataset.lang === activeLang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    };

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            if (!lang || lang === currentLang) return;
            updateLanguage(lang);
            syncLangButtons(lang);
        });
    });

    updateLanguage(currentLang);
    syncLangButtons(currentLang);
});
