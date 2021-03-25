import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ViewServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";

		String USER = "shiva";
		String PASS = "$$Shiva123";


		PrintWriter out = response.getWriter();
		String age = request.getParameter("age");
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String addr = request.getParameter("address");
		String status = request.getParameter("status");
		String dov = request.getParameter("dov");

		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
			String sql = "INSERT INTO Patient_Details VALUES(?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setString(1, name);
			pst.setInt(2, Integer.parseInt(age));
			pst.setInt(3, Integer.parseInt(id));
			pst.setString(4, gender);
			pst.setString(5, addr);
			pst.setString(6, status);
			pst.setString(7, dov);

			pst.executeUpdate();
			pst.close();
			conn.close();
			response.sendRedirect("http://localhost:8080/PMS/ViewServlet")
			
		} catch (SQLException sql) {
			sql.printStackTrace();
			out.println(sql);
		} catch (Exception e) {
			e.printStackTrace();
			out.println(e);
		}
	}
}
