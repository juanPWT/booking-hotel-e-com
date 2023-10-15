<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Room extends Migration
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
            'noRoom' => [
                 'type'         => 'VARCHAR',
                 'constraint'     => 255,
               

            ],
            'typeId' => [
                 'type'         => 'INT',
                 'constraint'     => 20,
                 'unsigned'       => true,
            ],
        ]);
    
          $this->forge->addKey('id', true);
          $this->forge->addForeignKey('typeId', 'type', 'id', 'CASCADE', 'CASCADE');
          $this->forge->createTable('room');
    }

    public function down()
    {
        $this->forge->dropTable('room');
    }
}