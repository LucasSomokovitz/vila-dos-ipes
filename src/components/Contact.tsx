import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = '554792489299'; // Número comercial atualizado
    const message = `Olá! Vim pelo site do Residencial Vila dos Ipês e gostaria de falar com o WhatsApp comercial.`;
    const encodedMessage = encodeURIComponent(message);
    // Link que funciona tanto no desktop quanto no mobile
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Interesse enviado com sucesso!",
        description: "Entraremos em contato em breve com informações exclusivas.",
      });
      
      // Abrir WhatsApp após envio bem-sucedido
      const whatsappLink = generateWhatsAppLink();
      window.open(whatsappLink, '_blank');
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/1af88094-7112-464a-9b22-876d31c6d4d5.png"
          alt="Vila dos Ipês"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Realize o Sonho de Viver no
            <span className="block text-blue-400">Vila dos Ipês</span>
          </h2>
          <p className="text-xl opacity-90">
            Deixe seu contato para receber informações exclusivas, a tabela de 
            disponibilidade e agendar uma visita ao local.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone com DDD *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="(47) 99999-9999"
              />
            </div>
            
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Conte-nos sobre seu interesse..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar Interesse</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
