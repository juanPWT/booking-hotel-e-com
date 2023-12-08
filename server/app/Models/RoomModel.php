<?php

namespace App\Models;

use CodeIgniter\Model;

class RoomModel extends Model
{
    protected $table            = 'room';
    protected $primaryKey       = 'id';
    protected $allowedFields    = ['noRoom', 'typeId', 'isFill'];


    // Validation
    protected $validationRules      = [
        'noRoom'        => 'required|is_unique[room.noRoom]',
        'typeId'        => 'required',
    ];
    protected $validationMessages   = [
        'noRoom'        => [
            'required'      => 'No Room harus diisi.',
            'is_unique'     => 'No Room sudah ada.'
        ],
        'typeId'        => [
            'required'      => 'Type Id harus diisi.'
        ],
    ];

    // Callbacks
    public function getAllRoom()  {
        $query = $this->db->table('room');
        $query->select('room.*, type.name as type');
        $query->join('type', 'room.typeId = type.id', 'left');

        return $query->get()->getResultArray();
    }

    public function getAllRoomById($id)  {
        $query = $this->db->table('room');
        $query->select('room.*, type.name as type');
        $query->join('type', 'room.typeId = type.id', 'left');
        $query->where('room.id', $id);

        return $query->get()->getResultArray();
    }

    public function getAvailableRoom($id)  {
        $query = "SELECT type.name as typeName, COUNT(room.typeId) as roomAvailable
        from room
        LEFT join type
        ON type.id = room.typeId
        WHERE room.typeId = $id && room.isFill = 0";

        $querySet = $this->db->query($query);

        return $querySet->getRow();
        
    }



   
}