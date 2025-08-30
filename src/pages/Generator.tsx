import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Generator = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [complexity, setComplexity] = useState([3]);
  const [includeComments, setIncludeComments] = useState(true);
  const [includeTests, setIncludeTests] = useState(false);
  const [framework, setFramework] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'Code', extension: '.js', color: 'bg-yellow-500' },
    { id: 'typescript', name: 'TypeScript', icon: 'FileText', extension: '.ts', color: 'bg-blue-600' },
    { id: 'python', name: 'Python', icon: 'Code2', extension: '.py', color: 'bg-green-500' },
    { id: 'java', name: 'Java', icon: 'Coffee', extension: '.java', color: 'bg-orange-500' },
    { id: 'csharp', name: 'C#', icon: 'Hash', extension: '.cs', color: 'bg-purple-500' },
    { id: 'go', name: 'Go', icon: 'Zap', extension: '.go', color: 'bg-cyan-500' },
  ];

  const frameworks = {
    javascript: ['React', 'Vue', 'Angular', 'Node.js', 'Express'],
    typescript: ['React', 'Vue', 'Angular', 'Node.js', 'NestJS'],
    python: ['Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy'],
    java: ['Spring Boot', 'Spring MVC', 'Hibernate', 'Maven'],
    csharp: ['.NET Core', 'ASP.NET', 'Entity Framework', 'Blazor'],
    go: ['Gin', 'Echo', 'Fiber', 'GORM'],
  };

  const complexityLevels = [
    'Простой',
    'Базовый', 
    'Средний',
    'Продвинутый',
    'Экспертный'
  ];

  const generateCode = async () => {
    setIsGenerating(true);
    
    // Симуляция генерации кода
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockCode = `// ${languages.find(l => l.id === selectedLanguage)?.name} код
// Сложность: ${complexityLevels[complexity[0] - 1]}
// Фреймворк: ${framework || 'Нет'}
${includeComments ? '// Сгенерировано КодГен Pro\n' : ''}
const solution = () => {
  // Решение для: ${prompt}
  console.log("Код успешно сгенерирован!");
  
  ${framework === 'React' ? `
  return (
    <div className="app">
      <h1>Новое приложение</h1>
    </div>
  );` : `
  // Основная логика приложения
  return true;`}
};

${includeTests ? `
// Тесты
describe('solution', () => {
  it('должен работать корректно', () => {
    expect(solution()).toBeTruthy();
  });
});` : ''}

export default solution;`;
    
    setGeneratedCode(mockCode);
    setIsGenerating(false);
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedCode], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    const lang = languages.find(l => l.id === selectedLanguage);
    element.download = `generated_code${lang?.extension || '.txt'}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
              <Icon name="Code" size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-white">Генератор кода</h1>
              <p className="text-white/80 font-open-sans">Создавайте код с помощью ИИ</p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Настройки */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Настройки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-white/90 font-open-sans">Язык программирования</Label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map(lang => (
                          <SelectItem key={lang.id} value={lang.id}>
                            <div className="flex items-center space-x-2">
                              <Icon name={lang.icon as any} size={16} />
                              <span>{lang.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white/90 font-open-sans">Фреймворк (опционально)</Label>
                    <Select value={framework} onValueChange={setFramework}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Выберите фреймворк" />
                      </SelectTrigger>
                      <SelectContent>
                        {(frameworks[selectedLanguage as keyof typeof frameworks] || []).map(fw => (
                          <SelectItem key={fw} value={fw}>{fw}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-white/90 font-open-sans mb-4 block">
                      Сложность: {complexityLevels[complexity[0] - 1]}
                    </Label>
                    <Slider
                      value={complexity}
                      onValueChange={setComplexity}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-white/90 font-open-sans">Комментарии в коде</Label>
                      <Switch checked={includeComments} onCheckedChange={setIncludeComments} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label className="text-white/90 font-open-sans">Включить тесты</Label>
                      <Switch checked={includeTests} onCheckedChange={setIncludeTests} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Шаблоны */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Шаблоны</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Веб-приложение с базой данных',
                    'REST API сервис',
                    'Мобильное приложение',
                    'Алгоритм сортировки',
                    'Парсер данных'
                  ].map(template => (
                    <Button
                      key={template}
                      variant="outline"
                      className="w-full justify-start border-white/30 text-white hover:bg-white/20"
                      onClick={() => setPrompt(`Создать ${template.toLowerCase()}`)}
                    >
                      <Icon name="FileText" size={16} className="mr-2" />
                      {template}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Основная область */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Опишите ваш проект</CardTitle>
                  <CardDescription className="text-white/80 font-open-sans">
                    Детально опишите что вы хотите создать
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Например: Создать веб-приложение для управления задачами с возможностью создавать, редактировать и удалять задачи. Добавить фильтрацию по статусу и приоритету..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/60 font-open-sans"
                  />
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {languages.find(l => l.id === selectedLanguage)?.name}
                      </Badge>
                      {framework && (
                        <Badge variant="outline" className="border-white/30 text-white">
                          {framework}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      onClick={generateCode}
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-white/90 font-montserrat font-semibold"
                      disabled={!prompt.trim() || isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          Генерирую...
                        </>
                      ) : (
                        <>
                          <Icon name="Zap" size={20} className="mr-2" />
                          Сгенерировать код
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {generatedCode && (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white font-montserrat">Сгенерированный код</CardTitle>
                      <Button 
                        onClick={downloadCode}
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20"
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 font-mono text-sm">
                        {generatedCode}
                      </pre>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                        <Icon name="Copy" size={16} className="mr-2" />
                        Копировать
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                        <Icon name="Share" size={16} className="mr-2" />
                        Поделиться
                      </Button>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить в проекты
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;