<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ImageProduct extends Migration
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
        'typeId' => [
            "type"  => "INT",
            'constraint'     => 20,
        ],
        'imageProduct' => [
            'type'=> 'VARCHAR',
            'constraint'     => 255,

        ]
    ]);


    $this->forge->addKey('id', true);
    $this->forge->createTable('image');
    }

    public function down()
    {
        $this->forge->dropTable('image');
        
    }
}