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

		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM Patient_Details";
			Statement pst = conn.createStatement();

            ResultSet rs = pst.executeQuery(sql);
            while (rs.next()) {
                response.setContentType("text/html");
                int id = rs.getInt("id");
                int age = rs.getInt("age");
                String name = rs.getString("name");
                String gender = rs.getString("gender");
                String addr = rs.getString("address");
                String status = rs.getString("marital_status");
                String dov = rs.getString("date_of_visit");

                out.println("Name:" + name + "<br>");
                out.println("ID:" + id + "<br>");
                out.println("Age:" + age + "<br>");
                out.println("Gender:" + gender + "<br>");
                out.println("Address:" + addr + "<br>");
                out.println("Marital Status:" + status + "<br>");
                out.println("Date of visit:" + dov + "<br>");
                out.println("<br><br>");
            }
            
			pst.close();
			conn.close();
            response.sendRedirect("http://localhost:8080/PMS/ViewServlet");
            
			
		} catch (SQLException sql) {
			sql.printStackTrace();
			out.println(sql);
		} catch (Exception e) {
			e.printStackTrace();
			out.println(e);
		}
	}
}
