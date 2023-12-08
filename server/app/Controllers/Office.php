<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\BookingModel;
use App\Models\RoomModel;
use App\Models\TypeModel;

class Office extends BaseController
{
    protected $bookingModel;
    protected $roomModel;
    protected $typeModel;
    protected $session;

    public function __construct() {
        helper(["form"]);
        $this->bookingModel = new BookingModel();
        $this->roomModel = new RoomModel();
        $this->typeModel = new TypeModel();
        $this->session = \Config\Services::session();
    }
    public function index()
    {
        $data = [
            'booking' => count($this->bookingModel->findAll()),
            'roomKosong' => count($this->roomModel->where('isFill', 0)->findAll()),
            'roomIsi' => count($this->roomModel->where('isFill', 1)->findAll()),
        ];
       
            
        return view("backOffice/index", $data);
    }
    public function booking()
    {
        $data = [
            
            'booking' => $this->bookingModel->getDataForOffice(),
             
         ];
        return view("backOffice/bookingData", $data);
    }

    public function room()
    {

        //query
        $type = $this->request->getGet("type");
        $search = $this->request->getGet("search");
        
       

        //filter 
        $where = [];
        $like = [];

        if (!empty( $type )) {
            $where = ["room.typeId" => $type];
        }

        if (!empty( $search )) {
            $like = ["room.noRoom" => $search];
        }


        $data = [
            'type' => $type,
            'types' => $this->typeModel->findAll(),
            'room' => $this->roomModel->select("type.*, room.id as room_id, room.noRoom, room.typeId, room.isFill")->join('type', 'type.id = room.typeId')->where($where)->like($like)->findAll(), 
        ];
        
        return view("backOffice/roomData", $data);
    }

    public function checkOut($id) {
       
        if ($this->roomModel->update($id, ["isFill"=> 0])) {
            $this->session->setFlashdata('success', 'Check-out berhasil.');
        }else {
           $this->session->setFlashdata('error', 'terjadi kesalahan Check-out');

        }
        return redirect()->to(site_url('office/room'));
    }
}