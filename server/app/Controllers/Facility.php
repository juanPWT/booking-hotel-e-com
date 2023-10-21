<?php

namespace App\Controllers;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use App\Models\FacilityModel;

class Facility extends ResourceController
{
    use ResponseTrait;

    protected $mdl;

    public function __construct()
    {
        $this->mdl = new FacilityModel();
       
    }

    
    public function index()
    {
        $data['facilities'] = $this->mdl->findAll();
        $response = [
            'status_code' => 201,
            'messege' => [
             'success get all data facility'
            ],
            'datas' => $data
        ];
        return  $this->respond($response);
    }

    public function create() 
    {
      $data = $this->request->getPost();

      //if errors
      if(!$this->mdl->save($data)) {
        return $this->fail($this->mdl->errors());
      }
      
      $response = [
       'status_code' => 201,
       'messege' => [
        'success input data Facility'
       ]
      ];
      return $this->respond($response);
    }

    public function delete($id = null) 
    {
      $proccess = $this->mdl->findById($id);
      $delete = $this->mdl->delete($id);
      if (!$proccess) {
        return  $this->fail('id not found');
      }
      
      if ($delete) {
        $response = [
          'status_code' => 200,
          'messege' => [
           'success delete data facility'
          ]
         ];
        return $this->respond($response);
      }
    }
}