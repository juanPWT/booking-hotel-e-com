<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Facility extends Migration
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
        'name' => [
             'type'         => 'VARCHAR',
             'constraint'     => 255,
        ],
        'icon' => [
             'type'         => 'VARCHAR',
             'constraint'     => 255,
        ],
    ]);

      $this->forge->addKey('id', true);
      $this->forge->createTable('facility');
    }
    
    public function down()
    {
      $this->forge->dropTable('facility');
    }
  
}