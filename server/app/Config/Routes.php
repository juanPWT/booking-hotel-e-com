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

    //auth client
    $routes->post('api/auth/register', 'Auth::register');
    $routes->post('api/auth/login', 'Auth::login');