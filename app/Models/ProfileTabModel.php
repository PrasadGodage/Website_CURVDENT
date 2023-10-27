<?php

namespace App\Models;

use CodeIgniter\Model;

class ProfileTabModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'profile_tab_permission';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['tab_id','profile_id'];

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

    public function get_all_data($id, $flag)
    {
        $builder = $this->db->table('profile_tab_permission ptp');
        $builder->select('ptp.id as ppermission_id, tm.tab_name, tm.icon_id, tm.is_subtab, tm.is_active, ptp.tab_id, ptp.profile_id, pm.profile, im.icon');
        $builder->join('tab_master tm', 'tm.id=ptp.tab_id');
        $builder->join('icon_master im', 'im.id=tm.icon_id');
        $builder->join('profile_master pm', 'pm.id=ptp.profile_id');

        if ($id != 0 && $flag == 1) 
        {
            $builder->where('ptp.profile_id', $id);
            return $builder->get()->getResult();
        } elseif ($id != 0 && $flag == 2) 
        {
            $builder->where('ptp.id', $id);
            return $builder->get()->getRowArray();
        }elseif ($id == 0 && $flag == 1){
            
            return $builder->get()->getRowArray();
        }

        return [];
    }

}
