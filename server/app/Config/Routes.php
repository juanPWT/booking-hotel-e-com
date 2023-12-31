<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//  $routes->resource('facility');
//  $routes->resource('type');
    

//filter [authFilter => untuk client] 

    //facility
    $routes->get('api/facility', 'Facility::index');
    $routes->post('api/facility', 'Facility::create');
    $routes->delete('api/facility', 'Facility::delete');

    //type
    $routes->get('api/type', 'Type::index');
    $routes->get('api/type/(:any)', 'Type::show/$1');
    $routes->post('api/type', 'Type::create' );
    $routes->patch('api/type/(:any)', 'Type::update/$1');
    $routes->delete('api/type/(:any)', 'Type::delete/$1');

    //image product
    $routes->post('api/image', 'Image::create');
    $routes->get('api/image/(:any)', 'Image::show/$1');

    //rate and comment
    $routes->post('api/comment/(:any)', 'Rate::create/$1' );
    $routes->get('api/comment/(:any)', 'Rate::show/$1');
    $routes->get('api/rate/(:any)', 'Rate::rate/$1');


    //room
    $routes->post('api/room', 'Room::create');
    $routes->get('api/room', 'Room::index');
    $routes->get('api/room/(:any)', 'Room::show/$1');
    $routes->get('api/available/room/(:any)', 'Room::availableRoom/$1');

    //auth client
    $routes->post('api/auth/register', 'Auth::register');
    $routes->post('api/auth/login', 'Auth::login');

    //payment
    $routes->post('api/payment', 'Payment::index');

    //booking
    $routes->post('api/booking', 'Booking::create');
    $routes->get('api/booking/(:any)', 'Booking::show/$1');
    $routes->get('api/detail/booking/(:any)', 'Booking::getDetailBooking/$1');


    //back office
    $routes->get('office', 'Office::index');
    $routes->get('office/booking', 'Office::booking');
    $routes->get('office/room', 'Office::room');
    $routes->post('office/room/checkout/(:any)', 'Office::checkOut/$1');
    //auth back office
    $routes->get('office/auth', 'AuthOffice::index');