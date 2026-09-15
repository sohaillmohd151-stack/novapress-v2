<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first() ?? User::create([
            'name' => 'Demo Admin',
            'email' => 'admin@novapress.com',
            'password' => bcrypt('password'),
        ]);

        $category = Category::create([
            'name' => 'Technology',
            'slug' => 'technology',
        ]);

        Post::create([
            'user_id' => $user->id,
            'category_id' => $category->id,
            'title' => 'Welcome to NovaPress CMS',
            'slug' => Str::slug('Welcome to NovaPress CMS'),
            'content' => 'This is your first blog post rendered dynamically using Laravel, Inertia.js, and React!',
        ]);
    }
}
