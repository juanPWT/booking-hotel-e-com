<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//  $routes->resource('facility');
//  $routes->resource('type');
    

//filter [authFilter => untuk client] 

    //facility
    $routes->get('facility', 'Facility::index');
    $routes->post('facility', 'Facility::create');
    $routes->delete('facility', 'Facility::delete');

    //type
    $routes->get('type', 'Type::index');
    $routes->get('type/(:any)', 'Type::show/$1');
    $routes->post('type', 'Type::create' );
    $routes->patch('type/(:any)', 'Type::update/$1');
    $routes->delete('type/(:any)', 'Type::delete/$1');

    //auth client
    $routes->post('auth/register', 'Auth::register');
    $routes->post('auth/login', 'Auth::login');