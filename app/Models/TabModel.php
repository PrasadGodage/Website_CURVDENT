<?php

namespace App\Models;

use CodeIgniter\Model;

class TabModel extends Model
{

    // protected $table = 'tab_master';
    // .. other member variables
    protected $db;
    
    protected $DBGroup          = 'default';
    protected $table            = 'tab_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['tab_name','is_subtab','icon_id','is_active'];

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
        $builder = $this->db->table('tab_master');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
    }

    public function delete_data($id)
    {
        return $this->db->table($this->table)->delete(array(
            "id" => $id,
        ));
    }

    
    public function get_all_data($id)
    {
        $builder = $this->db->table('tab_master tm');
        $builder->select('tm.id, tm.tab_name, tm.is_subtab, tm.icon_id, tm.is_active, im.icon_title, im.icon')
                ->join('icon_master im', 'im.id=tm.icon_id');

        if ($id != 0) {
            $builder->where('tm.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return $builder->get()->getResultArray();
        }
    }
    public function get_data()
    {
        $builder = $this->db->table('tab_master tm');
        $builder->select('tm.id, tm.tab_name, tm.is_subtab, tm.icon_id, tm.is_active, im.icon_title, im.icon');
        $builder->join('icon_master im', 'im.id=tm.icon_id');

        
            return $builder->get()->getResultArray();
        
    }


    
}
