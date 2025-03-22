
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, ThumbsUp, Bookmark, Clock, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoCard from "@/components/ui/VideoCard";

// Sample video data - in a real app, this would come from an API
const videos = [
  {
    id: "nuclear-weapons-ww2",
    title: "الأسلحة النووية في الحرب العالمية الثانية",
    description: `
      <p>تعتبر الأسلحة النووية من أكثر الأسلحة فتكاً في التاريخ، وقد تم استخدامها لأول مرة في الحرب العالمية الثانية عندما ألقت الولايات المتحدة قنبلتين ذريتين على مدينتي هيروشيما وناغازاكي اليابانيتين في أغسطس 1945.</p>
      
      <h3>مشروع مانهاتن</h3>
      <p>بدأ تطوير الأسلحة النووية في الولايات المتحدة تحت اسم "مشروع مانهاتن" في عام 1942، وذلك بعد أن أقنع العلماء الرئيس روزفلت بأن ألمانيا النازية تعمل على تطوير أسلحة نووية. جمع المشروع أفضل العقول العلمية في ذلك الوقت، بما في ذلك روبرت أوبنهايمر الذي أصبح المدير العلمي للمشروع.</p>
      
      <h3>القنبلتان الذريتان</h3>
      <p>تم إطلاق اسم "ليتل بوي" على القنبلة الأولى التي ألقيت على هيروشيما في 6 أغسطس 1945، بينما أطلق على القنبلة الثانية اسم "فات مان" وألقيت على ناغازاكي بعد ثلاثة أيام. أدى الهجومان إلى مقتل ما يقدر بنحو 210,000 شخص، معظمهم من المدنيين، وتسببا في أضرار هائلة للمدينتين.</p>
      
      <h3>استسلام اليابان</h3>
      <p>بعد الهجومين النوويين، أعلنت اليابان استسلامها في 15 أغسطس 1945، مما أدى إلى إنهاء الحرب العالمية الثانية. يجادل المؤرخون حول ما إذا كان استخدام الأسلحة النووية ضرورياً لإنهاء الحرب، حيث يرى البعض أن اليابان كانت على وشك الاستسلام بالفعل، بينما يعتقد آخرون أن الهجمات وفرت ملايين الأرواح التي كان يمكن أن تفقد في غزو بري لليابان.</p>
      
      <h3>الإرث والآثار</h3>
      <p>أدى استخدام الأسلحة النووية في الحرب العالمية الثانية إلى بداية العصر النووي وسباق التسلح خلال الحرب الباردة. كما أدى إلى نشوء حركات عالمية تدعو لنزع السلاح النووي ومنع انتشاره. وما زالت آثار القنبلتين النوويتين تُدرس حتى يومنا هذا، خاصة فيما يتعلق بالآثار الصحية طويلة المدى للإشعاع النووي.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    views: "120K",
    date: "15 يوليو 2023",
    duration: "18:24",
    category: "الحروب العالمية",
    tags: ["الحرب العالمية الثانية", "أسلحة نووية", "هيروشيما", "ناغازاكي", "مشروع مانهاتن"]
  },
  // Include other videos for recommendations
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
    id: "cold-war",
    title: "الحرب الباردة وسباق التسلح النووي",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    views: "110K",
    date: "قبل شهر",
    duration: "20:15",
    category: "التاريخ المعاصر"
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

const VideoPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const video = videos.find((v) => v.id === videoId);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [videoId]);
  
  if (!video) {
    return <div>الفيديو غير موجود</div>;
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 ml-2" />
                العودة
              </Link>
            </Button>
          </div>
          
          {/* Video Player */}
          <div className="rounded-xl overflow-hidden aspect-video mb-6 shadow-lg">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Video Info */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <Link 
                to={`/category/${video.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                {video.category}
              </Link>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 ml-2" />
                  مشاركة
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 ml-2" />
                  حفظ
                </Button>
                
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 ml-2" />
                  إعجاب
                </Button>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{video.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Eye className="h-4 w-4 ml-1" />
                {video.views} مشاهدة
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 ml-1" />
                نُشر في {video.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 ml-1" />
                {video.duration} دقيقة
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Tags */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {video.tags?.map((tag) => (
                  <Link 
                    key={tag} 
                    to={`/tag/${tag}`}
                    className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: video.description }}></div>
          </div>
          
          {/* Related Videos */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">فيديوهات ذات صلة</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.filter(v => v.id !== videoId).slice(0, 4).map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VideoPage;
