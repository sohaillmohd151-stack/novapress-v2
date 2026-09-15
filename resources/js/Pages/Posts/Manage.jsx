import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Manage({ posts }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this article?')) {
            destroy(`/posts/${id}`);
        }
    };

    return (
        <Layout>
            <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Manage Your Articles</h2>
                        <p className="text-gray-400 text-sm mt-1">Review, update, or remove your personal posts.</p>
                    </div>
                    <Link href="/posts" className="text-sm text-indigo-400 hover:underline">
                        ← Back to Public Feed
                    </Link>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        You haven't published any articles yet.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-[#1E293B] p-5 rounded-2xl border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-center gap-4">
                                    {post.image && (
                                        <img src={`/storage/${post.image}`} alt="" className="w-16 h-16 object-cover rounded-xl border border-gray-600" />
                                    )}
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{post.title}</h3>
                                        <p className="text-xs text-gray-400 mt-0.5">Category: {post.category?.name || 'General'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                                    <Link
                                        href={`/posts/${post.id}/edit`}
                                        className="bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition border border-amber-600/40"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition border border-red-600/40"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}