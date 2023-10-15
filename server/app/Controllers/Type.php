<?php

namespace App\Controllers;
use CodeIgniter\API\ResponseTrait;
use App\Controllers\BaseController;
use App\Models\TypeModel;

class Type extends BaseController
{
    use ResponseTrait;

    protected $mdl;
    public function __construct() {
        $this->mdl = new TypeModel();
    }

    public function index()  {
        $findTypeAll = $this->mdl->findAllTypeAndConcatFacility();

        if (!$findTypeAll) {
            return $this->failNotFound('data not found');
        }

        $data['types'] = $findTypeAll;

        return $this->respond($data);
    }


    public function show($id)  {

        $findType = $this->mdl->findById($id);
        $findFacilityByType = $this->mdl->findFacilityByFacilityId($id);


        $data['types'] = [
          'type' => $findType,
          'facility' => $findFacilityByType
        ];

        if (!$findType) {
            return $this->fail("$id not found");
        }else {

            $response = [
                'status_code' => 200,
                'messege' => [
                    'success' => "success get data type by $id"
                ],
                'datas' => $data
            ];
            return $this->respond($response);
        }
        
    }

    public function create() {

        $file = $this->request->getFile('image');

        $data = [
            'name' => $this->request->getVar('name'),
            'price' => $this->request->getVar('price'),
            'facilityId' => $this->request->getVar('facilityId'),
            'image'  => $file->getName(),
            'description' => $this->request->getVar('description')
        ];

            
        if (!$this->mdl->save($data)) {
        return $this->fail($this->mdl->errors());
        }

        $file->move('public/img/type');
        $response = [
            'status_code' => 200,
            'messege'  => [
                'success' => 'success input data type'
            ]
            ];

        return $this->respond($response);

    }


    // development
    public function update($id)  {
        
        $json = $this->request->getJSON();
        $file = $this->request->getFile('image');

        if($json){
            $data = [
                'name' => $json->name,
                'price' => $json->price,
                'facilityId' => $json->facilityId,
                'description' => $json->description,
                'image' => $json->image,
            ];
        }else{
            $input = $this->request->getRawInput();
            $data = [
                'name' => $input['name'],
                'price' => $input['price'],
                'description' => $input['description'],
                'facilityId' => $input['facilityId'],
                'image' => $file->getName(),
            ];
        }

        $findId = $this->mdl->findById($id);

        if (!$findId) {
            return $this->fail("id $id not found");
        }

        $this->mdl->update($id, $data);
        $file->move('public/img/type');

        if (!$this->mdl->update($id, $data)) {
           return $this->fail($this->mdl->errors());
        }

        $response = [
            'status_code' => 200,
            'messege' => "$id success  update data"
        ];

        return $this->respond($response);

    }


    public function delete($id) {
        
        $findId = $this->mdl->find($id);
        $imagePath = FCPATH . 'public/img/type/' . $findId['image'];
        
        if ($findId) {
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            $this->mdl->delete($id);
            $response = [
                'status_code' => 200,
                'messege' => "id $id success delete data"
            ];
            return $this->respond($response);
        }else {
            return $this->failNotFound("id $id not found");
        }
        
    }

    
}