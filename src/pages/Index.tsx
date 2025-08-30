import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState('');

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'Code', color: 'bg-yellow-500' },
    { id: 'python', name: 'Python', icon: 'FileText', color: 'bg-blue-500' },
    { id: 'java', name: 'Java', icon: 'Coffee', color: 'bg-orange-500' },
    { id: 'csharp', name: 'C#', icon: 'Hash', color: 'bg-purple-500' },
  ];

  const examples = [
    {
      title: "Веб-магазин одежды",
      description: "Создать онлайн-магазин с каталогом и корзиной",
      code: `// React компонент магазина
const ClothingStore = () => {
  const [cart, setCart] = useState([]);
  
  return (
    <div className="store">
      <ProductGrid />
      <ShoppingCart items={cart} />
    </div>
  );
};`
    },
    {
      title: "Анализ данных",
      description: "Python скрипт для анализа CSV файлов",
      code: `# Анализ данных из CSV
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('data.csv')
data.plot(kind='bar')
plt.show()`
    },
    {
      title: "API сервис",
      description: "REST API для управления пользователями",
      code: `// Express.js API
app.post('/api/users', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
});`
    }
  ];

  const generateCode = () => {
    const mockCode = `// Сгенерированный код для: ${prompt}
const generatedFunction = () => {
  console.log("Код успешно сгенерирован!");
  // Логика приложения здесь
};

export default generatedFunction;`;
    setGeneratedCode(mockCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                <Icon name="Code" size={32} className="text-white" />
              </div>
              <h1 className="text-3xl font-montserrat font-bold text-white">КодГен Pro</h1>
            </div>
            
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-open-sans">
                Главная
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-open-sans">
                Документация
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-open-sans">
                Личный кабинет
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-open-sans">
                Контакты
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
              Генератор кода
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                на русском языке
              </span>
            </h2>
            <p className="text-xl text-white/90 font-open-sans max-w-2xl mx-auto mb-12">
              Описывайте свои идеи на родном языке, а мы превратим их в код любой сложности. 
              Поддержка множества языков программирования и современных фреймворков.
            </p>
          </div>

          {/* Language Selection */}
          <div className="animate-scale-in mb-12" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center space-x-4 mb-8">
              {languages.map((lang) => (
                <Button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  variant={selectedLanguage === lang.id ? "default" : "outline"}
                  className={`${
                    selectedLanguage === lang.id 
                      ? 'bg-white text-gray-900 hover:bg-white/90' 
                      : 'border-white/30 text-white hover:bg-white/20'
                  } font-open-sans transition-all duration-300 hover:scale-105`}
                >
                  <Icon name={lang.icon as any} size={16} className="mr-2" />
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Code Generator */}
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-white">
                Опишите ваше приложение
              </CardTitle>
              <CardDescription className="text-white/80 font-open-sans">
                Расскажите что вы хотите создать, и мы сгенерируем код
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder="Например: Создать веб-приложение для онлайн-магазина одежды с каталогом, корзиной, личным кабинетом и возможностью оплаты онлайн..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/60 font-open-sans"
              />
              
              <Button 
                onClick={generateCode}
                size="lg"
                className="w-full bg-white text-gray-900 hover:bg-white/90 font-montserrat font-semibold transition-all duration-300 hover:scale-105"
                disabled={!prompt.trim()}
              >
                <Icon name="Zap" size={20} className="mr-2" />
                Сгенерировать код
              </Button>

              {generatedCode && (
                <div className="bg-gray-900/80 rounded-lg p-4 text-left animate-fade-in">
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    {generatedCode}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Examples Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-montserrat font-bold text-white mb-4">
              Примеры проектов
            </h3>
            <p className="text-xl text-white/80 font-open-sans">
              Посмотрите что можно создать с помощью КодГен Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            {examples.map((example, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-white">
                    {example.title}
                  </CardTitle>
                  <CardDescription className="text-white/80 font-open-sans">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900/60 rounded p-3 text-sm text-green-400 font-mono overflow-x-auto">
                    {example.code}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-montserrat font-bold text-white mb-4">
              Возможности сервиса
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Code', title: 'Множество языков', desc: 'Python, JS, Java, C#' },
              { icon: 'Zap', title: 'Быстрая генерация', desc: 'Код за секунды' },
              { icon: 'Palette', title: 'UI/UX дизайн', desc: 'Красивые интерфейсы' },
              { icon: 'Download', title: 'Экспорт проекта', desc: 'Скачайте готовый код' },
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-montserrat font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/80 font-open-sans">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 animate-fade-in">
            <h4 className="text-2xl font-montserrat font-bold text-white mb-4">
              Готовы начать создавать?
            </h4>
            <p className="text-white/80 font-open-sans mb-6">
              Присоединяйтесь к тысячам разработчиков, которые уже используют КодГен Pro
            </p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 font-montserrat font-semibold">
              Начать бесплатно
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;