<?php

namespace App\Models;

use CodeIgniter\Model;

class TypeModel extends Model
{
   
    protected $table            = 'type';
    protected $primaryKey       = 'id';
    protected $allowedFields    = ['name', 'price', 'image', 'description', 'facilityId'];


   

    // Validation
    protected $validationRules      = [
        'name' => 'required',
        'price' => 'required',
        'image' => 'required|uploaded[image]|max_size[image,1024]',
        'description' => 'required',
        'facilityId' => 'required',

    ];
        
    protected $validationMessages   = [
        'name' => [
             'required' => 'name was required'
        ],
        'price' => [
             'required' => 'price was required'
        ],
        'image' => [
            'required' => 'image was required',
            'uploaded' => 'name not match of any image was uploaded',
            'max-size' => 'file max 1024px',

        ],
        'description' => [
            'required' => 'description was required'
       ],
        'facilityId' => [
             'required' => 'facilityId was required'
        ],
    ];

    public function findAllTypeAndConcatFacility()  {

         $query = "SELECT type.id, type.name, type.price, type.description, CONCAT('http://localhost:8080/public/img/type/', type.image) AS imageURL, GROUP_CONCAT(facility.name) AS facility_name, room.roomAvailable
         FROM (
             SELECT type.id as typeId, COUNT(room.id) as roomAvailable
             FROM type
             LEFT JOIN room ON type.id = room.typeId AND room.isFill = 0
             GROUP BY type.id
         ) room
         INNER JOIN type  ON type.id = room.typeId
         INNER JOIN facility  ON FIND_IN_SET(facility.id, type.facilityId)
         GROUP BY type.id, type.name, type.price, type.description, type.image
         ORDER BY type.id";

         $querySet = $this->db->query($query);
         
         return $querySet->getResultArray();
    }

    
    // public function findAllTypeAndConcatFacility()  {

    //      $query = "SELECT type.id, type.name, type.price, type.description,CONCAT('http://localhost:8080/public/img/type/', type.image) AS imageURL, GROUP_CONCAT(facility.name) AS facility_name
    //      FROM facility 
    //      INNER JOIN type
    //      ON FIND_IN_SET(facility.id, type.facilityId)
    //      GROUP BY type.id
    //      ORDER BY type.id";

    //      $querySet = $this->db->query($query);
         
    //      return $querySet->getResultArray();
    // }
  
    public function findFacilityByFacilityId($id) {
        $query = "SELECT  facility.name as facilityName FROM facility INNER JOIN type
        ON FIND_IN_SET(facility.id, type.facilityId) WHERE type.id = $id ";
        
        $querySet = $this->db->query($query);
        
        return $querySet->getResultArray();
    }

    public function findById($id) {
        $data = "SELECT type.id, type.name, type.price, type.description, CONCAT('http://localhost:8080/public/img/type/', type.image) AS imageURL FROM type WHERE type.id = $id";

        $querySet = $this->db->query($data)->getRow();
        if ($querySet) {
            return $querySet;
        }else {
            return false;
        }
    }
}