<?php

namespace App\Models;

use CodeIgniter\Model;

class RateModel extends Model
{
    protected $table            = 'rate';
    protected $primaryKey       = 'id';
  
    protected $allowedFields    = ['typeId', 'userId', 'comment','rate', 'create_at', 'update_at'];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'create_at';
    protected $updatedField  = 'update_at';

    // Validation
    protected $validationRules      = [
        'typeId' => 'required',
        'userId' => 'required',
        'comment' => 'required',
        'rate' => 'required',
    ];
    protected $validationMessages   = [
        'typeId' => [
            'required' => 'type id was required'
        ],
        'userId' => [
            'required' => 'user id was required'
        ],
        'comment' => [
            'required' => 'comment was required'
        ],
        'rate' => [
            'required' => 'rate was required'
        ],
    ];

    public function getRateByTypeId($typeId) {
        $query = "SELECT user.name, rate.comment, rate.rate as rating
        FROM rate
        LEFT JOIN type
        ON type.id = rate.typeId
        LEFT JOIN user
        ON user.id = rate.userId
        WHERE rate.typeId = $typeId";

        $querySet = $this->db->query($query);
      
       return $querySet->getResultArray();

    }

    public function getRate($typeId) {
        $query = "SELECT type.name, ROUND(AVG(rate.rate), 1) as ratingAvg 
        FROM rate
        LEFT JOIN type
        ON type.id = rate.typeId
        WHERE type.id = $typeId";

        $querySet = $this->db->query($query)->getRow();

        if($querySet){
            return $querySet;
        }else {

            return false;
        }
        
      

      
    }
   
}