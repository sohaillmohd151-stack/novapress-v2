import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts', {
            forceFormData: true,
        });
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Create New Article</h2>
                    <Link href="/posts" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
                        ← Back to Feed
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
                            placeholder="Enter a compelling title..."
                        />
                        {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Cover Image (Optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData('image', e.target.files[0])}
                            className="w-full bg-[#1E293B] border border-gray-700 text-gray-300 rounded-xl p-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
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
                            placeholder="Write your content here..."
                        ></textarea>
                        {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 disabled:opacity-50"
                    >
                        {processing ? 'Publishing...' : 'Publish Article'}
                    </button>
                </form>
            </div>
        </Layout>
    );
}