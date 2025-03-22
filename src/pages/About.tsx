
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 ml-2" />
                العودة للرئيسية
              </Link>
            </Button>
          </div>
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">من نحن</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              قناة تاريخية عربية تهدف إلى نشر الوعي التاريخي وتقديم المعلومة الدقيقة بطريقة سلسة ومبسطة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="فريق العمل" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">رسالتنا</h2>
              <p className="text-lg">
                نسعى من خلال قناتنا على يوتيوب وموقعنا الإلكتروني إلى توفير محتوى تاريخي عربي موثوق ومفصل، 
                يجمع بين الدقة العلمية والأسلوب السلس الممتع، ليكون مرجعاً يعتمد عليه المشاهد العربي 
                في استقاء معلوماته التاريخية.
              </p>
              <p className="text-lg">
                نؤمن بأن المحتوى العربي يستحق أن يكون بجودة عالمية، لذلك نحرص على الاستعانة بالمصادر 
                الموثوقة والمراجع العلمية المعتمدة، والاستشهاد بآراء المؤرخين والخبراء المختصين في 
                مختلف المجالات التاريخية.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-secondary/50 rounded-xl p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">محتوى موثوق</h3>
              <p className="text-muted-foreground">
                نستند إلى مصادر ومراجع علمية موثوقة لضمان دقة المعلومات المقدمة
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">عرض متميز</h3>
              <p className="text-muted-foreground">
                نقدم المعلومة بطريقة مبسطة مع الاهتمام بالجانب البصري واستخدام الرسوم التوضيحية
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">تغطية شاملة</h3>
              <p className="text-muted-foreground">
                نهتم بتغطية مختلف العصور والحضارات والأحداث التاريخية الهامة حول العالم
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فريق العمل</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "أحمد محمد", role: "مؤسس القناة ومقدم المحتوى" },
                { name: "سارة علي", role: "باحثة تاريخية" },
                { name: "محمود خالد", role: "مونتاج وإخراج" },
                { name: "نورا أحمد", role: "تصميم جرافيك" },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-secondary mb-4"></div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">انضم إلينا</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              شاركنا رحلتنا في استكشاف التاريخ ونشر المعرفة التاريخية الموثوقة.
              اشترك في قناتنا على يوتيوب وتابعنا على منصات التواصل الاجتماعي.
            </p>
            <Button size="lg">
              الاشتراك في القناة
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
