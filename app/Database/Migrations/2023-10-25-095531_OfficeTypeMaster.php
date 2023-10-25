<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class OfficeTypeMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'type' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
           
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('office_type_master');
    }

    public function down()
    {
        $this->forge->dropTable('office_type_master');
    }
}
