import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Edit({ post }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`, {
            forceFormData: true,
        });
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Edit Article</h2>
                    <Link href="/my-posts" className="text-sm text-indigo-400 hover:underline">
                        ← Back to Management
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Article Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                        />
                        {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Cover Image (Leave blank to keep current)</label>
                        {post.image && (
                            <div className="mb-3">
                                <img src={`/storage/${post.image}`} alt="Current" className="w-32 h-20 object-cover rounded-lg border border-gray-700" />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData('image', e.target.files[0])}
                            className="w-full bg-[#1E293B] border border-gray-700 text-gray-300 rounded-xl p-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white cursor-pointer"
                        />
                        {errors.image && <p className="text-red-400 text-sm mt-1">{errors.image}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Article Content</label>
                        <textarea
                            rows="6"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                        ></textarea>
                        {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 disabled:opacity-50"
                    >
                        {processing ? 'Saving Changes...' : 'Update Article'}
                    </button>
                </form>
            </div>
        </Layout>
    );
}
