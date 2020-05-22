package loginDemo;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bean.Remark;
import com.dao.UserDAO;

/**
 * Servlet implementation class addRemarkServlet
 */
@WebServlet("/addRemarkServlet")
public class addRemarkServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public addRemarkServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("hello");
		String name = req.getParameter("name");
		String identify = req.getParameter("identify");
		String subject = req.getParameter("msg_subject");
		String message = req.getParameter("message");
		Remark remark = new Remark();
		remark.setName(new String(name.getBytes("ISO-8859-1"), "UTF-8"));
		remark.setIdentify(new String(identify.getBytes("ISO-8859-1"), "UTF-8"));
		remark.setSubject(new String(subject.getBytes("ISO-8859-1"), "UTF-8"));
		remark.setMessage(new String(message.getBytes("ISO-8859-1"), "UTF-8"));
		UserDAO dao = new UserDAO();
		dao.addRemark(remark);
		req.getRequestDispatcher("showRemarkServlet").forward(req, resp);

	}

}
