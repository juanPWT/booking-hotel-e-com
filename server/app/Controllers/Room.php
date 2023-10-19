<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\RoomModel;

class Room extends BaseController
{

    use ResponseTrait;
    protected $mdl;

   public function __construct() {
        $this->mdl = new RoomModel();
    }
    public function index()
    {
        $data['room'] = $this->mdl->getAllRoom();
       
        if (!$data) {
            $response = [
                'status' => 'error',
                'messege' => 'data not found',
                'data' => 'not found'
            ];
            return $this->fail($response);
        }else{
            $response = [
                'status' => 'ok',
                'messege' => 'success get data room',
                'data' => $data
            ];

            return $this->respond($response);
        }


        
    }

    public function show($id) {
        $data['room'] = $this->mdl->getAllRoomById($id);
       
        if (!$data) {
            $response = [
                'status' => 'error',
                'messege' => 'data not found',
                'datas' => 'not found'
            ];
            return $this->fail($response);
        }else{
            $response = [
                'status' => 'ok',
                'messege' => 'success get data room',
                'datas' => $data
            ];

            return $this->respond($response);
        }

    }

    public function availableRoom($id) {
        $data["room"] = $this->mdl->getAvailableRoom($id);

        if (!$data) {
            $response = [
                'status' => 'error',
                'messege' => 'data room availabe not found',
                'datas' => 'not found'
            ];
            return $this->fail($response);
        }else{
            $response = [
                'status' => 'ok',
                'messege' => 'success get data room available by id',
                'datas' => $data
            ];

            return $this->respond($response);
        }

    }
    public  function create() {
        $floor = $this->request->getVar('floor');
        $noRoom = $this->request->getVar('noRoom');

        $autoValue = $floor .'-'. $noRoom;
        $data = [
            'noRoom' => $autoValue ,
            'typeId' => $this->request->getVar('typeId'),
        ];
        $proccess = $this->mdl->save($data);
        if (!$proccess) {
            return $this->fail($this->mdl->errors());
        } else {
        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'Room created successfully'
            ]
        ];
        
        return $this->respondCreated($response);
        
        }
    }
}