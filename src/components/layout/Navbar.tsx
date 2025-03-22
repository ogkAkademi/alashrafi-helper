
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { title: "الرئيسية", href: "/" },
    { title: "الفيديوهات", href: "/videos" },
    { title: "مقالات", href: "/articles" },
    { title: "من نحن", href: "/about" },
    { title: "اتصل بنا", href: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Youtube className="h-6 w-6 text-red-600" />
              <span className="font-bold text-xl">فارس</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navigationLinks.map((link, i) => (
              <Link 
                key={link.href} 
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground",
                  "link-hover mx-1"
                )}
              >
                {link.title}
              </Link>
            ))}
            <Button size="sm" className="mr-4">
              الاشتراك في القناة
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 rounded-lg bg-background/90 backdrop-blur-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href} 
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.href 
                      ? "bg-secondary text-secondary-foreground" 
                      : "text-muted-foreground hover:bg-secondary/50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Button size="sm" className="mt-2">
                الاشتراك في القناة
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
