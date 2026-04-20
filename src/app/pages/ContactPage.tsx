import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MagicAnimator } from '../components/MagicAnimator';

const contactMethods = [
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'JPCann Associates Ltd',
    contact: '58 Nsawam Road, Kokomlemle, Accra.',
    action: '#',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm GMT',
    contact: '+233 302 242 573',
    action: 'tel:+233302242573',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team responds within 24 hours',
    contact: 'info@jpcannassociates.com',
    action: 'mailto:info@jpcannassociates.com',
    color: 'from-violet-500 to-violet-600',
  },
];

const offices = [
  {
    city: 'Ghana (HQ)',
    address: 'JPCann Associates Ltd, 58 Nsawam Road',
    state: 'Kokomlemle, Accra',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjIzMTk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Magic Animator Background */}
        <MagicAnimator 
          type="video" 
          className="absolute inset-0 z-0"
          overlay={true}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                Get In Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                We're Here to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Help You Succeed
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed">
                Have questions about Solidaire? Our team is ready to help you find the perfect solution for your organization.
              </p>
              <div className="flex items-center gap-4 text-foreground/70">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>24-hour response time</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcGhvbmV8ZW58MXx8fHwxNzc2MzQzNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Customer Support"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{method.title}</h3>
                <p className="text-foreground/70 mb-4">{method.description}</p>
                <p className={`font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                  {method.contact}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div ref={ref} className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Send Us a Message
              </h3>
              <p className="text-foreground/70 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-700">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
                <h4 className="text-xl font-semibold text-primary mb-6">Office Locations</h4>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-primary mb-1">{office.city}</div>
                        <div className="text-sm text-foreground/70">{office.address}</div>
                        <div className="text-sm text-foreground/70">{office.state}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <h4 className="text-xl font-semibold text-primary mb-4">Business Hours</h4>
                <div className="space-y-3 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold text-primary">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold text-primary">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-primary">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-border">
                <h4 className="text-xl font-semibold text-primary mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                    → Schedule a Demo
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                    → View Documentation
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                    → Support Center
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 transition-colors">
                    → Community Forum
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] p-12 md:p-20 overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
              <img 
                src={import.meta.env.BASE_URL + 'dashboard.png'} 
                alt="Dashboard Background"
                className="w-full h-full object-cover filter blur-lg scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-purple-900/80 to-indigo-900/90 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
                Start your free trial today or schedule a personalized demo
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="https://solidaireapp.io/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-12 py-6 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2"
                  >
                    Start Free Trial
                  </motion.button>
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all w-full flex items-center justify-center gap-2"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
