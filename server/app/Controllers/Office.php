<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\BookingModel;
use App\Models\RoomModel;

class Office extends BaseController
{
    protected $bookingModel;
    protected $roomModel;
    protected $session;

    public function __construct() {
        $this->bookingModel = new BookingModel();
        $this->roomModel = new RoomModel();
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
        $data = [
            'room' => $this->roomModel->getDataForOffice(), 
        ];
        
        return view("backOffice/roomData", $data);
    }

    public function checkOut($id) {
        $checkout = $this->roomModel->update($id, ["isFill"=> 0]);
        if ($checkout) {
            $this->session->setFlashdata('success', 'Check-out berhasil.');
        }else {
           $this->session->setFlashdata('error', 'terjadi kesalahan Check-out');

        }
        return redirect()->to(site_url('office/room'));
    }
}