package com.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 
public class JdbcUtils {
   //注册驱动的工具类
	
	private static String url = null;
	
	private static String user = null;
	
	private static String  password = null;
	
	private static String  dv = null;
 
	
	static{
		
	 
	  
		
		try {
			// 加载驱动
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			// 数据库连接url
			String url = "jdbc:mysql://127.0.0.1:3306/teacherms?serverTimezone=UTC";
			// 获取数据库连接
			java.sql.Connection conn = DriverManager.getConnection(url, "root", "920691910");
			System.out.println("数据库连接成功!");
		} catch (Exception e) {
			e.printStackTrace();
		}
			
	}
	
	
 
	//获取连接对象
	public static  Connection getCon() throws SQLException{
		String url = "jdbc:mysql://127.0.0.1:3306/teacherms?serverTimezone=UTC";
		Connection conn = null;
		 
		 conn = (Connection) DriverManager.getConnection(url, "root", "920691910");
		 
		 return  conn;
	}
	
	//关闭的方法
	public static void close(Statement statement,Connection conn){
		   if(statement !=null){
			   try {
				statement.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   }
		   
		   if(conn !=null){
			   try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		   }
	}
		
	//关闭的方法
		public static void close(PreparedStatement preparedStatement,Connection conn,ResultSet resultSet){
			   if(preparedStatement !=null){
				   try {
					preparedStatement.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			   }
			   
			   if(conn !=null){
				   try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			   }
			   
			   if(resultSet!=null){
				   try {
					resultSet.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			  }
	}
}

