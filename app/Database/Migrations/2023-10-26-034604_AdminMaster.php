<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AdminMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true
            ],
            'role_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'profile_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'office_branch_id' => [
                'type' => 'INT',
                'constraint' => '11'
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
            ],
            'profile_image' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
            ],
            'dob' => [
                'type' => 'DATE'
                
            ],
            'age' => [
                'type' => 'INT',
                'constraint' => '11'
            ],
            'gender' => [
                'type' => 'ENUM("Male",Female")',
                'default' => 'Male',
                'null' => FALSE
            ],
            'aadhar_no' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
            ],
            'pancard' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
            ],
            'userid' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => FALSE
            ],
            'password' => [
                'type' => 'VARCHAR',
                'constraint' => '8',
                'null' => FALSE
            ],
            'contact_number1' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
                'null' => FALSE
            ],
            'contact_number2' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
                'null' => TRUE
            ],
            'email_id' => [
                'type' => 'VARCHAR',
                'constraint' => '150'
                
            ],
            'address' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
                
            ],
            'country_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'state_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'city_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'area_id' => [
                'type' => 'INT',
                'constraint' => '11',
                'null' => TRUE
            ],
            'pincode' => [
                'type' => 'VARCHAR',
                'constraint' => '10'
                
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'constraint' => '2'
            ],
            'is_verified' => [
                'type' => 'TINYINT',
                'constraint' => '2'
                
            ],
            'created_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
                
            ],
            'created_by' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'modified_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
                
            ],
            'modified_by' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('admin_master');
    }

    public function down()
    {
        $this->forge->dropTable('admin_master');
    }
}
