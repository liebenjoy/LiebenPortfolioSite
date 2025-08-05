import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from "lucide-react";

export function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-slate-900">Alex Chen</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-slate-900 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-600 hover:text-slate-900 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-5xl font-bold text-slate-900 mb-4">Alex Chen</h1>
                <h2 className="text-2xl text-blue-600 mb-6">Head of Engineering</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Experienced engineering leader with 12+ years building scalable systems and high-performing teams. 
                  Passionate about driving innovation, mentoring talent, and delivering exceptional user experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
              <div className="flex items-center gap-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>alex.chen@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Chen"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="flex gap-2">
                    <Github className="w-6 h-6 text-slate-600 hover:text-slate-900 cursor-pointer" />
                    <Linkedin className="w-6 h-6 text-slate-600 hover:text-blue-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">
                As Head of Engineering, I lead cross-functional teams to build products that serve millions of users. 
                My journey spans from individual contributor to engineering leadership, giving me deep technical expertise 
                and strategic vision.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I'm passionate about creating inclusive engineering cultures, implementing best practices for scalable 
                architecture, and mentoring the next generation of engineering talent. My approach combines technical 
                excellence with business acumen to drive meaningful impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scaled engineering team from 15 to 120+ engineers across 4 countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led architecture redesign that improved system performance by 300%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented DevOps practices reducing deployment time from hours to minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Established engineering standards that reduced bugs by 60%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Head of Engineering</CardTitle>
                    <CardDescription className="text-lg text-blue-600">TechCorp Inc.</CardDescription>
                  </div>
                  <span className="text-slate-500">2021 - Present</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Leading engineering organization of 120+ engineers across platform, product, and infrastructure teams. 
                  Responsible for technical strategy, architecture decisions, and engineering culture.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Implemented microservices architecture serving 50M+ daily active users</li>
                  <li>Established engineering hiring and onboarding processes</li>
                  <li>Led migration to cloud-native infrastructure reducing costs by 40%</li>
                  <li>Built engineering career ladder and mentorship programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Engineering Manager</CardTitle>
                    <CardDescription className="text-lg text-green-600">ScaleUp Technologies</CardDescription>
                  </div>
                  <span className="text-slate-500">2018 - 2021</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Managed multiple engineering teams building core platform services. Grew engineering team from 8 to 45 engineers.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Led development of real-time analytics platform processing 1B+ events daily</li>
                  <li>Implemented CI/CD pipelines and automated testing frameworks</li>
                  <li>Established code review practices and technical documentation standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Lead Software Engineer</CardTitle>
                    <CardDescription className="text-lg text-purple-600">StartupXYZ</CardDescription>
                  </div>
                  <span className="text-slate-500">2015 - 2018</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Led technical design and implementation of core product features. Mentored junior engineers and established engineering practices.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Architected and built distributed system handling 10M+ API requests daily</li>
                  <li>Implemented automated deployment and monitoring systems</li>
                  <li>Led technical interviews and contributed to hiring strategy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Team Building</Badge>
                  <Badge variant="secondary">Strategic Planning</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Performance Management</Badge>
                  <Badge variant="secondary">Culture Building</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Cloud Architecture</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Database Architecture</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">JavaScript/TypeScript</Badge>
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cloud Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">CloudFormation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Monitoring</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Master of Science in Computer Science</CardTitle>
                <CardDescription>Stanford University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Graduated: 2013</p>
                <p className="text-slate-600">Focus: Distributed Systems and Machine Learning</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Bachelor of Science in Software Engineering</CardTitle>
                <CardDescription>UC Berkeley</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Graduated: 2011</p>
                <p className="text-slate-600">Magna Cum Laude</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AWS Solutions Architect</CardTitle>
                <CardDescription>Amazon Web Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Professional Level Certification</p>
                <p className="text-slate-600">Obtained: 2022</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Certified Kubernetes Administrator</CardTitle>
                <CardDescription>Cloud Native Computing Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">CKA Certification</p>
                <p className="text-slate-600">Obtained: 2021</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow engineering leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              alex.chen@email.com
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              <Linkedin className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <p className="text-slate-400">
            © 2025 Alex Chen. Built with React and Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
}