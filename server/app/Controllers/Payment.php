<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;

class Payment extends BaseController
{
    use ResponseTrait;
    public function index()
    {

        $serverKey = getenv('SERVER_KEY');

                // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = '';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = [
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => $this->request->getVar('totalPrice'),
            ),
            'customer_details' => array(
                'email' => $this->request->getVar('email'),
                'phone'=> $this->request->getVar('contact'),
            )
        ];
        
        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $response = [
            'status' => 'success',
            'snapToken' => $snapToken
        ];

        return $this->respond($response);
    }
}