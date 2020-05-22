package loginDemo;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ValidateCodeServlet")
public class ValidateCodeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ValidateCodeServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// ��Ӧͷ��Ϣ
		response.setHeader("Pragma", "No-Cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expries", 0);

		// �����������
		Random random = new Random();

		// ������֤���λ��
		int size = 5;

		// ��������������ɵ���֤��
		String vCode = "";
		char c;
		// ������֤��
		for (int i = 0; i < size; i++) {
			// ����һ��26���ڵ��������
			int number = random.nextInt(26);
			// ������ɵ���ż�������������һ������
			if (number % 2 == 0) {
				c = (char) ('0' + (char) ((int) (Math.random() * 10)));
				// ������ɵ������������������һ����ĸ
			} else {
				c = (char) ((char) ((int) (Math.random() * 26)) + 'A');
			}
			vCode = vCode + c;
		}

		// �������ɵ�5λ��֤��
		request.getSession().setAttribute("vCode", vCode);

		// ��֤��ͼƬ������
		// ����ͼƬ�Ŀ�Ⱥ͸߶�
		int width = (int) Math.ceil(size * 20);
		int height = 50;
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		// ��ȡͼƬ��������
		Graphics gr = image.getGraphics();
		// �趨ͼƬ������ɫ
		gr.setColor(Color.WHITE);
		gr.fillRect(0, 0, width, height);
		// �趨ͼƬ�߿�
		gr.setColor(Color.GRAY);
		gr.drawRect(0, 0, width - 1, height - 1);
		// ��ʮ��������
		for (int i = 0; i < 5; i++) {
			int x1 = random.nextInt(width);
			int y1 = random.nextInt(height);
			int x2 = random.nextInt(width);
			int y2 = random.nextInt(height);
			gr.setColor(randomColor());
			gr.drawLine(x1, y1, x2, y2);
		}
		// �������壬����֤��
		gr.setColor(randomColor());
		gr.setFont(randomFont());
		gr.drawString(vCode, 10, 22);
		// ͼ����Ч
		gr.dispose();
		// �����ҳ��
		ImageIO.write(image, "JPEG", response.getOutputStream());

	}

	// �����������ɫ
	private Color randomColor() {
		int red = r.nextInt(150);
		int green = r.nextInt(150);
		int blue = r.nextInt(150);
		return new Color(red, green, blue);
	}

	private String[] fontNames = { "����", "���Ŀ���", "����", "΢���ź�", "����_GB2312" };
	private Random r = new Random();

	// �������������
	private Font randomFont() {
		int index = r.nextInt(fontNames.length);
		String fontName = fontNames[index];// �����������������
		int style = r.nextInt(4);
		int size = r.nextInt(3) + 24; // ��������ֺ�, 24 ~ 28
		return new Font(fontName, style, size);
	}
	
}