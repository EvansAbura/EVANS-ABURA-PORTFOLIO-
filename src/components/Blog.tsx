import { useState } from "react";
import { blogPostsData } from "../data";
import { BlogPost } from "../types";
import { Calendar, Clock, User, ArrowLeft, Tag, ArrowRight, Share2, Check } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copied, setCopied] = useState(false);

  const categories = ["all", "seo", "data-science", "networking"];

  const filteredPosts =
    activeTab === "all"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeTab);

  const triggerCopyLink = (id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/#blog-${id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blog" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0c1322] border-y border-slate-100 dark:border-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main index view */}
        {!selectedPost ? (
          <div>
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
                Knowledge Hub
              </h2>
              <p className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-900 dark:text-white">
                Articles & Technical Writing
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 font-sans max-w-lg mx-auto">
                Discover breakdowns of modern AEO parameters, advanced Power BI design systems, security frameworks, and research methods.
              </p>
              <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  id={`blog-tab-${cat}`}
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all cursor-pointer ${
                    activeTab === cat
                      ? "bg-slate-900 dark:bg-blue-900/30 text-white dark:text-blue-300 border border-transparent dark:border-blue-800/40 shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "All Posts" : cat === "seo" ? "SEO & AI" : cat.replace("-", " ")}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2.5xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/20 transition-all text-left glass-card"
                >
                  <div className="space-y-4">
                    {/* Meta info */}
                    <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400">
                      <span className="uppercase text-blue-600 dark:text-blue-400">{post.category.replace("-", " ")}</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-snug hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1 font-mono text-[10px] text-slate-400 font-bold">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </span>

                    <button
                      id={`blog-btn-read-${post.id}`}
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* Reader view */
          <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 shadow-lg text-left animate-in fade-in slide-in-from-bottom-6 duration-300 glass-card">
            
            {/* Back button */}
            <button
              id="blog-back-button"
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 hover:text-blue-600 cursor-pointer mb-8 py-1.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Library</span>
            </button>

            {/* Metas and headers */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold uppercase text-[10px]">
                  {selectedPost.category}
                </span>
                <span className="text-slate-400 flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {selectedPost.date}
                </span>
                <span className="text-slate-400 flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {selectedPost.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3.5xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {selectedPost.title}
              </h1>

              {/* Author profile line */}
              <div className="flex items-center justify-between pt-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold font-display text-xs flex items-center justify-center">
                    EA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                      {selectedPost.author}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-mono">Creator & Specialist</p>
                  </div>
                </div>

                <button
                  id="blog-share-button"
                  onClick={() => triggerCopyLink(selectedPost.id)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? "Link Copied!" : "Share Link"}</span>
                </button>
              </div>
            </div>

            {/* Main Content Render */}
            <div className="mt-8 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
              {/* Parse markdown look manually */}
              {selectedPost.content.split("\n\n").map((chunk, idx) => {
                if (chunk.startsWith("###")) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white pt-4 pb-1">
                      {chunk.replace("### ", "")}
                    </h3>
                  );
                }
                if (chunk.trim().startsWith("*") || chunk.trim().startsWith("-")) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 py-1 text-xs sm:text-sm">
                      {chunk.split("\n").map((li, liIdx) => (
                        <li key={liIdx}>{li.replace(/^[\s*-]+/, "").trim()}</li>
                      ))}
                    </ul>
                  );
                }
                if (chunk.trim().startsWith("```")) {
                  const cleanedCode = chunk.replace(/```[a-z]*/, "").replace(/```$/, "").trim();
                  return (
                    <pre key={idx} className="p-4 bg-slate-900 text-slate-200 font-mono text-xs rounded-xl overflow-x-auto border border-slate-800/80 leading-relaxed my-3">
                      <code>{cleanedCode}</code>
                    </pre>
                  );
                }
                // Check bold formatting **text**
                const parts = chunk.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={idx} className="text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                    {parts.map((p, pIdx) => (pIdx % 2 === 1 ? <strong key={pIdx} className="font-bold text-slate-900 dark:text-white">{p}</strong> : p))}
                  </p>
                );
              })}
            </div>

            {/* Quick summary contact card */}
            <div className="mt-12 p-6 rounded-2xl text-center space-y-4 glass-card">
              <h4 className="font-display font-bold text-slate-950 dark:text-slate-50 text-sm">
                Need specialized guidance or analytical reviews?
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md mx-auto">
                Hire Evans to draft technical reports, build interactive data dashboards, optimize search signals, or secure computer networks.
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedPost(null)}
                className="inline-flex py-2 px-6 rounded-lg bg-blue-650 hover:bg-blue-700 text-white text-xs font-semibold bg-blue-600 cursor-pointer"
              >
                Inquire Services
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
