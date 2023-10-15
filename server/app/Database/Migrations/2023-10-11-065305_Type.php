<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Type extends Migration
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
            'price' => [
                 'type'         => 'BIGINT',
                 'constraint'     => 100,

            ],
            'image' => [
                 'type'         => 'VARCHAR',
                 'constraint'     => 255,

            ],
            'description' => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'facilityId' => [
                 'type'         => 'VARCHAR',
                 'constraint'     => 100,

            ],
        ]);
    
          $this->forge->addKey('id', true);
          $this->forge->createTable('type');
    }

    public function down()
    {
        $this->forge->dropTable('type');
    }
}