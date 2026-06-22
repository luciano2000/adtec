'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';

const testimonials = [
  {
    name: 'Bruna Luz',
    rolePt: 'Proprietária da Bru Papelaria',
    roleEn: 'Owner of Bru Papelaria',
    textPt: 'O WhatsApp da loja ficava sem resposta fora do horário comercial, mas agora tudo ficou mais simples.',
    textEn: "The shop's WhatsApp used to go unanswered after business hours, but now everything became much simpler.",
    initials: 'BL',
    image: undefined as string | undefined,
    color: '#1b9e4b',
  },
  {
    name: 'Natália Coupé',
    rolePt: 'Acupunturista',
    roleEn: 'Acupuncturist',
    textPt: 'O que eu mais gostei no serviço de automação é a possibilidade de programar o horário que quer que a IA trabalhe.',
    textEn: 'What I liked most about the automation service is the ability to schedule the hours you want the AI to work.',
    initials: 'NC',
    image: undefined as string | undefined,
    color: '#4285f4',
  },
  {
    name: 'Eduardo Ramos',
    rolePt: 'Proprietário da Petty',
    roleEn: 'Owner of Petty',
    textPt: 'O pessoal da AD TEC foi excelente, atendimento rápido e entregas pontuais. O site ficou lindão.',
    textEn: 'The AD TEC team was excellent, fast service and on-time deliveries. The website turned out beautiful.',
    initials: 'ER',
    image: '/testimonials/eduardo.webp',
    color: '#f4b400',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Testimonials() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--c-bg)' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(27,158,75,0.4), rgba(244,180,0,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-16"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.08)', border: '1px solid rgba(27,158,75,0.2)' }}
          >
            {lang === 'pt' ? 'Depoimentos' : 'Testimonials'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: 'var(--c-text-1)' }}>
            {lang === 'pt' ? 'O que nossos clientes dizem' : 'What our clients say'}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="flex flex-col justify-between p-8 rounded-2xl border"
              style={{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }}
            >
              <div>
                <svg
                  width="32" height="22" viewBox="0 0 32 22" fill="currentColor"
                  className="mb-6"
                  style={{ color: item.color, opacity: 0.35 }}
                >
                  <path d="M0 22V13.2C0 9.778.733 6.856 2.2 4.433 3.667 2.011 5.867.489 8.8 0l1.1 2.2C7.822 2.933 6.494 3.978 5.5 5.5S4 8.678 4 10.733H7.333V22H0zm16 0V13.2c0-3.422.733-6.344 2.2-8.767C19.667 2.011 21.867.489 24.8 0l1.1 2.2c-2.078.733-3.406 1.778-4.4 3.3S20 8.678 20 10.733H23.333V22H16z" />
                </svg>
                <p className="text-base leading-relaxed" style={{ color: 'var(--c-text-2)' }}>
                  {lang === 'pt' ? item.textPt : item.textEn}
                </p>
              </div>

              <div
                className="flex items-center gap-3 mt-8 pt-6 border-t"
                style={{ borderColor: 'var(--c-border-s)' }}
              >
                <div
                  className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-xs font-black"
                  style={item.image ? {} : {
                    background: `${item.color}1a`,
                    color: item.color,
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    item.initials
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--c-text-1)' }}>{item.name}</p>
                  <p className="text-xs" style={{ color: 'var(--c-text-2)' }}>
                    {lang === 'pt' ? item.rolePt : item.roleEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
