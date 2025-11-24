"use client";

import { motion } from "framer-motion";
import {
    Code,
    Palette,
    Globe,
    Terminal,
    Cpu,
    Briefcase,
    GraduationCap,
    Mail,
    Facebook
} from "lucide-react";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center p-6 md:p-8 max-w-7xl mx-auto ${className}`}>
        {children}
    </section>
);

export default function Overlay() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl pt-20 md:pt-0"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6">
                        <span className="text-white">Hello, I'm</span><br />
                        <span className="text-gradient">Avishek Sarkar</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Web Developer, Full-Stack Designer & SEO Expert.<br />
                        I create high-performance websites and digital experiences that combine modern design with cutting-edge technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-cyan-500/10 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-all backdrop-blur-sm cursor-pointer"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-purple-500/10 border border-purple-500/50 rounded-full text-purple-400 hover:bg-purple-500/20 transition-all backdrop-blur-sm cursor-pointer"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </Section>

            {/* About Me */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 md:pt-0">
                    <motion.div
                        id="about"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">About Me</h2>
                        <div className="glass-panel p-6 md:p-8 space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                I'm Avishek Sarkar, a passionate Web Developer and UI/UX Designer based in Bangladesh.
                                With expertise in modern web technologies like Next.js and React, along with CMS mastery in WordPress and Shopify,
                                I build digital solutions that are not just visually stunning but also performance-driven.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <Code className="text-cyan-400" />
                                    <span>Full-Stack Development</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="text-purple-400" />
                                    <span>SEO Strategy</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Cpu className="text-pink-400" />
                                    <span>UI/UX Design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="text-green-400" />
                                    <span>Wix & Shopify Expert</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        <img
                            src="/assets/portrait-avi.png"
                            alt="Avishek Sarkar"
                            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                            <p className="text-white text-lg font-semibold text-center">
                                Crafting digital experiences that stand out.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Skills */}
            <Section>
                <motion.div
                    id="skills"
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-gradient">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Code, title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
                            { icon: Globe, title: "CMS", items: ["WordPress", "Wix", "Shopify"] },
                            { icon: Palette, title: "Design", items: ["UI/UX", "Figma", "Web Illustration"] },
                            { icon: Terminal, title: "SEO", items: ["On-page", "Technical", "Performance"] }
                        ].map((skill, index) => (
                            <div key={index} className="glass-panel p-6 hover:border-cyan-500/50 transition-colors">
                                <skill.icon className="w-10 h-10 text-cyan-400 mb-4" />
                                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                                <ul className="space-y-2 text-gray-400">
                                    {skill.items.map((item, i) => <li key={i}>• {item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Projects */}
            <Section>
                <motion.div
                    id="projects"
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gradient">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Examlense */}
                        <a href="/projects/examlense" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-examlense-dashboard.png" alt="Examlense" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Examlense</h3>
                            <p className="text-gray-400 mb-4">Educational platform designed using Elementor with optimized UI and high-speed performance.</p>
                            <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">Designer & Developer</span>
                        </a>

                        {/* DevsAround */}
                        <a href="/projects/devsaround" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-devsaround.png" alt="DevsAround" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">DevsAround</h3>
                            <p className="text-gray-400 mb-4">Modern agency website handling client relations and project management.</p>
                            <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded">Management</span>
                        </a>

                        {/* 1store Shopify */}
                        <a href="/projects/1store" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-1store.png" alt="1store" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">1store Shopify</h3>
                            <p className="text-gray-400 mb-4">High-performance e-commerce store with custom Shopify theme development.</p>
                            <span className="text-xs font-mono text-pink-400 border border-pink-500/30 px-2 py-1 rounded">Shopify Expert</span>
                        </a>

                        {/* SEO Business Website */}
                        <a href="/projects/seo-business" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-seo-business.png" alt="SEO Business" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">SEO Business Website</h3>
                            <p className="text-gray-400 mb-4">High-performance business website with 90+ PageSpeed score and local SEO.</p>
                            <span className="text-xs font-mono text-green-400 border border-green-500/30 px-2 py-1 rounded">Web Developer</span>
                        </a>

                        {/* Shopify Optimization */}
                        <a href="/projects/shopify-optimization" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-shopify-opt.png" alt="Shopify Optimization" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Shopify Optimization</h3>
                            <p className="text-gray-400 mb-4">Redesigned store for higher conversions and optimized mobile speed.</p>
                            <span className="text-xs font-mono text-pink-400 border border-pink-500/30 px-2 py-1 rounded">Shopify Expert</span>
                        </a>

                        {/* AI Workflow */}
                        <a href="/projects/ai-workflow" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-ai-workflow.jpg" alt="AI Workflow" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">AI Web Design</h3>
                            <p className="text-gray-400 mb-4">AI-assisted workflow using Gemini & ChatGPT for rapid development.</p>
                            <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">AI Specialist</span>
                        </a>

                        {/* Portfolio Template */}
                        <a href="/projects/portfolio-template" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-portfolio-template.png" alt="Portfolio Template" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Portfolio Template</h3>
                            <p className="text-gray-400 mb-4">Custom HTML/CSS portfolio template designed for international clients.</p>
                            <span className="text-xs font-mono text-yellow-400 border border-yellow-500/30 px-2 py-1 rounded">Frontend</span>
                        </a>

                        {/* Client Management */}
                        <a href="/projects/client-management" target="_blank" className="glass-panel p-6 group cursor-pointer block">
                            <div className="h-48 bg-black/50 rounded-lg mb-6 group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden relative">
                                <img src="/assets/project-devsaround.png" alt="Client Management" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Client Management</h3>
                            <p className="text-gray-400 mb-4">Case study on managing client requirements and team communication.</p>
                            <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded">Project Manager</span>
                        </a>
                    </div>
                </motion.div>
            </Section>

            {/* Experience & Education */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        id="experience"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                            <Briefcase className="text-cyan-400" /> Experience
                        </h2>
                        <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                                <h3 className="text-xl font-bold">Management & Client Communication</h3>
                                <p className="text-cyan-400 mb-2">DevsAround • Current</p>
                                <p className="text-gray-400">Handling client relations and project management for web development projects.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-purple-500" />
                                <h3 className="text-xl font-bold">Freelance Web Developer</h3>
                                <p className="text-purple-400 mb-2">Remote • Previous</p>
                                <p className="text-gray-400">WordPress and Web Design projects for local and international clients. SEO and responsive design focus.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                            <GraduationCap className="text-purple-400" /> Education
                        </h2>
                        <div className="space-y-8 border-l-2 border-white/10 pl-8">
                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-white" />
                                <h3 className="text-xl font-bold">Web Development Certified</h3>
                                <p className="text-gray-400">Udemy</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-white/50" />
                                <h3 className="text-xl font-bold">Higher Secondary (12th)</h3>
                                <p className="text-gray-400">Bangladesh Coast Guard College</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Contact */}
            <Section className="items-center text-center">
                <motion.div
                    id="contact"
                    className="glass-panel p-10 max-w-2xl w-full scroll-mt-28"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}

                >
                    <Mail className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4">Let’s build something great together!</h2>
                    <p className="text-gray-400 mb-8">Have a project in mind? I'd love to hear from you.</p>

                    <form
                        className="space-y-4 text-left mb-8"
                        action="mailto:avishek101sarkar@gmail.com"
                        method="post"
                        encType="text/plain"
                    >
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-cyan-500 focus:outline-none transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-cyan-500 focus:outline-none transition-colors"
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>

                    <div className="flex justify-center gap-6 pt-6 border-t border-white/10">
                        <a
                            href="https://web.facebook.com/2visarkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                        >
                            <Facebook className="w-6 h-6" />
                            <span>Connect on Facebook</span>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
