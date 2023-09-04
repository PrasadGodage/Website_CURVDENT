<?php

class SuperLoginModel extends CI_Model {

    public function get_authenticate($data) {
      $this->db->where("uname='".$data['uname']."' AND password='".$data['password']."'");
        $result = $this->db->get('super_master')->row_array();
        return $result;
    }

    public function send_mail($email) {
        $result = array();
        $sql = "SELECT * FROM admin_master WHERE userid = '$email'";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            $token = md5($email) . rand(10, 9999);
            $expFormat = mktime(
                    date("H"), date("i") + 15, date("s"), date("m"), date("d"), date("Y")
            );
            $expDate = date("Y-m-d H:i:s", $expFormat);
            $sql = "UPDATE admin_master SET token = '$token',expiry_date='$expDate' WHERE userid = '$email'";
            $query = $this->db->query($sql);
            //  $result['data'] = $query->result();
            $result['token'] = $token;
            $result['status'] = true;
        } else {
            $result['data'] = [];
            $result['status'] = false;
        }
        return $result;
    }

    public function check_link($email, $token) {
        $sql = "SELECT token,expiry_date FROM admin_master WHERE token = '$token' AND userid='$email'";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            $result['data'] = $query->row();
            $result['status'] = true;
        } else {
            $result['data'] = [];
            $result['status'] = false;
        }
        return $result;
    }

}
