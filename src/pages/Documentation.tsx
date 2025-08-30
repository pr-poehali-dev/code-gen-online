import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const guides = [
    {
      id: 'getting-started',
      title: 'Начало работы',
      description: 'Основы использования КодГен Pro',
      icon: 'Play',
      difficulty: 'Начинающий',
      time: '5 мин',
      content: `
## Добро пожаловать в КодГен Pro!

### Что такое КодГен Pro?
КодГен Pro - это мощный инструмент для генерации кода с помощью искусственного интеллекта. 
Просто опишите что вы хотите создать на русском языке, и получите готовый код.

### Первые шаги:
1. **Выберите язык программирования** из доступных опций
2. **Опишите ваш проект** максимально подробно
3. **Настройте параметры** (сложность, фреймворки)
4. **Нажмите "Сгенерировать код"**

### Советы для лучших результатов:
- Будьте максимально конкретны в описании
- Укажите желаемые технологии и фреймворки
- Опишите основные функции приложения
- Укажите предполагаемых пользователей
      `
    },
    {
      id: 'prompting',
      title: 'Эффективные промпты',
      description: 'Как правильно описывать задачи для ИИ',
      icon: 'MessageSquare',
      difficulty: 'Средний',
      time: '10 мин',
      content: `
## Искусство написания промптов

### Структура хорошего промпта:
1. **Контекст**: Что вы создаете?
2. **Функционал**: Какие возможности нужны?
3. **Технические требования**: Языки, фреймворки
4. **Пользователи**: Кто будет использовать?

### Примеры эффективных промптов:

#### ❌ Плохой промпт:
"Создай сайт"

#### ✅ Хороший промпт:
"Создать веб-приложение для онлайн-магазина книг с каталогом товаров, 
корзиной покупок, системой поиска по авторам и жанрам, личным кабинетом 
пользователя и интеграцией с платежными системами. Использовать React, 
TypeScript и современный дизайн."

### Ключевые слова для лучших результатов:
- **Функции**: "с возможностью", "должен уметь", "поддерживает"
- **Интерфейс**: "современный дизайн", "адаптивный", "интуитивный"
- **Технологии**: "на React", "с базой данных", "REST API"
      `
    },
    {
      id: 'languages',
      title: 'Поддерживаемые языки',
      description: 'Обзор всех доступных языков программирования',
      icon: 'Code',
      difficulty: 'Начинающий',
      time: '7 мин',
      content: `
## Поддерживаемые языки программирования

### Frontend разработка:
- **JavaScript** - универсальный язык для веба
- **TypeScript** - JavaScript с типизацией
- **HTML/CSS** - основа веб-интерфейсов

### Backend разработка:
- **Python** - простой и мощный
- **Java** - корпоративные решения
- **C#** - платформа .NET
- **Go** - высокопроизводительные сервисы

### Мобильная разработка:
- **React Native** - кроссплатформенные приложения
- **Flutter (Dart)** - от Google
- **Swift** - iOS приложения
- **Kotlin** - Android приложения

### Популярные фреймворки:
- **React** - библиотека для UI
- **Vue.js** - прогрессивный фреймворк
- **Angular** - полнофункциональная платформа
- **Django** - веб-фреймворк Python
- **Spring Boot** - Java для микросервисов
      `
    },
    {
      id: 'best-practices',
      title: 'Лучшие практики',
      description: 'Рекомендации по работе с сгенерированным кодом',
      icon: 'Award',
      difficulty: 'Продвинутый',
      time: '15 мин',
      content: `
## Лучшие практики работы с ИИ-кодом

### Перед генерацией:
1. **Планируйте архитектуру** заранее
2. **Разбивайте большие задачи** на части
3. **Подготовьте список требований**
4. **Выберите подходящий стек технологий**

### После генерации:
1. **Внимательно изучите код** - понимание важнее скорости
2. **Протестируйте все функции** перед использованием
3. **Адаптируйте под ваши потребности**
4. **Добавьте обработку ошибок**

### Безопасность:
- Всегда проверяйте код на уязвимости
- Не используйте хардкод паролей и ключей
- Валидируйте пользовательский ввод
- Используйте HTTPS для веб-приложений

### Оптимизация:
- Рефакторинг для читаемости
- Добавление комментариев
- Оптимизация производительности
- Следование принципам SOLID
      `
    }
  ];

  const faqs = [
    {
      question: "Какие языки программирования поддерживает КодГен Pro?",
      answer: "Мы поддерживаем более 10 популярных языков: JavaScript, TypeScript, Python, Java, C#, Go, PHP, Ruby, Swift, Kotlin и другие."
    },
    {
      question: "Можно ли редактировать сгенерированный код?",
      answer: "Конечно! Сгенерированный код - это отправная точка. Вы можете модифицировать его под свои нужды, добавлять функции и оптимизировать."
    },
    {
      question: "Как улучшить качество генерируемого кода?",
      answer: "Чем детальнее и конкретнее ваше описание, тем лучше результат. Укажите технологии, функции, архитектурные паттерны."
    },
    {
      question: "Безопасен ли сгенерированный код?",
      answer: "Мы следуем лучшим практикам безопасности, но рекомендуем всегда проводить код-ревью и тестирование перед продакшеном."
    },
    {
      question: "Можно ли генерировать тесты для кода?",
      answer: "Да! Включите опцию 'Включить тесты' в настройках генератора для автоматического создания unit-тестов."
    },
    {
      question: "Сколько стоит использование сервиса?",
      answer: "У нас есть бесплатный план с ограничениями и премиум-подписки для профессиональных разработчиков."
    }
  ];

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                <Icon name="BookOpen" size={32} className="text-white" />
              </div>
              <h1 className="text-4xl font-montserrat font-bold text-white">Документация</h1>
            </div>
            <p className="text-xl text-white/80 font-open-sans max-w-2xl mx-auto">
              Полное руководство по использованию КодГен Pro
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mt-8 animate-scale-in">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <Input
                placeholder="Поиск в документации..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 font-open-sans"
              />
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="guides" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-white/10 backdrop-blur-md border-white/20">
                <TabsTrigger value="guides" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  Руководства
                </TabsTrigger>
                <TabsTrigger value="api" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  API Reference
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  FAQ
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="guides">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredGuides.map((guide, index) => (
                  <Card key={guide.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <Icon name={guide.icon as any} size={24} className="text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white font-montserrat">{guide.title}</CardTitle>
                            <CardDescription className="text-white/80 font-open-sans">
                              {guide.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {guide.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-white/30 text-white">
                          {guide.time}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-invert max-w-none">
                        <div className="text-white/90 font-open-sans text-sm whitespace-pre-line">
                          {guide.content.slice(0, 300)}...
                        </div>
                      </div>
                      <Button 
                        className="mt-4 bg-white text-gray-900 hover:bg-white/90"
                        size="sm"
                      >
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white font-montserrat">API Reference</CardTitle>
                    <CardDescription className="text-white/80 font-open-sans">
                      Интеграция КодГен Pro в ваши проекты
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-montserrat text-white">Базовый URL</h3>
                      <div className="bg-gray-900/60 rounded p-3">
                        <code className="text-green-400 font-mono">https://api.codegen.pro/v1/</code>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-montserrat text-white">Генерация кода</h3>
                      <div className="bg-gray-900/60 rounded p-4">
                        <pre className="text-green-400 font-mono text-sm">
{`POST /generate
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "prompt": "Создать TODO приложение на React",
  "language": "javascript",
  "framework": "react",
  "complexity": 3,
  "includeTests": true
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-montserrat text-white">Ответ</h3>
                      <div className="bg-gray-900/60 rounded p-4">
                        <pre className="text-green-400 font-mono text-sm">
{`{
  "success": true,
  "code": "// Generated React component...",
  "language": "javascript",
  "framework": "react",
  "files": [
    {
      "name": "TodoApp.js",
      "content": "// Component code..."
    }
  ]
}`}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white font-montserrat text-center">
                      Часто задаваемые вопросы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="border-white/20"
                        >
                          <AccordionTrigger className="text-white font-open-sans hover:text-white/80">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-white/80 font-open-sans">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Documentation;