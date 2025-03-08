import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X, Download } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const profileAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const menuAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-bla-800">
      {/* Fixed Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="https://glittering-kataifi-233009.netlify.app/"
              className="text-white font-bold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              PORTFOLIO 
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-200 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-transparent backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            variants={menuAnimation}
          >
            <div className="px-4 py-2 space-y-2">
              {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black backdrop-blur-sm"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div 
              variants={profileAnimation}
              className="profile-card p-4 rounded-full"
            >
              <img 
                src="https://avatars.githubusercontent.com/u/89623236?v=4"
                alt="Mitali Yadav"
                className="w-48 h-48 rounded-full border-4 border-white/30 shadow-xl"
              />
            </motion.div>
            <div className="text-center">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                 Mitali Yadav
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Frontend Developer | Java Fullstack Developer
              </motion.p>
              <motion.p 
                className="text-lg text-blue-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                 
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex gap-6">
                  <a href="https://github.com/Mitaliy21" className="text-blue-100 hover:text-white transition-all hover:scale-125">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="https://www.linkedin.com/in/ymitali/" className="text-blue-100 hover:text-white transition-all hover:scale-125">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="mailto:ymitali31@gmail.com" className="text-blue-100 hover:text-white transition-all hover:scale-125">
                    <Mail className="w-8 h-8" />
                  </a>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1H35cCHLBgGJBkdAQ8pg48dRvyl9MUs2W/view?usp=sharing" 
                  download 
                  className="resume-button"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I am a passionate Frontend & Java Fullstack Developer with expertise in building engaging and responsive user interfaces. 
              My focus is on creating seamless user experiences with modern UI/UX designs and interactive animations. 
              I specialize in frontend technologies like ReactJS, JavaScript, and CSS, combined with backend development skills in Java and SQL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center"> Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-3d bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Software Development Trainee</h3>
                  <p className="text-gray-600">Aspiring Minds (Apr 2021 - Mar 2021) – On Site</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mastered core frontend technologies, including HTML5, CSS3, JavaScript, and ReactJS</li>
                <li>Developed scalable single-page applications with ReactJS, improving efficiency by 20%</li>
                <li>Successfully completed three real-world projects</li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-3d bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Java Fullstack Development Trainee</h3>
                  <p className="text-gray-600">Q/J Spiders Software Development Institute (May 2024 - Present)</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Designed and implemented responsive layouts for 10+ web pages</li>
                <li>Integrated Java applications with databases using JDBC</li>
                <li>Specialized in server-side programming with Java</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center"> Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-3d bg-blue-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">D.A.V Public School, Gevra</h3>
                  <p className="text-gray-600">CBSE — 12th (PCM)(2018 - 2019)</p>
                  <p className="text-blue-600 font-semibold">78.8%</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-3d bg-blue-50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Government Engineering College, Bilaspur</h3>
                  <p className="text-gray-600">Bachelor of Technology - Information Technology (2019 - 2023)</p>
                  <p className="text-blue-600 font-semibold">CPI: 8.95</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center"> Technical Skills</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="card-3d bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'ReactJS'].map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm inline-block mr-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-3d bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Backend</h3>
              <div className="space-y-2">
                {['Java', 'JDBC', 'Servlets', 'Hibernate'].map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm inline-block mr-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-3d bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Tools</h3>
              <div className="space-y-2">
                {['Git', 'GitHub', 'VS Code', 'Jupyter', 'Canva'].map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm inline-block mr-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a 
              href="mailto:ymitali31@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>I am mitali yadav hereby declare that all the above-mentioned information is true and correct to the best of my knowledge.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;