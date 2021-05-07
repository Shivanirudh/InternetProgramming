import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class Servlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
			String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";
	
			String USER = "shiva";
			String PASS = "$$Shiva123";

			response.setContentType("text/html");

			PrintWriter out = response.getWriter();
			String email = request.getParameter("email");
			String subject = request.getParameter("subject");
			String content = request.getParameter("content");

			try {
				Class.forName(JDBC_DRIVER);
				Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
				Statement stmt = conn.createStatement();
				String ins_sql = "INSERT INTO sent VALUES(?, ?, ?)";
				PreparedStatement ins_pst = conn.prepareStatement(ins_sql);
				ins_pst.setString(1, email);
				ins_pst.setString(2, subject);
				ins_pst.setString(3, content);
	
				ins_pst.executeUpdate();
				ins_pst.close();
				
				out.println("<B> Record added successfully</B><br>");

				String show_sql = "SELECT * FROM sent";
				Statement show_pst = conn.createStatement();

				ResultSet rs = show_pst.executeQuery(show_sql);
				out.println("<!DOCTYPE html>");
				out.println("<html><head></head><body style='font-size:15pt'>");
				out.println("<table style='border-spacing:50px'>");
				out.println("<tr><th>To address</th><th>Subject</th><th>Body</th></tr>");
				while (rs.next()) {
					response.setContentType("text/html");
					String show_email = rs.getString("to_address");
					String show_subject = rs.getString("subject");
					String show_content = rs.getString("body");

					out.println("<tr><td>" + show_email + "</td><td>" + show_subject + "</td><td>" + show_content + "</td></tr>");
				}
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
