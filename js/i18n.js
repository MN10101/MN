// Translation map
const translations = {
    en: {
        title: "Mahmoud Najmeh | Full-Stack Engineer",
        name: {
            first: "Mahmoud",
            last: "Najmeh"
        },
        explore: "Explore",
        section: {
            about: "About Me",
            services: "Services & Pricing",
            projects: "Featured Projects",
            contact: "Get In Touch"
        },
        about: {
            description: "Dedicated Full-Stack Engineer with solid experience in OOP and a strong interest in web and AI development. Proficient in Java, Spring Boot, Python, Django, and C# .NET. Successful implementation of web projects with a focus on full-stack development (backend and frontend) and teamwork.",
            education: "Education"
        },
        education: {
            java: {
                title: "Java Developer",
                details: "- Programming fundamentals, Agile methodologies<br>- Java: OOP, Streams, Concurrency, Maven, Gradle, Testing<br>- Databases: JDBC, Advanced SQL<br>- Frameworks: Spring Boot, Hibernate, Spring Security<br>- REST APIs and Cloud: AWS, GCP"
            },
            it_specialist: {
                title: "IT Specialist for Application Development",
                details: "- OOP with Java SE, C# (.NET), Python, JavaScript, PHP<br>- Web and database development, Linux systems<br>- IT project management, business processes<br>- Mathematics and MS Office for IT Processes<br>- Technical English, communication skills"
            },
            toggle: "Show Details",
            toggleHide: "Hide Details"
        },
        skills: {
            title: "Technical Skills",
            languages: "Languages",
            frameworks: "Frameworks",
            tools: "Tools & Platforms",
            ai: "AI & Machine Learning"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "C#",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "Integration Tests",
            mockito: "Mockito",
            react: "React",
            rest_api: "REST API",
            ai: "AI",
            nlp: "NLP",
            django: "Django",
            role_auth: "Role-based Auth",
            pdf_export: "PDF Export",
            ui_validation: "UI Validation",
            tensorflow: "TensorFlow",
            computer_vision: "Computer Vision",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            database: "Database",
            canvas: "Canvas",
            frontend: "Frontend",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "Machine Learning",
            cv: "Computer Vision",
            "python-ai": "Python AI Libraries",
        },
        title: {
            "java-backend": "JAVA DEVELOPER",
            "full-stack": "FULL-STACK ENGINEER",
            ai: "AI ENTHUSIAST"
        },
        services: {
            subtitle: "Professional development services tailored to your business needs",
            note: "<strong>Note:</strong> All prices are estimates. Final pricing depends on project scope and requirements. Contact me for a personalized quote tailored to your specific needs.",
            cta: "Get Started",
            backend: {
                title: "Backend Development",
                price: "€2,500+",
                features: [
                    "Spring Boot REST API development",
                    "Database design & optimization",
                    "Authentication & security implementation",
                    "Microservices architecture",
                    "API documentation & testing",
                    "Deployment to cloud platforms"
                ]
            },
            fullstack: {
                title: "Full-Stack Development",
                price: "€4,000+",
                features: [
                    "Complete web application development",
                    "Spring Boot backend + React frontend",
                    "Responsive UI/UX design",
                    "Database integration",
                    "User authentication system",
                    "Admin dashboard"
                ]
            },
            api: {
                title: "API Development",
                price: "€1,800+",
                features: [
                    "Custom REST API development",
                    "Database integration (PostgreSQL/MySQL)",
                    "JWT authentication",
                    "API documentation with Swagger/OpenAPI",
                    "Performance optimization",
                    "Deployment ready"
                ]
            },
            website: {
                title: "Business Website Package",
                price: "€1,500-€3,000",
                features: [
                    "Professional portfolio website",
                    "Contact form with email notifications",
                    "Mobile responsive design",
                    "Basic SEO optimization",
                    "Content management system",
                    "Social media integration"
                ]
            },
            ai: {
                title: "AI Integration",
                price: "€3,500+",
                features: [
                    "Text processing/summarization APIs",
                    "Image analysis with TensorFlow",
                    "Chatbot integration",
                    "Machine learning model deployment",
                    "Data visualization dashboards",
                    "Custom AI solutions"
                ]
            },
            maintenance: {
                title: "Maintenance & Support",
                price: "€500/month",
                features: [
                    "Regular software updates",
                    "Bug fixes and troubleshooting",
                    "Performance monitoring",
                    "Security patches",
                    "Database maintenance",
                    "24/7 emergency support"
                ]
            }
        },
        project: {
            missing: {
                title: "Missing Person Alert System FullStack",
                description: "Police tool developed with Spring Boot, SwiftUI & Jetpack Compose featuring Firebase push notifications, geolocation tracking, and admin panel.",
                duration: "6 Months"
            },
            banking: {
                title: "Banking System FullStack",
                description: "Fullstack banking application with email/IP tracking, multi-currency support, transaction processing, and comprehensive testing with Mockito.",
                duration: "6 Months"
            },
            ai_text: {
                title: "AI Text Summarizer FullStack",
                description: "Multilingual text summarization application powered by Spring Boot REST API with advanced NLP capabilities.",
                duration: "2 Months"
            },
            student: {
                title: "Student Portal FullStack",
                description: "Comprehensive educational platform featuring role-based access control, grading system, PDF export functionality, and online testing.",
                duration: "4 Months"
            },
            face_analysis: {
                title: "AI Face Analysis",
                description: "Image classification system built with Django and TensorFlow, featuring automated processing and custom GUI interface.",
                duration: "4 Months"
            },
            medical_diagnosis: {
                title: "AI Medical Diagnosis System",
                description: "A machine learning-based desktop application built with .NET and ML.NET that predicts potential diseases from user-provided symptoms. Features include natural language symptom input, disease prediction with confidence score, and a WPF-based user-friendly interface.",
                duration: "5 Months"
            },
            view: "View Project"
        },
        contact: {
            info: "Contact Information",
            location: "Berlin, Germany",
            video: "Video About Me",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Your Message",
            submit: "Send Message"
        },
        footer: {
            copyright: "© 2025 Mahmoud Najmeh. All rights reserved."
        },
        thank_you: {
            title: "Thank You",
            heading: "Thank You!",
            message: "Your message has been sent successfully. I'll get back to you soon.",
            back: "Back to Home"
        }
    },
    de: {
        title: "Mahmoud Najmeh | Full-Stack Engineer",
        name: {
            first: "Mahmoud",
            last: "Najmeh"
        },
        explore: "Entdecken",
        section: {
            about: "Über mich",
            services: "Dienste & Preise",
            projects: "Ausgewählte Projekte",
            contact: "Kontakt aufnehmen"
        },
        about: {
            description: "Engagierter Full-Stack-Ingenieur mit fundierter Erfahrung in objektorientierter Programmierung und großem Interesse an Web- und KI-Entwicklung. Versiert in Java, Spring Boot, Python, Django und C# .NET. Erfolgreiche Umsetzung von Webprojekten mit Fokus auf Full-Stack-Entwicklung (Backend und Frontend) und Teamarbeit.",
            education: "Ausbildung"
        },
        education: {
            java: {
                title: "Java Entwickler",
                details: "- Programmiergrundlagen, agile Methoden<br>- Java: OOP, Streams, Concurrency, Maven, Gradle, Testing<br>- Datenbanken: JDBC, fortgeschrittenes SQL<br>- Frameworks: Spring Boot, Hibernate, Spring Security<br>- REST APIs und Cloud: AWS, GCP"
            },
            it_specialist: {
                title: "Fachinformatiker für Anwendungsentwicklung",
                details: "- OOP mit Java SE, C# (.NET), Python, JavaScript, PHP<br>- Web- und Datenbankentwicklung, Linux-Systeme<br>- IT-Projektmanagement, Geschäftsprozesse<br>- Mathematik und MS Office für IT-Prozesse<br>- Technisches Englisch, Kommunikationsfähigkeiten"
            },
            toggle: "Details anzeigen",
            toggleHide: "Details ausblenden"
        },
        skills: {
            title: "Technische Fähigkeiten",
            languages: "Programmiersprachen",
            frameworks: "Frameworks",
            tools: "Tools & Plattformen",
            ai: "KI & Machine Learning"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "C#",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "Integrationstests",
            mockito: "Mockito",
            react: "React",
            rest_api: "REST API",
            ai: "KI",
            nlp: "NLP",
            django: "Django",
            role_auth: "Rollenbasierte Autorisierung",
            pdf_export: "PDF-Export",
            ui_validation: "UI-Validierung",
            tensorflow: "TensorFlow",
            computer_vision: "Computer Vision",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            canvas: "Canvas",
            frontend: "Frontend",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "Machine Learning",
            cv: "Computer Vision",
            "python-ai": "Python AI-Bibliotheken"
        },
        title: {
            "java-backend": "JAVA ENTWICKLER",
            "full-stack": "FULL-STACK INGENIEUR",
            ai: "KI-BEGEISTERTER"
        },
        services: {
            subtitle: "Professionelle Entwicklungsdienste, angepasst an Ihre Geschäftsanforderungen",
            note: "<strong>Hinweis:</strong> Alle Preise sind Schätzungen. Die endgültigen Kosten hängen vom Projektumfang und den Anforderungen ab. Kontaktieren Sie mich für ein maßgeschneidertes Angebot, das auf Ihre spezifischen Bedürfnisse zugeschnitten ist.",
            cta: "Loslegen",
            backend: {
                title: "Backend-Entwicklung",
                price: "€2.500+",
                features: [
                    "Entwicklung von Spring Boot REST APIs",
                    "Datenbankdesign & -optimierung",
                    "Authentifizierung & Sicherheitsumsetzung",
                    "Microservices-Architektur",
                    "API-Dokumentation & -Tests",
                    "Bereitstellung auf Cloud-Plattformen"
                ]
            },
            fullstack: {
                title: "Full-Stack-Entwicklung",
                price: "€4.000+",
                features: [
                    "Komplette Webapplikationsentwicklung",
                    "Spring Boot Backend + React Frontend",
                    "Responsive UI/UX-Design",
                    "Datenbankintegration",
                    "Benutzerauthentifizierungssystem",
                    "Admin-Dashboard"
                ]
            },
            api: {
                title: "API-Entwicklung",
                price: "€1.800+",
                features: [
                    "Benutzerdefinierte REST-API-Entwicklung",
                    "Datenbankintegration (PostgreSQL/MySQL)",
                    "JWT-Authentifizierung",
                    "API-Dokumentation mit Swagger/OpenAPI",
                    "Leistungsoptimierung",
                    "Bereitstellungsfertig"
                ]
            },
            website: {
                title: "Business-Website-Paket",
                price: "€1.500-€3.000",
                features: [
                    "Professionelle Portfolio-Website",
                    "Kontaktformular mit E-Mail-Benachrichtigungen",
                    "Mobil responsives Design",
                    "Grundlegende SEO-Optimierung",
                    "Content-Management-System",
                    "Soziale Medien-Integration"
                ]
            },
            ai: {
                title: "KI-Integration",
                price: "€3.500+",
                features: [
                    "Textverarbeitungs-/Zusammenfassungs-APIs",
                    "Bildanalyse mit TensorFlow",
                    "Chatbot-Integration",
                    "Bereitstellung von Machine-Learning-Modellen",
                    "Datenvisualisierungs-Dashboards",
                    "Benutzerdefinierte KI-Lösungen"
                ]
            },
            maintenance: {
                title: "Wartung & Support",
                price: "€500/Monat",
                features: [
                    "Regelmäßige Software-Updates",
                    "Fehlerbehebung und Troubleshooting",
                    "Leistungsüberwachung",
                    "Sicherheitsupdates",
                    "Datenbankwartung",
                    "24/7 Notfallunterstützung"
                ]
            }
        },
        project: {
            missing: {
                title: "Vermissten-Alarmsystem FullStack",
                description: "Polizeitool entwickelt mit Spring Boot, SwiftUI & Jetpack Compose mit Firebase-Push-Benachrichtigungen, Geolokalisierung und Admin-Panel.",
                duration: "6 Monate"
            },
            banking: {
                title: "Bankensystem FullStack",
                description: "Full-Stack-Bankanwendung mit E-Mail/IP-Tracking, Unterstützung für mehrere Währungen, Transaktionsverarbeitung und umfassenden Tests mit Mockito.",
                duration: "6 Monate"
            },
            ai_text: {
                title: "KI-Textzusammenfasser FullStack",
                description: "Mehrsprachige Textzusammenfassungsanwendung, unterstützt durch Spring Boot REST API mit fortschrittlichen NLP-Fähigkeiten.",
                duration: "2 Monate"
            },
            student: {
                title: "Studentenportal FullStack",
                description: "Umfassende Bildungsplattform mit rollenbasierter Zugriffskontrolle, Notensystem, PDF-Exportfunktion und Online-Tests.",
                duration: "4 Monate"
            },
            face_analysis: {
                title: "KI-Gesichtsanalyse",
                description: "Bildklassifikationssystem, entwickelt mit Django und TensorFlow, mit automatisierter Verarbeitung und benutzerdefiniertem GUI.",
                duration: "4 Monate"
            },
            medical_diagnosis: {
                title: "KI-Medizinisches Diagnosesystem",
                description: "Eine auf maschinellem Lernen basierende Desktop-Anwendung, entwickelt mit .NET und ML.NET, die potenzielle Krankheiten aus benutzerdefinierten Symptomen vorhersagt. Funktionen umfassen Eingabe von Symptomen in natürlicher Sprache, Krankheitsvorhersage mit Konfidenzwert und eine benutzerfreundliche WPF-basierte Oberfläche.",
                duration: "5 Monate"
            },
            view: "Projekt ansehen"
        },
        contact: {
            info: "Kontaktinformationen",
            location: "Berlin, Deutschland",
            video: "Video über mich",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Ihr Name",
            email: "Ihre E-Mail",
            subject: "Betreff",
            message: "Ihre Nachricht",
            submit: "Nachricht senden"
        },
        footer: {
            copyright: "© 2025 Mahmoud Najmeh. Alle Rechte vorbehalten."
        },
        thank_you: {
            title: "Dankeschön",
            heading: "Vielen Dank!",
            message: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen.",
            back: "Zurück zur Startseite"
        }
    },
    pl: {
        title: "Mahmoud Najmeh | Full-Stack Engineer",
        name: {
            first: "Mahmoud",
            last: "Najmeh"
        },
        explore: "Odkrywaj",
        section: {
            about: "O mnie",
            services: "Usługi i Ceny",
            projects: "Wybrane projekty",
            contact: "Skontaktuj się"
        },
        about: {
            description: "Zaangażowany inżynier Full-Stack z solidnym doświadczeniem w programowaniu obiektowym i dużym zainteresowaniem rozwojem aplikacji webowych oraz sztuczną inteligencją. Biegły w Java, Spring Boot, Python, Django oraz C# .NET. Pomyślna realizacja projektów webowych z naciskiem na rozwój full-stack (backend i frontend) oraz pracę zespołową.",
            education: "Wykształcenie"
        },
        education: {
            java: {
                title: "Programista Java",
                details: "- Podstawy programowania, metodologie Agile<br>- Java: OOP, Strumienie, Współbieżność, Maven, Gradle, Testowanie<br>- Bazy danych: JDBC, Zaawansowany SQL<br>- Frameworki: Spring Boot, Hibernate, Spring Security<br>- API REST i Chmura: AWS, GCP"
            },
            it_specialist: {
                title: "Specjalista IT ds. Rozwoju Aplikacji",
                details: "- OOP z Java SE, C# (.NET), Python, JavaScript, PHP<br>- Rozwój aplikacji webowych i baz danych, systemy Linux<br>- Zarządzanie projektami IT, procesy biznesowe<br>- Matematyka i MS Office w procesach IT<br>- Angielski techniczny, umiejętności komunikacyjne"
            },
            toggle: "Pokaż szczegóły",
            toggleHide: "Ukryj szczegóły"
        },
        skills: {
            title: "Umiejętności techniczne",
            languages: "Języki programowania",
            frameworks: "Frameworki",
            tools: "Narzędzia i platformy",
            ai: "SI i Uczenie Maszynowe"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "C#",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "Testy integracyjne",
            mockito: "Mockito",
            react: "React",
            rest_api: "API REST",
            ai: "SI",
            nlp: "Przetwarzanie języka naturalnego",
            django: "Django",
            role_auth: "Autoryzacja oparta na rolach",
            pdf_export: "Eksport PDF",
            ui_validation: "Walidacja interfejsu użytkownika",
            tensorflow: "TensorFlow",
            computer_vision: "Wizja komputerowa",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            canvas: "Canvas",
            frontend: "Frontend",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "Uczenie Maszynowe",
            cv: "Wizja Komputerowa",
            "python-ai": "Biblioteki AI Pythona"
        },
        title: {
            "java-backend": "PROGRAMISTA JAVA",
            "full-stack": "INŻYNIER FULL-STACK",
            ai: "ENTUZJASTA SZTUCZNEJ INTELIGENCJI"
        },
        services: {
            subtitle: "Profesjonalne usługi programistyczne dostosowane do potrzeb Twojej firmy",
            note: "<strong>Uwaga:</strong> Wszystkie ceny są szacunkowe. Ostateczna cena zależy od zakresu projektu i wymagań. Skontaktuj się ze mną, aby uzyskać spersonalizowaną ofertę dostosowaną do Twoich specyficznych potrzeb.",
            cta: "Zacznij",
            backend: {
                title: "Rozwój Backend",
                price: "€2 500+",
                features: [
                    "Rozwój API REST Spring Boot",
                    "Projektowanie i optymalizacja bazy danych",
                    "Implementacja uwierzytelniania i bezpieczeństwa",
                    "Architektura mikrousług",
                    "Dokumentacja i testy API",
                    "Wdrożenie na platformach chmurowych"
                ]
            },
            fullstack: {
                title: "Rozwój Full-Stack",
                price: "€4 000+",
                features: [
                    "Kompletny rozwój aplikacji webowych",
                    "Backend Spring Boot + frontend React",
                    "Responsywny design UI/UX",
                    "Integracja z bazą danych",
                    "System uwierzytelniania użytkowników",
                    "Panel administracyjny"
                ]
            },
            api: {
                title: "Rozwój API",
                price: "€1 800+",
                features: [
                    "Niestandardowy rozwój API REST",
                    "Integracja z bazą danych (PostgreSQL/MySQL)",
                    "Uwierzytelnianie JWT",
                    "Dokumentacja API z Swagger/OpenAPI",
                    "Optymalizacja wydajności",
                    "Gotowy do wdrożenia"
                ]
            },
            website: {
                title: "Pakiet strony biznesowej",
                price: "€1 500-€3 000",
                features: [
                    "Profesjonalna strona portfolio",
                    "Formularz kontaktowy z powiadomieniami e-mail",
                    "Responsywny design mobilny",
                    "Podstawowa optymalizacja SEO",
                    "System zarządzania treścią",
                    "Integracja z mediami społecznościowymi"
                ]
            },
            ai: {
                title: "Integracja AI",
                price: "€3 500+",
                features: [
                    "API przetwarzania/zusammenfassungs tekstu",
                    "Analiza obrazów z TensorFlow",
                    "Integracja chatbotów",
                    "Wdrożenie modeli uczenia maszynowego",
                    "Pulpity danych wizualizacyjnych",
                    "Niestandardowe rozwiązania AI"
                ]
            },
            maintenance: {
                title: "Utrzymanie i wsparcie",
                price: "€500/miesiąc",
                features: [
                    "Regularne aktualizacje oprogramowania",
                    "Naprawa błędów i rozwiązywanie problemów",
                    "Monitorowanie wydajności",
                    "Poprawki bezpieczeństwa",
                    "Utrzymanie bazy danych",
                    "Wsparcie awaryjne 24/7"
                ]
            }
        },
        project: {
            missing: {
                title: "System Alarmowy dla Osób Zaginionych FullStack",
                description: "Narzędzie policyjne opracowane z użyciem Spring Boot, SwiftUI i Jetpack Compose, z powiadomieniami push Firebase, śledzeniem geolokalizacji i panelem administracyjnym.",
                duration: "6 miesięcy"
            },
            banking: {
                title: "System Bankowy FullStack",
                description: "Aplikacja bankowa full-stack z śledzeniem e-mail/IP, obsługą wielu walut, przetwarzaniem transakcji i kompleksowymi testami z użyciem Mockito.",
                duration: "6 miesięcy"
            },
            ai_text: {
                title: "Summator Tekstu AI FullStack",
                description: "Wielojęzyczna aplikacja do podsumowywania tekstu, oparta na API REST Spring Boot z zaawansowanymi możliwościami przetwarzania języka naturalnego.",
                duration: "2 miesiące"
            },
            student: {
                title: "Portal Studencki FullStack",
                description: "Kompleksowa platforma edukacyjna z kontrolą dostępu opartą na rolach, systemem ocen, funkcją eksportu PDF i testami online.",
                duration: "4 miesiące"
            },
            face_analysis: {
                title: "Analiza Twarzy AI",
                description: "System klasyfikacji obrazów zbudowany z użyciem Django i TensorFlow, z automatycznym przetwarzaniem i niestandardowym interfejsem GUI.",
                duration: "4 miesiące"
            },
            medical_diagnosis: {
                title: "System Diagnostyki Medycznej z SI",
                description: "Aplikacja desktopowa oparta na uczeniu maszynowym, zbudowana z użyciem .NET i ML.NET, przewidująca potencjalne choroby na podstawie objawów podanych przez użytkownika. Funkcje obejmują wprowadzanie objawów w języku naturalnym, przewidywanie chorób z oceną pewności oraz przyjazny dla użytkownika interfejs oparty na WPF.",
                duration: "5 miesiące"
            },
            view: "Zobacz projekt"
        },
        contact: {
            info: "Informacje kontaktowe",
            location: "Berlin, Niemcy",
            video: "Wideo o mnie",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Twoje imię",
            email: "Twój e-mail",
            subject: "Temat",
            message: "Twoja wiadomość",
            submit: "Wyślij wiadomość"
        },
        footer: {
            copyright: "© 2025 Mahmoud Najmeh. Wszelkie prawa zastrzeżone."
        },
        thank_you: {
            title: "Dziękujemy",
            heading: "Dziękujemy!",
            message: "Twoja wiadomość została pomyślnie wysłana. Odezwę się wkrótce.",
            back: "Powrót do strony głównej"
        }
    },
    fr: {
        title: "Mahmoud Najmeh | Full-Stack Engineer",
        name: {
            first: "Mahmoud",
            last: "Najmeh"
        },
        explore: "Explorer",
        section: {
            about: "À propos",
            services: "Services & Tarifs",
            projects: "Projets phares",
            contact: "Me contacter"
        },
        about: {
            description: "Ingénieur Full-Stack dévoué avec une solide expérience en programmation orientée objet et un vif intérêt pour le développement web et l'IA. Maîtrise de Java, Spring Boot, Python, Django et C# .NET. Mise en œuvre réussie de projets web avec un accent sur le développement full-stack (backend et frontend) et le travail d'équipe.",
        },
        education: {
            java: {
                title: "Développeur Java",
                details: "- Fondamentaux de la programmation, méthodologies Agiles<br>- Java : POO, Streams, Concurrence, Maven, Gradle, Tests<br>- Bases de données : JDBC, SQL avancé<br>- Frameworks : Spring Boot, Hibernate, Spring Security<br>- API REST et Cloud : AWS, GCP"
            },
            it_specialist: {
                title: "Spécialiste IT en développement d'applications",
                details: "- POO avec Java SE, C# (.NET), Python, JavaScript, PHP<br>- Développement web et bases de données, systèmes Linux<br>- Gestion de projets IT, processus métier<br>- Mathématiques et MS Office pour les processus IT<br>- Anglais technique, compétences en communication"
            },
            toggle: "Afficher les détails",
            toggleHide: "Masquer les détails"
        },
        skills: {
            title: "Compétences techniques",
            languages: "Langages",
            frameworks: "Frameworks",
            tools: "Outils & Plateformes",
            ai: "IA & Apprentissage Automatique"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "C#",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "Tests d'intégration",
            mockito: "Mockito",
            react: "React",
            rest_api: "API REST",
            ai: "IA",
            nlp: "Traitement du langage naturel",
            django: "Django",
            role_auth: "Authentification basée sur les rôles",
            pdf_export: "Export PDF",
            ui_validation: "Validation d'interface utilisateur",
            tensorflow: "TensorFlow",
            computer_vision: "Vision par ordinateur",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            canvas: "Canvas",
            frontend: "Frontend",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "Apprentissage Automatique",
            cv: "Vision par Ordinateur",
            "python-ai": "Bibliothèques IA Python"
        },
        title: {
            "java-backend": "DÉVELOPPEUR JAVA",
            "full-stack": "INGÉNIEUR FULL-STACK",
            ai: "ENTHOUSIASTE D'IA"
        },
        services: {
            subtitle: "Services de développement professionnels adaptés aux besoins de votre entreprise",
            note: "<strong>Remarque :</strong> Tous les prix sont des estimations. Le prix final dépend de la portée et des exigences du projet. Contactez-moi pour un devis personnalisé adapté à vos besoins spécifiques.",
            cta: "Commencer",
            backend: {
                title: "Développement Backend",
                price: "€2 500+",
                features: [
                    "Développement d'API REST Spring Boot",
                    "Conception et optimisation de bases de données",
                    "Mise en œuvre d'authentification et de sécurité",
                    "Architecture de microservices",
                    "Documentation et tests d'API",
                    "Déploiement sur des plateformes cloud"
                ]
            },
            fullstack: {
                title: "Développement Full-Stack",
                price: "€4 000+",
                features: [
                    "Développement complet d'applications web",
                    "Backend Spring Boot + frontend React",
                    "Design UI/UX responsive",
                    "Intégration de base de données",
                    "Système d'authentification des utilisateurs",
                    "Tableau de bord administrateur"
                ]
            },
            api: {
                title: "Développement d'API",
                price: "€1 800+",
                features: [
                    "Développement d'API REST personnalisées",
                    "Intégration de base de données (PostgreSQL/MySQL)",
                    "Authentification JWT",
                    "Documentation d'API avec Swagger/OpenAPI",
                    "Optimisation des performances",
                    "Prêt pour le déploiement"
                ]
            },
            website: {
                title: "Forfait site web professionnel",
                price: "€1 500-€3 000",
                features: [
                    "Site portfolio professionnel",
                    "Formulaire de contact avec notifications par email",
                    "Design responsive mobile",
                    "Optimisation SEO de base",
                    "Système de gestion de contenu",
                    "Intégration des réseaux sociaux"
                ]
            },
            ai: {
                title: "Intégration d'IA",
                price: "€3 500+",
                features: [
                    "API de traitement/résumé de texte",
                    "Analyse d'images avec TensorFlow",
                    "Intégration de chatbots",
                    "Déploiement de modèles d'apprentissage automatique",
                    "Tableaux de bord de visualisation de données",
                    "Solutions IA personnalisées"
                ]
            },
            maintenance: {
                title: "Maintenance et support",
                price: "€500/mois",
                features: [
                    "Mises à jour logicielles régulières",
                    "Corrections de bugs et dépannage",
                    "Surveillance des performances",
                    "Correctifs de sécurité",
                    "Maintenance de la base de données",
                    "Support d'urgence 24/7"
                ]
            }
        },
        project: {
            missing: {
                title: "Système d'alerte pour personnes disparues FullStack",
                description: "Outil policier développé avec Spring Boot, SwiftUI et Jetpack Compose, incluant des notifications push Firebase, un suivi géolocalisé et un panneau d'administration.",
                duration: "6 mois"
            },
            banking: {
                title: "Système bancaire FullStack",
                description: "Application bancaire full-stack avec suivi email/IP, prise en charge de plusieurs devises, traitement des transactions et tests complets avec Mockito.",
                duration: "6 mois"
            },
            ai_text: {
                title: "Résumeur de texte IA FullStack",
                description: "Application de résumé de texte multilingue, alimentée par une API REST Spring Boot avec des capacités avancées de traitement du langage naturel.",
                duration: "2 mois"
            },
            student: {
                title: "Portail étudiant FullStack",
                description: "Plateforme éducative complète avec contrôle d'accès basé sur les rôles, système de notation, fonctionnalité d'export PDF et tests en ligne.",
                duration: "4 mois"
            },
            face_analysis: {
                title: "Analyse faciale IA",
                description: "Système de classification d'images construit avec Django et TensorFlow, avec traitement automatisé et interface graphique personnalisée.",
                duration: "4 mois"
            },
            medical_diagnosis: {
                title: "Système de diagnostic médical IA",
                description: "Application de bureau basée sur l'apprentissage automatique, construite avec .NET et ML.NET, qui prédit les maladies potentielles à partir des symptômes fournis par l'utilisateur. Les fonctionnalités incluent la saisie des symptômes en langage naturel, la prédiction des maladies avec un score de confiance et une interface conviviale basée sur WPF.",
                duration: "5 mois"
            },
            view: "Voir le projet"
        },
        contact: {
            info: "Informations de contact",
            location: "Berlin, Allemagne",
            video: "Vidéo à propos de moi",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Votre nom",
            email: "Votre email",
            subject: "Sujet",
            message: "Votre message",
            submit: "Envoyer le message"
        },
        footer: {
            copyright: "© 2025 Mahmoud Najmeh. Tous droits réservés."
        },
        thank_you: {
            title: "Merci",
            heading: "Merci !",
            message: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
            back: "Retour à l'accueil"
        }
    },
    tr: {
        title: "Mahmoud Najmeh | Full-Stack Mühendisi",
        name: {
            first: "Mahmoud",
            last: "Najmeh"
        },
        explore: "Keşfet",
        section: {
            about: "Hakkımda",
            services: "Hizmetler ve Fiyatlar",
            projects: "Öne Çıkan Projeler",
            contact: "İletişime Geç"
        },
        about: {
            description: "Nesne tabanlı programlamada sağlam deneyime ve web ile yapay zeka geliştirmeye güçlü bir ilgiye sahip kararlı bir Full-Stack Mühendisi. Java, Spring Boot, Python, Django ve C# .NET konusunda yetkin. Full-stack geliştirme (backend ve frontend) ve ekip çalışmasına odaklanarak web projelerinin başarılı bir şekilde uygulanması.",
            education: "Eğitim"
        },
        education: {
            java: {
                title: "Java Geliştirici",
                details: "- Programlama temelleri, Çevik metodolojiler<br>- Java: OOP, Akışlar, Eşzamanlılık, Maven, Gradle, Test<br>- Veritabanları: JDBC, Gelişmiş SQL<br>- Çerçeveler: Spring Boot, Hibernate, Spring Security<br>- REST API'leri ve Bulut: AWS, GCP"
            },
            it_specialist: {
                title: "Uygulama Geliştirme için BT Uzmanı",
                details: "- Java SE, C# (.NET), Python, JavaScript, PHP ile OOP<br>- Web ve veritabanı geliştirme, Linux sistemleri<br>- BT proje yönetimi, iş süreçleri<br>- BT süreçleri için Matematik ve MS Office<br>- Teknik İngilizce, iletişim becerileri"
            },
            toggle: "Detayları Göster",
            toggleHide: "Detayları Gizle"
        },
        skills: {
            title: "Teknik Beceriler",
            languages: "Programlama Dilleri",
            frameworks: "Çerçeveler",
            tools: "Araçlar ve Platformlar",
            ai: "Yapay Zeka ve Makine Öğrenimi"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "C#",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "Entegrasyon Testleri",
            mockito: "Mockito",
            react: "React",
            rest_api: "REST API",
            ai: "Yapay Zeka",
            nlp: "Doğal Dil İşleme",
            django: "Django",
            role_auth: "Rol Tabanlı Yetkilendirme",
            pdf_export: "PDF Dışa Aktarma",
            ui_validation: "Kullanıcı Arayüzü Doğrulama",
            tensorflow: "TensorFlow",
            computer_vision: "Bilgisayarlı Görü",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            canvas: "Canvas",
            frontend: "Ön Uç",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "Makine Öğrenimi",
            cv: "Bilgisayarlı Görü",
            "python-ai": "Python AI Kütüphaneleri"
        },
        title: {
            "java-backend": "JAVA GELİŞTİRİCİ",
            "full-stack": "FULL-STACK MÜHENDİSİ",
            ai: "YAPAY ZEKA TUTKUNU"
        },
        services: {
            subtitle: "İş ihtiyaçlarınıza göre uyarlanmış profesyonel geliştirme hizmetleri",
            note: "<strong>Not:</strong> Tüm fiyatlar tahmini. Nihai fiyat, proje kapsamına ve gereksinimlere bağlıdır. Spesifik ihtiyaçlarınıza uygun kişiselleştirilmiş bir teklif için benimle iletişime geçin.",
            cta: "Başla",
            backend: {
                title: "Backend Geliştirme",
                price: "€2.500+",
                features: [
                    "Spring Boot REST API geliştirme",
                    "Veritabanı tasarımı ve optimizasyonu",
                    "Kimlik doğrulama ve güvenlik uygulaması",
                    "Mikro servis mimarisi",
                    "API dokümantasyonu ve testleri",
                    "Bulut platformlarına dağıtım"
                ]
            },
            fullstack: {
                title: "Full Stack Geliştirme",
                price: "€4.000+",
                features: [
                    "Tam web uygulaması geliştirme",
                    "Spring Boot backend + React frontend",
                    "Duyarlı UI/UX tasarımı",
                    "Veritabanı entegrasyonu",
                    "Kullanıcı kimlik doğrulama sistemi",
                    "Yönetici paneli"
                ]
            },
            api: {
                title: "API Geliştirme",
                price: "€1.800+",
                features: [
                    "Özel REST API geliştirme",
                    "Veritabanı entegrasyonu (PostgreSQL/MySQL)",
                    "JWT kimlik doğrulama",
                    "Swagger/OpenAPI ile API dokümantasyonu",
                    "Performans optimizasyonu",
                    "Dağıtım için hazır"
                ]
            },
            website: {
                title: "İş Web Sitesi Paketi",
                price: "€1.500-€3.000",
                features: [
                    "Profesyonel portföy web sitesi",
                    "E-posta bildirimleriyle iletişim formu",
                    "Mobil duyarlı tasarım",
                    "Temel SEO optimizasyonu",
                    "İçerik yönetim sistemi",
                    "Sosyal medya entegrasyonu"
                ]
            },
            ai: {
                title: "AI Entegrasyonu",
                price: "€3.500+",
                features: [
                    "Metin işleme/özetleme API'leri",
                    "TensorFlow ile görüntü analizi",
                    "Sohbet botu entegrasyonu",
                    "Makine öğrenimi model dağıtımı",
                    "Veri görselleştirme panoları",
                    "Özel AI çözümleri"
                ]
            },
            maintenance: {
                title: "Bakım ve Destek",
                price: "€500/ay",
                features: [
                    "Düzenli yazılım güncellemeleri",
                    "Hata düzeltmeleri ve sorun giderme",
                    "Performans izleme",
                    "Güvenlik yamaları",
                    "Veritabanı bakımı",
                    "24/7 acil destek"
                ]
            }
        },
        project: {
            missing: {
                title: "Kayıp Kişi Uyarı Sistemi Full Stack",
                description: "Spring Boot, SwiftUI ve Jetpack Compose ile geliştirilen polis aracı, Firebase push bildirimleri, coğrafi konum takibi ve yönetici paneli içerir.",
                duration: "6 Ay"
            },
            banking: {
                title: "Bankacılık Sistemi Full Stack",
                description: "E-posta/IP takibi, çoklu para birimi desteği, işlem işleme ve Mockito ile kapsamlı testler içeren tam yığın bankacılık uygulaması.",
                duration: "6 Ay"
            },
            ai_text: {
                title: "Yapay Zeka Metin Özetleyici Full Stack",
                description: "Spring Boot REST API ile desteklenen, gelişmiş doğal dil işleme yeteneklerine sahip çok dilli metin özetleme uygulaması.",
                duration: "2 Ay"
            },
            student: {
                title: "Öğrenci Portalı Full Stack",
                description: "Rol tabanlı erişim kontrolü, notlandırma sistemi, PDF dışa aktarma işlevi ve çevrimiçi testler içeren kapsamlı bir eğitim platformu.",
                duration: "4 Ay"
            },
            face_analysis: {
                title: "Yapay Zeka Yüz Analizi",
                description: "Django ve TensorFlow ile geliştirilen, otomatik işleme ve özel GUI arayüzü içeren görüntü sınıflandırma sistemi.",
                duration: "4 Ay"
            },
            medical_diagnosis: {
                title: "Yapay Zeka Tıbbi Teşhis Sistemi",
                description: "Kullanıcı tarafından sağlanan semptomlardan potansiyel hastalıkları tahmin eden, .NET ve ML.NET ile geliştirilmiş makine öğrenimi tabanlı bir masaüstü uygulaması. Özellikler arasında doğal dilde semptom girişi, güven skoru ile hastalık tahmini ve WPF tabanlı kullanıcı dostu bir arayüz bulunur.",
                duration: "5 Ay"
            },
            view: "Projeyi Görüntüle"
        },
        contact: {
            info: "İletişim Bilgileri",
            location: "Berlin, Almanya",
            video: "Hakkımda Video",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Adınız",
            email: "E-postanız",
            subject: "Konu",
            message: "Mesajınız",
            submit: "Mesaj Gönder"
        },
        footer: {
            copyright: "© 2025 Mahmoud Najmeh. Tüm hakları saklıdır."
        },
        thank_you: {
            title: "Teşekkürler",
            heading: "Teşekkürler!",
            message: "Mesajınız başarıyla gönderildi. Yakında size geri döneceğim.",
            back: "Ana Sayfaya Geri Dön"
        }
    },
        ar: {
        title: "محمود نجمة | مهندس برمجيات فول ستاك",
        name: {
            first: "محمود",
            last: "نجمة"
        },
        explore: "استكشف",
        section: {
            about: "عني",
            services: "الخدمات والأسعار",
            projects: "المشاريع المميزة",
            contact: "تواصل معي"
        },
        about: {
            description: "مهندس برمجيات فول ستاك متفانٍ يتمتع بخبرة قوية في البرمجة الكائنية واهتمام كبير بتطوير الويب والذكاء الاصطناعي. يتقن Java، Spring Boot، Python، Django، وC# .NET. تنفيذ ناجح لمشاريع الويب مع التركيز على تطوير فول ستاك (الواجهة الخلفية والأمامية) والعمل الجماعي.",
            education: "التعليم"
        },
        education: {
            java: {
                title: "مطور Java",
                details: "- أساسيات البرمجة، منهجيات Agile<br>- Java: البرمجة الكائنية، التدفقات، التزامن، Maven، Gradle، الاختبارات<br>- قواعد البيانات: JDBC، SQL متقدم<br>- إطارات العمل: Spring Boot، Hibernate، Spring Security<br>- واجهات برمجة التطبيقات REST والسحابة: AWS، GCP"
            },
            it_specialist: {
                title: "اخصائي تكنولوجيا المعلومات في مجال تطوير التطبيقات",
                details: "- البرمجة الكائنية باستخدام Java SE، C# (.NET)، Python، JavaScript، PHP<br>- تطوير الويب وقواعد البيانات، أنظمة Linux<br>- إدارة مشاريع تقنية المعلومات، العمليات التجارية<br>- الرياضيات وMS Office لعمليات تقنية المعلومات<br>- الإنجليزية التقنية، مهارات التواصل"
            },
            toggle: "إظهار التفاصيل",
            toggleHide: "إخفاء التفاصيل"
        },
        skills: {
            title: "المهارات التقنية",
            languages: "لغات البرمجة",
            frameworks: "إطارات العمل",
            tools: "الأدوات والمنصات",
            ai: "الذكاء الاصطناعي والتعلم الآلي"
        },
        tech: {
            java: "Java",
            python: "Python",
            csharp: "#C",
            javascript: "JavaScript",
            sql: "SQL",
            spring: "Spring Boot",
            swiftui: "SwiftUI",
            jetpack: "Jetpack Compose",
            firebase: "Firebase",
            integration: "اختبارات التكامل",
            mockito: "Mockito",
            react: "React",
            rest_api: "REST API",
            ai: "الذكاء الاصطناعي",
            nlp: "معالجة اللغة الطبيعية",
            django: "Django",
            role_auth: "التفويض القائم على الأدوار",
            pdf_export: "تصدير PDF",
            ui_validation: "التحقق من واجهة المستخدم",
            tensorflow: "TensorFlow",
            computer_vision: "الرؤية الحاسوبية",
            html5: "HTML5",
            css: "CSS",
            javascript: "JavaScript",
            postgresql: "PostgreSQL",
            database: "قاعدة بيانات",
            canvas: "Canvas",
            frontend: "الواجهة الأمامية",
            dotnet: ".NET",
            aws: "AWS",
            gcp: "GCP",
            docker: "Docker",
            git: "Git",
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ml: "التعلم الآلي",
            cv: "الرؤية الحاسوبية",
            "python-ai": "مكتبات Python للذكاء الاصطناعي"
        },
        title: {
            "java-backend": "Java مطور",
            "full-stack": "مهندس برمجيات فول ستاك",
            ai: "متحمس للذكاء الاصطناعي"
        },
        services: {
            subtitle: "خدمات تطوير احترافية مصممة خصيصًا لتلبية احتياجات عملك",
            note: "<strong>ملاحظة:</strong> جميع الأسعار تقديرية. تعتمد التسعيرة النهائية على نطاق المشروع والمتطلبات. تواصل معي للحصول على عرض سعر مخصص يتناسب مع احتياجاتك الخاصة.",
            cta: "ابدأ الآن",
            backend: {
                title: "تطوير الواجهة الخلفية",
                price: "€2,500+",
                features: [
                    "تطوير واجهة برمجة تطبيقات REST باستخدام Spring Boot",
                    "تصميم قواعد البيانات وتحسينها",
                    "تنفيذ التوثيق والأمان",
                    "هيكلية الخدمات المصغرة",
                    "توثيق واختبار واجهة برمجة التطبيقات",
                    "النشر على منصات السحابة"
                ]
            },
            fullstack: {
                title: "تطوير كامل فول ستاك",
                price: "€4,000+",
                features: [
                    "تطوير تطبيقات ويب كاملة",
                    "واجهة خلفية Spring Boot + واجهة أمامية React",
                    "تصميم واجهة مستخدم/تجربة مستخدم متجاوب",
                    "تكامل قواعد البيانات",
                    "نظام توثيق المستخدمين",
                    "لوحة تحكم إدارية"
                ]
            },
            api: {
                title: "تطوير واجهة برمجة التطبيقات",
                price: "€1,800+",
                features: [
                    "تطوير واجهة برمجة تطبيقات REST مخصصة",
                    "تكامل قواعد البيانات (PostgreSQL/MySQL)",
                    "توثيق JWT",
                    "توثيق واجهة برمجة التطبيقات باستخدام Swagger/OpenAPI",
                    "تحسين الأداء",
                    "جاهز للنشر"
                ]
            },
            website: {
                title: "حزمة موقع ويب تجاري",
                price: "€1,500-€3,000",
                features: [
                    "موقع ويب احترافي للمحفظة",
                    "نموذج اتصال مع إشعارات البريد الإلكتروني",
                    "تصميم متجاوب للأجهزة المحمولة",
                    "تحسين أساسي لمحركات البحث",
                    "نظام إدارة المحتوى",
                    "تكامل الوسائط الاجتماعية"
                ]
            },
            ai: {
                title: "تكامل الذكاء الاصطناعي",
                price: "€3,500+",
                features: [
                    "واجهات برمجة تطبيقات معالجة النصوص/التلخيص",
                    "تحليل الصور باستخدام TensorFlow",
                    "تكامل الروبوتات الدردشية",
                    "نشر نماذج التعلم الآلي",
                    "لوحات بيانات تصور البيانات",
                    "حلول ذكاء اصطناعي مخصصة"
                ]
            },
            maintenance: {
                title: "الصيانة والدعم",
                price: "€500/شهر",
                features: [
                    "تحديثات البرمجيات المنتظمة",
                    "إصلاح الأخطاء واستكشاف الأخطاء",
                    "مراقبة الأداء",
                    "تحديثات الأمان",
                    "صيانة قواعد البيانات",
                    "دعم طارئ على مدار الساعة"
                ]
            }
        },
        project: {
            missing: {
                title: "نظام تنبيه الأشخاص المفقودين فول ستاك",
                description: "أداة شرطة تم تطويرها باستخدام Spring Boot، SwiftUI، وJetpack Compose، مع إشعارات Firebase، تتبع الموقع الجغرافي، ولوحة تحكم إدارية.",
                duration: "6 أشهر"
            },
            banking: {
                title: "نظام مصرفي فول ستاك",
                description: "تطبيق مصرفي كامل التكامل مع تتبع البريد الإلكتروني/عنوان IP، دعم العملات المتعددة، معالجة المعاملات، واختبارات شاملة باستخدام Mockito.",
                duration: "6 أشهر"
            },
            ai_text: {
                title: "ملخص نصوص بالذكاء الاصطناعي فول ستاك",
                description: "تطبيق تلخيص نصوص متعدد اللغات مدعوم بواجهة برمجة تطبيقات REST باستخدام Spring Boot مع قدرات متقدمة في معالجة اللغة الطبيعية.",
                duration: "شهرين"
            },
            student: {
                title: "بوابة طلابية فول ستاك",
                description: "منصة تعليمية شاملة تتضمن التحكم في الوصول القائم على الأدوار، نظام الدرجات، وظيفة تصدير PDF، والاختبارات عبر الإنترنت.",
                duration: "4 أشهر"
            },
            face_analysis: {
                title: "تحليل الوجه بالذكاء الاصطناعي",
                description: "نظام تصنيف الصور تم تطويره باستخدام Django وTensorFlow، مع معالجة تلقائية وواجهة مستخدم رسومية مخصصة.",
                duration: "4 أشهر"
            },
            medical_diagnosis: {
                title: "نظام التشخيص الطبي بالذكاء الاصطناعي",
                description: "تطبيق سطح مكتب يعتمد على التعلم الآلي، تم تطويره باستخدام .NET وML.NET، يتنبأ بالأمراض المحتملة من الأعراض التي يقدمها المستخدم. يتضمن ميزات مثل إدخال الأعراض باللغة الطبيعية، التنبؤ بالأمراض مع درجة الثقة، وواجهة مستخدم سهلة الاستخدام تعتمد على WPF.",
                duration: "5 أشهر"
            },
            view: "عرض المشروع"
        },
        contact: {
            info: "معلومات الاتصال",
            location: "برلين، ألمانيا",
            video: "فيديو عني",
            phone: "+49 163 9769764"
        },
        form: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            subject: "الموضوع",
            message: "رسالتك",
            submit: "إرسال الرسالة"
        },
       footer: {
            copyright: "جميع الحقوق محفوظة محمود نجمة © 2025"
        },
        thank_you: {
            title: "شكرًا",
            heading: "شكرًا لك!",
            message: "تم إرسال رسالتك بنجاح. سأتواصل معك قريبًا.",
            back: "العودة إلى الصفحة الرئيسية"
        }
    }
};

// Function to update content based on language
function updateContent(lang) {
    // Validate language
    if (!translations[lang]) {
        console.warn(`Invalid language: ${lang}. Defaulting to 'en'.`);
        lang = 'en';
    }

    console.log(`Updating content to language: ${lang}`);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
            if (!value) {
                console.warn(`Translation missing for key: ${key} in language: ${lang}`);
                break;
            }
        }
        if (value) element.innerHTML = value;
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        if (value) element.placeholder = value;
    });

    // Update title attributes for tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
            if (!value) break;
        }
        if (value) element.title = value;
    });

    // Update toggle buttons dynamically
    document.querySelectorAll('.toggle-details').forEach(button => {
        const details = button.nextElementSibling;
        const isHidden = details.style.display === 'none' || !details.style.display;
        button.textContent = isHidden ? translations[lang].education.toggle : 
            lang === 'ar' ? 'إخفاء التفاصيل' :
            lang === 'pl' ? 'Ukryj szczegóły' : 
            lang === 'fr' ? 'Masquer les détails' : 
            lang === 'tr' ? 'Detayları Gizle' : 
            'Details ausblenden';
    });

    // Update section indicators
    document.querySelectorAll('.section-indicator').forEach(indicator => {
        const sectionId = indicator.getAttribute('data-section');
        indicator.querySelector('span').textContent = translations[lang].section[sectionId] || sectionId;
    });
}

// Function to map browser language to supported languages
function getSupportedLanguage(browserLang) {
    const langMap = {
        'en': 'en',
        'en-US': 'en',
        'en-GB': 'en',
        'de': 'de',
        'de-DE': 'de',
        'pl': 'pl',
        'pl-PL': 'pl',
        'fr': 'fr',
        'fr-FR': 'fr',
        'tr': 'tr',
        'tr-TR': 'tr',
        'ar': 'ar',
        'ar-SA': 'ar',
        'ar-EG': 'ar'
    };
    const primaryLang = browserLang.split('-')[0];
    const supportedLang = langMap[browserLang] || langMap[primaryLang] || 'en';
    console.log(`Browser language: ${browserLang}, mapped to: ${supportedLang}`);
    return supportedLang;
}

// Function to get country code using geolocation API
async function getCountryCode() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log(`Geolocation API returned country code: ${data.country_code}`);
        return data.country_code;
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        return null;
    }
}

// Function to map country code to supported language
function getLanguageFromCountry(countryCode) {
    const countryLangMap = {
        'DE': 'de',      
        'PL': 'pl',     
        'FR': 'fr',      
        'TR': 'tr',      
        // Arabic countries
        'SA': 'ar', 'EG': 'ar', 'JO': 'ar', 'LB': 'ar', 'QA': 'ar',
        'AE': 'ar', 'BH': 'ar', 'KW': 'ar', 'OM': 'ar', 'YE': 'ar',
        'SY': 'ar', 'IQ': 'ar', 'PS': 'ar', 'MA': 'ar', 'DZ': 'ar',
        'TN': 'ar', 'LY': 'ar', 'SD': 'ar', 'SO': 'ar'
    };
    const lang = countryLangMap[countryCode] || 'en';
    console.log(`Country code: ${countryCode}, mapped to language: ${lang}`);
    return lang;
}

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to get current language from URL, localStorage, or geolocation
async function getCurrentLanguage() {
    // First check URL parameter
    const urlLang = getUrlParameter('lang');
    if (urlLang && ['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(urlLang)) {
        console.log(`Language from URL: ${urlLang}`);
        return urlLang;
    }
    
    // Then check localStorage
    const storedLang = localStorage.getItem('language');
    if (storedLang && ['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(storedLang)) {
        console.log(`Language from localStorage: ${storedLang}`);
        return storedLang;
    }
    
    // Then use geolocation/browser detection
    const countryCode = await getCountryCode();
    const geoLang = countryCode ? getLanguageFromCountry(countryCode) : getSupportedLanguage(navigator.language || navigator.userLanguage);
    console.log(`Language from geolocation: ${geoLang}`);
    return geoLang;
}

// Function to update back to home links
function updateBackToHomeLinks(lang) {
    const backToHomeLinks = document.querySelectorAll('a[href="index.html"], a[href*="index.html"]');
    backToHomeLinks.forEach(link => {
        if (link.getAttribute('id') !== 'language-select') {
            link.href = `index.html?lang=${lang}`;
        }
    });
}

// Language switcher event listener with geolocation
document.addEventListener('DOMContentLoaded', async () => {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) {
        console.error('Language select element not found');
        return;
    }

    // Get current language
    const selectedLang = await getCurrentLanguage();

    // Set the language select value and update content
    console.log(`Setting language to: ${selectedLang}`);
    languageSelect.value = selectedLang;
    localStorage.setItem('language', selectedLang);
    updateContent(selectedLang);

    // Update back to home links
    updateBackToHomeLinks(selectedLang);

    // Handle manual language selection
    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (['en', 'de', 'pl', 'fr', 'tr', 'ar'].includes(lang)) {
            console.log(`Manual language selection: ${lang}`);
            localStorage.setItem('language', lang);
            updateContent(lang);
            
            // Update URL with language parameter without reloading
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', lang);
            window.history.replaceState({}, '', newUrl);
            
            // Update all back to home links
            updateBackToHomeLinks(lang);
        } else {
            console.warn(`Invalid language selected: ${lang}`);
        }
    });
});