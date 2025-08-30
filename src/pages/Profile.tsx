import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Алексей Петров',
    email: 'alexey.petrov@example.com',
    avatar: '',
    bio: 'Full-stack разработчик с 5+ годами опыта. Специализируюсь на React, Node.js и Python.',
    location: 'Москва, Россия',
    website: 'https://alexey-dev.ru',
    githubUrl: 'https://github.com/alexey-petrov',
  });

  const [stats] = useState({
    totalProjects: 47,
    codeGenerated: '125K',
    languagesUsed: 8,
    subscription: 'Pro',
    joinDate: '2023-03-15',
    streak: 23,
  });

  const [projects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      language: 'JavaScript',
      framework: 'React',
      createdAt: '2024-01-15',
      status: 'Завершен',
      linesOfCode: 2847,
      color: 'bg-yellow-500'
    },
    {
      id: 2,
      name: 'Task Management API',
      language: 'Python',
      framework: 'FastAPI',
      createdAt: '2024-01-12',
      status: 'В работе',
      linesOfCode: 1523,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Mobile Chat App',
      language: 'TypeScript',
      framework: 'React Native',
      createdAt: '2024-01-08',
      status: 'Завершен',
      linesOfCode: 3291,
      color: 'bg-blue-500'
    },
  ]);

  const [achievements] = useState([
    { id: 1, name: 'Первый проект', description: 'Создали первый проект в КодГен Pro', icon: 'Trophy', earned: true },
    { id: 2, name: 'Мастер кода', description: 'Сгенерировали более 100K строк кода', icon: 'Code', earned: true },
    { id: 3, name: 'Полиглот', description: 'Использовали 5+ языков программирования', icon: 'Globe', earned: true },
    { id: 4, name: 'Серия успехов', description: 'Создавали проекты 30 дней подряд', icon: 'Flame', earned: false },
    { id: 5, name: 'Экспериментатор', description: 'Попробовали все доступные фреймворки', icon: 'Beaker', earned: false },
    { id: 6, name: 'Ментор', description: 'Поделились 10 проектами с сообществом', icon: 'Users', earned: false },
  ]);

  const handleSaveProfile = () => {
    // Здесь будет логика сохранения профиля
    console.log('Профиль сохранен:', user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4 animate-fade-in">
            <Avatar className="w-20 h-20 border-4 border-white/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-white/20 text-white text-xl font-montserrat">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-white">{user.name}</h1>
              <p className="text-white/80 font-open-sans">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-white/20 text-white">
                  {stats.subscription}
                </Badge>
                <span className="text-white/60 font-open-sans text-sm">
                  Участник с {new Date(stats.joinDate).toLocaleDateString('ru')}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-white/10 backdrop-blur-md border-white/20">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  Обзор
                </TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  Проекты
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  Достижения
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
                  Настройки
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Проектов создано', value: stats.totalProjects, icon: 'FolderOpen' },
                  { label: 'Строк кода', value: stats.codeGenerated, icon: 'Code' },
                  { label: 'Языков освоено', value: stats.languagesUsed, icon: 'Globe' },
                  { label: 'Дней подряд', value: stats.streak, icon: 'Flame' },
                ].map((stat, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name={stat.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="text-2xl font-montserrat font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/80 font-open-sans text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-white font-montserrat">Недавняя активность</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { action: 'Создал проект "E-commerce Platform"', time: '2 часа назад', icon: 'Plus' },
                      { action: 'Загрузил код на GitHub', time: '5 часов назад', icon: 'Upload' },
                      { action: 'Получил достижение "Мастер кода"', time: '1 день назад', icon: 'Award' },
                      { action: 'Обновил профиль', time: '3 дня назад', icon: 'User' },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <Icon name={activity.icon as any} size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-open-sans text-sm">{activity.action}</div>
                          <div className="text-white/60 font-open-sans text-xs">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-white font-montserrat">Прогресс уровня</CardTitle>
                    <CardDescription className="text-white/80 font-open-sans">
                      До следующего уровня: 847 XP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-white font-open-sans text-sm mb-2">
                          <span>Уровень 12</span>
                          <span>2,153 / 3,000 XP</span>
                        </div>
                        <Progress value={72} className="h-3" />
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-white font-montserrat">Как получить XP:</h4>
                        {[
                          { action: 'Создать проект', xp: '+50 XP' },
                          { action: 'Использовать новый язык', xp: '+25 XP' },
                          { action: 'Поделиться кодом', xp: '+15 XP' },
                          { action: 'Ежедневный заход', xp: '+5 XP' },
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between text-white/80 font-open-sans text-sm">
                            <span>{item.action}</span>
                            <span className="text-green-400">{item.xp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-montserrat font-bold text-white">Мои проекты</h2>
                  <Button className="bg-white text-gray-900 hover:bg-white/90">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый проект
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <Card key={project.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white font-montserrat">{project.name}</CardTitle>
                          <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                        </div>
                        <CardDescription className="text-white/80 font-open-sans">
                          {project.language} • {project.framework}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-white/80 font-open-sans text-sm">
                            <span>Статус</span>
                            <Badge variant={project.status === 'Завершен' ? 'default' : 'secondary'} className="bg-white/20 text-white">
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-white/80 font-open-sans text-sm">
                            <span>Строк кода</span>
                            <span>{project.linesOfCode.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-white/80 font-open-sans text-sm">
                            <span>Создан</span>
                            <span>{new Date(project.createdAt).toLocaleDateString('ru')}</span>
                          </div>
                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/20">
                              <Icon name="Eye" size={14} className="mr-1" />
                              Открыть
                            </Button>
                            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                              <Icon name="Share" size={14} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="space-y-6">
                <h2 className="text-2xl font-montserrat font-bold text-white text-center">Достижения</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={achievement.id} className={`bg-white/10 backdrop-blur-md border-white/20 animate-scale-in ${achievement.earned ? 'ring-2 ring-yellow-400/50' : 'opacity-60'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-full ${achievement.earned ? 'bg-yellow-400/20' : 'bg-white/10'}`}>
                            <Icon name={achievement.icon as any} size={24} className={achievement.earned ? 'text-yellow-400' : 'text-white/40'} />
                          </div>
                          <div>
                            <CardTitle className={`font-montserrat ${achievement.earned ? 'text-white' : 'text-white/60'}`}>
                              {achievement.name}
                            </CardTitle>
                            {achievement.earned && (
                              <Badge className="bg-yellow-400/20 text-yellow-400 mt-1">
                                Получено
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className={`font-open-sans ${achievement.earned ? 'text-white/80' : 'text-white/40'}`}>
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white font-montserrat">Настройки профиля</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">Имя</Label>
                      <Input
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">Email</Label>
                      <Input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">О себе</Label>
                      <Textarea
                        value={user.bio}
                        onChange={(e) => setUser({...user, bio: e.target.value})}
                        className="bg-white/10 border-white/20 text-white min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">Местоположение</Label>
                      <Input
                        value={user.location}
                        onChange={(e) => setUser({...user, location: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">Веб-сайт</Label>
                      <Input
                        type="url"
                        value={user.website}
                        onChange={(e) => setUser({...user, website: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-open-sans">GitHub</Label>
                      <Input
                        type="url"
                        value={user.githubUrl}
                        onChange={(e) => setUser({...user, githubUrl: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <Button 
                      onClick={handleSaveProfile}
                      className="w-full bg-white text-gray-900 hover:bg-white/90 font-montserrat"
                    >
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить изменения
                    </Button>
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

export default Profile;