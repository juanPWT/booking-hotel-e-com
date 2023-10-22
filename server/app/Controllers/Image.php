<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ImageModel;
use App\Models\TypeModel;

class Image extends BaseController
{
    use ResponseTrait;
    protected $mdl;
    protected $typeMdl;

    public function __construct()  {
        $this->mdl = new ImageModel();
        $this->typeMdl = new TypeModel();
    }
    public function index()
    {
        
    }

    public function show($typeId) {
        $validationId = $this->typeMdl->findById($typeId);
        if (!$validationId) {
          return $this->fail("id not found");
        }

        $getImageArray = $this->mdl->getImageByTypeId($typeId);

        $data['image'] = $getImageArray;

        return $this->respond($data);

    }

    public function create() {
        $fileImage = $this->request->getFile("image");

        $data = [
            "typeId" => $this->request->getVar("typeId"),
            "imageProduct" => $fileImage->getName()
        ];

        if (!$this->mdl->save($data)) {
            return $this->fail($this->mdl->errors());
        }

        $fileImage->move('public/img/product');

        $response = [
            'status_code' => 200,
            'messege'  => [
                'success' => 'success save image '
            ]
            ];

        return $this->respond($response);
    }
}