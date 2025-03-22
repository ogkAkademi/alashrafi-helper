
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">قناة التاريخ</h3>
            <p className="text-muted-foreground text-sm">
              نقدم محتوى تاريخي موثق بمصادر علمية عالية الدقة، 
              ونسعى لتعريف المشاهد العربي بمختلف حقب التاريخ العالمي.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">الرئيسية</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-foreground transition-colors">الفيديوهات</Link></li>
              <li><Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">المقالات</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">من نحن</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">الفئات</h3>
            <ul className="space-y-2">
              <li><Link to="/category/world-wars" className="text-muted-foreground hover:text-foreground transition-colors">الحروب العالمية</Link></li>
              <li><Link to="/category/civilizations" className="text-muted-foreground hover:text-foreground transition-colors">الحضارات القديمة</Link></li>
              <li><Link to="/category/islamic-history" className="text-muted-foreground hover:text-foreground transition-colors">التاريخ الإسلامي</Link></li>
              <li><Link to="/category/contemporary" className="text-muted-foreground hover:text-foreground transition-colors">التاريخ المعاصر</Link></li>
              <li><Link to="/category/personalities" className="text-muted-foreground hover:text-foreground transition-colors">شخصيات تاريخية</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@historyarabic.com</span>
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                اشترك في نشرتنا البريدية للحصول على آخر المقالات والفيديوهات
              </p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="bg-secondary px-3 py-2 rounded-r-md w-full text-sm"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-l-md text-sm">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} قناة التاريخ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
