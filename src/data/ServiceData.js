import sample from "../assets/hero/residentialelv.jpeg";
import commercial from "../assets/hero/commercial.jpg";
import hospital from "../assets/hero/hospitalelev.jpeg";
import fright from "../assets/hero/friegtelev.jpeg";
import villa from "../assets/hero/villaelev.jpeg";
import service from "../assets/hero/liftservice.jpeg";
import escal from "../assets/hero/main4.jpg"
import modern from "../assets/hero/in6.jpeg"


const ServiceData = {
  "residential-elevators": {
    title: "Residential Elevators",
    slug: "residential-elevators",
    subtitle:
      "Luxury home elevators designed for effortless movement, comfort, and premium living. Experience smooth, silent, and elegant vertical mobility built for modern homes.",
    subHeading: "Luxury Living Made Effortless",
    image: sample,

    description:
      "Our Residential Elevators are engineered to bring convenience and luxury to your home. Designed with whisper-quiet traction drives, customizable interiors, and elegant lighting, they seamlessly blend into modern architecture. Whether your home features contemporary, classic, or minimalist design, our elevators enhance accessibility and elevate comfort. Offering a smooth ride, advanced safety features, low power consumption, and stylish cabin themes, these elevators transform everyday movement into a premium experience. Ideal for villas, duplexes, and premium apartments seeking an upgrade in mobility and lifestyle.",

    howWeWork: [
      "Detailed home layout analysis for tailor-fit installation.",
      "Concept planning with modern architectural integration.",
      "Material, finish, and cabin design selection.",
      "Professional installation with strict safety checks.",
      "Final testing, quality assurance, and handover.",
    ],

    whyChooseUs: [
      "Ultra-silent European traction systems.",
      "Fully customizable interiors & cabin themes.",
      "Smooth home-grade ride experience.",
      "Energy-efficient & low-maintenance design.",
      "Advanced home safety features.",
    ],

    superior: [
      "Panoramic glass cabin options.",
      "Italian-grade interior finishes.",
      "Heat & voltage fluctuation protection.",
      "Smart home automation compatibility.",
    ],

    faq: [
      {
        q: "What is the minimum space required for installation?",
        a: "Residential elevators can be installed even in compact spaces with customized shaft designs.",
      },
      {
        q: "Are these elevators noisy?",
        a: "No, our elevators use ultra-silent traction drive technology for a noise-free ride.",
      },
      {
        q: "Can I customize the cabin interior?",
        a: "Yes, interiors, lighting, buttons, and finishes can be fully customized.",
      },
      {
        q: "Do you offer after-sales support?",
        a: "Yes, we provide complete maintenance, AMC, and breakdown support.",
      },
    ],
  },
  "commercial-elevators": {
    title: "Commercial Elevators",
    slug: "commercial-elevators",
    subtitle:
      "High-performance elevators engineered for heavy traffic, business environments, and demanding commercial spaces.",
    subHeading: "Performance Meets Precision",
    image: commercial,

    description:
      "Our Commercial Elevators are built for malls, offices, IT parks, and high-rise buildings that demand speed, durability, and reliability. Featuring load-balancing motors, robust engineering, smart control systems, and elegant commercial-grade interiors, these elevators deliver consistent performance throughout the day. Designed to handle heavy footfall, they minimize downtime while maximizing efficiency. With intelligent door sensors, digital panels, and energy-saving operation, our elevators create a professional, modern, and safe mobility experience for businesses of all sizes.",

    howWeWork: [
      "Site inspection and commercial requirements study.",
      "Traffic calculation and lift type recommendation.",
      "Cabin, motor, and door system selection.",
      "High-precision installation with multiple safety layers.",
      "Performance testing and certification.",
    ],

    whyChooseUs: [
      "High-speed motors for efficient movement.",
      "Smart controller & sensor technology.",
      "Durable commercial-grade construction.",
      "Low operating cost and energy efficiency.",
      "Reliable handling during peak hours.",
    ],

    superior: [
      "Reinforced cabin engineering.",
      "Digital command & display systems.",
      "Long-life heavy-duty doors.",
      "Professional-grade precision components.",
    ],

    faq: [
      {
        q: "Are these elevators suitable for malls?",
        a: "Yes, they are built to handle continuous movement and large crowds.",
      },
      {
        q: "Do they require a machine room?",
        a: "We offer both MRL (Machine Room Less) and MR options.",
      },
      {
        q: "Can the interiors be customized?",
        a: "Yes, branding and theme-based interiors are possible.",
      },
      {
        q: "How often is maintenance required?",
        a: "Typically every 30–45 days depending on traffic load.",
      },
    ],
  },
  "hospital-elevators": {
    title: "Hospital Elevators",
    slug: "hospital-elevators",
    subtitle:
      "Safe, hygienic, and smooth elevators designed for patient care, emergencies, and medical precision.",
    subHeading: "Safe Mobility for Healthcare",
    image: hospital,
    description:
      "Our Hospital Elevators are engineered for medical-grade performance. They provide stretcher-friendly space, jerk-free movement, antimicrobial interiors, and reliable emergency controls. These elevators support patient transfers, medical equipment transport, and rapid emergency response. With soft acceleration technology, wide doors, and noise-free travel, they ensure a calm and stable experience. Built with advanced sanitation-friendly materials and 24/7 reliability, these elevators are trusted by hospitals, clinics, labs, and multi-speciality care centers.",
    howWeWork: [
      "Healthcare-grade mobility planning.",
      "Designing stretcher-compatible cabin layouts.",
      "Selecting medical-standard materials.",
      "Safety-first installation and testing.",
      "Continuous monitoring and AMC support.",
    ],

    whyChooseUs: [
      "Antibacterial stainless steel interiors.",
      "Jerk-free medical-grade ride control.",
      "Wide stretchers & wheelchair compatibility.",
      "24/7 emergency operation readiness.",
      "Low-noise ultra-smooth operation.",
    ],

    superior: [
      "Medical-grade ventilation.",
      "Shock-resistant flooring.",
      "Emergency backup & evacuation features.",
      "High-precision leveling technology.",
    ],

    faq: [
      {
        q: "Are these elevators stretcher-friendly?",
        a: "Yes, all hospital lifts are designed for stretcher movement.",
      },
      {
        q: "Do they support emergency power?",
        a: "Yes, full backup system support is available.",
      },
      {
        q: "Are they hygienic?",
        a: "Cabins use antibacterial & easy-clean materials.",
      },
      {
        q: "Can these be installed in small clinics?",
        a: "Yes, compact models are available.",
      },
    ],
  },
  "freight-elevators": {
    title: "Freight Elevators",
    slug: "freight-elevators",
    subtitle:
      "Heavy-duty elevators built for warehouses, factories, and logistics centers to lift goods safely and efficiently.",
    subHeading: "Strength Beyond Limits",
    image: fright,
    description:
      "Our Freight Elevators are engineered for extreme load handling with rugged steel cabins, shock-resistant structures, and industrial-grade motors. Perfect for warehouses, manufacturing units, and storage facilities, these elevators ensure safe movement of pallets, equipment, and heavy goods with zero vibration. Built for long-term reliability, they operate with minimal maintenance even in demanding industrial conditions. Their robust engineering ensures strength, stability, and durability even under harsh working cycles.",
    howWeWork: [
      "Load capacity analysis and requirement study.",
      "Industrial-grade design planning.",
      "Reinforced cabin and motor selection.",
      "Heavy-duty mechanical installation.",
      "Final vibration, safety, and stress testing.",
    ],

    whyChooseUs: [
      "Extreme load-bearing strength.",
      "Reinforced industrial cabin construction.",
      "Smooth heavy-duty operation.",
      "Low wear-and-tear over years of use.",
      "Safe movement of industrial goods.",
    ],

    superior: [
      "Shock-resistant platform floors.",
      "High-torque power motors.",
      "Steel-reinforced cabin walls.",
      "Extra-wide loading entry options.",
    ],

    faq: [
      {
        q: "How much load can freight elevators handle?",
        a: "We offer models ranging from 500 kg to several tons.",
      },
      {
        q: "Are these suitable for factories?",
        a: "Yes, they are built exactly for such environments.",
      },
      {
        q: "Do they require high maintenance?",
        a: "Minimal, thanks to our industrial-grade systems.",
      },
      {
        q: "Can they be customized?",
        a: "Yes, both size and strength can be tailored.",
      },
    ],
  },
  "private-villa-elevator": {
    title: "Private Villa Elevator",
    slug: "private-villa-elevator",
    subtitle:
      "Premium home elevators for luxury villas with designer interiors, panoramic options, and ultra-silent movement.",
    subHeading: "Elegance Tailored for You",
    image: villa,

    description:
      "Our Private Villa Elevators redefine luxury with panoramic glass cabins, designer lighting, and premium finishes crafted to match your villa’s architecture. They offer whisper-quiet movement, smooth travel, and elegant interiors that enhance the ambiance of your home. Whether installed indoors or outdoors with a glass shaft, these elevators elevate comfort and aesthetics to world-class standards. Built with safety technologies, high-efficiency drives, and customizable themes, they blend seamlessly into lifestyle homes that demand refinement.",

    howWeWork: [
      "Personalized luxury requirement study.",
      "3D concept planning & style presentation.",
      "Premium material selection for interiors.",
      "Luxury installation with minimal disruption.",
      "Final testing and luxury-grade handover.",
    ],

    whyChooseUs: [
      "World-class luxury cabin designs.",
      "Panoramic glass options.",
      "Silent traction technology.",
      "Premium finishes and lighting.",
      "Custom-made for lifestyle homes.",
    ],

    superior: [
      "Imported design materials.",
      "Smart automation compatibility.",
      "Weather-resistant external shaft options.",
      "Designer push-button panels.",
    ],

    faq: [
      {
        q: "Can this be installed in existing homes?",
        a: "Yes, retrofit installation is available.",
      },
      {
        q: "Are these elevators luxurious?",
        a: "They are designed exclusively for premium villas.",
      },
      {
        q: "Do you offer outdoor glass shafts?",
        a: "Yes, fully customizable solutions are available.",
      },
      {
        q: "Is the ride smooth?",
        a: "Ultra-silent traction delivers world-class smoothness.",
      },
    ],
  },
  "maintenance-amc": {
    title: "Maintenance & AMC",
    slug: "maintenance-amc",
    subtitle:
      "Complete elevator care plans to ensure long-lasting, safe, and smooth performance.",
    subHeading: "Reliable Care, Anytime",
    image: service,

    description:
      "Our Maintenance & AMC services ensure that your elevator remains safe, efficient, and reliable throughout its lifespan. With rigorous safety checks, lubrication routines, system diagnostics, emergency readiness, and genuine spare parts, we deliver uninterrupted elevator performance. Our trained engineers inspect every component to prevent breakdowns and maximize safety. With customizable AMC plans for residential, commercial, and industrial lifts, we ensure peace of mind with 24/7 availability and fast response support.",

    howWeWork: [
      "Routine inspection & lubrication.",
      "Component testing & alignment.",
      "Emergency control system check.",
      "Real-time diagnostics & repair.",
      "Performance certification.",
    ],

    whyChooseUs: [
      "24/7 emergency support.",
      "Certified elevator technicians.",
      "Real-time service alerts.",
      "Genuine high-quality spare parts.",
      "Fast response and on-time service.",
    ],

    superior: [
      "Silver, Gold & Platinum AMC plans.",
      "Preventive breakdown protection.",
      "Long-term efficiency assurance.",
      "Performance-optimized service schedules.",
    ],

    faq: [
      {
        q: "How often is maintenance required?",
        a: "Once every 30–45 days depending on usage.",
      },
      {
        q: "Do you offer emergency service?",
        a: "Yes, 24/7 emergency support is available.",
      },
      {
        q: "Are spare parts genuine?",
        a: "We only use certified and original components.",
      },
      {
        q: "Can AMC reduce breakdowns?",
        a: "Yes, preventive maintenance reduces 90% of breakdown risks.",
      },
    ],
  },
  "escalators-walkways": {
    title: "Escalators & Moving Walkways",
    slug: "escalators-walkways",
    subtitle:
      "High-efficiency escalators and walkways for commercial hubs with superior performance and reliability.",
    subHeading: "Smooth Traffic Movement",
    image: escal,

    description:
      "Our Escalators and Moving Walkways are engineered for malls, airports, metros, and commercial centers where continuous foot traffic demands long-lasting performance. Built with intelligent safety systems, anti-slip steps, weather-resistant components, and silent operation, they ensure smooth pedestrian flow throughout the day. Their sleek design complements architectural spaces while the energy-efficient motors minimize operating costs. Designed for both indoor and outdoor environments, these systems deliver stability, comfort, and safety at every step.",

    howWeWork: [
      "Traffic analysis & commercial planning.",
      "Escalator model & design selection.",
      "Safety component & motor installation.",
      "Precision alignment & testing.",
      "Final quality verification.",
    ],

    whyChooseUs: [
      "Heavy footfall capability.",
      "Energy-efficient engineering.",
      "Superior safety systems.",
      "Silent & smooth operation.",
      "Durable long-life components.",
    ],

    superior: [
      "Weather-resistant outdoor design.",
      "Smart sensor control.",
      "Heavy-duty chain systems.",
      "Low vibration & noise performance.",
    ],

    faq: [
      {
        q: "Are these suitable for airports?",
        a: "Yes, they are designed for high footfall and long operational hours.",
      },
      {
        q: "Do you offer outdoor escalators?",
        a: "Yes, with weather-resistant components.",
      },
      {
        q: "Is the operation smooth and silent?",
        a: "Yes, engineered for noise-free mobility.",
      },
      {
        q: "What safety features are included?",
        a: "Anti-slip steps, sensors, and emergency stop mechanisms.",
      },
    ],
  },
  "modernization-upgradation": {
    title: "Modernization & Upgradation",
    slug: "modernization-upgradation",
    subtitle:
      "Transform outdated elevators into modern systems with improved safety, performance, and aesthetics.",
    subHeading: "Transforming the Old to New",
    image: modern,

    description:
      "Our Modernization & Upgradation services breathe new life into old elevators by integrating modern technology, stylish interiors, and advanced safety systems. We upgrade motors, controllers, door mechanisms, lighting, and cabin materials to enhance performance and extend the elevator’s lifespan. Whether you want to improve energy efficiency, ride comfort, safety standards, or cabin appearance, our upgrade solutions ensure a brand-new experience without replacing the entire system.",

    howWeWork: [
      "Current elevator condition assessment.",
      "Upgrade requirement and safety analysis.",
      "Selection of new components & interiors.",
      "Precision installation & modernization.",
      "Complete testing & performance certification.",
    ],

    whyChooseUs: [
      "Cost-effective modernization.",
      "Advanced control system upgrades.",
      "Stylish modern cabin interiors.",
      "Energy-saving motors & lighting.",
      "Low downtime installation.",
    ],

    superior: [
      "Next-gen controller systems.",
      "High-efficiency power units.",
      "Premium stainless steel cabin redesign.",
      "Smoothness-enhancing drive technology.",
    ],

    faq: [
      {
        q: "Do you replace the entire elevator?",
        a: "Not always—most upgrades can be done without full replacement.",
      },
      {
        q: "Is modernization cost-effective?",
        a: "Yes, it offers major improvements at a lower cost than new installation.",
      },
      {
        q: "How long does the upgrade take?",
        a: "3–15 days depending on upgrade level.",
      },
      {
        q: "Can old elevators be made energy-efficient?",
        a: "Absolutely, modern motors and LEDs significantly improve efficiency.",
      },
    ],
  },
};

export default ServiceData;
