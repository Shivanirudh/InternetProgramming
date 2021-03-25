import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ViewServlet extends HttpServlet{
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
            out.println("<!DOCTYPE html>");
            out.println("<html><head></head><body style='font-size:15pt'>");
            out.println("<table style='border-spacing:50px'>");
            out.println("<tr><th>Name</th><th>Age</th><th>ID</th><th>Gender</th><th>Address</th><th>Marital Status</th><th>Date of visit</th></tr>");
            while (rs.next()) {
                response.setContentType("text/html");
                int id = rs.getInt("id");
                int age = rs.getInt("age");
                String name = rs.getString("name");
                String gender = rs.getString("gender");
                String addr = rs.getString("address");
                String status = rs.getString("marital_status");
                String dov = rs.getString("date_of_visit");

                out.println("<tr><td>" + name + "</td><td>" + age + "</td><td>" + id + "</td><td>" + gender
                        + "</td><td>" + addr + "</td><td>" + status + "</td><td>" + dov + "</td></tr>");
            }
            
			pst.close();
            conn.close();
            
			
		} catch (SQLException sql) {
			sql.printStackTrace();
			out.println(sql);
		} catch (Exception e) {
			e.printStackTrace();
			out.println(e);
		}
	}
}
