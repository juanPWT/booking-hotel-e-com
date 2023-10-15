<?php

namespace App\Models;

use CodeIgniter\Model;

class FacilityModel extends Model
{
    protected $table            = 'facility';
    protected $primaryKey       = 'id';
    protected $allowedFields    = ['name', 'icon'];

    protected $validationRules = [
       'name' => 'required',
       'icon' => 'required'
    ];

    protected $validationMessages = [
        'name' => [
            'required' => 'name is required',
        ],
        'icon' => [
            'required' => 'icon is required'
        ]
    ];

    public function findById($id) {
        $data = $this->find($id);
        if ($data) {
            return $data;
        }else {
            return false;
        }
    }
}