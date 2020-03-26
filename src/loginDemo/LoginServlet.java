package loginDemo;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import com.bean.User;
import com.dao.UserDAO;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	  public LoginServlet() { super();
	  
	  }
	  
	  protected void doGet(HttpServletRequest request, HttpServletResponse
	  response) throws ServletException, IOException {
	  
	  doPost(request, response); }
	 

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("登陆中");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		System.out.println("name"+" "+username+"\n");
		System.out.println("passwd"+""+password+"\n");
		String vericode = request.getParameter("checkcode");
		String generatedCode = (String) request.getSession().getAttribute("vCode");
		request.getSession().setAttribute("username",username);//将用户名写入会话中，方便后续调用
		System.out.println("(fromLoginServlet)username="+username);
		UserDAO userDAO=new UserDAO(); 
		User user=userDAO.login(username, password);
		if(user!=null){
			if(vericode.toLowerCase().equals(generatedCode.toLowerCase())) {
				response.sendRedirect("dist/index2.jsp");
			}
			else {
				request.setAttribute("message", "验证码错误<br>");
				response.sendRedirect("WebPage/webpage.jsp");
			}
		}else{
			request.setAttribute("message", "账密错误，请重新登录<br>");
			response.sendRedirect("WebPage/webpage.jsp");
		}

		/*String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		System.err.println(userName + ";" + password);
		String myUser = "xyh";
		String myPwd = "123";
		String vericode = request.getParameter("checkcode");
		String generatedCode = (String) request.getSession().getAttribute("vCode");
		if (userName.equals(myUser) && password.equals(myPwd)
				&& vericode.toLowerCase().equals(generatedCode.toLowerCase())) {
			response.sendRedirect(request.getContextPath() + "/hello.jsp?userName=" + userName);
		} else {
			request.setAttribute("message", "账密错误，请重新登录<br>");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
		}*/
	}

}
