package loginDemo;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bean.User;
import com.dao.UserDAO;

@WebServlet("/ShowServlet")
public class ShowServlet  extends HttpServlet{  //��ʾȫ������

    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        this.doPost(req, resp);
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDAO dao = new UserDAO();
        List<User> list = dao.getAllUser();
        req.getSession().setAttribute("list", list);
        System.out.println("(fromShowServlet)"+list);
        //resp.sendRedirect("dist/index2.jsp");
        //req.getRequestDispatcher("sucessToUpload.jsp").forward(req, resp);
        req.getRequestDispatcher("dist/index2.jsp").forward(req, resp);
    }    
}
