<?php

namespace App\Models;

use CodeIgniter\Model;

class IconModel extends Model
{

    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'icon_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id','icon_title','icon'];

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

    public function get_data($id)
    {
        $builder = $this->db->table('icon_master im');
        $builder->select('im.id, im.icon_title, im.icon')
                ->where('im.id', $id);
        
        return $builder->get()->getResultArray();
        
    }
    public function update_data($id,$data)
    {
        $builder = $this->db->table('icon_master');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
        
    }
}
