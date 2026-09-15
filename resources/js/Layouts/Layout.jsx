import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Layout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-[#0F172A] py-12 px-4 selection:bg-indigo-600/30 selection:text-indigo-200">
            <div className="fixed inset-0 bg-[radial-gradient(#312E81_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 pb-8 border-b border-gray-800">
                    <div>
                        <Link href="/posts" className="text-4xl font-extrabold text-white tracking-tighter flex items-center gap-3">
                            <span className="w-4 h-10 bg-indigo-500 rounded-full inline-block"></span>
                            NovaPress
                            <span className="text-indigo-400 font-medium text-sm px-3 py-1 bg-indigo-900/40 rounded-full border border-indigo-700/50">CMS v2.0</span>
                        </Link>
                        <p className="text-gray-400 mt-2 max-w-xl text-lg leading-relaxed">
                            Discover insights, share your perspective, and explore thought-provoking articles.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        {auth.user ? (
                            <>
                                <Link
                                    href="/posts"
                                    className="text-gray-300 hover:text-white font-medium px-3 py-2 text-sm transition"
                                >
                                    Feed
                                </Link>
                                <Link
                                    href="/my-posts"
                                    className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-4 py-2.5 rounded-xl border border-gray-700 text-sm transition"
                                >
                                    Manage Content
                                </Link>
                                <Link
                                    href="/posts/create"
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition shadow-lg shadow-indigo-600/30"
                                >
                                    + Write Article
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white font-medium px-4 py-2.5 rounded-xl text-sm border border-red-600/40 transition"
                                >
                                    Log out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-300 hover:text-white font-medium px-4 py-2">
                                    Log in
                                </Link>
                                <Link href="/register" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </header>

                <main>{children}</main>
            </div>
        </div>
    );
}