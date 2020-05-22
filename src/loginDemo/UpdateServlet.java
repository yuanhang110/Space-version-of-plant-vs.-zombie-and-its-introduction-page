package loginDemo;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bean.User;
import com.dao.UserDAO;


/**
 * Servlet implementation class UpdateServlet
 */
@WebServlet("/UpdateServlet")
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String username = req.getParameter("username");
		String waves = req.getParameter("waves");
		System.out.println("(fromUpdateServlet.doGet)username="+username);
		req.getSession().setAttribute("waves",waves);//将waves写入会话层
		System.out.println("(fromUpdateServlet.doGet)waves="+waves);
        if(username != null && !username.equals("")){
            UserDAO dao = new UserDAO();
            User user = dao.selectUserByUsername(username);
            req.setAttribute("user", user);
        }
        req.getRequestDispatcher("update.jsp").forward(req, resp);// TODO Auto-generated method stub
	}

	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String username = req.getParameter("username");
		int waves=Integer.parseInt(req.getParameter("waves"));
		//req.getSession().setAttribute("waves",waves);
		System.out.println("(fromUplateServlet.doPost)关卡数为："+waves);
		req.getSession().setAttribute("waves",waves);//将waves写入会话层
        User user = new User();
        user.setName(new String(username.getBytes("ISO-8859-1"),"UTF-8"));
        user.setRole(Integer.valueOf(waves));
        UserDAO dao = new UserDAO();
        dao.updateUser(user);
        System.out.println("(fromdoPost)修改成功！");
        req.getRequestDispatcher("ShowServlet").forward(req, resp);
	}

}
