<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table            = 'user';
    protected $primaryKey       = 'id';
    protected $allowedFields    = ['email', 'password', 'name', 'contact'];
  

 

    // Validation
    protected $validationRules      = [
        'email' => 'required|valid_email',
        'password' => 'required',
        'name' => 'required|max_length[20]',
        'contact' => 'required|max_length[13]'
    ];
    protected $validationMessages   = [
        'email' => [
            'required' => 'email required',
            'valid_email' => 'email not valid example user@mail.cuy'
        ],
        'password' => [
            'required' => 'password required'
        ],
        'name' => [
            'required' => 'name required',
            'max_length' => 'max 20 character'
        ],
        'contact' => [
            'required' => 'phone number required',
            'max_length' => 'max 13 number'
        ]
    ];
  

   
}