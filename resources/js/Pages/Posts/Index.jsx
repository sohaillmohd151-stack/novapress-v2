import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Index({ posts }) {
    return (
        <Layout>
            {posts.length === 0 ? (
                <div className="text-center py-20 px-8 bg-[#1E293B] rounded-3xl border border-dashed border-gray-700 flex flex-col items-center">
                    <p className="text-gray-400 text-xl font-medium">No articles published yet.</p>
                    <Link href="/posts/create" className="text-indigo-400 font-semibold hover:text-indigo-300 transition mt-3 text-lg underline">
                        Be the first to publish one
                    </Link>
                </div>
            ) : (
                <div className="grid gap-x-10 gap-y-12 md:grid-cols-[2fr,1fr]">
                    <div className="space-y-10">
                        {posts.slice(0, 1).map((post) => (
                            <article key={post.id} className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                                {post.image && (
                                    <div className="mb-6 rounded-2xl overflow-hidden max-h-96 border border-gray-800">
                                        <img src={`/storage/${post.image}`} alt={post.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex items-center gap-3 text-sm font-medium text-indigo-400 mb-4 bg-indigo-950/50 px-4 py-1.5 rounded-full inline-flex border border-indigo-800/60">
                                    <span>Featured</span>
                                    <span>•</span>
                                    <span className="font-semibold uppercase tracking-widest text-xs">{post.category?.name || 'General'}</span>
                                </div>
                                <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                                    {post.title}
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {post.content}
                                </p>
                                <footer className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between text-gray-500 text-sm">
                                    <span>By <strong className="text-gray-300">{post.user?.name || 'Demo Admin'}</strong></span>
                                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                </footer>
                            </article>
                        ))}
                    </div>

                    <aside className="space-y-8">
                        <h3 className="text-xl font-bold text-white border-l-4 border-indigo-500 pl-4">Latest Stories</h3>
                        {posts.slice(1).map((post) => (
                            <article key={post.id} className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-lg">
                                {post.image && (
                                    <img src={`/storage/${post.image}`} alt={post.title} className="w-full h-32 object-cover rounded-xl mb-4" />
                                )}
                                <span className="text-xs font-semibold uppercase text-indigo-400 block mb-2">{post.category?.name || 'General'}</span>
                                <h4 className="text-lg font-bold text-gray-100 mb-2">{post.title}</h4>
                                <p className="text-gray-400 text-sm line-clamp-3">{post.content}</p>
                            </article>
                        ))}
                    </aside>
                </div>
            )}
        </Layout>
    );
}