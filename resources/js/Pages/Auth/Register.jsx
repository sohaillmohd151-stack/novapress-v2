import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col justify-center items-center px-4 selection:bg-indigo-600/30 selection:text-indigo-200">
            <div className="fixed inset-0 bg-[radial-gradient(#312E81_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
            
            <Head title="Register - NovaPress" />

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link href="/posts" className="text-3xl font-extrabold text-white tracking-tighter inline-flex items-center gap-3">
                        <span className="w-3 h-8 bg-indigo-500 rounded-full inline-block"></span>
                        NovaPress
                    </Link>
                    <p className="text-gray-400 text-sm mt-2">Create your account to start publishing articles</p>
                </div>

                <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-2xl">
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="Your full name"
                            />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="name@example.com"
                            />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Confirm Password</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            {errors.password_confirmation && <p className="text-red-400 text-xs mt-1">{errors.password_confirmation}</p>}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <Link
                                href={route('login')}
                                className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                            >
                                Already registered?
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 disabled:opacity-50"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}