import Link from "next/link";
import { ArrowLeft, CheckCircle, Code, Globe, Layers } from "lucide-react";

// Project Data
const projects = {
    examlense: {
        title: "Examlense",
        role: "Designer & Developer",
        description: "Examlense represents a paradigm shift in digital education. Analyzed as a high-performance Learning Management System (LMS), it addresses the critical need for distraction-free, accessible exam preparation. By leveraging Elementor's advanced design capabilities coupled with custom performance optimization, the platform delivers sub-second load times even with heavy media content. The UI is crafted to reduce cognitive load, allowing students to focus entirely on their assessment material.",
        features: [
            "Adaptive Learning Interface: UI adjusts to user behavior for optimal focus.",
            "Speed Optimization: Custom caching and asset minification for instant page loads.",
            "Real-time Analytics: Instant feedback loops for student performance tracking.",
            "Cross-Platform Compatibility: Seamless experience across mobile, tablet, and desktop."
        ],
        tech: ["WordPress", "Elementor Pro", "Custom CSS/JS", "Performance API", "MySQL"],
        image: "/assets/project-examlense-dashboard.png" // Fallback/Theme image
    },
    devsaround: {
        title: "DevsAround",
        role: "Management & Client Communication",
        description: "DevsAround is engineered as a comprehensive digital agency ecosystem. It solves the fragmentation problem in client-developer communication by integrating project management directly into the client portal. The platform utilizes a modern tech stack to provide real-time updates, transparent workflow visualization, and secure asset sharing. It stands as a testament to how modern web technologies can streamline complex business operations.",
        features: [
            "Unified Client Portal: Centralized dashboard for all project communications.",
            "Real-time Progress Tracking: Visual timelines and milestone updates.",
            "Secure Asset Management: Encrypted file sharing and version control.",
            "Interactive Portfolio: 3D-enhanced showcase of agency capabilities."
        ],
        tech: ["React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion"],
        image: "/assets/project-devsaround.png"
    },
    "1store": {
        title: "1store Shopify",
        role: "Shopify Expert",
        description: "1store redefines the standard for high-conversion e-commerce. Built on the Shopify Plus architecture, this project focuses on 'Commerce Intelligence'—optimizing every pixel for sales conversion. From the custom Liquid theme development to the integration of advanced analytics, every aspect is data-driven. The site features a headless-like performance feel while maintaining the ease of Shopify's backend, ensuring both developer flexibility and merchant usability.",
        features: [
            "Conversion Rate Optimization (CRO): UX patterns designed to maximize sales.",
            "Custom Liquid Theme: Bespoke design bypassing standard template limitations.",
            "Advanced Filtering: Instant search and filter capabilities for large inventories.",
            "Mobile-First Architecture: Prioritizing the 70% of traffic coming from mobile devices."
        ],
        tech: ["Shopify Liquid", "Storefront API", "SCSS", "Vanilla JavaScript", "AJAX"],
        image: "/assets/project-1store.png"
    },
    "seo-business": {
        title: "SEO-Optimized Business Website",
        role: "Web Developer & SEO",
        description: "Developed a high-performance business website using WordPress and Elementor. Achieved Google PageSpeed score above 90, reduced load time below 2 seconds, fully responsive layout, and improved ranking for local keywords via on-page SEO.",
        features: [
            "PageSpeed Score > 90: Optimized assets and caching for lightning-fast loads.",
            "Local SEO Strategy: Targeted keywords to boost local search visibility.",
            "Responsive Design: Flawless experience across all device sizes.",
            "Conversion Focused: Strategic CTA placement to drive inquiries."
        ],
        tech: ["WordPress", "Elementor", "HTML", "CSS", "SEO"],
        image: "/assets/project-seo-business.png"
    },
    "shopify-optimization": {
        title: "Shopify E-Commerce Store Optimization",
        role: "Shopify Expert",
        description: "Redesigned and optimized a Shopify store to increase conversion rate. Implemented responsive product layout, streamlined checkout flow, and optimized mobile speed and product SEO.",
        features: [
            "Checkout Flow Optimization: Reduced friction to lower cart abandonment.",
            "Mobile Speed Boost: Enhanced performance for mobile shoppers.",
            "Product SEO: Structured data and keyword optimization for products.",
            "Responsive Layout: Custom adjustments for better visual hierarchy."
        ],
        tech: ["Shopify", "Liquid", "UX/UI", "SEO"],
        image: "/assets/project-shopify-opt.png"
    },
    "ai-workflow": {
        title: "AI-Assisted Web Design Workflow",
        role: "AI Integration Specialist",
        description: "Used AI tools (Gemini and ChatGPT) to generate layout ideas, content, and SEO recommendations. Reduced development time and improved communication with client through intelligent automation.",
        features: [
            "AI-Driven Prototyping: Rapid concept generation using AI tools.",
            "Content Generation: SEO-friendly copy created with LLMs.",
            "Automated SEO Audits: AI analysis for instant optimization insights.",
            "Efficient Workflow: Reduced project timeline by leveraging AI automation."
        ],
        tech: ["AI Tools (Gemini, ChatGPT)", "WordPress", "Elementor", "SEO"],
        image: "/assets/project-ai-workflow.jpg"
    },
    "portfolio-template": {
        title: "Responsive Portfolio Template",
        role: "Frontend Developer",
        description: "Built a personal portfolio template from scratch using HTML and CSS. Designed for international clients with a clean grid layout, responsive structure, and lightweight performance.",
        features: [
            "Custom Grid System: Lightweight CSS grid for flexible layouts.",
            "Zero Dependencies: Pure HTML/CSS for maximum performance.",
            "Internationalization Ready: Structure supports multi-language content.",
            "Clean Code Architecture: Maintainable and scalable codebase."
        ],
        tech: ["HTML", "CSS", "Responsive Web Design"],
        image: "/assets/project-portfolio-template.png"
    },
    "client-management": {
        title: "Client Management Case Study",
        role: "Project Manager",
        description: "Case study showing how I managed client requirements, lead development through structured milestones, communicated with team members, and ensured timely delivery.",
        features: [
            "Structured Milestones: Clear roadmap for project delivery.",
            "Team Coordination: Effective communication channels and workflows.",
            "Requirement Analysis: Translating client needs into technical specs.",
            "Timely Delivery: Track record of meeting strict deadlines."
        ],
        tech: ["Project Management", "Client Communication", "Web Strategy"],
        image: "/assets/project-devsaround.png"
    }
};

import type { Metadata } from "next";

export function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Avishek Sarkar`,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    // Get other projects for the sidebar
    const otherProjects = Object.entries(projects)
        .filter(([key]) => key !== slug)
        .map(([key, data]) => ({ slug: key, ...data }));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-cyan-400 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-y-auto">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-cyan-400">{project.title}</span>
                </div>
            </nav>

            <div className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Sidebar - More Projects */}
                    <div className="lg:col-span-3 order-2 lg:order-1">
                        <div className="sticky top-32 space-y-6">
                            <h3 className="text-xl font-bold text-gradient mb-6">Explore More</h3>
                            <div className="space-y-4">
                                {otherProjects.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/projects/${p.slug}`}
                                        className="block group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="p-4 relative z-10">
                                            <div className="h-32 mb-3 rounded-lg overflow-hidden">
                                                <img
                                                    src={p.image}
                                                    alt={p.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <h4 className="font-bold text-sm mb-1 group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                                            <span className="text-xs text-gray-500 font-mono">{p.role}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 order-1 lg:order-2">
                        {/* Hero Content */}
                        <div className="mb-12 relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                                    {project.role}
                                </span>
                                <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">{project.title}</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Main Description */}
                            <div className="md:col-span-2 space-y-8">
                                <section className="glass-panel p-8">
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Globe className="text-purple-400" /> Overview
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </section>

                                <section className="glass-panel p-8">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Layers className="text-cyan-400" /> Key Features
                                    </h2>
                                    <ul className="space-y-4">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Sidebar (Tech & CTA) */}
                            <div className="space-y-6">
                                <div className="glass-panel p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Code className="text-pink-400" /> Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-md text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-panel p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
                                    <h3 className="text-xl font-bold mb-2">Interested in a similar project?</h3>
                                    <p className="text-sm text-gray-400 mb-4">Let's discuss how we can bring your vision to life.</p>
                                    <Link href="/#contact" className="block w-full py-3 text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors">
                                        Start a Conversation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
