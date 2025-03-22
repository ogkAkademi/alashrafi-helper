
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground animate-fade-in opacity-0">
              أحدث الفيديوهات
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animate-stagger-1">
              تاريخنا <span className="text-primary">هويتنا</span> <br />
              نافذتك على أحداث الماضي
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in animate-stagger-2">
              محتوى تاريخي موثق يقدم لك المعلومة الدقيقة بأسلوب سلس يجمع بين المتعة والفائدة، ليأخذك في رحلة عبر الزمن
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 opacity-0 animate-fade-in animate-stagger-3">
              <Button asChild size="lg">
                <Link to="/videos/nuclear-weapons-ww2">
                  شاهد آخر الفيديوهات
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/about">تعرف علينا أكثر</Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 pt-4 opacity-0 animate-fade-in animate-stagger-4">
              <div className="text-center">
                <p className="font-bold text-2xl">+500</p>
                <p className="text-muted-foreground text-sm">فيديو</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl">+100K</p>
                <p className="text-muted-foreground text-sm">مشترك</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl">+200</p>
                <p className="text-muted-foreground text-sm">مقال</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 opacity-0 animate-fade-in">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="قناة التاريخ" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md rounded-lg p-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                  <span className="font-medium text-sm">مباشر الآن</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-lg p-4 w-64 glass-card animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 space-x-reverse">
                  <div className="w-8 h-8 rounded-full bg-secondary"></div>
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <p className="text-sm font-medium">+10,000 مشاهدة</p>
                  <p className="text-xs text-muted-foreground">آخر أسبوع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
