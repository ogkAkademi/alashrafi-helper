
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample categories with their icons
  const categories = [
    { id: "world-wars", name: "الحروب العالمية", count: 42, color: "bg-red-100" },
    { id: "civilizations", name: "الحضارات القديمة", count: 38, color: "bg-amber-100" },
    { id: "islamic-history", name: "التاريخ الإسلامي", count: 45, color: "bg-green-100" },
    { id: "contemporary", name: "التاريخ المعاصر", count: 27, color: "bg-blue-100" },
    { id: "personalities", name: "شخصيات تاريخية", count: 36, color: "bg-purple-100" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideos />
        
        {/* Categories Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">استكشف فئات المحتوى</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                تصفح المحتوى التاريخي حسب اهتماماتك واكتشف المزيد من المعلومات المفصلة في كل فئة
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`${category.color} rounded-xl p-6 text-center transition-transform hover:scale-105 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-bold text-lg mb-2">{category.name}</div>
                  <div className="text-sm text-muted-foreground mb-4">{category.count} فيديو</div>
                  <Button variant="secondary" size="sm">استكشف</Button>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">انضم إلى مجتمعنا عبر يوتيوب</h2>
                <p className="text-muted-foreground mb-6">
                  اشترك في قناتنا على يوتيوب للحصول على إشعارات حول أحدث الفيديوهات التاريخية ولتكون جزءاً من مجتمع المهتمين بالتاريخ
                </p>
                <Button size="lg">
                  الاشتراك في القناة
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-primary/10 rounded-xl h-48 w-48 md:h-64 md:w-64"></div>
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-primary/5 border border-primary/10 rounded-xl h-48 w-48 md:h-64 md:w-64 animate-float"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
