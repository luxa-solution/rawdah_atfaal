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
  Users,
  Clock,
  Award,
  BookMarked,
  Star,
  Heart,
} from "lucide-react";
import Layout from "@/components/Layout";

const TafsirProgram = () => {
  const features = [
    {
      icon: BookMarked,
      title: "Quranic Understanding",
      description: "Learning the meanings and wisdom of the Quran",
    },
    {
      icon: Users,
      title: "One-on-One Classes",
      description:
        "Personalized learning with dedicated attention from your teacher.",
    },
    {
      icon: Clock,
      title: "Structured Learning",
      description: "Comprehensive curriculum covering key surahs",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Official certification upon completion of each level",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Foundation",
      description:
        "Introduction to Tafsir and principles of understanding the Quran",
    },
    {
      number: "02",
      title: "Short Surahs",
      description: "Understanding the meanings of Juz Amma",
    },
    {
      number: "03",
      title: "Important Surahs",
      description: "Studying key surahs and their context",
    },
    {
      number: "04",
      title: "Practical Application",
      description: "Applying Quranic teachings in daily life",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div
              className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-card animate-fade-up bg-primary/10 flex items-center justify-center"
              style={{ animationDelay: "0.2s" }}
            >
              <BookMarked className="w-12 h-12 text-primary" />
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-foreground animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Rawdatul Atfaal Tafsir Program
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Understanding the meanings and wisdoms of the Qur'an through
              authentic explanations and scholarly interpretations. We teach
              Tafsir based on the understanding of the Salaf.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="animate-gentle-bounce hover:animate-pulse"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Free Trial
                </Button>
              </a>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Speak with the Director
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Tafsir Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide authentic explanations of the Quran based on scholarly
              interpretations and the understanding of the righteous
              predecessors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary-soft rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            className="text-center space-y-4 mb-16 animate-fade-up"
            style={{ animationDelay: "1.6s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Learning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to understanding Quranic meanings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${1.8 + index * 0.2}s` }}
              >
                <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-6 animate-fade-up"
              style={{ animationDelay: "2.2s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Teaching Methodology
              </h2>
              <p className="text-lg text-muted-foreground">
                We teach Tafsir using authentic scholarly works and the
                explanations of the Salaf. Our approach helps children
                understand the Quran's meanings and apply them in their lives.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Authentic Sources
                    </h4>
                    <p className="text-muted-foreground">
                      Using classical and contemporary scholars' explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Context & Wisdom
                    </h4>
                    <p className="text-muted-foreground">
                      Understanding the context and lessons of each verse
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Age-Appropriate
                    </h4>
                    <p className="text-muted-foreground">
                      Simplified explanations suitable for children
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="program" size="lg" className="mt-8">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Begin Trial
                </Button>
              </a>
            </div>

            <div
              className="relative animate-fade-up"
              style={{ animationDelay: "2.4s" }}
            >
              <div className="w-full h-96 bg-gradient-warm rounded-3xl p-8 shadow-card">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Program Details
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive Tafsir curriculum
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Class Format
                    </div>
                    <p className="text-muted-foreground">
                      One-on-one personalized instruction
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xl font-semibold text-foreground">
                      Course Materials
                    </div>
                    <p className="text-muted-foreground">
                      Authentic Tafsir texts and resources
                    </p>
                    <p className="text-muted-foreground">
                      Digital learning materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-islamic">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up"
            style={{ animationDelay: "2.6s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Discover the Meanings of the Quran
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Enroll in our Tafsir program to help your child understand the
              beautiful meanings and wisdom of Allah's words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="shadow-gold">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Schedule Trial
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
                  Contact Director
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TafsirProgram;
