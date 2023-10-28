<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\RateModel;

class Rate extends BaseController
{
    use ResponseTrait;
    protected $mdl;
    public function __construct()
    {
        $this->mdl = new RateModel();
    }

    public function show($typeId) {
        $data = $this->mdl->getRateByTypeId($typeId);

        if (!$data) {
            $response = [
                'status' => 'not found',
                'datas' => 'not comment yet',
            ];
    
            return $this->respond($response);;
        }

        $response = [
            'status' => 'success',
            'datas' => $data
        ];

        return $this->respond($response);

    }

    public function rate($typeId) {
        $data = $this->mdl->getRate($typeId);
        if ($data->ratingAvg === null) {
            $response = [
                'status' => 'not found',
                'data' => [
                    'name' => $data->name,
                    'ratingAvg' => 0.0,
                ]
            ];
    
            return $this->respond($response);
        
        }
        $response = [
            'status' => 'success',
            'data' => [
                'name' => $data->name,
                'ratingAvg' => $data->ratingAvg,
            ]
        ];

        return $this->respond($response);

        
    }

    public function create($typeId) {
        $getRate = $this->request->getVar('rate');
        
        if ($getRate > 5) {
           return $this->fail('rate must be 0 - 5');
        }

        $data = [
            'userId' => $this->request->getVar('userId'),
            'typeId' => $typeId,
            'rate'  => $getRate,
            'comment' => $this->request->getVar('comment'),
            

        ];
        if (!$this->mdl->save($data)) {
        return $this->fail($this->mdl->errors());
        }

        $response = [
            "status"=> "success",
            "message"=> "success send the comment",
            "data" => $data
        ];

        return $this->respond($response);
    }
}