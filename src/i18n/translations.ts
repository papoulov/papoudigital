export type Locale = "en" | "fr";

const translations = {
  en: {
    common: {
      home: "Home",
      about: "About",
      pages: "Pages",
      services: "Services",
      shop: "Shop",
      blog: "Blog",
      contact: "Contact",
      contactUs: "Contact Us",
      contactUsLower: "Contact us",
      callAnytime: "Call Anytime",
      welcomeAgency: "Welcome to Our business Agency",
      businessHours: "Mon - Fri: 09:00 - 05:00",
      heroTitleHome2Prefix: "Powering ",
      heroTitleHome2Highlight: "Africa",
      heroTitleHome2Suffix: "’s Digital Future",
      heroTitleHome2LegacyLine1: "Simple Solutions",
      heroTitleHome2LegacyLine2: "for",
      heroTitleHome2LegacyHighlight: "Your Business",
      heroTitleHome2LegacyLine3: "Success",
      heroCtaHome2: "Get Started",
      heroStatEngineers: "Engineers",
      heroResponseTime: "Replies within 24h",
      heroTextHome2Africa:
        "We design, build, and scale digital products: websites, mobile apps, cloud, ecommerce, payments, and automation—delivered with speed and reliability.",
      heroTextHome2Legacy:
        "We deliver modern tech solutions powered by AI and automation to streamline operations, improve decision-making, and accelerate business growth.",
      aboutTaglineHome2: "About Us",
      aboutHeadlineHome2Line1:
        "A trusted partner helping businesses strengthen and elevate their brand",
      aboutHeadlineHome2Line2: "through innovation and design.",
      aboutBodyHome2:
        "We bring together a network of skilled designers, engineers, developers, and digital strategists committed to building efficient, scalable, and reliable technology. Our mission is simple: to simplify access to technology and empower companies to operate smarter, faster, and more efficiently in a rapidly evolving digital world.",
      aboutPoint1TitleHome2: "Technology Consulting",
      aboutPoint1TextHome2:
        "We assess your current systems and define a clear digital strategy aligned with your business goals.",
      aboutPoint2TitleHome2: "AI & Automation",
      aboutPoint2TextHome2:
        "We implement AI-powered workflows and smart automation to reduce manual tasks and improve efficiency.",
      aboutPoint3TitleHome2: "Cloud & Integration",
      aboutPoint3TextHome2:
        "We build scalable cloud architectures and connect your tools into one seamless digital ecosystem.",
      aboutPoint4TitleHome2: "Security & Reliability",
      aboutPoint4TextHome2:
        "We design secure, high-performance platforms with monitoring and optimization for long-term stability.",
      aboutKnowMoreHome2: "Know More",
      aboutConnectUsHome2: "Connect us",
      processTaglineHome2: "Working Process",
      processHeadlineHome2Line1: "We use the most effective methods",
      processHeadlineHome2Line2: "to digitalize you business",
      processStep1TitleHome2: "Discover & Understand",
      processStep1TextHome2:
        "We start by analyzing your business, goals, and current processes. This allows us to clearly identify challenges, opportunities, and the right digital strategy tailored to your needs.",
      processStep2TitleHome2: "Plan & Design",
      processStep2TextHome2:
        "Our team designs a clear digital roadmap and user-focused solutions. We define the technology, architecture, and experience that will deliver the best results for your business.",
      processStep3TitleHome2: "Build & Integrate",
      processStep3TextHome2:
        "We develop and implement your digital solutions — websites, mobile apps, automation, payments, or cloud systems — ensuring performance, security, and seamless integration with your operations.",
      processStep4TitleHome2: "Launch & Optimize",
      processStep4TextHome2:
        "After deployment, we monitor performance, improve efficiency, and continuously optimize your systems to support long-term growth and scalability.",
      projectsSectionTitleHome2: "Our Projects",
      projectsSectionIntroHome2:
        "A selection of active products PAPOUDIGITAL is currently designing, building, and preparing for launch.",
      projectsSectionStatusHome2: "Coming soon",
      projectsSectionDescHome2:
        "Connects people to events, simplifies ticketing, empowers organizers, and makes discovering experiences in your city fast and seamless.",
      projectsSectionTag1Home2: "Mobile App",
      projectsSectionTag2Home2: "Android",
      projectsSectionTag3Home2: "iOS",
      blogLoading: "Loading articles...",
      blogEmptyTitle: "No articles yet",
      blogEmptyText: "We are preparing fresh content. Please check back soon.",
      registrationOpeningSoon: "Registration Opening Soon",
      loginOpeningSoon: "Login Opening Soon",
    },
    nav: {
      homeOne: "Home One",
      homeTwo: "Home Two",
      homeThree: "Home Three",
      homeOneOnePage: "Home One / Onepage",
      homeTwoOnePage: "Home Two / Onepage",
      homeThreeOnePage: "Home Three / Onepage",
      team: "Team",
      teamCarousel: "Team Carousel",
      teamDetails: "Team Details",
      portfolio: "Portfolio",
      portfolioDetails: "Portfolio Details",
      testimonials: "Testimonials",
      testimonialCarousel: "Testimonial Carousel",
      pricing: "Pricing",
      gallery: "Gallery",
      faqs: "FAQs",
      comingSoon: "Coming Soon",
      services: "Services",
      digitalMarketing: "Digital Marketing",
      webDesignDevelopment: "Web Design & Development",
      seo: "Search Engine Optimization",
      designBranding: "Design & Branding",
      appDevelopment: "App Development",
      developer: "Developer",
      clientPortal: "Client Portal",
      products: "Products",
      productDetails: "Product Details",
      cart: "Cart",
      checkout: "Checkout",
      wishlist: "Wishlist",
      signUp: "Sign Up",
      login: "Login",
      blog: "Blog",
      blogCarousel: "Blog Carousel",
      blogList: "Blog List",
      blogDetails: "Blog Details",
    },
    aboutPage: {
      topTitlePrefix: "A network of",
      topTitleHighlight: "tech professionals,",
      topTitleSuffix: "delivering world-class execution",
      yearsOf: "Years of",
      experience: "Experience",
      tagline: "About Us",
      heroTitleLine1: "Discover more about our",
      heroTitleLine2: "identity and our work.",
      heroText:
        "From web and mobile development to cloud infrastructure, payment systems, ecommerce platforms, artificial intelligence, and automation, we design solutions that solve real business challenges. Every project we deliver is guided by performance, security, and long-term sustainability.",
      founderName: "David Watson",
      founderRole: "Founder & SEO",
      founderQuote:
        "Welcome to our company! We are thrilled to share our journey and values with you.",
      point1Title: "Advanced Security",
      point1Text:
        "Our system incorporates the latest security protocols to protect user data and ensure privacy.",
      point2Title: "Customizable Options",
      point2Text:
        "Our system offers flexible options so each solution can be tailored to your business workflows.",
      valuesTitle: "Values",
      valuesText:
        "Excellence • Clarity • Reliability • Customer-first • Continuous improvement",
      missionTitle: "Mission",
      missionText:
        "Simplify access to modern technology for African companies.",
      visionTitle: "Vision",
      visionText:
        "A future where any business can launch and scale digitally—without barriers.",
      statementText:
        "We believe technology should not be complex or inaccessible. Businesses deserve clear processes, dependable partners, and solutions tailored to their realities.",
      whyTagline: "Why Choose Us",
      whyTitleLine1: "Why you should choose us",
      whyTitleLine2: "for your business needs.",
      whyText:
        "We combine strategy, design, and technology to deliver reliable digital solutions that help your business grow with confidence.",
      whyRightTitle: "100% SUCCESS RATE",
      feature1Title: "Web & Mobile Products",
      feature1Text:
        "We design and build fast, scalable websites and mobile apps tailored to your business model and users.",
      feature2Title: "Cloud & Systems Integration",
      feature2Text:
        "We set up reliable cloud infrastructure and connect your tools, data, and workflows into one efficient ecosystem.",
      feature3Title: "Ecommerce & Payments",
      feature3Text:
        "We implement secure ecommerce and payment solutions to help you sell, collect, and operate smoothly online.",
      feature4Title: "AI & Automation",
      feature4Text:
        "We automate repetitive tasks and deploy practical AI use cases to improve speed, accuracy, and team productivity.",
      counterProjects: "Projects Completed",
      counterAwards: "Awards Achieved",
      counterReviews: "Positive Reviews",
      counterClients: "Satisfied Clients",
      testimonialTagline: "Testimonial",
      testimonialTitleLine1: "What our satisfied customers",
      testimonialTitleLine2: "are saying about us.",
      awardsTagline: "Awards",
      awardsTitleLine1: "We're proud to have received over 20",
      awardsTitleLine2: "awards as a certified agency.",
      awardsWinning: "Awards Winnings",
      award1Title: "Best Digital Marketing Agency Award",
      award1Text:
        "Recognized for excellence in digital marketing strategies and campaign execution.",
      award1Tag: "The Prestige",
      award1Date: "August 15, 2025",
      award2Title: "Outstanding Customer Service",
      award2Text:
        "Honored for delivering exceptional customer support and satisfaction.",
      award2Tag: "Excellence",
      award2Date: "July 20, 2025",
      award3Title: "Top Creative Agency Award",
      award3Text:
        "Celebrated for innovative and creative approaches in advertising and branding.",
      award3Tag: "Achievement",
      award3Date: "August 15, 2025",
      ctaTitleLine1: "Start your journey with our",
      ctaTitleLine2: "exceptional services.",
      ctaButton: "Get Started",
    },
    servicesPage: {
      common: {
        moreServices: "More Services",
        contactUs: "Contact Us",
        sendMessage: "Send Message",
        getStarted: "Get Started",
      },
      overview: {
        tagline: "Our Services",
        titleLine1: "Scalable digital services",
        titleLine2: "for modern businesses.",
        moreDetails: "More Details",
      },
      list: {
        digital: "Digital Strategy & Transformation",
        web: "Web Design & Development",
        seo: "Search Visibility & Growth",
        design: "Design & Branding",
        app: "App Development",
      },
      digital: {
        title1: "Digital Strategy & Transformation",
        text1:
          "We help organizations modernize operations through digital strategy, AI enablement, and workflow automation.",
        title2: "From Assessment to ExAocution",
        text2:
          "Our team maps your current processes, identifies bottlenecks, and deploys practical systems that improve speed, visibility, and decision-making.",
        feature1: "Business process diagnosis",
        feature2: "Digital roadmap and prioritization",
        feature3: "AI and automation opportunities",
        feature4: "Systems integration planning",
        feature5: "Data and reporting foundations",
        feature6: "Performance improvement cycles",
        card1: "Business analysis",
        card2: "AI enablement",
        card3: "Automation architecture",
        card4: "Operational optimization",
        impactTitle: "Operational Impact",
        impactText:
          "Our implementations reduce repetitive work and improve process reliability across teams.",
        skill1: "Strategy",
        skill2: "Automation",
        skill3: "ExAocution",
        whyTitle: "Why This Service Matters",
        whyText:
          "A strong digital foundation gives your company the clarity and agility to scale sustainably.",
        whyPoint1: "Aligned with business goals",
        whyPoint2: "Faster internal workflows",
        whyPoint3: "Lower operational friction",
        whyPoint4: "Better long-term scalability",
        text4:
          "We deliver practical transformation programs that fit your current maturity and budget.",
        text5:
          "Tell us your priorities and we will design a clear, measurable implementation plan.",
        contactText:
          "Discuss your challenges with our team and receive recommendations tailored to your business.",
      },
      web: {
        title1: "Web Design & Development",
        text1:
          "We build secure, high-performance websites and platforms designed for growth, conversion, and maintainability.",
        title2: "User Experience + Engineering",
        text2:
          "From structure to deployment, we combine clean UX, robust code, and SEO-ready architecture.",
        feature1: "Custom website architecture",
        feature2: "Responsive interface design",
        feature3: "CMS and content workflows",
        feature4: "Performance optimization",
        feature5: "Technical SEO foundations",
        feature6: "Maintenance and support",
        card1: "UX/UI design",
        card2: "Frontend development",
        card3: "Backend integration",
        card4: "Quality assurance",
        impactTitle: "Business Impact",
        impactText:
          "Your website becomes a reliable growth asset that communicates value and generates leads.",
        skill1: "Design",
        skill2: "Development",
        skill3: "Optimization",
        whyTitle: "Why This Service Matters",
        whyText:
          "A modern web presence improves credibility, user trust, and conversion performance.",
        whyPoint1: "Fast and reliable experience",
        whyPoint2: "Built for conversion",
        whyPoint3: "Scalable technical foundation",
        whyPoint4: "Easy content management",
        text4:
          "We ship production-ready websites aligned with your brand and business objectives.",
        text5:
          "Start with an audit or a full redesign, and we will guide the next steps clearly.",
        contactText:
          "Share your website goals and constraints so we can recommend the right stack and timeline.",
      },
      seo: {
        title1: "Search Visibility & Growth",
        text1:
          "We improve your organic visibility through technical SEO, content strategy, and data-led optimization.",
        title2: "Sustainable Acquisition",
        text2:
          "Our approach targets long-term ranking quality, qualified traffic, and measurable business outcomes.",
        feature1: "Technical SEO audits",
        feature2: "Keyword and intent mapping",
        feature3: "On-page optimization",
        feature4: "Content strategy guidance",
        feature5: "Analytics and reporting",
        feature6: "Continuous ranking improvements",
        card1: "SEO diagnostics",
        card2: "Content planning",
        card3: "Performance tracking",
        card4: "Growth iteration",
        impactTitle: "Growth Impact",
        impactText:
          "We help you attract relevant audiences and improve conversion from search channels.",
        skill1: "Technical SEO",
        skill2: "Content Strategy",
        skill3: "Analytics",
        whyTitle: "Why This Service Matters",
        whyText:
          "Search is one of the most cost-effective long-term channels to build awareness and demand.",
        whyPoint1: "Qualified organic traffic",
        whyPoint2: "Improved discoverability",
        whyPoint3: "Lower acquisition cost",
        whyPoint4: "Measurable performance gains",
        text4:
          "We focus on actionable SEO work that creates compounding growth over time.",
        text5:
          "Let us evaluate your current performance and define a practical growth roadmap.",
        contactText:
          "Send your website URL and goals to receive targeted SEO recommendations.",
      },
      design: {
        title1: "Design & Branding",
        text1:
          "We craft brand systems and visual identities that communicate clarity, trust, and differentiation.",
        title2: "From Identity to Experience",
        text2:
          "Our design process aligns brand positioning, messaging, and digital interfaces into one coherent presence.",
        feature1: "Brand strategy workshops",
        feature2: "Visual identity systems",
        feature3: "Design guidelines and assets",
        feature4: "Marketing collateral design",
        feature5: "Product and interface design",
        feature6: "Brand consistency audits",
        card1: "Brand discovery",
        card2: "Identity design",
        card3: "Asset production",
        card4: "Experience alignment",
        impactTitle: "Brand Impact",
        impactText:
          "A stronger brand improves recognition, perceived value, and customer confidence.",
        skill1: "Brand Strategy",
        skill2: "Visual Design",
        skill3: "Creative ExAocution",
        whyTitle: "Why This Service Matters",
        whyText:
          "Consistent, high-quality design turns your brand into a clear competitive advantage.",
        whyPoint1: "Stronger market positioning",
        whyPoint2: "Clearer communication",
        whyPoint3: "Better brand consistency",
        whyPoint4: "Higher customer trust",
        text4:
          "We create practical design systems your team can use across every digital touchpoint.",
        text5:
          "Whether launching or rebranding, we help you define a distinctive visual language.",
        contactText:
          "Share your brand objectives and audience, and we will propose an aligned creative direction.",
      },
      app: {
        title1: "App Development",
        text1:
          "We design and build mobile and web applications focused on reliability, scalability, and real user value.",
        title2: "Product Thinking + Technical Delivery",
        text2:
          "From MVP to production, we handle architecture, development, integration, and deployment with clear milestones.",
        feature1: "Product discovery and scoping",
        feature2: "Mobile and web app development",
        feature3: "API and backend integration",
        feature4: "Authentication and security",
        feature5: "Testing and quality control",
        feature6: "Release and post-launch support",
        card1: "Product planning",
        card2: "Application engineering",
        card3: "System integration",
        card4: "Support and iteration",
        impactTitle: "Product Impact",
        impactText:
          "We deliver applications that improve service quality, operational speed, and customer engagement.",
        skill1: "Product",
        skill2: "Engineering",
        skill3: "Delivery",
        whyTitle: "Why This Service Matters",
        whyText:
          "A well-built application can streamline operations and unlock new digital revenue opportunities.",
        whyPoint1: "Faster time to market",
        whyPoint2: "Scalable architecture",
        whyPoint3: "Secure integrations",
        whyPoint4: "Long-term maintainability",
        text4:
          "We build with production standards so your product can evolve without costly rewrites.",
        text5:
          "Start with your idea, existing backlog, or technical constraints and we will build a practical roadmap.",
        contactText:
          "Talk to our engineers about your app goals and we will define the best implementation approach.",
      },
    },
    developerPage: {
      tagline: "Developer Portal",
      titleLine1: "Build with our",
      titleHighlight: "developer platform",
      titleLine2: "and launch faster.",
      heroText:
        "Create an account to access our APIs, integration guides, SDK examples, and technical resources designed for teams building modern digital products.",
      createAccount: "Create Account",
      requestAccess: "Sign In",
      requestAccessHint:
        "Create an account, or sign in if you already have one, to request API access.",
      authBannerTitle: "Developer Portal is launching soon",
      signupUnavailableMessage:
        "Thanks for your interest. Developer account creation is not available yet while we finalize authentication, API key management, and onboarding. We will announce as soon as registration is open.",
      loginUnavailableMessage:
        "Thanks for checking in. Developer sign-in is not available yet while we complete onboarding, API access, and documentation workflows. We will notify you as soon as login opens.",
      feature1Title: "Developer Accounts",
      feature1Text:
        "Onboard your team, manage environments, and control credentials securely from one workspace.",
      feature2Title: "APIs & Integrations",
      feature2Text:
        "Connect payments, ecommerce, cloud workflows, and automation services using stable API endpoints.",
      feature3Title: "Docs & Support",
      feature3Text:
        "Use practical guides, starter examples, and direct technical support to accelerate delivery.",
      resourcesTitle: "Build, Test, and Ship with Confidence",
      resourcesText:
        "AccAoss practical API documentation, authentication guides, SDK setup flows, and integration checklists to move from prototype to production faster.",
      resource1: "API documentation and authentication flow",
      resource2: "SDK setup guides for web and mobile",
      resource3: "Webhook events and integration checklists",
      resource4: "Sandbox access and production rollout steps",
    },
    clientPortalPage: {
      tagline: "Client Portal",
      titleLine1: "Open your",
      titleHighlight: "client account",
      titleLine2: "and track your project progress.",
      heroText:
        "The client portal helps you follow every project stage with PAPOUDIGITAL, review deliverables, validate milestones, and stay aligned in real time.",
      createAccount: "Open Account",
      signIn: "Sign In",
      contactTeam: "Contact Project Team",
      feature1Title: "Secure Client Account",
      feature1Text:
        "Create your account to access your workspace, documents, and project updates in one place.",
      feature2Title: "Project Timeline Tracking",
      feature2Text:
        "Track each phase from discovery to launch, with status updates and clear upcoming actions.",
      feature3Title: "Direct Communication",
      feature3Text:
        "Collaborate with our team through shared notes, approvals, and centralized communication history.",
      trackingTitle: "What You Can Track",
      trackingText:
        "Follow your project from kickoff to delivery with clear visibility on progress, upcoming milestones, approvals, and support updates.",
      tracking1: "Current sprint status and completion percentage",
      tracking2: "Milestones, deadlines, and pending approvals",
      tracking3: "Delivered files, versions, and release notes",
      tracking4: "Priority requests and support follow-up",
      authBannerTitle: "Client Portal is launching soon",
      signupUnavailableMessage:
        "Thanks for your interest. Client account creation is not available yet while we finalize portal onboarding and secure workspace access. We will announce as soon as registration is open.",
      loginUnavailableMessage:
        "Thanks for checking in. Client sign-in is not available yet while we complete portal onboarding and access workflows. We will notify you as soon as login opens.",
    },
    faqPage: {
      tagline: "FAQ",
      titleLine1: "Frequently Asked",
      titleLine2: "Questions",
      intro:
        "Everything you need to know about our services, delivery model, timelines, pricing approach, and long-term support.",
      button: "Contact Us",
      q1Title: "What services does PapouDigital provide?",
      q1Desc:
        "We design and deliver websites, mobile apps, cloud infrastructure, ecommerce platforms, payment integrations, AI solutions, and automation systems. We also provide consulting, maintenance, and product scaling support.",
      q2Title: "What type of companies do you work with?",
      q2Desc:
        "We work with startups, SMEs, and established companies across multiple industries. Whether you are launching a new product or modernizing internal operations, we adapt our approach to your business stage.",
      q3Title: "How does a project typically start?",
      q3Desc:
        "We begin with a discovery phase to understand your goals, constraints, and priorities. Then we define scope, timeline, deliverables, and technical direction before moving into design and development.",
      q4Title: "How long does delivery usually take?",
      q4Desc:
        "Timelines depend on complexity and scope. A focused MVP can take a few weeks, while larger multi-module platforms can take several months. We provide a phased roadmap with clear milestones and updates.",
      q5Title: "Can you integrate with our current systems and tools?",
      q5Desc:
        "Yes. We regularly integrate CRMs, ERPs, payment gateways, ecommerce tools, cloud services, and custom APIs to keep your operations connected and consistent.",
      q6Title: "Do you build with scalability and security in mind?",
      q6Desc:
        "Yes. We apply secure development practices, role-based access controls, and production-ready architecture so your solution can scale reliably as usage grows.",
      q7Title: "Do you offer AI and automation services?",
      q7Desc:
        "Yes. We help identify high-impact use cases, then implement practical AI and automation flows for support, operations, reporting, and decision workflows.",
      q8Title: "Will we own the final product and source code?",
      q8Desc:
        "After full payment, ownership of custom deliverables is transferred to your organization according to the signed agreement. Reusable internal frameworks remain PapouDigital property.",
      q9Title: "Do you provide support after launch?",
      q9Desc:
        "Yes. We provide post-launch maintenance, monitoring, bug resolution, performance optimization, and continuous improvements based on your growth priorities.",
      q10Title: "How do pricing and payments work?",
      q10Desc:
        "Pricing is based on your scope, complexity, and delivery model. We can work with milestone-based or monthly engagements. Payment terms are defined clearly in the proposal or SOW.",
      q11Title: "Can we track progress during the project?",
      q11Desc:
        "Yes. Through our client portal and regular checkpoints, you can follow sprint status, milestones, deliverables, approvals, and key decisions in real time.",
      q12Title: "How can we get started?",
      q12Desc:
        "Use the contact page to share your goals. We will review your request, schedule a discovery call, and propose the right plan to launch and scale your project.",
    },
    servicesHubPage: {
      whyChoose: {
        tagline: "Why Choose Us",
        titleLine1: "Why businesses choose our",
        titleLine2: "service delivery for",
        titleHighlight: "growth",
        text1:
          "We deliver practical digital solutions that match your operations, budget, and long-term business goals.",
        text2:
          "Our team combines strategy, engineering, and execution discipline to ship reliable products and measurable outcomes.",
        reviewLabel: "Positive Reviews",
        projectLabel: "Projects Completed",
        point1Title: "Cross-functional Tech Team",
        point1Text: "Designers, developers, and engineers aligned from discovery to launch.",
        point2Title: "ExAocution with Clear Milestones",
        point2Text: "Structured delivery with transparent timelines, priorities, and ownership.",
        point3Title: "AI and Automation Focus",
        point3Text: "We identify high-impact automation opportunities to improve speed and efficiency.",
        point4Title: "Scalable and Reliable Delivery",
        point4Text: "Architecture and implementation built for performance, security, and growth.",
      },
      contact: {
        tagline: "Start a Project",
        titleLine1: "Need a digital solution?",
        titleLine2: "Let's talk about your goals",
        textLine1: "Share your challenges and priorities.",
        textLine2: "We'll propose the right solution and delivery plan.",
        leadName: "PapouDigital Team",
        leadRole: "Project Delivery",
        placeholderName: "Your Name",
        placeholderEmail: "Email Address",
        placeholderInquiry: "Service Needed",
        placeholderDetails: "Project Details",
        sendMessage: "Send Message",
        successMessage: "Message sent successfully!",
      },
      faq: {
        tagline: "FAQ",
        titleLine1: "Frequently Asked",
        titleLine2: "Questions",
        text: "Clear answers about our services, timelines, collaboration model, and project delivery process.",
        button: "Contact Us",
        q1Title: "What services can PapouDigital deliver?",
        q1Desc:
          "We design and build websites, mobile apps, cloud infrastructure, ecommerce solutions, payment integrations, AI workflows, and automation systems.",
        q2Title: "How do you run a typical project?",
        q2Desc:
          "We follow a clear process: discovery, planning, design, development, testing, launch, and continuous optimization with defined milestones.",
        q3Title: "Can you integrate with our existing tools?",
        q3Desc:
          "Yes. We integrate with your current systems, payment providers, CRMs, and internal tools to keep operations consistent and scalable.",
        q4Title: "Do you provide post-launch support?",
        q4Desc:
          "Yes. We provide maintenance, performance monitoring, iteration support, and ongoing improvements based on product and business needs.",
      },
      pricing: {
        tagline: "Engagement Models",
        titleLine1: "Select the service plan",
        titleLine2: "that best fits your",
        titleHighlight: "business needs",
        monthly: "Monthly",
        yearly: "Yearly",
        perMonth: "/Per Month",
        perYear: "/Per Year",
        choosePlan: "Choose Plan",
        plan1Title: "Starter",
        plan1Feature1: "Project discovery workshop",
        plan1Feature2: "Technical recommendation report",
        plan1Feature3: "Priority support by email",
        plan1Feature4: "Monthly performance review",
        plan1Feature5: "Basic automation advisory",
        plan1Feature6: "Delivery roadmap",
        plan2Title: "Business",
        plan2Feature1: "Everything in Starter",
        plan2Feature2: "Dedicated project manager",
        plan2Feature3: "Web or app feature delivery",
        plan2Feature4: "Integrations and API support",
        plan2Feature5: "Bi-weekly progress updates",
        plan2Feature6: "Technical optimization cycles",
        plan3Title: "Scale",
        plan3Feature1: "Everything in Business",
        plan3Feature2: "AI and automation implementation",
        plan3Feature3: "Cloud and architecture scaling",
        plan3Feature4: "Advanced security controls",
        plan3Feature5: "Faster execution capacity",
        plan3Feature6: "Executive delivery reporting",
      },
    },
  },
  fr: {
    common: {
      home: "Accueil",
      about: "À propos",
      pages: "Pages",
      services: "Services",
      shop: "Boutique",
      blog: "Blog",
      contact: "Contact",
      contactUs: "Contactez-nous",
      contactUsLower: "Contactez-nous",
      callAnytime: "Appelez à tout moment",
      welcomeAgency: "Bienvenue dans notre agence",
      businessHours: "Lun - Ven : 09:00 - 17:00",
      heroTitleHome2Prefix: "Propulser l'avenir numérique de l'",
      heroTitleHome2Highlight: "Afrique",
      heroTitleHome2Suffix: "",
      heroTitleHome2LegacyLine1: "Solutions simples",
      heroTitleHome2LegacyLine2: "pour le succès de",
      heroTitleHome2LegacyHighlight: "votre entreprise",
      heroTitleHome2LegacyLine3: "",
      heroCtaHome2: "Commencer",
      heroStatEngineers: "Ingénieurs",
      heroResponseTime: "Réponse sous 24h",
      heroTextHome2Africa:
        "Nous concevons, développons et faisons évoluer des produits digitaux : sites web, applications mobiles, cloud, ecommerce, paiements et automatisation, avec rapidité et fiabilité.",
      heroTextHome2Legacy:
        "Nous proposons des solutions technologiques modernes, portées par l'IA et l'automatisation, pour simplifier les opérations, améliorer la prise de décision et accélérer la croissance.",
      aboutTaglineHome2: "À propos",
      aboutHeadlineHome2Line1:
        "Un partenaire de confiance qui aide les entreprises à renforcer et valoriser leur marque",
      aboutHeadlineHome2Line2: "grâce à l'innovation et au design.",
      aboutBodyHome2:
        "Nous réunissons un réseau de designers, ingénieurs, développeurs et stratèges digitaux engagés pour créer des technologies efficaces, évolutives et fiables. Notre mission est simple : simplifier l'accès à la technologie et permettre aux entreprises d'opérer plus intelligemment, plus vite et avec plus d'efficacité dans un monde numérique en constante évolution.",
      aboutPoint1TitleHome2: "Conseil technologique",
      aboutPoint1TextHome2:
        "Nous analysons vos systèmes actuels et définissons une stratégie digitale claire alignée sur vos objectifs business.",
      aboutPoint2TitleHome2: "IA et automatisation",
      aboutPoint2TextHome2:
        "Nous déployons des workflows intelligents et de l'automatisation pilotée par l'IA pour gagner en efficacité.",
      aboutPoint3TitleHome2: "Cloud et intégration",
      aboutPoint3TextHome2:
        "Nous concevons des architectures cloud évolutives et connectons vos outils dans un écosystème digital fluide.",
      aboutPoint4TitleHome2: "Sécurité et fiabilité",
      aboutPoint4TextHome2:
        "Nous développons des plateformes sécurisées et performantes, avec suivi et optimisation continue.",
      aboutKnowMoreHome2: "En savoir plus",
      aboutConnectUsHome2: "Contactez-nous",
      processTaglineHome2: "Processus de travail",
      processHeadlineHome2Line1:
        "Nous utilisons les méthodes les plus efficaces",
      processHeadlineHome2Line2: "pour digitaliser votre entreprise",
      processStep1TitleHome2: "Découvrir et comprendre",
      processStep1TextHome2:
        "Nous commençons par analyser votre activité, vos objectifs et vos processus actuels. Cela nous permet d'identifier clairement les défis, les opportunités et la stratégie digitale adaptée à vos besoins.",
      processStep2TitleHome2: "Planifier et concevoir",
      processStep2TextHome2:
        "Notre équipe conçoit une feuille de route digitale claire et des solutions centrées sur l'utilisateur. Nous définissons la technologie, l'architecture et l'expérience qui offriront les meilleurs résultats pour votre entreprise.",
      processStep3TitleHome2: "Construire et intégrer",
      processStep3TextHome2:
        "Nous développons et mettons en œuvre vos solutions digitales — sites web, applications mobiles, automatisation, paiements ou systèmes cloud — en garantissant performance, sécurité et intégration fluide avec vos opérations.",
      processStep4TitleHome2: "Lancer et optimiser",
      processStep4TextHome2:
        "Après le déploiement, nous surveillons les performances, améliorons l'efficacité et optimisons en continu vos systèmes afin de soutenir la croissance et la scalabilité à long terme.",
      projectsSectionTitleHome2: "Nos projets",
      projectsSectionIntroHome2:
        "Une sélection de produits actifs que PAPOUDIGITAL conçoit, développe et prépare au lancement.",
      projectsSectionStatusHome2: "Bientôt disponible",
      projectsSectionDescHome2:
        "Connecte les personnes aux événements, simplifie la billetterie, donne plus de pouvoir aux organisateurs et rend la découverte d'expériences dans votre ville rapide et fluide.",
      projectsSectionTag1Home2: "Application mobile",
      projectsSectionTag2Home2: "Android",
      projectsSectionTag3Home2: "iOS",
      blogLoading: "Chargement des articles...",
      blogEmptyTitle: "Aucun article pour le moment",
      blogEmptyText: "Nous préparons du nouveau contenu. Revenez bientôt.",
      registrationOpeningSoon: "Inscription bientôt ouverte",
      loginOpeningSoon: "Connexion bientôt ouverte",
    },
    nav: {
      homeOne: "Accueil Un",
      homeTwo: "Accueil Deux",
      homeThree: "Accueil Trois",
      homeOneOnePage: "Accueil Un / Une page",
      homeTwoOnePage: "Accueil Deux / Une page",
      homeThreeOnePage: "Accueil Trois / Une page",
      team: "Équipe",
      teamCarousel: "Carrousel d'équipe",
      teamDetails: "Détails d'équipe",
      portfolio: "Portfolio",
      portfolioDetails: "Détails du portfolio",
      testimonials: "Témoignages",
      testimonialCarousel: "Carrousel de témoignages",
      pricing: "Tarifs",
      gallery: "Galerie",
      faqs: "FAQ",
      comingSoon: "Bientôt disponible",
      services: "Services",
      digitalMarketing: "Marketing digital",
      webDesignDevelopment: "Conception et développement web",
      seo: "Référencement naturel",
      designBranding: "Design et image de marque",
      appDevelopment: "Développement d'applications",
      developer: "Développeur",
      clientPortal: "Portail client",
      products: "Produits",
      productDetails: "Détails du produit",
      cart: "Panier",
      checkout: "Paiement",
      wishlist: "Liste de souhaits",
      signUp: "Inscription",
      login: "Connexion",
      blog: "Blog",
      blogCarousel: "Carrousel du blog",
      blogList: "Liste du blog",
      blogDetails: "Détails du blog",
    },
    aboutPage: {
      topTitlePrefix: "Un réseau de",
      topTitleHighlight: "professionnels de la tech,",
      topTitleSuffix: "avec une exécution de classe mondiale",
      yearsOf: "Années d'",
      experience: "expérience",
      tagline: "À propos",
      heroTitleLine1: "Découvrez davantage notre",
      heroTitleLine2: "identité et notre travail.",
      heroText:
        "Du développement web et mobile à l'infrastructure cloud, en passant par les systèmes de paiement, les plateformes e-commerce, l'intelligence artificielle et l'automatisation, nous concevons des solutions qui répondent à de vrais enjeux business. Chaque projet est guidé par la performance, la sécurité et la durabilité à long terme.",
      founderName: "David Watson",
      founderRole: "Fondateur & SEO",
      founderQuote:
        "Bienvenue dans notre entreprise ! Nous sommes ravis de partager notre parcours et nos valeurs avec vous.",
      point1Title: "Sécurité avancée",
      point1Text:
        "Notre système intègre les derniers protocoles de sécurité pour protéger les données des utilisateurs et garantir la confidentialité.",
      point2Title: "Options personnalisables",
      point2Text:
        "Notre système propose des options flexibles afin d'adapter chaque solution à vos processus métier.",
      valuesTitle: "Valeurs",
      valuesText:
        "Excellence • Clarté • Fiabilité • Client d'abord • Amélioration continue",
      missionTitle: "Mission",
      missionText:
        "Simplifier l'accès aux technologies modernes pour les entreprises africaines.",
      visionTitle: "Vision",
      visionText:
        "Un avenir où chaque entreprise peut lancer et faire évoluer ses activités digitales, sans barrières.",
      statementText:
        "Nous pensons que la technologie ne doit pas être complexe ni inaccessible. Les entreprises méritent des processus clairs, des partenaires fiables et des solutions adaptées à leurs réalités.",
      whyTagline: "Pourquoi nous choisir",
      whyTitleLine1: "Pourquoi nous choisir",
      whyTitleLine2: "pour vos besoins business.",
      whyText:
        "Nous combinons stratégie, design et technologie pour livrer des solutions digitales fiables qui soutiennent la croissance de votre entreprise.",
      whyRightTitle: "100% TAUX DE RÉUSSITE",
      feature1Title: "Produits web & mobile",
      feature1Text:
        "Nous concevons et développons des sites web et applications mobiles rapides, évolutifs et adaptés à vos utilisateurs.",
      feature2Title: "Cloud & intégration des systèmes",
      feature2Text:
        "Nous mettons en place une infrastructure cloud fiable et connectons vos outils, vos données et vos processus dans un écosystème fluide.",
      feature3Title: "E-commerce & paiements",
      feature3Text:
        "Nous déployons des solutions e-commerce et de paiement sécurisées pour vous aider à vendre, encaisser et opérer efficacement en ligne.",
      feature4Title: "IA & automatisation",
      feature4Text:
        "Nous automatisons les tâches répétitives et intégrons des cas d'usage IA concrets pour améliorer la vitesse, la précision et la productivité.",
      counterProjects: "Projets réalisés",
      counterAwards: "Prix remportés",
      counterReviews: "Avis positifs",
      counterClients: "Clients satisfaits",
      testimonialTagline: "Témoignages",
      testimonialTitleLine1: "Ce que disent nos clients",
      testimonialTitleLine2: "satisfaits de nous.",
      awardsTagline: "Prix",
      awardsTitleLine1: "Nous sommes fiers d'avoir reçu plus de 20",
      awardsTitleLine2: "prix en tant qu'agence certifiée.",
      awardsWinning: "Prix remportés",
      award1Title: "Prix de la meilleure agence marketing digital",
      award1Text:
        "Reconnu pour l'excellence de nos stratégies marketing digital et de l'exécution de nos campagnes.",
      award1Tag: "Prestige",
      award1Date: "15 août 2025",
      award2Title: "Service client exceptionnel",
      award2Text:
        "Récompensé pour la qualité de notre accompagnement client et la satisfaction fournie.",
      award2Tag: "Excellence",
      award2Date: "20 juillet 2025",
      award3Title: "Prix de la meilleure agence créative",
      award3Text:
        "Célébré pour nos approches innovantes et créatives en communication et branding.",
      award3Tag: "Réussite",
      award3Date: "15 août 2025",
      ctaTitleLine1: "Commencez votre parcours avec nos",
      ctaTitleLine2: "services d'exception.",
      ctaButton: "Commencer",
    },
    servicesPage: {
      common: {
        moreServices: "Plus de services",
        contactUs: "Contactez-nous",
        sendMessage: "Envoyer un message",
        getStarted: "Commencer",
      },
      overview: {
        tagline: "Nos services",
        titleLine1: "Des services digitaux évolutifs",
        titleLine2: "pour les entreprises modernes.",
        moreDetails: "Plus de détails",
      },
      list: {
        digital: "Stratégie et transformation digitale",
        web: "Conception et développement web",
        seo: "Visibilité et croissance sur les moteurs de recherche",
        design: "Design et image de marque",
        app: "Développement d'applications",
      },
      digital: {
        title1: "Stratégie et transformation digitale",
        text1:
          "Nous aidons les organisations à moderniser leurs opérations grâce à la stratégie digitale, l'IA et l'automatisation des processus.",
        title2: "De l'analyse à l'exécution",
        text2:
          "Notre équipe cartographie vos processus actuels, identifie les blocages et déploie des systèmes concrets qui améliorent la vitesse, la visibilité et la prise de décision.",
        feature1: "Diagnostic des processus métier",
        feature2: "Feuille de route digitale priorisée",
        feature3: "Opportunités IA et automatisation",
        feature4: "Plan d'intégration des systèmes",
        feature5: "Base de données et reporting",
        feature6: "Cycles d'amélioration continue",
        card1: "Analyse business",
        card2: "Activation IA",
        card3: "Architecture d'automatisation",
        card4: "Optimisation opérationnelle",
        impactTitle: "Impact opérationnel",
        impactText:
          "Nos implémentations réduisent les tâches répétitives et améliorent la fiabilité des processus entre équipes.",
        skill1: "Stratégie",
        skill2: "Automatisation",
        skill3: "Exécution",
        whyTitle: "Pourquoi ce service est essentiel",
        whyText:
          "Une base digitale solide apporte clarté et agilité pour faire évoluer votre entreprise durablement.",
        whyPoint1: "Aligné sur les objectifs business",
        whyPoint2: "Flux internes plus rapides",
        whyPoint3: "Moins de friction opérationnelle",
        whyPoint4: "Meilleure évolutivité à long terme",
        text4:
          "Nous livrons des programmes de transformation pragmatiques adaptés à votre maturité et à votre budget.",
        text5:
          "Partagez vos priorités et nous construirons un plan d'implémentation clair et mesurable.",
        contactText:
          "Discutez de vos enjeux avec notre équipe pour recevoir des recommandations adaptées à votre contexte.",
      },
      web: {
        title1: "Conception et développement web",
        text1:
          "Nous créons des sites et plateformes sécurisés, performants et conçus pour la croissance, la conversion et la maintenance.",
        title2: "Expérience utilisateur et ingénierie",
        text2:
          "De la structure au déploiement, nous combinons UX, code robuste et architecture optimisée pour le SEO.",
        feature1: "Architecture web sur mesure",
        feature2: "Interfaces responsives",
        feature3: "CMS et workflows de contenu",
        feature4: "Optimisation des performances",
        feature5: "Fondations SEO techniques",
        feature6: "Maintenance et support",
        card1: "Conception UX/UI",
        card2: "Développement frontend",
        card3: "Intégration backend",
        card4: "Assurance qualité",
        impactTitle: "Impact business",
        impactText:
          "Votre site devient un actif de croissance fiable qui communique clairement votre valeur et génère des leads.",
        skill1: "Design",
        skill2: "Développement",
        skill3: "Optimisation",
        whyTitle: "Pourquoi ce service est essentiel",
        whyText:
          "Une présence web moderne améliore la crédibilité, la confiance et la performance de conversion.",
        whyPoint1: "Expérience rapide et fiable",
        whyPoint2: "Conçu pour convertir",
        whyPoint3: "Fondation technique évolutive",
        whyPoint4: "Gestion de contenu simplifiée",
        text4:
          "Nous livrons des sites prêts pour la production, alignés sur votre marque et vos objectifs.",
        text5:
          "Commencez par un audit ou une refonte complète, et nous vous guiderons étape par étape.",
        contactText:
          "Partagez vos objectifs web et vos contraintes pour définir la bonne stack et le bon calendrier.",
      },
      seo: {
        title1: "Visibilité et croissance sur les moteurs de recherche",
        text1:
          "Nous améliorons votre visibilité organique grâce au SEO technique, à la stratégie de contenu et à l'optimisation basée sur la donnée.",
        title2: "Acquisition durable",
        text2:
          "Notre approche vise des positions solides, un trafic qualifié et des résultats business mesurables.",
        feature1: "Audits SEO techniques",
        feature2: "Recherche de mots-clés et intention",
        feature3: "Optimisation on-page",
        feature4: "Stratégie éditoriale",
        feature5: "Analytics et reporting",
        feature6: "Amélioration continue des classements",
        card1: "Diagnostic SEO",
        card2: "Planification de contenu",
        card3: "Suivi de performance",
        card4: "Itérations de croissance",
        impactTitle: "Impact croissance",
        impactText:
          "Nous vous aidons à attirer une audience pertinente et à améliorer la conversion depuis la recherche.",
        skill1: "SEO technique",
        skill2: "Stratégie de contenu",
        skill3: "Analyse de données",
        whyTitle: "Pourquoi ce service est essentiel",
        whyText:
          "La recherche est l'un des canaux les plus rentables à long terme pour développer votre demande.",
        whyPoint1: "Trafic organique qualifié",
        whyPoint2: "Meilleure découvrabilité",
        whyPoint3: "Coût d'acquisition réduit",
        whyPoint4: "Performance mesurable",
        text4:
          "Nous privilégions des actions SEO concrètes qui génèrent une croissance cumulative.",
        text5:
          "Confiez-nous votre performance actuelle et nous définirons une feuille de route réaliste.",
        contactText:
          "Envoyez l'URL de votre site et vos objectifs pour recevoir des recommandations SEO ciblées.",
      },
      design: {
        title1: "Design et image de marque",
        text1:
          "Nous concevons des systèmes de marque et des identités visuelles qui inspirent clarté, confiance et différenciation.",
        title2: "De l'identité à l'expérience",
        text2:
          "Notre processus aligne positionnement, message et interfaces digitales dans une présence cohérente.",
        feature1: "Ateliers de stratégie de marque",
        feature2: "Système d'identité visuelle",
        feature3: "Guidelines et assets de design",
        feature4: "Supports marketing",
        feature5: "Design produit et interface",
        feature6: "Audit de cohérence de marque",
        card1: "Découverte de marque",
        card2: "Conception d'identité",
        card3: "Production d'assets",
        card4: "Alignement de l'expérience",
        impactTitle: "Impact marque",
        impactText:
          "Une marque plus forte améliore la reconnaissance, la valeur perçue et la confiance des clients.",
        skill1: "Stratégie de marque",
        skill2: "Design visuel",
        skill3: "Exécution créative",
        whyTitle: "Pourquoi ce service est essentiel",
        whyText:
          "Un design cohérent et de qualité transforme votre marque en avantage concurrentiel durable.",
        whyPoint1: "Positionnement renforcé",
        whyPoint2: "Communication plus claire",
        whyPoint3: "Cohérence de marque",
        whyPoint4: "Confiance client accrue",
        text4:
          "Nous construisons des systèmes de design utilisables sur tous vos points de contact digitaux.",
        text5:
          "Que vous lanciez ou repositionniez votre marque, nous définissons un langage visuel distinctif.",
        contactText:
          "Partagez vos objectifs de marque et votre audience pour proposer une direction créative adaptée.",
      },
      app: {
        title1: "Développement d'applications",
        text1:
          "Nous concevons et développons des applications web et mobiles fiables, évolutives et utiles pour vos utilisateurs.",
        title2: "Vision produit et exécution technique",
        text2:
          "Du MVP à la production, nous gérons architecture, développement, intégration et déploiement avec des jalons clairs.",
        feature1: "Découverte produit et cadrage",
        feature2: "Développement web et mobile",
        feature3: "Intégration API et backend",
        feature4: "Authentification et sécurité",
        feature5: "Tests et contrôle qualité",
        feature6: "Mise en production et support",
        card1: "Planification produit",
        card2: "Ingénierie applicative",
        card3: "Intégration système",
        card4: "Support et itération",
        impactTitle: "Impact produit",
        impactText:
          "Nous livrons des applications qui améliorent la qualité de service, la vitesse opérationnelle et l'engagement client.",
        skill1: "Produit",
        skill2: "Ingénierie",
        skill3: "Livraison",
        whyTitle: "Pourquoi ce service est essentiel",
        whyText:
          "Une application bien construite simplifie les opérations et ouvre de nouvelles opportunités de revenus digitaux.",
        whyPoint1: "Mise sur le marché plus rapide",
        whyPoint2: "Architecture évolutive",
        whyPoint3: "Intégrations sécurisées",
        whyPoint4: "Maintenance durable",
        text4:
          "Nous développons selon des standards production pour faire évoluer votre produit sans refonte coûteuse.",
        text5:
          "Partagez votre idée, votre backlog ou vos contraintes techniques et nous construirons une feuille de route pragmatique.",
        contactText:
          "Échangez avec nos ingénieurs sur vos objectifs applicatifs pour définir la meilleure approche.",
      },
    },
    developerPage: {
      tagline: "Portail Développeur",
      titleLine1: "Construisez avec notre",
      titleHighlight: "plateforme développeur",
      titleLine2: "et livrez plus vite.",
      heroText:
        "Créez un compte pour accéder à nos API, guides d'intégration, exemples SDK et ressources techniques, conçus pour les équipes qui développent des produits digitaux modernes.",
      createAccount: "Créer un compte",
      requestAccess: "Se connecter",
      requestAccessHint:
        "Créez un compte, ou connectez-vous si vous en avez déjà un, pour demander l'accès API.",
      authBannerTitle: "Le Portail Développeur arrive bientôt",
      signupUnavailableMessage:
        "Merci pour votre intérêt. La création de compte développeur n'est pas encore disponible pendant que nous finalisons l'authentification, la gestion des clés API et l'onboarding. Nous annoncerons l'ouverture des inscriptions dès qu'elle sera disponible.",
      loginUnavailableMessage:
        "Merci pour votre visite. La connexion développeur n'est pas encore disponible pendant que nous finalisons l'onboarding, l'accès API et les parcours de documentation. Nous vous informerons dès que la connexion sera ouverte.",
      feature1Title: "Comptes développeurs",
      feature1Text:
        "Intégrez votre équipe, gérez vos environnements et contrôlez vos accès en toute sécurité depuis un seul espace.",
      feature2Title: "API et Intégrations",
      feature2Text:
        "Connectez paiements, ecommerce, workflows cloud et services d'automatisation via des endpoints API stables.",
      feature3Title: "Documentation et support",
      feature3Text:
        "Utilisez des guides pratiques, des exemples de démarrage et un support technique direct pour accélérer vos livraisons.",
      resourcesTitle: "Construisez, testez et déployez avec confiance",
      resourcesText:
        "Accédez à une documentation API pratique, des guides d'authentification, des parcours de configuration SDK et des checklists d'intégration pour passer plus vite du prototype à la production.",
      resource1: "Documentation API et flux d'authentification",
      resource2: "Guides SDK pour web et mobile",
      resource3: "Événements webhook et checklists d'intégration",
      resource4: "Accès sandbox et étapes de mise en production",
    },
    clientPortalPage: {
      tagline: "Portail client",
      titleLine1: "Ouvrez votre",
      titleHighlight: "compte client",
      titleLine2: "et suivez l'avancement de votre projet.",
      heroText:
        "Le portail client vous permet de suivre chaque étape de votre projet avec PAPOUDIGITAL, de vérifier les livrables, valider les jalons et rester aligné en temps réel.",
      createAccount: "Ouvrir un compte",
      signIn: "Se connecter",
      contactTeam: "Contacter l'équipe projet",
      feature1Title: "Compte client sécurisé",
      feature1Text:
        "Créez votre compte pour accéder à votre espace, vos documents et vos mises à jour projet au même endroit.",
      feature2Title: "Suivi du calendrier projet",
      feature2Text:
        "Suivez chaque phase, de la découverte au lancement, avec des statuts clairs et les prochaines actions.",
      feature3Title: "Communication directe",
      feature3Text:
        "Collaborez avec notre équipe via des notes partagées, des validations et un historique centralisé.",
      trackingTitle: "Ce que vous pouvez suivre",
      trackingText:
        "Suivez votre projet du cadrage à la livraison avec une visibilité claire sur l’avancement, les prochains jalons, les validations et le suivi support.",
      tracking1: "Statut du sprint en cours et pourcentage de progression",
      tracking2: "Jalons, échéances et validations en attente",
      tracking3: "Fichiers livrés, versions et notes de livraison",
      tracking4: "Demandes prioritaires et suivi support",
      authBannerTitle: "Le Portail Client arrive bientôt",
      signupUnavailableMessage:
        "Merci pour votre intérêt. La création de compte client n'est pas encore disponible pendant que nous finalisons l'onboarding du portail et l'accès sécurisé à l'espace client. Nous annoncerons l'ouverture des inscriptions dès qu'elle sera disponible.",
      loginUnavailableMessage:
        "Merci pour votre visite. La connexion client n'est pas encore disponible pendant que nous finalisons l'onboarding du portail et les parcours d'accès. Nous vous informerons dès que la connexion sera ouverte.",
    },
    faqPage: {
      tagline: "FAQ",
      titleLine1: "Questions",
      titleLine2: "fréquentes",
      intro:
        "Tout ce que vous devez savoir sur nos services, notre mode de livraison, nos délais, notre approche tarifaire et notre support à long terme.",
      button: "Contactez-nous",
      q1Title: "Quels services PapouDigital propose-t-il ?",
      q1Desc:
        "Nous concevons et livrons des sites web, applications mobiles, infrastructures cloud, plateformes ecommerce, intégrations de paiement, solutions IA et systèmes d'automatisation. Nous assurons aussi le conseil, la maintenance et l'évolution produit.",
      q2Title: "Avec quels types d'entreprises travaillez-vous ?",
      q2Desc:
        "Nous accompagnons des startups, des PME et des entreprises établies dans plusieurs secteurs. Que vous lanciez un nouveau produit ou modernisiez vos opérations, nous adaptons notre approche à votre niveau de maturité.",
      q3Title: "Comment un projet démarre-t-il en général ?",
      q3Desc:
        "Nous commençons par une phase de découverte pour comprendre vos objectifs, contraintes et priorités. Nous définissons ensuite le périmètre, le calendrier, les livrables et la direction technique avant le design et le développement.",
      q4Title: "Quels sont les délais de livraison habituels ?",
      q4Desc:
        "Les délais dépendent de la complexité et du périmètre. Un MVP ciblé peut être livré en quelques semaines, tandis qu'une plateforme multi-modules peut prendre plusieurs mois. Nous fournissons une feuille de route par phases avec des jalons clairs.",
      q5Title: "Pouvez-vous vous intégrer à nos outils et systèmes existants ?",
      q5Desc:
        "Oui. Nous intégrons régulièrement des CRM, ERP, passerelles de paiement, outils ecommerce, services cloud et API sur mesure pour garder vos opérations connectées et cohérentes.",
      q6Title: "Concevez-vous des solutions évolutives et sécurisées ?",
      q6Desc:
        "Oui. Nous appliquons des pratiques de développement sécurisé, des contrôles d'accès par rôles et une architecture prête pour la production afin que votre solution évolue de manière fiable.",
      q7Title: "Proposez-vous des services d'IA et d'automatisation ?",
      q7Desc:
        "Oui. Nous identifions les cas d'usage à fort impact puis mettons en place des flux IA et d'automatisation concrets pour le support, les opérations, le reporting et la prise de décision.",
      q8Title: "Serons-nous propriétaires du produit final et du code source ?",
      q8Desc:
        "Après paiement complet, la propriété des livrables personnalisés est transférée à votre organisation selon les termes du contrat signé. Les frameworks internes réutilisables restent la propriété de PapouDigital.",
      q9Title: "Assurez-vous un support après la mise en production ?",
      q9Desc:
        "Oui. Nous proposons la maintenance post-lancement, la supervision, la correction de bugs, l'optimisation des performances et les améliorations continues selon vos priorités de croissance.",
      q10Title: "Comment fonctionnent les tarifs et les paiements ?",
      q10Desc:
        "Les tarifs dépendent du périmètre, de la complexité et du mode d'accompagnement. Nous pouvons travailler en mode forfait par jalons ou en abonnement mensuel. Les conditions de paiement sont précisées dans la proposition ou le SOW.",
      q11Title: "Peut-on suivre l'avancement pendant le projet ?",
      q11Desc:
        "Oui. Via notre portail client et des points réguliers, vous suivez en temps réel le statut des sprints, les jalons, les livrables, les validations et les décisions clés.",
      q12Title: "Comment démarrer avec PapouDigital ?",
      q12Desc:
        "Utilisez la page contact pour partager vos objectifs. Nous analyserons votre besoin, planifierons un appel de découverte et proposerons un plan adapté pour lancer et faire évoluer votre projet.",
    },
    servicesHubPage: {
      whyChoose: {
        tagline: "Pourquoi nous choisir",
        titleLine1: "Pourquoi les entreprises choisissent notre",
        titleLine2: "qualité de service pour leur",
        titleHighlight: "croissance",
        text1:
          "Nous livrons des solutions digitales concrètes adaptées à vos opérations, à votre budget et à vos objectifs à long terme.",
        text2:
          "Notre équipe combine stratégie, ingénierie et rigueur d’exécution pour livrer des produits fiables et des résultats mesurables.",
        reviewLabel: "Avis positifs",
        projectLabel: "Projets réalisés",
        point1Title: "Équipe tech pluridisciplinaire",
        point1Text: "Designers, développeurs et ingénieurs alignés de la découverte au lancement.",
        point2Title: "Exécution avec jalons clairs",
        point2Text: "Livraison structurée avec des délais, des priorités et des responsabilités transparents.",
        point3Title: "Focus IA et automatisation",
        point3Text: "Nous identifions les automatisations à fort impact pour gagner en vitesse et en efficacité.",
        point4Title: "Livraison évolutive et fiable",
        point4Text: "Architecture et implémentation conçues pour la performance, la sécurité et la croissance.",
      },
      contact: {
        tagline: "Lancer un projet",
        titleLine1: "Besoin d’une solution digitale ?",
        titleLine2: "Parlons de vos objectifs",
        textLine1: "Partagez vos défis et vos priorités.",
        textLine2: "Nous vous proposerons la bonne solution et un plan de livraison clair.",
        leadName: "Équipe PapouDigital",
        leadRole: "Delivery projet",
        placeholderName: "Votre nom",
        placeholderEmail: "Adresse e-mail",
        placeholderInquiry: "Service recherché",
        placeholderDetails: "Détails du projet",
        sendMessage: "Envoyer un message",
        successMessage: "Message envoyé avec succès !",
      },
      faq: {
        tagline: "FAQ",
        titleLine1: "Questions",
        titleLine2: "fréquentes",
        text: "Des réponses claires sur nos services, nos délais, notre mode de collaboration et notre processus de livraison.",
        button: "Nous contacter",
        q1Title: "Quels services PapouDigital peut-il livrer ?",
        q1Desc:
          "Nous concevons et développons des sites web, applications mobiles, infrastructures cloud, solutions e-commerce, intégrations de paiement, workflows IA et systèmes d’automatisation.",
        q2Title: "Comment se déroule un projet type ?",
        q2Desc:
          "Nous suivons un processus clair : découverte, planification, design, développement, tests, lancement et optimisation continue avec des jalons définis.",
        q3Title: "Pouvez-vous vous intégrer à nos outils existants ?",
        q3Desc:
          "Oui. Nous nous intégrons à vos systèmes actuels, fournisseurs de paiement, CRM et outils internes pour maintenir des opérations fluides et évolutives.",
        q4Title: "Proposez-vous un support après le lancement ?",
        q4Desc:
          "Oui. Nous assurons maintenance, suivi de performance, évolutions fonctionnelles et améliorations continues selon vos besoins produit et business.",
      },
      pricing: {
        tagline: "Modèles d’accompagnement",
        titleLine1: "Choisissez l’offre de service",
        titleLine2: "la plus adaptée à vos",
        titleHighlight: "besoins business",
        monthly: "Mensuel",
        yearly: "Annuel",
        perMonth: "/Par mois",
        perYear: "/Par an",
        choosePlan: "Choisir l’offre",
        plan1Title: "Starter",
        plan1Feature1: "Atelier de cadrage projet",
        plan1Feature2: "Rapport de recommandations techniques",
        plan1Feature3: "Support prioritaire par e-mail",
        plan1Feature4: "Revue mensuelle des performances",
        plan1Feature5: "Conseil de base en automatisation",
        plan1Feature6: "Feuille de route de livraison",
        plan2Title: "Business",
        plan2Feature1: "Tout ce qui est inclus dans Starter",
        plan2Feature2: "Chef de projet dédié",
        plan2Feature3: "Livraison de fonctionnalités web ou mobile",
        plan2Feature4: "Support intégrations et API",
        plan2Feature5: "Points d’avancement bihebdomadaires",
        plan2Feature6: "Cycles d’optimisation technique",
        plan3Title: "Scale",
        plan3Feature1: "Tout ce qui est inclus dans Business",
        plan3Feature2: "Implémentation IA et automatisation",
        plan3Feature3: "Montée en charge cloud et architecture",
        plan3Feature4: "Contrôles de sécurité avancés",
        plan3Feature5: "Capacité d’exécution accélérée",
        plan3Feature6: "Reporting exécutif de livraison",
      },
    },
  },
} as const;

const FALLBACK_LOCALE: Locale = "en";

export const getTranslation = (locale: Locale, key: string): string => {
  const safeLocale = translations[locale] ? locale : FALLBACK_LOCALE;
  const value = key.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc === "object" && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations[safeLocale]);

  if (typeof value === "string") {
    return value;
  }

  const fallbackValue = key.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc === "object" && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations[FALLBACK_LOCALE]);

  return typeof fallbackValue === "string" ? fallbackValue : key;
};

const flattenStringKeys = (value: unknown, prefix = ""): string[] => {
  if (typeof value === "string") return [prefix];
  if (typeof value !== "object" || value === null) return [];

  return Object.entries(value).flatMap(([k, v]) => {
    const next = prefix ? `${prefix}.${k}` : k;
    return flattenStringKeys(v, next);
  });
};

export const getAllTranslationKeys = (locale: Locale = "en"): string[] => {
  const safeLocale = translations[locale] ? locale : FALLBACK_LOCALE;
  const keys = flattenStringKeys(translations[safeLocale]);
  return Array.from(new Set(keys)).sort();
};
