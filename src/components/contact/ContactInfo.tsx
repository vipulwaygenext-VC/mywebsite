import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const INFO = [
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 88822 22324'],
    href: 'tel:+918882222324',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['support@vaktel.in', 'sales@vaktel.in'],
    href: 'mailto:support@vaktel.in',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: ['Chat with us on WhatsApp'],
    href: 'https://wa.me/918882222324',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Support: 24/7'],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-5">
      {INFO.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-glass transition-all"
        >
          <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
              {item.label}
            </p>
            {item.lines.map((line, i) =>
              item.href && i === 0 ? (
                <a
                  key={line}
                  href={item.href}
                  {...(item.href.startsWith('https')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="block text-sm font-semibold text-gray-900 hover:text-brand-600 transition-colors"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="text-sm text-gray-600 leading-snug">
                  {line}
                </p>
              )
            )}
          </div>
        </div>
      ))}

      {/* Google Maps embed — iframe extends 68 px below container so the
          Google address bar is clipped by overflow-hidden */}
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-glass">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            title="Vaktel Office — Orchid Business Park, Gurugram"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.5614603713246!2d77.03664840714733!3d28.42612441753172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d187459e03f99%3A0x2f62040947ea61e7!2sOrchid%20Business%20Park!5e0!3m2!1sen!2sin!4v1778762206724!5m2!1sen!2sin"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(100% + 68px)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
