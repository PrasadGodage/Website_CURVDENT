<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class OfficeBranchMaster extends Migration
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
            'office_type_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
            ],
            'country_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
            ],
            'state_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
            ],
            'city_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
            ],
            'hod_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'default' =>0,
            ],
            'created_by' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'null' =>true,
            ],
            'updated_by' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'null' =>true,
            ],
            'office_name' => [
                'type' => 'VARCHAR',
                'constraint' => '150',
            ],
            'address' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'pincode' => [
                'type' => 'INT',
                'constraint' => '10',
            ],
            'contact_number1' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
            ],
            'contact_number2' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
            ],
            'email_id' => [
                'type' => 'VARCHAR',
                'constraint' => '150',
            ],
            'created_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ],
            'updated_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ], 
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('office_type_id', 'office_type_master', 'id');
        $this->forge->addForeignKey('country_id', 'country_master', 'id');
        $this->forge->addForeignKey('state_id', 'state_master', 'id');
        $this->forge->addForeignKey('city_id', 'city_master', 'id');
        $this->forge->createTable('office_branch_master');
    }

    public function down()
    {
        $this->forge->dropTable('office_branch_master');
    }
}
