<?php

namespace App\Models;

use CodeIgniter\Model;

class OfficeBranchModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'office_branch_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['office_type_id','office_name','address','country_id','state_id','city_id','area_id','pincode','hod_id','created_by','created_at','modified_by','modified_at','contact_number1','contact_number2','email_id'];

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
    

    public function update_officeBranch($id, $data)
    {
        $builder = $this->db->table('office_branch_master');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
    }

    // public function delete_data($id)
    // {
    //     return $this->db->table($this->table)->delete(array(
    //         "id" => $id,
    //     ));
    // }

        public function get_all_data($id)
    {
        $builder = $this->db->table('office_branch_master obm');
        $builder->select('obm.id, obm.office_type_id, otm.type, obm.office_name, obm.address, obm.area_id, obm.city_id, cm.city, obm.state_id, sm.state, obm.country_id, ctm.country, obm.pincode, obm.contact_number1, obm.contact_number2, obm.email_id, obm.hod_id, obm.created_by, obm.created_at, obm.modified_by, obm.modified_at');
        $builder->join('office_type_master otm', 'otm.id=obm.office_type_id');
        $builder->join('city_master cm', 'cm.id=obm.city_id');
        $builder->join('state_master sm', 'sm.id=obm.state_id');
        $builder->join('country_master ctm', 'ctm.id=obm.country_id');

        if ($id !== 0) {
            $builder->where('obm.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return $builder->get()->getResult();
        }
    }


}
