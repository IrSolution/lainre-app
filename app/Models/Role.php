<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $cascadeDeletes = ['rolePermissions'];

    protected $fillable = [
        'name',
    ];

    public function rolePermissions()
    {
        return $this->hasMany(RolePermission::class);
    }

    public function permissions()
    {
        return $this->hasManyThrough(
            Permission::class,
            RolePermission::class,
            'role_id',
            'id',
            'id',
            'permission_id',
        );
    }
}
