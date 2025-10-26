import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowUpDown,
  Search,
  Database,
  Play,
  BookOpen,
  Zap,
  ChevronRight,
  Code2,
  Brain,
  Target,
  Users,
  Award,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

import Navbar from '../src/components/Navbar';
import { GitBranch } from "lucide-react";

export default function Page() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 const categories = [
    {
      title: "Sorting Algorithms",
      description: "Visualize how different sorting algorithms work step by step",
      icon: ArrowUpDown,
      color: "from-blue-500 to-cyan-500",
      algorithms: [
        {
          name: "Interactive Sorting Visualizer",
          path: "/sorting",
          description: "Bubble, Selection, Insertion, Merge, Quick & Heap Sort",
        },
      ],
    },
    {
      title: "Searching Algorithms",
      description: "Explore various search techniques and their implementations",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      algorithms: [
        {
          name: "Interactive Searching Visualizer",
          path: "/searching",
          description: "Linear and Binary Search with step-by-step visualization",
        },
      ],
    },
    {
      title: "Array Algorithms",
      description: "Visualize two pointer, three pointer, and sliding window techniques",
      icon: Target,
      color: "from-orange-500 to-yellow-500",
      algorithms: [
        {
          name: "Array Algorithms Visualizer",
          path: "/array-algorithms",
          description: "Two Pointer, Three Pointer, Sliding Window techniques",
        },
      ],
    },
    {
      title: "Data Structures",
      description: "Learn fundamental data structures with interactive examples",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      algorithms: [
        { name: "Linked List", path: "/data-structures/linked-list", description: "Dynamic linear data structure" },
        { name: "Binary Tree", path: "/data-structures/binary-tree", description: "Hierarchical tree structure" },
        { name: "Stack", path: "/data-structures/stack", description: "LIFO data structure" },
        { name: "Queue", path: "/data-structures/queue", description: "FIFO data structure" },
        { name: "Trie", path: "/data-structures/trie", description: "Trie data structure and algorithms" },
        { name: "Graph", path: "/data-structures/graph", description: "Graph data structure and algorithms" },
        { name: "Deque", path: "/data-structures/deque", description: "Deque data structure and algorithms" },
        { name: "Trie (Prefix Tree)", path: "/data-structures/trie", description: "Trie data structure and problems" },
      ],
    },
    {
      title: "Operations",
      description: "Convert between infix, prefix, and postfix expressions",
      icon: BookOpen,
      color: "from-teal-500 to-lime-500",
      algorithms: [
        {
          name: "Expression Converter",
          path: "/operations/expression-converter",
          description: "Convert infix, prefix, and postfix expressions",
        },
      ],
    },
     {
      title: "Segment Tree",
      description: "Deep dive into the beauty of Segment trees",
      icon: GitBranch,
      color: "from-blue-500 to-cyan-500",
        algorithms: [
   {
      name: "Update Operation",
      path: "/segment-tree/update",
      description: "Learn how an update at any index works in segment tree",
    },
    {
      name: "Query Operation",
      path: "/segment-tree/query",
      description: "Working out range queries in segment tree",
    },
    {
      name: "Lazy Propogation",
      path: "/segment-tree/lazy-propogation",
      description: "Learn how lazy propogation works in segment tree",
    },
  ],
    },
  ];

  const features = [
    {
      icon: Play,
      title: "Interactive Visualizations",
      description: "Step-by-step animations that make complex logic simple.",
    },
    {
      icon: Code2,
      title: "Code Examples",
      description: "Every algorithm explained with well-commented code.",
    },
    {
      icon: Brain,
      title: "Learn by Doing",
      description: "Experiment, tweak, and see how code reacts in real time.",
    },
    {
      icon: Target,
      title: "Complexity Analysis",
      description: "Time and space complexity made intuitive to understand.",
    },
  ];

  const stats = [
    { icon: Users, label: "Learners", value: "50K+" },
    { icon: Code2, label: "Algorithms", value: "120+" },
    { icon: Award, label: "Countries", value: "30+" },
    { icon: Brain, label: "Visualizations", value: "300+" },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      <Navbar />
      {/* Hero Section */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
        <div className="container relative px-6 py-24 mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 font-medium text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full">
            <Zap className="w-4 h-4 mr-2" />
            Empower Your DSA Journey
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Master{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
              Data Structures
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text">
              Algorithms
            </span>{" "}
            Visually
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Experience algorithm learning like never before — intuitive,
            interactive, and deeply visual.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <Play className="w-5 h-5 mr-2" /> Start Visualizing
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-assistant"
              className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all transform shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <Brain className="w-5 h-5 mr-2" /> AI Assistant
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 font-semibold text-gray-700 dark:text-gray-200 transition-all border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              <BookOpen className="w-5 h-5 mr-2" /> Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
 

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose Our Platform?
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
            A next-gen platform that transforms abstract concepts into
            interactive, visual stories.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 transition-all shadow-md rounded-2xl hover:shadow-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
           <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container grid grid-cols-2 gap-8 px-6 mx-auto text-center md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white dark:bg-slate-700 shadow-md rounded-2xl">
                <s.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{s.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>



         <section id="how-it-works" className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 px-6 mx-auto">
          <h2 className="mb-8 text-4xl font-extrabold text-center md:text-5xl">
            How It Works
          </h2>
          <p className="max-w-3xl mx-auto mb-16 text-center text-indigo-100">
            Learn data structures and algorithms visually — step-by-step,
            interactively, and with real-time feedback. Here’s how you can master DSA with us 👇
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="p-8 text-center transition-all shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-4xl rounded-full bg-white/20">
                  🎯
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">1. Choose a Topic</h3>
              <p className="text-indigo-100">
                Select any algorithm or data structure — from sorting and searching
                to graphs and recursion — all in one place.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 text-center transition-all shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-4xl rounded-full bg-white/20">
                  🧠
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">2. Visualize & Interact</h3>
              <p className="text-indigo-100">
                Watch step-by-step visual animations, tweak input values, and
                explore how algorithms really work behind the scenes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 text-center transition-all shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-4xl rounded-full bg-white/20">
                  🚀
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">3. Practice & Master</h3>
              <p className="text-indigo-100">
                Solve challenges, analyze time complexity, and track your progress
                as you grow from beginner to pro in data structures and algorithms.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/about"
              className="inline-flex items-center px-10 py-4 font-semibold text-indigo-700 transition-all transform bg-white shadow-lg rounded-xl hover:bg-indigo-50 hover:shadow-xl hover:-translate-y-1"
            >
              Begin Your Journey
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Explore Categories
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
            Dive deep into topics — from sorting and searching to advanced data
            structures.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="overflow-hidden transition-transform transform border border-gray-100 dark:border-slate-700 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-slate-800"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${cat.color} flex items-center justify-center`}
                >
                  <cat.icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
                    {cat.description}
                  </p>
                  <div className="space-y-3">
                    {cat.algorithms.map((algo) => (
                      <Link
                        key={algo.name}
                        to={algo.path}
                        className="block p-3 transition-all border border-transparent bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-200 dark:hover:border-blue-500"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {algo.name}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {algo.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
       {/* How It Works Section */}
   


      {/* FAQ Section */}
    {/* FAQ Section */}
<section id="faq" className="relative py-24 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  <div className="container relative z-10 px-6 mx-auto">
    <h2 className="mb-6 text-4xl font-extrabold text-center md:text-5xl">
      Frequently Asked Questions
    </h2>
    <p className="max-w-2xl mx-auto mb-16 text-center text-indigo-100">
      Everything you need to know about our platform, learning flow, and features.
    </p>

    <div className="max-w-3xl mx-auto space-y-6">
      {[
        {
          q: "What is DecodeDsa?",
          a: "DecodeDsa is an interactive platform that helps you learn algorithms and data structures visually. You can explore step-by-step animations, tweak inputs, and deeply understand each concept."
        },
        {
          q: "Is DecodeDsa free to use?",
          a: "Yes! AlgoVision is completely free for learners. We believe education should be accessible, visual, and engaging for everyone."
        },
        {
          q: "Do I need prior coding knowledge?",
          a: "Not necessarily. We’ve designed visual guides that start from the basics — making it easy for beginners to understand algorithms without heavy math or code."
        },
     
        {
          q: "Will new algorithms be added regularly?",
          a: "Absolutely! We’re constantly adding new visualizations, challenges, and topics to help you stay ahead in your DSA journey."
        }
      ].map((item, index) => (
        <details
          key={index}
          className="p-6 transition-all duration-300 border cursor-pointer group bg-white/10 backdrop-blur-md border-white/20 rounded-2xl hover:bg-white/20"
        >
          <summary className="flex items-center justify-between text-xl font-semibold list-none cursor-pointer">
            <span>{item.q}</span>
            <span className="text-indigo-200 transition-transform duration-300 group-open:rotate-180">
              ▼
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-indigo-100">{item.a}</p>
        </details>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Link
        to="/contact"
        className="inline-flex items-center px-8 py-4 font-semibold text-indigo-700 transition-all transform bg-white shadow-lg rounded-xl hover:bg-indigo-50 hover:shadow-xl hover:-translate-y-1"
      >
        Still have questions? Contact us →
      </Link>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden text-gray-300 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  DecodeDsa
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Interactive platform to master Data Structures & Algorithms through visualization. Learn, practice, and excel.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/V-Sharanya/DecodeDsa" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center w-10 h-10 transition-all transform bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110">
                  <Github className="w-5 h-5" />
                </button>
                </a>
                <a href="https://www.linkedin.com/in/v-sharanya-1b60ba28b/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center w-10 h-10 transition-all transform bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </button>
                </a>
                <button className="flex items-center justify-center w-10 h-10 transition-all transform bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/ai-assistant" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    AI Assistant
                  </Link>
                </li>
                <li>
                  <Link to="/sorting" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Sorting Algorithms
                  </Link>
                </li>
                <li>
                  <Link to="/searching" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Searching Algorithms
                  </Link>
                </li>
                <li>
                  <Link to="/array-algorithms" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Array Algorithms
                  </Link>
                </li>
                <li>
                  <Link to="/data-structures" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Data Structures
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    FAQ
                  </a>
                </li>
                <li>
                  
                  <a href="about" className="inline-flex items-center transition-all hover:text-white hover:translate-x-1 group">
                    <ChevronRight className="w-4 h-4 mr-1 transition-opacity opacity-0 group-hover:opacity-100" />
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Get in Touch</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">📧</span>
                  </div>
                  <span className="text-gray-400">contact@decodedsa.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">💬</span>
                  </div>
                  <span className="text-gray-400">Join our Discord community</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">📍</span>
                  </div>
                  <span className="text-gray-400">Madhya Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-center text-gray-500 md:text-left">
                © {new Date().getFullYear()} DecodeDsa. All rights reserved. Made with ❤️ for learners worldwide.
              </p>
              <div className="flex gap-6 text-sm">
                <button className="text-gray-500 transition-colors hover:text-white">
                  Privacy Policy
                </button>
                <button className="text-gray-500 transition-colors hover:text-white">
                  Terms of Service
                </button>
                <button className="text-gray-500 transition-colors hover:text-white">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white transition-opacity duration-300 bg-blue-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-blue-700"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}




/*  <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container px-6 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Explore Categories
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Choose from our comprehensive visual algorithm categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="overflow-hidden transition-all bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl"
              >
                <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{category.title}</h3>
                  <p className="mb-6 text-sm text-gray-600">{category.description}</p>
                  <div className="space-y-3">
                    {category.algorithms.map((algo) => (
                      <Link
                        key={algo.name}
                        to={algo.path}
                        className="block p-4 transition-all border bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl hover:border-blue-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{algo.name}</h4>
                            <p className="text-sm text-gray-500">{algo.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 */



      /* 
 */