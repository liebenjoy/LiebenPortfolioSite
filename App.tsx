import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  Users,
  Code,
  Award,
  BookOpen,
  ExternalLink,
  Download,
} from "lucide-react";

export default function App() {
  const experiences = [
    {
      title: "VP - Head of UI Engineering",
      company: "Envestnet, Inc",
      location: "Berwyn, PA",
      period: "Mar 2020 - Present",
      description:
        "Heading UI Engineering and AI Test Automation at Envestnet. Responsible for the User Interface Experience modernization, Technology Innovation & Digital Transformation, AI Strategy & AI Automation, and Developer Experience (DX).",
      achievements: [
        "Built a top-notch high performing UI Engineering global team from the ground up",
        "Modernized all Platform's UI interfaces for Envestnet's applications",
        "Established team as center of excellence in developing cutting-edge, modern user interfaces",
        "Led AI adoption and digital transformation-modernization of Envestnet's wealth products",
      ],
    },
    {
      title: "Founder/CTO",
      company: "LIEBENS TECHNOLOGIES",
      location: "Remote",
      period: "Jan 2007 - Present",
      description:
        "Fullstack Web & Mobile Application Development with strong focus on modern frontend technologies. Managed projects, continuous improvement initiatives, and worked closely with business partners to provide appropriate solutions.",
      achievements: [
        "Hired, developed, and supervised direct reports across multiple projects",
        "Defined, managed and driven progress toward technology roadmap",
        "Managed external vendor partnerships and contracts",
        "Led complex applications providing leadership, direction, and implementation on technical projects",
      ],
    },
    {
      title: "Frontend Application Architect/Engineering Management",
      company: "FolioDynamix Inc (Acquired by Envestnet)",
      location: "Berwyn, PA",
      period: "Jan 2010 - Mar 2020",
      description:
        "Hands-on Application Architect. Managed Folio's Core Trading platform and UI Modernization team, focusing on electronic trading systems and user interface design.",
      achievements: [
        "Led UI modernization initiatives for core trading platform",
        "Implemented design thinking methodologies in product development",
        "Managed successful product launches and operational excellence initiatives",
        "Drove technology architecture decisions for trading applications",
      ],
    },
    {
      title: "Technology Leader",
      company: "SYNTEL INC",
      location: "Remote",
      period: "Sep 2005 - Feb 2010",
      description:
        "Led technology initiatives focusing on software quality and applications delivery across multiple client engagements.",
      achievements: [
        "Drove technology trends adoption across organization",
        "Improved software quality processes and delivery methodologies",
        "Led applications delivery for enterprise clients",
      ],
    },
    {
      title: "Engineering Manager - Business Travel",
      company: "American Express",
      location: "Phoenix, Arizona",
      period: "Jan 2009 - Jan 2010",
      description:
        "Led the PCI DSS Initiative and Java Team for Business Travel Business Unit, ensuring compliance and security standards.",
      achievements: [
        "Successfully implemented PCI DSS compliance initiative",
        "Led Java development team for business travel applications",
        "Enhanced stakeholder engagement processes",
      ],
    },
    {
      title: "Tech Lead",
      company: "American Express",
      location: "Phoenix, Arizona",
      period: "Sep 2007 - Jul 2008",
      description:
        "Tech Lead for the Global Credit Card Applications, responsible for technical direction and implementation.",
      achievements: [
        "Led technical development for global credit card applications",
        "Implemented scalable solutions for high-volume transactions",
        "Mentored development team members",
      ],
    },
  ];

  const skills = {
    "Leadership & Management": [
      "Technology Leadership",
      "Team Building",
      "Strategic Vision",
      "Team Leadership",
      "Organizational Leadership",
      "Employee Engagement",
    ],
    "AI & Digital Transformation": [
      "Artificial Intelligence (AI)",
      "AI Strategy",
      "AI Automation",
      "Conversational AI",
      "Digital Transformation",
      "Technology Innovation",
    ],
    "Frontend Technologies": [
      "React.js",
      "Angular.js",
      "Vue.js",
      "Node.js",
      "Sencha ExtJS",
      "User Experience (UX)",
    ],
    "Backend & Database": [
      "Java",
      "J2EE",
      "PHP",
      "Oracle",
      "MySQL",
      "MongoDB",
    ],
    "Cloud & Big Data": [
      "Amazon Web Services (AWS)",
      "Apache Solr",
      "Apache Spark",
      "Apache Kafka",
      "Elasticsearch",
      "Elastic Search",
    ],
    "Architecture & Strategy": [
      "Technology Architecture",
      "Digital Strategy",
      "IT Strategy",
      "Technical Direction",
      "Product Innovation",
    ],
  };

  const projects = [
    {
      name: "Multi-Cloud Migration Platform",
      description:
        "Led development of automated platform for migrating applications across cloud providers with zero downtime",
      tech: ["Kubernetes", "Terraform", "Python", "AWS", "GCP"],
      impact: "Enabled seamless migration of 200+ services",
    },
    {
      name: "Real-time Analytics Engine",
      description:
        "Built scalable analytics platform processing billions of events daily with sub-second latency",
      tech: ["Apache Spark", "Kafka", "Redis", "Scala"],
      impact: "Improved decision-making speed by 10x",
    },
    {
      name: "Developer Productivity Suite",
      description:
        "Created internal tooling platform that streamlined development workflow and deployment processes",
      tech: ["React", "Node.js", "Docker", "Jenkins"],
      impact: "Reduced development cycle time by 50%",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2014",
      details:
        "Focus on Distributed Systems and Machine Learning",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "UC Berkeley",
      year: "2012",
      details: "Summa Cum Laude, Phi Beta Kappa",
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Cloud Architect",
    "Certified Kubernetes Administrator (CKA)",
    "PMI Agile Certified Practitioner (PMI-ACP)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <ImageWithFallback
                  src="/profile.jpeg"
                  alt="Lieben Joy Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Lieben Joy
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-100 mb-6">
                Head of Engineering - UI, AI & Automation
              </h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl leading-relaxed">
                Visionary technology leader and entrepreneur with 21+ years of
                industry experience. Currently serves as VP - Head of UI Engineering
                at Envestnet, where I built a top-notch high performing UI Engineering
                global team from the ground up and modernized all Platform's UI.
                Currently focusing on increased productivity using Agentic AI tools.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.location.href = 'mailto:liebenjoy@proton.me'}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center mb-8">
                <div className="flex items-center gap-2 text-blue-50">
                  <Mail className="w-5 h-5" />
                  <span>liebenjoy@proton.me</span>
                </div>
                <div className="flex items-center gap-2 text-blue-50">
                  <MapPin className="w-5 h-5" />
                  <span>Berwyn, PA</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open('https://www.linkedin.com/in/liebenjoy', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open('https://github.com/liebenjoy', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-3xl text-gray-800">
                120+
              </span>
            </div>
            <p className="text-gray-600">Engineers Led</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-6 h-6 text-green-600" />
              <span className="text-3xl text-gray-800">
                21+
              </span>
            </div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code className="w-6 h-6 text-purple-600" />
              <span className="text-3xl text-gray-800">
                50M+
              </span>
            </div>
            <p className="text-gray-600">Users Served</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-yellow-600" />
              <span className="text-3xl text-gray-800">4</span>
            </div>
            <p className="text-gray-600">Certifications</p>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-800">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-blue-600 mt-2">
                        <Building className="w-5 h-5" />
                        <span className="text-lg">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-gray-800 mb-3">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map(
                        (achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">
                              {achievement}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Code className="w-6 h-6 text-blue-500" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Notable Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                    <ExternalLink className="w-5 h-5 text-blue-500" />
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-600 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm text-green-600">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-l-blue-500 pl-4"
                    >
                      <h3 className="text-lg text-gray-800">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600">
                        {edu.school}
                      </p>
                      <p className="text-gray-600">
                        Graduated {edu.year}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Award className="w-6 h-6 text-yellow-500" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in discussing technology leadership,
            engineering best practices, or potential
            opportunities? I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:liebenjoy@proton.me'}
            >
              <Mail className="w-5 h-5" />
              liebenjoy@proton.me
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://www.linkedin.com/in/liebenjoy', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://github.com/liebenjoy', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub Portfolio
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 LiebEnjoy. Built with <span className="text-red-500">♥</span> Liebe
          </p>
        </div>
      </footer>
    </div>
  );
}