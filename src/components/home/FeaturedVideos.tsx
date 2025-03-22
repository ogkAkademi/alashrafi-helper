
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "../ui/VideoCard";

const FeaturedVideos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // approximate card width + gap
      
      if (direction === "left") {
        current.scrollTo({
          left: current.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        current.scrollTo({
          left: current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Sample video data
  const videos = [
    {
      id: "nuclear-weapons-ww2",
      title: "الأسلحة النووية في الحرب العالمية الثانية",
      thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      views: "120K",
      date: "قبل 2 أيام",
      duration: "18:24",
      category: "الحروب العالمية"
    },
    {
      id: "ancient-egypt",
      title: "أسرار بناء الأهرامات في مصر القديمة",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      views: "95K",
      date: "قبل أسبوع",
      duration: "22:10",
      category: "الحضارات القديمة"
    },
    {
      id: "islamic-golden-age",
      title: "العصر الذهبي للحضارة الإسلامية",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      views: "87K",
      date: "قبل أسبوعين",
      duration: "25:36",
      category: "التاريخ الإسلامي"
    },
    {
      id: "cold-war",
      title: "الحرب الباردة وسباق التسلح النووي",
      thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      views: "110K",
      date: "قبل شهر",
      duration: "20:15",
      category: "التاريخ المعاصر"
    },
    {
      id: "napoleon",
      title: "حياة وحروب نابليون بونابرت",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      views: "76K",
      date: "قبل شهر",
      duration: "24:42",
      category: "شخصيات تاريخية"
    },
    {
      id: "berlin-wall",
      title: "قصة جدار برلين: البناء والسقوط",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      views: "92K",
      date: "قبل شهرين",
      duration: "19:50",
      category: "التاريخ المعاصر"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">أحدث الفيديوهات</h2>
            <p className="text-muted-foreground">تصفح آخر ما قدمناه من محتوى تاريخي مميز</p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="تمرير لليمين"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="تمرير لليسار"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <Button asChild className="mr-2">
              <Link to="/videos">
                جميع الفيديوهات
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 space-x-reverse pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-72 md:w-80">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
