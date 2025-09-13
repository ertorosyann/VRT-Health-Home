import { type Locale } from '../i18n'

export const servicesTranslations = {
  en: {
    hero: {
      title: 'Our Healthcare Services',
      subtitle: 'We offer a comprehensive range of professional home healthcare services designed to meet your specific needs and help you maintain your independence at home.',
    },
    services: [
        {
          title: 'Skilled Nurses',
          description: 'Performs initial assessments thoroughly and comprehensively, in the privacy and comfort of the patient\'s resident. Develops care plan and follow-up visits until optimum recovery is attained.',
          features: [
            'Comprehensive initial assessments',
            'Personalized care plan development',
            'Follow-up visits for optimal recovery',
            'Private and comfortable home environment',
            'Professional nursing expertise',
            'Continuous monitoring and adjustment',
          ],
        },
        {
          title: 'Physical Therapist',
          description: 'Evaluate and treat the patient\'s ability to move. This may include: post-orthopedic surgery management, gait/ambulation training, ROM/strengthening exercises, bed mobility, transfers, and a home exercise program.',
          features: [
            'Post-orthopedic surgery management',
            'Gait and ambulation training',
            'ROM and strengthening exercises',
            'Bed mobility training',
            'Transfer assistance',
            'Home exercise program development',
          ],
        },
        {
          title: 'Occupational Therapist',
          description: 'Develops patient\'s training program to regain and maintain the skills necessary for health, productivity, and independence in everyday life.',
          features: [
            'Skills training for daily activities',
            'Health maintenance programs',
            'Productivity enhancement',
            'Independence building',
            'Adaptive techniques',
            'Quality of life improvement',
          ],
        },
        {
          title: 'Speech Therapist',
          description: 'Evaluates defects in patient\'s communication, disorders in speech and swallowing functions. Develops therapeutic exercises up to the optimum level possible.',
          features: [
            'Communication defect evaluation',
            'Speech disorder assessment',
            'Swallowing function evaluation',
            'Therapeutic exercise development',
            'Optimal function achievement',
            'Communication improvement',
          ],
        },
        {
          title: 'Dietician',
          description: 'Evaluates current diet and provides counseling for daily nutritional guidance that will promote healing and health maintenance.',
          features: [
            'Current diet evaluation',
            'Nutritional counseling',
            'Daily guidance provision',
            'Healing promotion',
            'Health maintenance support',
            'Personalized meal planning',
          ],
        },
        {
          title: 'Medical Social Services',
          description: 'Renders assistance related to the patient\'s medical concerns, community resources to alleviate the social, emotional, environmental and financial factors affecting the patient\'s well-being.',
          features: [
            'Medical concern assistance',
            'Community resource connection',
            'Social factor alleviation',
            'Emotional support provision',
            'Environmental factor management',
            'Financial assistance guidance',
          ],
        },
        {
          title: 'Home Health Aides',
          description: 'Assist patients with activities of daily living that covers personal care like bathing, dressing, grooming, feeding and home environmental safety.',
          features: [
            'Personal care assistance',
            'Bathing and hygiene support',
            'Dressing and grooming help',
            'Feeding assistance',
            'Home safety management',
            'Daily living activities',
          ],
        },
    ],
    whoNeedsCare: {
      title: 'WHO NEEDS HOME CARE?',
      subtitle: 'Home healthcare services are available for individuals who meet specific criteria and have a physician\'s prescription.',
      criteria: [
        'Anyone who is ill',
        'Recently discharged from the hospital',
        'In a long-term care facility',
        'Has orders from a physician requiring skilled medical services',
        'Is homebound'
      ],
      note: 'You must have a Doctor prescribe the home-based care. This means that if you are enrolled in a managed care plan, the care must be authorized by your primary care Physician.'
    },
    paymentOptions: {
      title: 'WHO PAYS FOR THESE SERVICES?',
      subtitle: 'We work with various payment sources to make our services accessible to those who need them.',
      options: [
        {
          name: 'Medicare',
          description: 'Coverage for eligible individuals under Medicare guidelines'
        },
        {
          name: 'Medi-Cal',
          description: 'California\'s Medicaid program for low-income individuals'
        },
        {
          name: 'Private Insurance',
          description: 'Coverage varies by plan and benefit structure'
        },
        {
          name: 'Private Pay',
          description: 'Self-payment option for those without insurance coverage'
        }
      ],
      requirement: 'A physician prescription is required for all home healthcare services.'
    },
    process: {
      title: 'How Our Services Work',
      subtitle: 'We make it simple to get started with our home healthcare services. Here\'s our straightforward process.',
      steps: [
        {
          step: '01',
          title: 'Initial Assessment',
          description: 'We conduct a comprehensive evaluation of your healthcare needs and home environment.',
        },
        {
          step: '02',
          title: 'Care Plan Development',
          description: 'Our team creates a personalized care plan tailored to your specific requirements.',
        },
        {
          step: '03',
          title: 'Service Implementation',
          description: 'We begin providing services according to your approved care plan.',
        },
        {
          step: '04',
          title: 'Ongoing Monitoring',
          description: 'Regular assessments and adjustments to ensure optimal care outcomes.',
        },
      ],
    },
    coverage: {
      title: 'Service Areas',
      subtitle: 'We provide our home healthcare services throughout the greater metropolitan area, ensuring convenient access to quality care for you and your family.',
      features: [
        'Primary service area within 25 miles',
        'Extended coverage available upon request',
        '24/7 emergency response available',
      ],
      locationTitle: 'Our Office Location',
      locationDescription: 'We\'re conveniently located in the heart of the city, making it easy for you to visit us and discuss your healthcare needs in person.',
      address: 'Address',
      businessHours: 'Business Hours',
      businessHoursText: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM',
      phone: 'Phone',
      coverageTitle: 'Coverage Area',
      coverageDescription: 'Contact us to confirm service availability in your specific location. We\'re committed to serving our community with accessible, quality healthcare.',
      checkAvailability: 'Check Availability',
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Contact us today to discuss your healthcare needs and learn how our services can help you or your loved ones maintain independence at home.',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
    },
  },
  zh: {
    hero: {
      title: '我们的医疗服务',
      subtitle: '我们提供全面的专业居家医疗服务，旨在满足您的特定需求，帮助您在家中保持独立性。',
    },
    services: [
        {
          title: '专业护士',
          description: '在患者居住的私密和舒适环境中，全面彻底地进行初步评估。制定护理计划并进行随访，直到达到最佳康复效果。',
          features: [
            '全面初步评估',
            '个性化护理计划制定',
            '最佳康复随访',
            '私密舒适的家庭环境',
            '专业护理技能',
            '持续监测和调整',
          ],
        },
        {
          title: '物理治疗师',
          description: '评估和治疗患者的移动能力。这可能包括：骨科手术后管理、步态/行走训练、关节活动度/强化练习、床上活动、转移和家庭运动计划。',
          features: [
            '骨科手术后管理',
            '步态和行走训练',
            '关节活动度和强化练习',
            '床上活动训练',
            '转移协助',
            '家庭运动计划制定',
          ],
        },
        {
          title: '职业治疗师',
          description: '制定患者训练计划，以重新获得和维持健康、生产力和日常生活独立性所需的技能。',
          features: [
            '日常活动技能训练',
            '健康维护计划',
            '生产力提升',
            '独立性建设',
            '适应性技术',
            '生活质量改善',
          ],
        },
        {
          title: '言语治疗师',
          description: '评估患者沟通缺陷、言语和吞咽功能障碍。制定治疗练习以达到最佳水平。',
          features: [
            '沟通缺陷评估',
            '言语障碍评估',
            '吞咽功能评估',
            '治疗练习制定',
            '最佳功能实现',
            '沟通改善',
          ],
        },
        {
          title: '营养师',
          description: '评估当前饮食并提供日常营养指导咨询，促进愈合和健康维护。',
          features: [
            '当前饮食评估',
            '营养咨询',
            '日常指导提供',
            '愈合促进',
            '健康维护支持',
            '个性化膳食计划',
          ],
        },
        {
          title: '医疗社会服务',
          description: '提供与患者医疗问题相关的协助，社区资源以缓解影响患者福祉的社会、情感、环境和财务因素。',
          features: [
            '医疗问题协助',
            '社区资源连接',
            '社会因素缓解',
            '情感支持提供',
            '环境因素管理',
            '财务协助指导',
          ],
        },
        {
          title: '家庭健康助手',
          description: '协助患者进行日常生活活动，包括个人护理如洗澡、穿衣、梳洗、喂食和家庭环境安全。',
          features: [
            '个人护理协助',
            '洗澡和卫生支持',
            '穿衣和梳洗帮助',
            '喂食协助',
            '家庭安全管理',
            '日常生活活动',
          ],
        },
    ],
    whoNeedsCare: {
      title: '谁需要居家护理？',
      subtitle: '居家医疗服务适用于符合特定标准并有医生处方的个人。',
      criteria: [
        '任何患病的人',
        '最近从医院出院的人',
        '在长期护理机构的人',
        '有医生要求专业医疗服务的医嘱的人',
        '居家的人'
      ],
      note: '您必须有医生开具居家护理处方。这意味着如果您参加了管理式护理计划，护理必须由您的主治医生授权。'
    },
    paymentOptions: {
      title: '谁为这些服务付费？',
      subtitle: '我们与各种付费来源合作，使我们的服务对需要的人更容易获得。',
      options: [
        {
          name: '医疗保险',
          description: '符合医疗保险指南的合格个人覆盖'
        },
        {
          name: '加州医疗补助',
          description: '加州为低收入个人提供的医疗补助计划'
        },
        {
          name: '私人保险',
          description: '覆盖范围因计划和福利结构而异'
        },
        {
          name: '私人付费',
          description: '为没有保险覆盖的人提供的自费选择'
        }
      ],
      requirement: '所有居家医疗服务都需要医生处方。'
    },
    process: {
      title: '我们的服务如何运作',
      subtitle: '我们让开始使用我们的居家医疗服务变得简单。这是我们直接的过程。',
      steps: [
        {
          step: '01',
          title: '初步评估',
          description: '我们对您的医疗需求和家庭环境进行全面评估。',
        },
        {
          step: '02',
          title: '护理计划制定',
          description: '我们的团队创建适合您特定要求的个性化护理计划。',
        },
        {
          step: '03',
          title: '服务实施',
          description: '我们根据您批准的护理计划开始提供服务。',
        },
        {
          step: '04',
          title: '持续监测',
          description: '定期评估和调整，确保最佳护理结果。',
        },
      ],
    },
    coverage: {
      title: '服务区域',
      subtitle: '我们在整个大都市地区提供居家医疗服务，确保您和您的家人能够方便地获得优质护理。',
      features: [
        '主要服务区域在25英里内',
        '可根据要求提供扩展覆盖',
        '24/7紧急响应服务',
      ],
      locationTitle: '我们的办公地点',
      locationDescription: '我们位于市中心，方便您访问我们并亲自讨论您的医疗需求。',
      address: '地址',
      businessHours: '营业时间',
      businessHoursText: '周一至周五：上午8:00 - 下午6:00\n周六：上午9:00 - 下午2:00',
      phone: '电话',
      coverageTitle: '覆盖区域',
      coverageDescription: '请联系我们确认您特定位置的服务可用性。我们致力于为我们的社区提供可访问的优质医疗护理。',
      checkAvailability: '检查可用性',
    },
    cta: {
      title: '准备开始了吗？',
      subtitle: '今天就联系我们讨论您的医疗需求，了解我们的服务如何帮助您或您的亲人在家中保持独立性。',
      contactUs: '联系我们',
      learnMore: '了解更多',
    },
  },
  es: {
    hero: {
      title: 'Nuestros Servicios de Atención Médica',
      subtitle: 'Ofrecemos una amplia gama de servicios profesionales de atención médica domiciliaria diseñados para satisfacer sus necesidades específicas y ayudarle a mantener su independencia en casa.',
    },
    services: [
        {
          title: 'Enfermeras Especializadas',
          description: 'Realiza evaluaciones iniciales de manera exhaustiva y completa, en la privacidad y comodidad del residente del paciente. Desarrolla plan de cuidado y visitas de seguimiento hasta alcanzar la recuperación óptima.',
          features: [
            'Evaluaciones iniciales exhaustivas',
            'Desarrollo de plan de cuidado personalizado',
            'Visitas de seguimiento para recuperación óptima',
            'Ambiente privado y cómodo en el hogar',
            'Experiencia profesional de enfermería',
            'Monitoreo y ajuste continuo',
          ],
        },
        {
          title: 'Terapeuta Físico',
          description: 'Evalúa y trata la capacidad de movimiento del paciente. Esto puede incluir: manejo post-cirugía ortopédica, entrenamiento de marcha/ambulación, ejercicios de ROM/fortalecimiento, movilidad en cama, transferencias y programa de ejercicios en casa.',
          features: [
            'Manejo post-cirugía ortopédica',
            'Entrenamiento de marcha y ambulación',
            'Ejercicios de ROM y fortalecimiento',
            'Entrenamiento de movilidad en cama',
            'Asistencia en transferencias',
            'Desarrollo de programa de ejercicios en casa',
          ],
        },
        {
          title: 'Terapeuta Ocupacional',
          description: 'Desarrolla programa de entrenamiento del paciente para recuperar y mantener las habilidades necesarias para la salud, productividad e independencia en la vida cotidiana.',
          features: [
            'Entrenamiento de habilidades para actividades diarias',
            'Programas de mantenimiento de salud',
            'Mejora de productividad',
            'Construcción de independencia',
            'Técnicas adaptativas',
            'Mejora de calidad de vida',
          ],
        },
        {
          title: 'Terapeuta del Habla',
          description: 'Evalúa defectos en la comunicación del paciente, trastornos en las funciones del habla y deglución. Desarrolla ejercicios terapéuticos hasta el nivel óptimo posible.',
          features: [
            'Evaluación de defectos de comunicación',
            'Evaluación de trastornos del habla',
            'Evaluación de función de deglución',
            'Desarrollo de ejercicios terapéuticos',
            'Logro de función óptima',
            'Mejora de comunicación',
          ],
        },
        {
          title: 'Dietista',
          description: 'Evalúa la dieta actual y proporciona consejería para orientación nutricional diaria que promoverá la curación y mantenimiento de la salud.',
          features: [
            'Evaluación de dieta actual',
            'Consejería nutricional',
            'Provisión de orientación diaria',
            'Promoción de curación',
            'Apoyo de mantenimiento de salud',
            'Planificación de comidas personalizada',
          ],
        },
        {
          title: 'Servicios Sociales Médicos',
          description: 'Presta asistencia relacionada con las preocupaciones médicas del paciente, recursos comunitarios para aliviar los factores sociales, emocionales, ambientales y financieros que afectan el bienestar del paciente.',
          features: [
            'Asistencia en preocupaciones médicas',
            'Conexión con recursos comunitarios',
            'Alivio de factores sociales',
            'Provisión de apoyo emocional',
            'Manejo de factores ambientales',
            'Orientación de asistencia financiera',
          ],
        },
        {
          title: 'Asistentes de Salud en el Hogar',
          description: 'Asisten a pacientes con actividades de la vida diaria que cubren cuidado personal como bañarse, vestirse, arreglarse, alimentarse y seguridad ambiental del hogar.',
          features: [
            'Asistencia de cuidado personal',
            'Apoyo de baño e higiene',
            'Ayuda para vestirse y arreglarse',
            'Asistencia en alimentación',
            'Manejo de seguridad del hogar',
            'Actividades de la vida diaria',
          ],
        },
    ],
    whoNeedsCare: {
      title: '¿QUIÉN NECESITA CUIDADO EN CASA?',
      subtitle: 'Los servicios de atención médica domiciliaria están disponibles para personas que cumplen criterios específicos y tienen una receta médica.',
      criteria: [
        'Cualquier persona que esté enferma',
        'Recientemente dada de alta del hospital',
        'En una instalación de cuidado a largo plazo',
        'Tiene órdenes de un médico que requieren servicios médicos especializados',
        'Está confinada en casa'
      ],
      note: 'Debe tener un Doctor que recete el cuidado en casa. Esto significa que si está inscrito en un plan de cuidado administrado, el cuidado debe ser autorizado por su Médico de atención primaria.'
    },
    paymentOptions: {
      title: '¿QUIÉN PAGA POR ESTOS SERVICIOS?',
      subtitle: 'Trabajamos con varias fuentes de pago para hacer nuestros servicios accesibles a quienes los necesitan.',
      options: [
        {
          name: 'Medicare',
          description: 'Cobertura para personas elegibles bajo las pautas de Medicare'
        },
        {
          name: 'Medi-Cal',
          description: 'Programa de Medicaid de California para personas de bajos ingresos'
        },
        {
          name: 'Seguro Privado',
          description: 'La cobertura varía según el plan y la estructura de beneficios'
        },
        {
          name: 'Pago Privado',
          description: 'Opción de pago propio para aquellos sin cobertura de seguro'
        }
      ],
      requirement: 'Se requiere una receta médica para todos los servicios de atención médica domiciliaria.'
    },
    process: {
      title: 'Cómo Funcionan Nuestros Servicios',
      subtitle: 'Hacemos que sea simple comenzar con nuestros servicios de atención médica domiciliaria. Aquí está nuestro proceso directo.',
      steps: [
        {
          step: '01',
          title: 'Evaluación Inicial',
          description: 'Realizamos una evaluación integral de sus necesidades de atención médica y entorno hogareño.',
        },
        {
          step: '02',
          title: 'Desarrollo del Plan de Cuidado',
          description: 'Nuestro equipo crea un plan de cuidado personalizado adaptado a sus requisitos específicos.',
        },
        {
          step: '03',
          title: 'Implementación del Servicio',
          description: 'Comenzamos a proporcionar servicios según su plan de cuidado aprobado.',
        },
        {
          step: '04',
          title: 'Monitoreo Continuo',
          description: 'Evaluaciones regulares y ajustes para asegurar resultados óptimos del cuidado.',
        },
      ],
    },
    coverage: {
      title: 'Áreas de Servicio',
      subtitle: 'Proporcionamos nuestros servicios de atención médica domiciliaria en toda el área metropolitana, asegurando acceso conveniente a atención de calidad para usted y su familia.',
      features: [
        'Área de servicio principal dentro de 25 millas',
        'Cobertura extendida disponible bajo solicitud',
        'Respuesta de emergencia 24/7 disponible',
      ],
      locationTitle: 'Nuestra Ubicación de Oficina',
      locationDescription: 'Estamos convenientemente ubicados en el corazón de la ciudad, facilitándole visitarnos y discutir sus necesidades de atención médica en persona.',
      address: 'Dirección',
      businessHours: 'Horarios Comerciales',
      businessHoursText: 'Lunes - Viernes: 8:00 AM - 6:00 PM\nSábado: 9:00 AM - 2:00 PM',
      phone: 'Teléfono',
      coverageTitle: 'Área de Cobertura',
      coverageDescription: 'Contáctenos para confirmar la disponibilidad del servicio en su ubicación específica. Estamos comprometidos a servir a nuestra comunidad con atención médica accesible y de calidad.',
      checkAvailability: 'Verificar Disponibilidad',
    },
    cta: {
      title: '¿Listo para Comenzar?',
      subtitle: 'Contáctenos hoy para discutir sus necesidades de atención médica y aprender cómo nuestros servicios pueden ayudarle a usted o a sus seres queridos a mantener la independencia en casa.',
      contactUs: 'Contáctenos',
      learnMore: 'Saber Más',
    },
  },
  fr: {
    hero: {
      title: 'Nos Services de Soins de Santé',
      subtitle: 'Nous offrons une large gamme de services de soins de santé à domicile professionnels conçus pour répondre à vos besoins spécifiques et vous aider à maintenir votre indépendance à la maison.',
    },
    services: [
        {
          title: 'Infirmières Spécialisées',
          description: 'Effectue des évaluations initiales de manière approfondie et complète, dans l\'intimité et le confort du domicile du patient. Développe un plan de soins et des visites de suivi jusqu\'à atteindre une récupération optimale.',
          features: [
            'Évaluations initiales complètes',
            'Développement de plan de soins personnalisé',
            'Visites de suivi pour récupération optimale',
            'Environnement privé et confortable à domicile',
            'Expertise infirmière professionnelle',
            'Surveillance et ajustement continus',
          ],
        },
        {
          title: 'Physiothérapeute',
          description: 'Évalue et traite la capacité de mouvement du patient. Cela peut inclure : gestion post-chirurgie orthopédique, entraînement de marche/ambulation, exercices ROM/renforcement, mobilité au lit, transferts et programme d\'exercices à domicile.',
          features: [
            'Gestion post-chirurgie orthopédique',
            'Entraînement de marche et d\'ambulation',
            'Exercices ROM et de renforcement',
            'Entraînement de mobilité au lit',
            'Assistance aux transferts',
            'Développement de programme d\'exercices à domicile',
          ],
        },
        {
          title: 'Ergothérapeute',
          description: 'Développe le programme d\'entraînement du patient pour retrouver et maintenir les compétences nécessaires à la santé, la productivité et l\'indépendance dans la vie quotidienne.',
          features: [
            'Formation aux compétences pour activités quotidiennes',
            'Programmes de maintien de la santé',
            'Amélioration de la productivité',
            'Construction de l\'indépendance',
            'Techniques adaptatives',
            'Amélioration de la qualité de vie',
          ],
        },
        {
          title: 'Orthophoniste',
          description: 'Évalue les défauts de communication du patient, les troubles des fonctions de parole et de déglutition. Développe des exercices thérapeutiques jusqu\'au niveau optimal possible.',
          features: [
            'Évaluation des défauts de communication',
            'Évaluation des troubles de la parole',
            'Évaluation de la fonction de déglutition',
            'Développement d\'exercices thérapeutiques',
            'Atteinte de fonction optimale',
            'Amélioration de la communication',
          ],
        },
        {
          title: 'Diététiste',
          description: 'Évalue le régime actuel et fournit des conseils pour l\'orientation nutritionnelle quotidienne qui favorisera la guérison et le maintien de la santé.',
          features: [
            'Évaluation du régime actuel',
            'Conseil nutritionnel',
            'Fourniture d\'orientation quotidienne',
            'Promotion de la guérison',
            'Soutien au maintien de la santé',
            'Planification de repas personnalisée',
          ],
        },
        {
          title: 'Services Sociaux Médicaux',
          description: 'Fournit une assistance liée aux préoccupations médicales du patient, ressources communautaires pour atténuer les facteurs sociaux, émotionnels, environnementaux et financiers affectant le bien-être du patient.',
          features: [
            'Assistance aux préoccupations médicales',
            'Connexion aux ressources communautaires',
            'Atténuation des facteurs sociaux',
            'Fourniture de soutien émotionnel',
            'Gestion des facteurs environnementaux',
            'Orientation d\'assistance financière',
          ],
        },
        {
          title: 'Aides-Soignants à Domicile',
          description: 'Assistent les patients avec les activités de la vie quotidienne qui couvrent les soins personnels comme se laver, s\'habiller, se toiletter, se nourrir et la sécurité environnementale du domicile.',
          features: [
            'Assistance aux soins personnels',
            'Soutien au bain et à l\'hygiène',
            'Aide à l\'habillage et au toilettage',
            'Assistance à l\'alimentation',
            'Gestion de la sécurité du domicile',
            'Activités de la vie quotidienne',
          ],
        },
    ],
    whoNeedsCare: {
      title: 'QUI A BESOIN DE SOINS À DOMICILE ?',
      subtitle: 'Les services de soins de santé à domicile sont disponibles pour les personnes qui répondent à des critères spécifiques et ont une ordonnance médicale.',
      criteria: [
        'Toute personne malade',
        'Récemment sortie de l\'hôpital',
        'Dans un établissement de soins de longue durée',
        'A des ordres d\'un médecin nécessitant des services médicaux spécialisés',
        'Est confinée à domicile'
      ],
      note: 'Vous devez avoir un médecin qui prescrit les soins à domicile. Cela signifie que si vous êtes inscrit dans un plan de soins gérés, les soins doivent être autorisés par votre médecin de soins primaires.'
    },
    paymentOptions: {
      title: 'QUI PAIE POUR CES SERVICES ?',
      subtitle: 'Nous travaillons avec diverses sources de paiement pour rendre nos services accessibles à ceux qui en ont besoin.',
      options: [
        {
          name: 'Medicare',
          description: 'Couverture pour les personnes éligibles selon les directives de Medicare'
        },
        {
          name: 'Medi-Cal',
          description: 'Programme Medicaid de Californie pour les personnes à faible revenu'
        },
        {
          name: 'Assurance Privée',
          description: 'La couverture varie selon le plan et la structure des avantages'
        },
        {
          name: 'Paiement Privé',
          description: 'Option d\'auto-paiement pour ceux sans couverture d\'assurance'
        }
      ],
      requirement: 'Une ordonnance médicale est requise pour tous les services de soins de santé à domicile.'
    },
    process: {
      title: 'Comment Nos Services Fonctionnent',
      subtitle: 'Nous rendons simple de commencer avec nos services de soins de santé à domicile. Voici notre processus direct.',
      steps: [
        {
          step: '01',
          title: 'Évaluation Initiale',
          description: 'Nous effectuons une évaluation complète de vos besoins de soins de santé et de votre environnement domestique.',
        },
        {
          step: '02',
          title: 'Développement du Plan de Soins',
          description: 'Notre équipe crée un plan de soins personnalisé adapté à vos exigences spécifiques.',
        },
        {
          step: '03',
          title: 'Mise en Œuvre du Service',
          description: 'Nous commençons à fournir des services selon votre plan de soins approuvé.',
        },
        {
          step: '04',
          title: 'Surveillance Continue',
          description: 'Évaluations régulières et ajustements pour assurer des résultats de soins optimaux.',
        },
      ],
    },
    coverage: {
      title: 'Zones de Service',
      subtitle: 'Nous fournissons nos services de soins de santé à domicile dans toute la région métropolitaine, assurant un accès pratique à des soins de qualité pour vous et votre famille.',
      features: [
        'Zone de service principale dans un rayon de 25 milles',
        'Couverture étendue disponible sur demande',
        'Réponse d\'urgence 24/7 disponible',
      ],
      locationTitle: 'Notre Emplacement de Bureau',
      locationDescription: 'Nous sommes commodément situés au cœur de la ville, vous facilitant la visite et la discussion de vos besoins de soins de santé en personne.',
      address: 'Adresse',
      businessHours: 'Heures d\'Ouverture',
      businessHoursText: 'Lundi - Vendredi : 8h00 - 18h00\nSamedi : 9h00 - 14h00',
      phone: 'Téléphone',
      coverageTitle: 'Zone de Couverture',
      coverageDescription: 'Contactez-nous pour confirmer la disponibilité du service dans votre emplacement spécifique. Nous nous engageons à servir notre communauté avec des soins de santé accessibles et de qualité.',
      checkAvailability: 'Vérifier la Disponibilité',
    },
    cta: {
      title: 'Prêt à Commencer ?',
      subtitle: 'Contactez-nous aujourd\'hui pour discuter de vos besoins de soins de santé et apprendre comment nos services peuvent vous aider, vous ou vos proches, à maintenir l\'indépendance à domicile.',
      contactUs: 'Nous Contacter',
      learnMore: 'En Savoir Plus',
    },
  },
}

export function getServicesTranslation(locale: Locale, key: string) {
  const translations = servicesTranslations[locale]
  const keys = key.split('.')
  let value: any = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key
    }
  }
  
  return value
}
