<?php

namespace App\Models;

use CodeIgniter\Model;

class EmployeeLoginModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'admin_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id','role_id','profile_id','office_branch_id','name','profile_image','dob','age','gender','aadhar_no','pancard','userid','password','contact_number1','contact_number2','email_id','address','country_id','state_id','city_id','area_id','pincode','is_active','is_verified','created_at','created_by','modified_at','modified_by'];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    public function __construct()
    {
        parent::__construct();
        $this->db = \Config\Database::connect();
        // OR $this->db = db_connect();
    }
    public function insert_data($data)
    {
        $this->db->table($this->table)->insert($data);
        return $this->db->insertID();
    }

    public function update_data($id, $data)
    {
        $this->db->table($this->table)->update($data, array(
            "id" => $id,
        ));
        return $this->db->affectedRows();
    }

    public function delete_data($id)
    {
        return $this->db->table($this->table)->delete(array(
            "id" => $id,
        ));
    }

    public function get_authenticate($data)
    {
        $builder = $this->db->table('admin_master am');
        $builder->select('  am.id,
                            am.role_id,
                            rm.role, 
                            am.profile_id, 
                            pm.profile, 
                            am.office_branch_id, 
                            obm.office_name, 
                            am.name, 
                            am.profile_image, 
                            am.dob, 
                            am.age, 
                            am.aadhar_no, 
                            am.pancard, 
                            am.password, 
                            am.userid, 
                            am.contact_number1,
                            am.contact_number2, 
                            am.email_id, 
                            am.city_id, 
                            ctm.city, 
                            am.state_id, 
                            sm.state,
                            am.country_id, 
                            cm.country,
                            am.area_id, 
                            am.pincode,
                            am.gender, 
                            am.address, 
                            am.is_active, 
                            am.is_verified, 
                            am.created_by, 
                            am.created_at, 
                            am.modified_by, 
                            am.modified_at'
                        ) // List all columns you want to select
                ->join('role_master rm', 'rm.id = am.role_id')
                ->join('profile_master pm', 'pm.id = am.profile_id')
                ->join('office_branch_master obm', 'obm.id = am.office_branch_id')
                ->join('country_master cm', 'cm.id = am.country_id')
                ->join('state_master sm', 'sm.id = am.state_id')
                ->join('city_master ctm', 'ctm.id = am.city_id')
                ->where("am.userid", $data['userid'])
                ->where("am.password", $data['password']);
                $result = $builder->get()->getRowArray();
                // print_r($builder->get()->getLastQuery());
        return $result;
    }

}
