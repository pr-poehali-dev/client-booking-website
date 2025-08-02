import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [availableServices, setAvailableServices] = useState([]);

  const masters = [
    {
      id: 'marina',
      name: 'Марина Царёва',
      title: 'Инструктор / Руководитель',
      specialty: 'Лешмейкер',
      services: [
        { id: 'classic', name: 'Классика', duration: '1 ч. 30 мин.', price: 2000 },
        { id: '1.5d', name: 'Полуторный объём (1,5D)', duration: '1 ч. 40 мин.', price: 2200 },
        { id: '2d', name: 'Двойной объём (2D)', duration: '2 ч.', price: 2300 },
        { id: '2.5d', name: 'Двойной с половиной объём (2,5D)', duration: '2 ч. 15 мин.', price: 2400 },
        { id: '3d', name: 'Тройной объём (3D)', duration: '2 ч. 30 мин.', price: 2500 },
        { id: '3.5d', name: '3,5D объем', duration: '2 ч. 30 мин.', price: 2600 },
        { id: '4d', name: 'Гиперобъем (4d)', duration: '3 ч.', price: 2700 },
        { id: '5d-6d', name: 'Гиперобъем (5D-6D)', duration: '3 ч.', price: 2900 },
        { id: 'colored', name: 'Лучи, Ким, цветные вставки', duration: '10 мин.', price: 200 },
        { id: 'removal-before', name: 'Снятие чужой работы перед наращиванием', duration: '15 мин.', price: 100 },
        { id: 'removal', name: 'Снятие ресниц без последующего наращивания', duration: '15 мин.', price: 300 },
        { id: 'brows', name: 'Коррекция+окрашивание бровей (Хна/Воск/Пинцет)', duration: '45 мин.', price: 1000 },
        { id: 'upper-lip', name: 'Удаление волос верхней губы (Воск)', duration: '10 мин.', price: 400 },
        { id: 'led', name: 'Led наращивание', duration: '5 мин.', price: 200 },
        { id: 'training', name: 'Обучение: классическое наращивание ресниц', duration: '16 ч.', price: 18000 }
      ]
    },
    {
      id: 'anastasia',
      name: 'Анастасия Борисова',
      title: 'Топ-мастер',
      specialty: 'Лешмейкер',
      services: [
        { id: 'classic', name: 'Классика', duration: '1 ч. 30 мин.', price: 1900 },
        { id: '1.5d', name: '1,5D объем', duration: '2 ч.', price: 2000 },
        { id: '2d', name: '2D объем', duration: '2 ч. 30 мин.', price: 2100 },
        { id: '2.5d', name: '2,5D объем', duration: '2 ч. 30 мин.', price: 2200 },
        { id: '3d', name: '3D объем', duration: '2 ч. 30 мин.', price: 2300 },
        { id: '3.5d', name: '3,5D объем', duration: '2 ч. 30 мин.', price: 2400 },
        { id: '4d', name: '4D объем', duration: '2 ч. 30 мин.', price: 2500 },
        { id: '0.5d', name: '0.5 D классика', duration: '1 ч. 30 мин.', price: 1400 },
        { id: 'l-m-bends', name: 'Изгибы L, M', duration: '', price: 200 },
        { id: 'removal', name: 'Снятие ресниц без последующего наращивания', duration: '15 мин.', price: 300 },
        { id: 'removal-before', name: 'Снятие чужой работы перед наращиванием', duration: '15 мин.', price: 100 },
        { id: 'corner', name: 'Уголок l или m изгиб', duration: '', price: 100 },
        { id: 'colored', name: 'Цветные вставки', duration: '', price: 100 },
        { id: 'holiday', name: 'Праздничные дни', duration: '', price: 500 },
        { id: 'thickening', name: 'Загущение', duration: '', price: 100 }
      ]
    },
    {
      id: 'anna',
      name: 'Анна Журавлёва',
      title: 'Топ-мастер',
      specialty: 'Бровист',
      services: [
        { id: 'pm-lips', name: 'Перманентный макияж губ (акварель)', duration: '4 ч.', price: 7000 },
        { id: 'pm-update', name: 'Обновление цвета (перманентный макияж)', duration: '2 ч.', price: 5000 },
        { id: 'pm-brows', name: 'Перманентный макияж бровей (пудра)', duration: '3 ч.', price: 7000 },
        { id: 'lash-lamination', name: 'Ламинирование ресниц + BOTOX (питание)', duration: '1 ч. 30 мин.', price: 1800 },
        { id: 'brows-thread', name: 'Коррекция и окрашивание бровей НИТЬ/пинцет (краской/хной)', duration: '1 ч.', price: 1000 },
        { id: 'brows-wax', name: 'Коррекция и окрашивание бровей ВОСК/пинцет (хна/краска)', duration: '1 ч.', price: 1200 },
        { id: 'brows-correction', name: 'Коррекция бровей(пинцет/нить)', duration: '40 мин.', price: 700 },
        { id: 'brow-styling', name: 'Долговременная укладка бровей', duration: '1 ч.', price: 1600 },
        { id: 'lash-express', name: 'Ламинирование ресниц (экспресс)', duration: '40 мин.', price: 1600 },
        { id: 'brow-botox', name: 'Долговременная укладка бровей + протеинботокс', duration: '1 ч.', price: 1900 },
        { id: 'pm-cover', name: 'Перекрытие старого перманента', duration: '3 ч.', price: 10000 },
        { id: 'nose-wax', name: 'Нос (воск)', duration: '20 мин.', price: 400 },
        { id: 'brow-lighten', name: 'Осветление бровей', duration: '20 мин.', price: 600 },
        { id: 'brow-thin', name: 'Прореживание бровей', duration: '30 мин.', price: 500 },
        { id: 'botox-treatment', name: 'Botox+collagen+vitaminB', duration: '20 мин.', price: 400 },
        { id: 'lower-lash', name: 'Ламинирование нижних ресниц', duration: '30 мин.', price: 750 },
        { id: 'brow-happiness', name: 'Счастье для бровей', duration: '10 мин.', price: 600 },
        { id: 'lash-tint', name: 'Окрашивание ресниц', duration: '30 мин.', price: 450 },
        { id: 'upper-lip', name: 'Удаление волос верхняя губа', duration: '10 мин.', price: 400 },
        { id: 'pm-correction', name: 'Коррекция ПМ бровей', duration: '2 ч.', price: 3500 },
        { id: 'pm-consultation', name: 'Консультация Перманентный макияж бровей', duration: '1 ч.', price: 500 }
      ]
    },
    {
      id: 'victoria',
      name: 'Виктория Кундина',
      title: 'Мастер-стажёр',
      specialty: 'Лешмейкер',
      services: [
        { id: 'classic', name: 'Классика', duration: '3 ч. 30 мин.', price: 800 },
        { id: 'wet-effect', name: 'Мокрый эффект (2д)', duration: '4 ч.', price: 1000 },
        { id: 'removal', name: 'Снятие ресниц', duration: '30 мин.', price: 200 },
        { id: '2d-model', name: 'Двойной объем (модель)', duration: '4 ч.', price: 500 },
        { id: 'lower-model', name: 'Наращивание нижних ресниц (модель)', duration: '1 ч. 30 мин.', price: 200 }
      ]
    }
  ];

  const handleMasterChange = (masterId) => {
    setSelectedMaster(masterId);
    const master = masters.find(m => m.id === masterId);
    setAvailableServices(master ? master.services : []);
    setSelectedService('');
  };

  const getSelectedServicePrice = () => {
    if (!selectedMaster || !selectedService) return '';
    const master = masters.find(m => m.id === selectedMaster);
    const service = master?.services.find(s => s.id === selectedService);
    return service ? `${service.price}₽` : '';
  };

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/files/c33b42b1-a1ac-49d6-84b3-05561adf5ab8.jpg',
    'https://cdn.poehali.dev/files/c33b42b1-a1ac-49d6-84b3-05561adf5ab8.jpg',
    'https://cdn.poehali.dev/files/c33b42b1-a1ac-49d6-84b3-05561adf5ab8.jpg',
    'https://cdn.poehali.dev/files/c33b42b1-a1ac-49d6-84b3-05561adf5ab8.jpg'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Blurred Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/c33b42b1-a1ac-49d6-84b3-05561adf5ab8.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-inter font-bold text-white">Beauty Studio</h1>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#booking" className="hover:text-primary transition-colors">Запись</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden glass-effect border-white/30 text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-inter font-bold mb-6">
            Красота в ваших руках
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-open-sans max-w-2xl mx-auto">
            Профессиональные услуги красоты с заботой о каждой детали
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальную процедуру для себя</p>
          </div>
          
          <div className="grid gap-8">
            {masters.map((master, index) => (
              <Card key={master.id} className="hover-scale animate-fade-in border-0 shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary rounded-full">
                      <Icon name="User" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-inter">{master.name}</CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {master.title} • {master.specialty}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {master.services.slice(0, 6).map((service) => (
                      <div key={service.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{service.name}</h4>
                          <span className="text-primary font-bold">{service.price}₽</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{service.duration}</p>
                      </div>
                    ))}
                    {master.services.length > 6 && (
                      <div className="p-4 border rounded-lg bg-muted/30 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">+{master.services.length - 6} услуг</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-4 bg-secondary hover:bg-secondary/90" 
                    onClick={() => {
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                      handleMasterChange(master.id);
                    }}
                  >
                    Записаться к мастеру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-4">Онлайн запись</h2>
            <p className="text-xl text-muted-foreground">Забронируйте удобное время</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-inter text-center">Записаться на процедуру</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="master">Мастер</Label>
                  <Select value={selectedMaster} onValueChange={handleMasterChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите мастера" />
                    </SelectTrigger>
                    <SelectContent>
                      {masters.map((master) => (
                        <SelectItem key={master.id} value={master.id}>
                          {master.name} - {master.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={selectedService} onValueChange={setSelectedService} disabled={!selectedMaster}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedMaster ? "Выберите услугу" : "Сначала выберите мастера"} />
                    </SelectTrigger>
                    <SelectContent>
                      {availableServices.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.price}₽ ({service.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {getSelectedServicePrice() && (
                    <div className="mt-2 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-medium">Стоимость: <span className="text-primary text-lg">{getSelectedServicePrice()}</span></p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Время</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Дополнительные пожелания..." rows={3} />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6" disabled={!selectedMaster || !selectedService}>
                  <Icon name="Check" size={20} className="mr-2" />
                  Подтвердить запись{getSelectedServicePrice() && ` за ${getSelectedServicePrice()}`}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`} 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады вас видеть</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary rounded-full">
                  <Icon name="MapPin" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg">Адрес</h3>
                  <p className="text-muted-foreground">ул. Красоты, 123, Москва</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Icon name="Phone" size={24} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent rounded-full">
                  <Icon name="Clock" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-destructive rounded-full">
                  <Icon name="Mail" size={24} className="text-destructive-foreground" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@beautystudio.ru</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-inter">Связаться с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Ваш телефон" />
                <Input placeholder="Email" />
                <Textarea placeholder="Ваше сообщение..." rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-inter font-bold mb-4">Beauty Studio</h3>
            <p className="text-lg mb-6">Красота — это искусство, которое мы создаем вместе</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;