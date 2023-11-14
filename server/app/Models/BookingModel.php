<?php

namespace App\Models;

use CodeIgniter\Model;

class BookingModel extends Model
{
    protected $table            = 'booking';
    protected $primaryKey       = 'id';
  
    protected $allowedFields    = ['roomId', 'clientId', 'startDate', 'endDate', 'totalPrice'];


   
  

    // Validation
    protected $validationRules      = [
        'roomId' => 'required',
        'clientId' => 'required',
        'startDate' => 'required',
        'endDate' => 'required',
        'totalPrice' => 'required',
    ];
    protected $validationMessages   = [
        'roomId' => [
            'required' => 'roomId was required',
        ],
        'clientId' => [
            'required' => 'clientId was required',
        ],
        'startDate' => [
            'required' => 'startDate was required',
        ],
        'endDate' => [
            'required' => 'endDate was required',
        ],
        'totalPrice' => [
            'required' => 'totalPrice was required',
        ],
    ];


   

     //query
     public function createBooking($typeId, $clientId, $startDate, $endDate, $totalPrice )  {
       $roomQuery = $this->db->table('room');
       $roomQuery->select('id AS idRoom');
       $roomQuery->where('typeId', $typeId);
       $roomQuery->where('isFill', 0);
       $roomQuery->orderBy('RAND()');
       $roomQuery->limit(1);
       
       $subQuery = $roomQuery->get();
       if ($subQuery->getNumRows() > 0) {
         $roomId = $subQuery->getRow()->idRoom;

         $data = [
            'roomId' => $roomId,
            'clientId' => $clientId,
            'startDate' => $startDate,
            'endDate' => $endDate,
            'totalPrice' => $totalPrice
         ];

         $bookingQuery = $this->db->table('booking');
        

         $bookingQuery->insert($data);
         //if insert update room.isfill
         $roomQuery->update(['isFill' => 1], ['id' => $roomId] );
         return true;

       }else {
        return false;
       }

    }

    public function getDataBookByClientId($clientId)  {
        $query = "SELECT booking.id, type.name  FROM booking LEFT JOIN room ON room.id = booking.roomId LEFT JOIN user ON user.id = booking.clientId LEFT JOIN type ON type.id = room.typeId WHERE booking.clientId = $clientId";

        $querySet = $this->db->query($query);

        return $querySet->getResultArray();
    }

    public function getDetailDataBookByClientId($bookingId)  {
        $query = "SELECT booking.id, room.noRoom, type.name as typeName, CONCAT('http://localhost:8080/public/img/type/', type.image) AS imageURL, user.name, user.email, user.contact, booking.startDate, booking.endDate, booking.totalPrice  FROM booking LEFT JOIN room ON room.id = booking.roomId LEFT JOIN user ON user.id = booking.clientId LEFT JOIN type ON type.id = room.typeId WHERE booking.id = $bookingId";

        $querySet = $this->db->query($query);

        return $querySet->getRow();
    }

    public function getDataForOffice()  {
        $query = "SELECT booking.id, booking.startDate, booking.endDate, booking.totalPrice, type.name as typeName, room.noRoom, user.name as userName, room.isFill
         FROM booking
         LEFT JOIN room
         ON room.id = booking.roomId
         LEFT JOIN type
         ON type.id = room.typeId
         LEFT JOIN user
         ON user.id = booking.clientId
            ORDER BY booking.id DESC
         ";

         $querySet = $this->db->query($query);
         return $querySet->getResultArray();
    }
   
}