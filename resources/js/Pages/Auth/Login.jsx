import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex flex-col justify-center items-center px-4 selection:bg-indigo-600/30 selection:text-indigo-200">
            <div className="fixed inset-0 bg-[radial-gradient(#312E81_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

            <Head title="Log in - NovaPress" />

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link href="/posts" className="text-3xl font-extrabold text-white tracking-tighter inline-flex items-center gap-3">
                        <span className="w-3 h-8 bg-indigo-500 rounded-full inline-block"></span>
                        NovaPress
                    </Link>
                    <p className="text-gray-400 text-sm mt-2">Welcome back! Please enter your details.</p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800 p-3 rounded-xl text-center">
                        {status}
                    </div>
                )}

                <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-2xl">
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                autoComplete="username"
                                isFocused={true}
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full bg-[#1E293B] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded bg-[#1E293B] border-gray-700 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>

                            <Link
                                href="/register"
                                className="text-indigo-400 hover:text-indigo-300 transition"
                            >
                                Need an account?
                            </Link>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 disabled:opacity-50 text-center"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}