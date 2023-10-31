<?php

namespace App\Models;

use CodeIgniter\Model;

class OfficeTypeModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'office_type_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['type'];

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
    
        public function delete_data($id)
    {
        return $this->db->table($this->table)->delete(array(
            "id" => $id,
        ));
    }

    public function find_officeType($id) {
        $builder = $this->db->table('office_type_master');
        $builder->select('*');
        $builder->where('id', $id);
        $result = $builder->get()->getRowArray();
    
        return empty($result);
    }

    public function update_officeType($id, $data)
    {
        $builder = $this->db->table('office_type_master');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
    }

    
    public function get_all_data($id)
    {
        $builder = $this->db->table('office_type_master otm');
        $builder->select('otm.id, otm.type');
       
        if ($id != 0) {
            $builder->where('otm.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return $builder->get()->getResultArray();
        }
    }
}
