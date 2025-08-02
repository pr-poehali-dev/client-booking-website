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

  const services = [
    { id: 'eyelashes', name: 'Наращивание ресниц', price: '3500₽', duration: '2 часа' },
    { id: 'eyebrows', name: 'Оформление бровей', price: '2500₽', duration: '1 час' },
    { id: 'manicure', name: 'Маникюр', price: '2000₽', duration: '1.5 часа' },
    { id: 'facial', name: 'Уход за лицом', price: '4000₽', duration: '1.5 часа' },
    { id: 'massage', name: 'Массаж лица', price: '3000₽', duration: '1 час' },
    { id: 'peeling', name: 'Пилинг', price: '3500₽', duration: '1 час' }
  ];

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="hover-scale animate-fade-in border-0 shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-inter">{service.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    Длительность: {service.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90" 
                    onClick={() => setSelectedService(service.id)}
                  >
                    Выбрать услугу
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
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Check" size={20} className="mr-2" />
                  Подтвердить запись
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