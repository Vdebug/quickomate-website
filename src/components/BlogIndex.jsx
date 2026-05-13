import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from './blogPosts';

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-20 border-b-4 border-primary pb-8">
                    <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                        BLOG_INDEX
                    </div>
                    <h1 className="font-heading font-black text-[2.5rem] sm:text-6xl md:text-7xl text-primary tracking-tighter uppercase leading-[1.05] sm:leading-none">
                        Dispatches
                        <br />
                        <span className="text-accent">from the engine room.</span>
                    </h1>
                    <p className="font-mono text-sm text-primary/60 font-bold mt-6 uppercase border-l-2 border-accent pl-4">
                        Systems thinking, AI automation breakdowns, and growth infrastructure playbooks.
                    </p>
                </div>

                {/* Blog Post Cards */}
                <div className="flex flex-col gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group bg-surface border-4 border-primary p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(230,59,46,1)] transition-all duration-300 block"
                            aria-label={`Read article: ${post.title}`}
                        >
                            <article className="flex flex-col gap-6">
                                {/* Meta */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                    <time
                                        dateTime={post.dateIso}
                                        className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest"
                                    >
                                        {post.date}
                                    </time>
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight uppercase group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-4 max-w-3xl leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent uppercase mt-2">
                                    <span>Read Full Breakdown</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
