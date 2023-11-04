<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\BookingModel;

class Booking extends BaseController
{

    use ResponseTrait;
    protected $mdl;


    public function __construct() {
        $this->mdl = new BookingModel();
    }
    public function create()
    {
        $typeId = $this->request->getVar("typeId");
        $clientId = $this->request->getVar("clientId");
        $startDate = $this->request->getVar("startDate");
        $endDate = $this->request->getVar("endDate");
        $totalPrice = $this->request->getVar("totalPrice");

        if(!$this->mdl->createBooking($typeId, $clientId, $startDate, $endDate, $totalPrice)) {
            return $this->fail('failed create date');
        }

        $response = [
            'status_code' => 201,
            'messege' => [
             'success create booking'
            ]
           ];
           return $this->respond($response);
    }

    public function show($clientId) {
        $getData = $this->mdl->getDataBookByClientId($clientId);

        if(!$getData) {
            return $this->respond([
             'status' => 'data not found',
             'messege' => 'anda belum booking kamar',
             'bookingData' => []

            ]);
        }


        return $this->respond([
            'status' => 'success',
            'messege' => 'success get data bookng ',
            'bookingData' => $getData
        ]);
        
    }

    public function getDetailBooking($boookingId)  {
        $getDetailData = $this->mdl->getDetailDataBookByClientId($boookingId);

        if(!$getDetailData) {
            return $this->respond([
             'status' => 'data not found',
             'messege' => 'anda belum booking kamar',
             'detailData' => null

            ]);
        }


        return $this->respond([
            'status' => 'success',
            'messege' => 'success get data bookng ',
            'detailData' => $getDetailData
        ]);

    }
}