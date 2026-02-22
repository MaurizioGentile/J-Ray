import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const translations = {
    it: {
        back: "← TORNA ALLA HOME",
        title: "PRIVACY POLICY",
        subtitle: "Trasparenza totale. I tuoi dati restano tuoi.",
        lastUpdated: "Ultimo aggiornamento: Febbraio 2026",
        sections: [
            {
                title: "1. Elaborazione Dati Locale (Zero Telemetria)",
                content: "L'applicazione desktop J-RAY PRO è progettata con la privacy come principio fondamentale. Tutto il parsing, l'analisi (incluso l'AI Profiler) e la decriptazione dei Token avvengono al 100% offline sulla tua macchina locale. Non raccogliamo, analizziamo, trasmettiamo o conserviamo mai i tuoi file JSON, i tuoi dati API o il codice generato. I tuoi dati non lasciano mai il tuo dispositivo."
            },
            {
                title: "2. Quali dati raccogliamo e perché",
                content: "Raccogliamo solo il minimo indispensabile per fornirti il servizio e prevenire la pirateria:\n\n• Dati di Licenza: Quando acquisti una licenza, riceviamo il tuo indirizzo email, il nome e l'ID dell'ordine. Non abbiamo mai accesso ai dettagli della tua carta di credito.\n• Hardware ID (Machine ID): Per far rispettare i limiti di utilizzo e prevenire frodi, J-RAY PRO genera un hash univoco e anonimizzato basato sull'hardware del tuo computer. Questo ID viene inviato ai nostri server di licenza esclusivamente per validare l'attivazione. Non può essere usato per tracciare la tua identità fisica."
            },
            {
                title: "3. Servizi di Terze Parti (Merchant of Record)",
                content: "Utilizziamo Lemon Squeezy, LLC come nostro Merchant of Record (MoR) ufficiale. Tutte le transazioni, l'elaborazione dei pagamenti, la conformità fiscale e la generazione delle chiavi di licenza sono gestite in modo sicuro da loro. Acquistando J-RAY PRO, accetti la Privacy Policy di Lemon Squeezy. Il nostro sito web è ospitato su un'infrastruttura sicura (es. Vercel/Aruba) che può raccogliere log di server standard (come indirizzi IP temporanei) per ragioni di sicurezza e prevenzione DDoS."
            },
            {
                title: "4. Cookie e Tracciamento",
                content: "Odiamo il tracciamento invasivo quanto te. Il nostro sito web pubblico (jraypro.com) utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento della piattaforma. Non utilizziamo script pubblicitari di terze parti, pixel di Facebook o Google Analytics per tracciarti su altri siti web."
            },
            {
                title: "5. Conservazione e Sicurezza dei Dati",
                content: "Conserviamo i dati legati alla tua licenza (email e chiavi di attivazione) per tutto il tempo in cui la tua licenza rimane attiva, al fine di garantirti supporto tecnico e aggiornamenti. Adottiamo misure di sicurezza standard del settore per proteggere questi dati da accessi non autorizzati."
            },
            {
                title: "6. I tuoi Diritti (GDPR & CCPA)",
                content: "In conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e leggi affini, hai il diritto di:\n• Richiedere l'accesso ai dati personali in nostro possesso.\n• Richiedere la correzione di dati errati.\n• Richiedere la cancellazione dei tuoi dati (Diritto all'oblio). Nota: richiedere la cancellazione permanente revocherà irreversibilmente la tua chiave di licenza senza diritto a rimborso.\n\nPer esercitare i tuoi diritti, contattaci all'indirizzo email fornito di seguito."
            }
        ],
        contact: "Hai domande sulla privacy? Contattaci a:",
        email: "privacy@jraypro.com" // 📝 INSERISCI QUI LA TUA EMAIL
    },
    en: {
        back: "← BACK TO HOME",
        title: "PRIVACY POLICY",
        subtitle: "Total transparency. Your data remains yours.",
        lastUpdated: "Last updated: February 2026",
        sections: [
            {
                title: "1. Local Data Processing (Zero Telemetry)",
                content: "The J-RAY PRO desktop application is designed with privacy at its core. All parsing, analyzing (including the AI Profiler), and Token decryption happen 100% offline on your local machine. We never collect, analyze, transmit, or store your JSON files, API data, or generated code. Your data never leaves your device."
            },
            {
                title: "2. What Data We Collect and Why",
                content: "We collect only the bare minimum necessary to provide you with the service and prevent software piracy:\n\n• License Data: When you purchase a license, we receive your email address, name, and order ID. We never have access to your credit card details.\n• Hardware ID (Machine ID): To enforce device limits and prevent fraud, J-RAY PRO generates a unique, anonymized hash based on your computer's hardware. This ID is transmitted to our licensing servers strictly to validate your activation. It cannot be used to track your physical identity."
            },
            {
                title: "3. Third-Party Services (Merchant of Record)",
                content: "We use Lemon Squeezy, LLC as our official Merchant of Record (MoR). All transactions, payment processing, tax compliance, and license key generation are securely handled by them. By purchasing J-RAY PRO, you agree to Lemon Squeezy's Privacy Policy. Our website is hosted on secure infrastructure (e.g., Vercel/Aruba) which may collect standard server logs (such as temporary IP addresses) for security and DDoS prevention."
            },
            {
                title: "4. Cookies and Tracking",
                content: "We hate invasive tracking as much as you do. Our public website (jraypro.com) uses only essential technical cookies necessary for the platform to function. We do not use third-party advertising scripts, Facebook Pixels, or Google Analytics to track you across the web."
            },
            {
                title: "5. Data Retention and Security",
                content: "We retain your license-related data (email and activation keys) for as long as your license is active in order to provide technical support and software updates. We implement industry-standard security measures to protect this data from unauthorized access."
            },
            {
                title: "6. Your Rights (GDPR & CCPA)",
                content: "In accordance with the General Data Protection Regulation (GDPR) and similar laws, you have the right to:\n• Request access to the personal data we hold about you.\n• Request correction of incorrect data.\n• Request deletion of your data (Right to be forgotten). Note: Requesting permanent deletion will irreversibly revoke your license key without a refund.\n\nTo exercise your rights, please contact us at the email address provided below."
            }
        ],
        contact: "Questions about privacy? Contact us at:",
        email: "privacy@jraypro.com" // 📝 INSERISCI QUI LA TUA EMAIL
    }
};

export default function PrivacyPage() {
    const { lang } = useLanguage();
    const t = translations[lang];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="min-h-screen cyber-bg text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans pb-20">
            <motion.div className="progress-bar fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[200]" style={{ scaleX }} />
            <div className="spotlight fixed inset-0 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 pt-32 relative z-10">
                <Link to="/" className="text-xs font-mono tracking-widest text-indigo-400 hover:text-white transition-colors mb-12 inline-block">
                    {t.back}
                </Link>

                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mb-4">
                        {t.title}
                    </h1>
                    <p className="text-indigo-400 font-mono text-sm tracking-wide mb-2">{t.subtitle}</p>
                    <p className="text-zinc-500 font-mono text-xs">{t.lastUpdated}</p>
                </header>

                <div className="space-y-12">
                    {t.sections.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-black/40 border border-white/5 p-8 md:p-10 rounded-[30px] backdrop-blur-sm"
                        >
                            <h2 className="text-2xl font-black italic uppercase text-white mb-6">
                                {section.title}
                            </h2>
                            <div className="text-zinc-400 leading-relaxed font-mono text-sm whitespace-pre-line">
                                {section.content}
                            </div>
                        </motion.section>
                    ))}
                </div>

                <div className="mt-16 text-center border-t border-white/5 pt-10">
                    <p className="text-zinc-500 mb-2">{t.contact}</p>
                    <a href={`mailto:${t.email}`} className="text-indigo-400 font-black hover:text-white text-xl transition-colors">
                        {t.email}
                    </a>
                </div>
            </div>
        </div>
    );
}