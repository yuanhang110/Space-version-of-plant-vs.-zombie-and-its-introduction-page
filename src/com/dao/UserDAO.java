package com.dao;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.bean.Remark;
import com.bean.User;
import com.utils.JdbcUtils;

 
 
public class UserDAO { 
	//数据库连接对象
	public List<Remark> getAllRemarks() throws SQLException{  
		Connection connection =null;
        List<Remark> list = new ArrayList<Remark>();  
        connection = JdbcUtils.getCon();
        String sql  = "select * from addtest";  
        try {
            PreparedStatement pst =connection.prepareStatement(sql);
            ResultSet rst = pst.executeQuery();
            while (rst.next()) {
                Remark remark = new Remark();
                remark.setName(rst.getString("name")); 
                remark.setIdentify(rst.getString("identify"));
                remark.setSubject(rst.getString("subject"));
                remark.setMessage(rst.getString("message"));
                list.add(remark);
            }
            rst.close();  
            pst.close(); 
        } catch (SQLException e) {
            e.printStackTrace(); 
        }
        return list;  
    }
	public  User  login(String username,String password) {
	   User u=null;
	   Connection connection =null;
	   PreparedStatement pstmt=null;
	   ResultSet resultSet=null;
 
	  //赋值
	  try {
		connection=JdbcUtils.getCon();
		  //静态sql语句
		String sql = "select * from test where name=? and password=?"; 
	    pstmt = (PreparedStatement) connection.prepareStatement(sql);
		pstmt.setString(1, username);
		pstmt.setString(2, password);  
		resultSet = pstmt.executeQuery();
		if(resultSet.next()){
			u=new User();
			u.setName(resultSet.getString("name"));
			u.setPassword(resultSet.getString("password"));
			System.out.println("登录成功！");
		}else{
			System.out.println("用户名或者密码错误！");
		}  
	} catch (SQLException e) {
		e.printStackTrace();
	}finally {	
	   JdbcUtils.close(pstmt, connection);	
	}
	 return u;
 
}
	
	public void addUser(User user) {
		Connection connection = null;
		PreparedStatement psmt = null;
		try {
			 connection = JdbcUtils.getCon();
			 
			 String sql  ="insert into test(id,name,password,role)values(?,?,?,?);";
			 
			 psmt = (PreparedStatement) connection.prepareStatement(sql);
			 
			 //����ʵ�������в�����ֵ
			 psmt.setInt(1, user.getId());
			 psmt.setString(2, user.getName());
			 psmt.setString(3,user.getPassword());
			 psmt.setInt(4, user.getRole());
			 psmt.executeUpdate();		 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			 JdbcUtils.close(psmt, connection);
		}
	}
	
	public boolean updateUser(User user){  //�޸�
        String sql = "UPDATE `test` SET `role`=? WHERE `name` = ?";  //�޸ĵ�SQL��䣬����ID�޸�
        System.out.println("sql语句："+sql);
        try {
        	Connection conn = JdbcUtils.getCon();
        	System.out.println("连接成功"+conn);
            PreparedStatement psmt = conn.prepareStatement(sql);
			 psmt.setInt(1, user.getRole());
			 psmt.setString(2, user.getName());
            int count = psmt.executeUpdate();
            psmt.close();  //�ر�
            return count>0?true:false;  //�Ƿ��޸ĵ��ж�
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
	
	public User selectUserByUsername(String username){  //����ID���в�ѯ
	       
        String sql  = "select * from test where name = "+"'"+username+"'";
        User user = null;
        try {
        	Connection conn = JdbcUtils.getCon();
            PreparedStatement pst = conn.prepareStatement(sql);
            ResultSet rst = pst.executeQuery();
            while (rst.next()) {
                user = new User();
                user.setId(rst.getInt("id"));
                user.setName(rst.getString("name"));
                user.setPassword(rst.getString("password"));
                user.setRole(rst.getInt("role"));
            }
            rst.close();
            pst.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return user;  //����
    }
	
	
	public List<User> getAllUser(){  //��ѯ������Ϣ
        List<User> list = new ArrayList<User>();  //��������
        
        String sql  = "select * from test";  //SQL��ѯ���
        try {
        	Connection conn = JdbcUtils.getCon();
            PreparedStatement pst = conn.prepareStatement(sql);
            ResultSet rst = pst.executeQuery();
            while (rst.next()) {
                User user = new User();
                user.setId(rst.getInt("id"));  //�õ�ID
                user.setName(rst.getString("name"));
                user.setPassword(rst.getString("password"));
                user.setRole(rst.getInt("role"));
                list.add(user);
            }
            rst.close();  //�ر�
            pst.close();  //�ر�
        } catch (SQLException e) {
            e.printStackTrace();  //�׳��쳣
        }
        return list;  //����һ������
    }

	
	public void addRemark(Remark remark) {
		System.out.println("调用了addRemark方法");
		Connection connection = null;
		PreparedStatement psmt = null;
		try {
			System.out.println("调用了addRemark方法");
			 connection = JdbcUtils.getCon();
			 
			 String sql  ="insert into addtest(name,identify,subject,message)values(?,?,?,?);";
			 
			 psmt = (PreparedStatement) connection.prepareStatement(sql);
			 
			 //运用实体对象进行参数赋值
			 psmt.setString(1, remark.getName());
			 psmt.setString(2, remark.getIdentify());
			 psmt.setString(3,remark.getSubject());
			 psmt.setString(4, remark.getMessage());
			 psmt.executeUpdate();		 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			 JdbcUtils.close(psmt, connection);
		}
	}	
	}


