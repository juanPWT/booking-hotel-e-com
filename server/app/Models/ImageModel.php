<?php

namespace App\Models;

use CodeIgniter\Model;

class ImageModel extends Model
{
    protected $table            = 'image';
    protected $primaryKey       = 'id';
  
    protected $allowedFields    = ['typeId', 'imageProduct'];

    // Dates
  
    // Validation
    protected $validationRules      = [

    'typeId'=> 'required',
    'imageProduct' => 'required|uploaded[image]|max_size[image,1024]'
    ];
    protected $validationMessages   = [
        'typeId' => [
            'required' => 'type id was required'
       ],
       'imageProduct' => [
            'required' => 'image product was required',
            'uploaded' => 'name not match of any image was uploaded',
            'max-size' => 'file max 1024px',

    ],
    ];

    public function getImageByTypeId($typeId ) {
        $query = "SELECT type.name, CONCAT('http://localhost:8080/public/img/product/', image.imageProduct) as image
        FROM image
        LEFT JOIN type
        ON type.id = image.typeId
        WHERE image.typeId = $typeId";

        $querySet = $this->db->query($query);
        return $querySet->getResultArray();
    }
  


}