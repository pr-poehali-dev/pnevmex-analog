import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wind" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ПНЕВМО-ГРУПП</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('main')} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-accent transition-colors">
                Продукция
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="main" className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Промышленное оборудование мирового класса
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Поставка, монтаж и обслуживание высокотехнологичного промышленного оборудования для производственных предприятий
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" variant="secondary" className="text-primary font-semibold">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать прайс
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: 'Wrench', label: 'Монтаж', value: '500+' },
                      { icon: 'Shield', label: 'Гарантия', value: '3 года' },
                      { icon: 'Clock', label: 'Опыт', value: '15 лет' },
                      { icon: 'Users', label: 'Клиентов', value: '200+' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <Icon name={stat.icon as any} size={32} className="mx-auto" />
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент промышленного оборудования от ведущих мировых производителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Cpu',
                title: 'Компрессорное оборудование',
                description: 'Винтовые и поршневые компрессоры производительностью от 0.5 до 50 м³/мин',
                features: ['Энергоэффективность', 'Низкий уровень шума', 'Автоматизация']
              },
              {
                icon: 'Gauge',
                title: 'Пневматические системы',
                description: 'Комплексные решения для пневмотранспорта и автоматизации производства',
                features: ['Подготовка воздуха', 'Распределение', 'Управление']
              },
              {
                icon: 'Zap',
                title: 'Гидравлическое оборудование',
                description: 'Гидростанции, насосы и системы управления повышенной надежности',
                features: ['Высокое давление', 'Точность', 'Долговечность']
              },
              {
                icon: 'Wind',
                title: 'Вентиляционные системы',
                description: 'Промышленная вентиляция и системы очистки воздуха',
                features: ['Фильтрация', 'Вытяжка', 'Рециркуляция']
              },
              {
                icon: 'Activity',
                title: 'Контрольно-измерительные приборы',
                description: 'КИПиА для мониторинга и управления технологическими процессами',
                features: ['Датчики', 'Контроллеры', 'SCADA']
              },
              {
                icon: 'Cog',
                title: 'Запасные части',
                description: 'Оригинальные запчасти и расходные материалы для всех типов оборудования',
                features: ['Быстрая доставка', 'Гарантия качества', 'Склад в России']
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ от проектирования до постгарантийного обслуживания
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Lightbulb',
                title: 'Проектирование и консультации',
                description: 'Разработка технических решений под задачи вашего производства. Подбор оптимального оборудования и расчет экономической эффективности.'
              },
              {
                icon: 'Package',
                title: 'Поставка оборудования',
                description: 'Прямые контракты с производителями. Конкурентные цены, гарантия подлинности, полный пакет документов и сертификатов.'
              },
              {
                icon: 'Hammer',
                title: 'Монтаж и пусконаладка',
                description: 'Профессиональная установка силами сертифицированных специалистов. Интеграция с существующими системами, обучение персонала.'
              },
              {
                icon: 'Settings',
                title: 'Сервисное обслуживание',
                description: 'Плановое ТО, диагностика, ремонт любой сложности. Договоры на постоянное обслуживание. Выездная служба 24/7.'
              }
            ].map((service, index) => (
              <Card key={index} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>ПНЕВМО-ГРУПП</strong> — ведущий поставщик промышленного оборудования с 2009 года. 
                  Мы специализируемся на комплексном оснащении производственных предприятий современным 
                  высокотехнологичным оборудованием.
                </p>
                <p>
                  Наша команда объединяет опытных инженеров, проектировщиков и сервисных специалистов. 
                  Мы работаем напрямую с производителями из Германии, Италии, Японии и других стран, 
                  что позволяет предлагать конкурентные цены и гарантировать качество.
                </p>
                <p>
                  За 15 лет работы мы реализовали более 500 проектов для предприятий различных отраслей: 
                  машиностроение, пищевая промышленность, деревообработка, металлургия.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '15', label: 'лет на рынке', icon: 'Calendar' },
                { value: '200+', label: 'довольных клиентов', icon: 'Users' },
                { value: '500+', label: 'реализованных проектов', icon: 'Briefcase' },
                { value: '24/7', label: 'техподдержка', icon: 'HeadphonesIcon' }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <Icon name={stat.icon as any} size={32} className="mx-auto mb-4 text-accent" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и наш менеджер свяжется с вами в течение часа
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите вашу задачу" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-2xl font-bold text-primary">+7 (495) 123-45-67</div>
                      <div className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-lg text-primary">info@promtech.ru</div>
                      <div className="text-lg text-primary">sales@promtech.ru</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Адрес офиса</div>
                      <div className="text-muted-foreground">
                        125047, г. Москва,<br />
                        ул. Промышленная, д. 15, офис 301
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={28} />
                <span className="text-xl font-bold">ПНЕВМО-ГРУПП</span>
              </div>
              <p className="text-white/80 text-sm">
                Надежный партнер в области промышленного оборудования с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Компрессоры</li>
                <li>Пневматика</li>
                <li>Гидравлика</li>
                <li>Вентиляция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Проектирование</li>
                <li>Поставка</li>
                <li>Монтаж</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@promtech.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 ПНЕВМО-ГРУПП. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;