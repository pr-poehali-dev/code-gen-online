import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      title: 'Техническая поддержка',
      description: 'Помощь с генерацией кода и техническими вопросами',
      icon: 'Headphones',
      contact: 'support@codegen.pro',
      availability: '24/7',
      color: 'bg-blue-500'
    },
    {
      title: 'Продажи',
      description: 'Вопросы о подписках и корпоративных планах',
      icon: 'ShoppingCart',
      contact: 'sales@codegen.pro',
      availability: 'Пн-Пт 9:00-18:00',
      color: 'bg-green-500'
    },
    {
      title: 'Партнерство',
      description: 'Предложения о сотрудничестве и интеграциях',
      icon: 'Handshake',
      contact: 'partners@codegen.pro',
      availability: 'Пн-Пт 10:00-17:00',
      color: 'bg-purple-500'
    },
    {
      title: 'Пресс-служба',
      description: 'Медиа-запросы и информация для СМИ',
      icon: 'Newspaper',
      contact: 'press@codegen.pro',
      availability: 'По запросу',
      color: 'bg-orange-500'
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро отвечаете на запросы?',
      answer: 'Мы стараемся отвечать на все запросы в течение 24 часов. Критические вопросы обрабатываются в приоритетном порядке.'
    },
    {
      question: 'Предоставляете ли техническую поддержку на русском?',
      answer: 'Да, наша команда поддержки говорит на русском языке и готова помочь с любыми вопросами.'
    },
    {
      question: 'Можно ли получить персональную демонстрацию?',
      answer: 'Конечно! Для корпоративных клиентов мы проводим персональные демонстрации и консультации.'
    },
    {
      question: 'Есть ли API для интеграции?',
      answer: 'Да, у нас есть REST API для интеграции КодГен Pro в ваши существующие рабочие процессы.'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/codegen-pro', icon: 'Github' },
    { name: 'Telegram', url: 'https://t.me/codegenPro', icon: 'Send' },
    { name: 'Twitter', url: 'https://twitter.com/codegenPro', icon: 'Twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/codegen-pro', icon: 'Linkedin' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Симуляция отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <h1 className="text-4xl font-montserrat font-bold text-white">Контакты и поддержка</h1>
            </div>
            <p className="text-xl text-white/80 font-open-sans max-w-2xl mx-auto">
              Мы готовы помочь вам в любое время. Выберите удобный способ связи или напишите нам напрямую.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Форма обратной связи */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-montserrat">Написать нам</CardTitle>
                  <CardDescription className="text-white/80 font-open-sans">
                    Опишите ваш вопрос или проблему, и мы обязательно поможем
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white font-open-sans">Имя</Label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white font-open-sans">Email</Label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white font-open-sans">Категория</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Техническая поддержка</SelectItem>
                            <SelectItem value="billing">Вопросы оплаты</SelectItem>
                            <SelectItem value="feature">Предложение функций</SelectItem>
                            <SelectItem value="bug">Сообщение об ошибке</SelectItem>
                            <SelectItem value="partnership">Партнерство</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white font-open-sans">Тема</Label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                          placeholder="Краткое описание проблемы"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">Сообщение</Label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Подробно опишите ваш вопрос или проблему..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-gray-900 hover:bg-white/90 font-montserrat font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить сообщение
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Контактная информация */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Способы связи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${method.color}/20`}>
                          <Icon name={method.icon as any} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-montserrat font-semibold text-white">{method.title}</h4>
                          <p className="text-white/70 font-open-sans text-sm mb-2">{method.description}</p>
                          <div className="space-y-1">
                            <p className="text-white font-open-sans text-sm">{method.contact}</p>
                            <Badge variant="outline" className="border-white/30 text-white/70 text-xs">
                              {method.availability}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                      >
                        <Icon name={link.icon as any} size={24} className="text-white" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Офис</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-white/70" />
                    <div>
                      <p className="text-white font-open-sans">Москва, Россия</p>
                      <p className="text-white/70 font-open-sans text-sm">ул. Тверская, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-white/70" />
                    <div>
                      <p className="text-white font-open-sans">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-white/70 font-open-sans text-sm">МСК +3</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-white/70" />
                    <div>
                      <p className="text-white font-open-sans">+7 (495) 123-45-67</p>
                      <p className="text-white/70 font-open-sans text-sm">Горячая линия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ секция */}
          <div className="mt-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white font-montserrat">Частые вопросы</CardTitle>
                <CardDescription className="text-white/80 font-open-sans">
                  Возможно, ответ на ваш вопрос уже есть здесь
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="p-6 rounded-lg bg-white/5">
                      <h4 className="font-montserrat font-semibold text-white mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-white/80 font-open-sans text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;