<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Booking extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => 20,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'roomId' => [
                 'type'         => 'INTEGER',
                 'constraint'     => 20,
            ],
            'clientId' => [
                 'type'         => 'integer',
                 'constraint'     => 20,
            ],
            'startDate' => [
                 'type'         => 'VARCHAR',
                 'constraint'     => 255,
            ],
            'endDate' => [
                 'type'         => 'VARCHAR',
                 'constraint'     => 255,
            ],
            'totalPrice' => [
                 'type'         => 'INTEGER',
                 'constraint'     => 50,
            ],
            
           
        ]);
    
          $this->forge->addKey('id', true);
          $this->forge->createTable('booking');
    }

    public function down()
    {
        $this->forge->dropTable('booking');
        
    }
}