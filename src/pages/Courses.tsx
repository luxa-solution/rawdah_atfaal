import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Scroll,
  Heart,
  BookText,
  BookMarked,
  AudioLines,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import quranIcon from "@/assets/quran-icon.jpg";
import hadithIcon from "@/assets/hadith-icon.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Qur'an Learning Program",
      description:
        "Beautiful recitation, memorization, and understanding with proper Tajweed, following traditional methodologies",
      icon: quranIcon,
      iconType: "image",
      link: "/quran",
      gradient: "from-primary-soft to-accent-blue",
      features: [
        "Proper Tajweed and pronunciation",
        "Memorization support (Hifz)",
        "Interactive learning activities",
      ],
    },
    {
      title: "Hadith Learning Program",
      description:
        "Nurturing character through the beautiful teachings of Prophet Muhammad ﷺ, upon the sound ʿAqeedah and worship ('Ibaadah) as understood by the Salaf.",
      icon: hadithIcon,
      iconType: "image",
      link: "/hadith",
      gradient: "from-accent-coral to-accent-yellow",
      features: [
        "Authentic Hadith from At-tifl al-labiib",
        "Moral and character development",
        "Interactive and engaging lessons",
      ],
    },
    {
      title: "Aqeedah Program",
      description:
        "Building a strong foundation in Islamic belief and creed based on the Qur'an and Sunnah as understood by the righteous predecessors.",
      icon: Heart,
      iconType: "lucide",
      link: "/aqeedah",
      gradient: "from-purple-100 to-pink-100",
      features: [
        "Authentic Islamic creed",
        "Understanding Tawheed",
        "Refuting misconceptions",
      ],
    },
    {
      title: "Fiqh Program",
      description:
        "Learning Islamic jurisprudence and practical rulings for everyday worship and interactions based on authentic sources.",
      icon: BookText,
      iconType: "lucide",
      link: "/fiqh",
      gradient: "from-green-100 to-emerald-100",
      features: [
        "Practical Islamic rulings",
        "Understanding worship",
        "Daily life applications",
      ],
    },
    {
      title: "Tafsir Program",
      description:
        "Understanding the meanings and wisdoms of the Qur'an through authentic explanations and scholarly interpretations.",
      icon: BookMarked,
      iconType: "lucide",
      link: "/tafsir",
      gradient: "from-blue-100 to-indigo-100",
      features: [
        "Quranic meanings and context",
        "Scholarly interpretations",
        "Practical applications",
      ],
    },
    {
      title: "Tajwid Program",
      description:
        "Mastering the art of Quranic recitation with proper pronunciation, articulation points, and beautification rules.",
      icon: AudioLines,
      iconType: "lucide",
      link: "/tajwid",
      gradient: "from-amber-100 to-orange-100",
      features: [
        "Articulation points (Makharij)",
        "Quranic recitation rules",
        "Beautiful Qur'an recitation",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Islamic Education Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Islamic learning designed specifically for children,
              following the methodologies of the pious predecessors. We teach
              based on the pure creed and teachings of Quran and Sunnah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="animate-gentle-bounce hover:animate-pulse"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
              </a>
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Book Free Trial
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select from our comprehensive range of Islamic education programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${course.gradient} animate-fade-up`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-soft mb-4">
                    {course.iconType === "image" ? (
                      <img
                        src={course.icon as string}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        {course.icon === Heart && (
                          <Heart className="w-10 h-10 text-primary" />
                        )}
                        {course.icon === BookText && (
                          <BookText className="w-10 h-10 text-primary" />
                        )}
                        {course.icon === BookMarked && (
                          <BookMarked className="w-10 h-10 text-primary" />
                        )}
                        {course.icon === AudioLines && (
                          <AudioLines className="w-10 h-10 text-primary" />
                        )}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 pb-4">
                    {course.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={course.link}>
                    <Button
                      variant="program"
                      className="w-full group-hover:shadow-lg"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up"
            style={{ animationDelay: "1.2s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Begin Your Child's Islamic Education?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join our community of Muslim families committed to providing their
              children with authentic Islamic education based on the Quran and
              Sunnah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="shadow-gold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Free Trial
                </Button>
              </a>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary"
                >
                  Speak with the Director
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
