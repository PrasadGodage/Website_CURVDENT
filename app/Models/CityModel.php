<?php

namespace App\Models;

use CodeIgniter\Model;

class CityModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'city_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['state_id','country_id','city'];

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


    public function get_all_data($id)
    {
        $builder = $this->db->table('city_master cim');
        $builder->select('cim.id as city_id, cim.country_id,cim.state_id,cim.city');
        $builder->join('country_master cm', 'cm.id=cim.id');
        $builder->join('state_master sm', 'sm.id=cim.id');
        
        if ($id != 0) {
            $builder->where('cim.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return $builder->get()->getResultArray();
        }
    }
}
