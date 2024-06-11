<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DefaultSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            ['label' => 'View Dashboard', 'name' => 'view-dashboard'],

            ['label' => 'Buat User', 'name' => 'create-user'],
            ['label' => 'Edit User', 'name' => 'update-user'],
            ['label' => 'Lihat User', 'name' => 'view-user'],
            ['label' => 'Hapus User', 'name' => 'delete-user'],

            ['label' => 'Buat Role', 'name' => 'create-role'],
            ['label' => 'Edit Role', 'name' => 'update-role'],
            ['label' => 'Lihat Role', 'name' => 'view-role'],
            ['label' => 'Hapus Role', 'name' => 'delete-role'],

            // setting
            ['label' => 'Setting', 'name' => 'create-setting'],
        ];

        foreach ($permissions as $permission) {
            Permission::insert($permission);
        }

        $role = Role::create(['name' => 'admin']);

        $permissions = Permission::all();
        foreach ($permissions as $permission) {
            $role->rolePermissions()->create(['permission_id' => $permission->id]);
        }

        User::create([
            'name' => 'Administator',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'role_id' => $role->id,
        ]);
    }
}
