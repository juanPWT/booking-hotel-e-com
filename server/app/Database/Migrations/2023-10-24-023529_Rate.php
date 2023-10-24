<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Rate extends Migration
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
            'userId' => [
                "type"  => "INT",
                'constraint'     => 20,
    
            ],
            'comment' => [
                'type'=> 'TEXT',
            ],
            'rate' => [
                'type'=> 'INT',
                'constraint' => 2,
                'default' => 0
                
            ],
            'create_at' => array(
                'type' => 'varchar',
                'constraint' => 250,
                'null' => true,
                'on create' => 'NOW()'
            ),
            'update_at' => array(
                'type' => 'varchar',
                'constraint' => 250,
                'null' => true,
                'on create' => 'NOW()'
            ),
        ]);
    
    
        $this->forge->addKey('id', true);
        $this->forge->createTable('rate');
    }

    public function down()
    {
        $this->forge->dropTable('rate');
        
    }
}