<?php

namespace App\Models;

use CodeIgniter\Model;

class AdminModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'admin_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'id',
                                    'role_id',
                                    'profile_id',
                                    'office_branch_id',
                                    'name',
                                    'profile_image',
                                    'dob',
                                    'age',
                                    'gender',
                                    'aadhar_no',
                                    'pancard',
                                    'userid',
                                    'password',
                                    'contact_number1',
                                    'contact_number2',
                                    'email_id',
                                    'address',
                                    'country_id',
                                    'state_id',
                                    'city_id',
                                    'area_id',
                                    'pincode',
                                    'is_active',
                                    'is_verified',
                                    'created_by',
                                    'modified_at',
                                    'modified_by'
                                ];

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

    public function get_all_data($id, $flag)
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
                        ); // List all columns you want to select
        $builder->join('role_master rm', 'rm.id = am.role_id');
        $builder->join('profile_master pm', 'pm.id = am.profile_id');
        $builder->join('office_branch_master obm', 'obm.id = am.office_branch_id');
        $builder->join('country_master cm', 'cm.id = am.country_id');
        $builder->join('state_master sm', 'sm.id = am.state_id');
        $builder->join('city_master ctm', 'ctm.id = am.city_id');

        if ($flag == 1) {
            $builder->where('am.created_by', $id);
        } elseif ($flag == 2) {
            $builder->join('admin_master am2', 'am2.created_by = am.id');
            $builder->where('am.created_by', $id);
        } elseif ($flag == 3) {
            return ($builder->get()->getResult());
        } elseif ($flag == 4) {
            $builder->where('am.id', $id);
        }

        // print_r($builder->get()->getResult());
        return ($builder->get()->getResult());
    }



    public function find_userid($userid) {
        $builder = $this->db->table('admin_master');
        $builder->select('*');
        $builder->where('userid', $userid);
        $result = $builder->get()->getRowArray();
    
        return empty($result);
    }

    public function update_admin($id, $data)
    {
        $builder = $this->db->table('admin_master');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
    }

    
}
