import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class Patient extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost/PMS";

		String USER = "shiva";
		String PASS = "$$Shiva123";

		try {
			response.setContentType("text/html");
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
			String sql = "SELECT name, age, id, gender, address, status, dov FROM Patient_Details";
			ResultSet rs = stmt.executeQuery(sql);

			while (rs.next()) {
				int id = rs.getInt("name");
				int age = rs.getInt("age");
				String name = rs.getString("name");
				String gender = rs.getString("gender");
				String addr = rs.getString("addr");
				String status = rs.getString("status");
				String dov = rs.getString("dov");

				PrintWriter out = response.getWriter();

				out.println("ID:" + id + "<br>");
				out.println("Age:" + age + "<br>");
				out.println("Name:" + name + "<br>");
				out.println("Gender:" + gender + "<br>");
				out.println("Address:" + addr + "<br>");
				out.println("Marital Status:" + status + "<br>");
				out.println("Date of visit:" + dov + "<br>");
			}

			rs.close();
			stmt.close();
			conn.close();
		} catch (SQLException sql) {
			sql.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
