import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class Country extends HttpServlet{
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/mysql?autoReconnect=true&useSSL=false";

		String USER = "shiva";
		String PASS = "$$Shiva123";

        //response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        var val = request.getParameter("val");
		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM countries where LOWER(country) LIKE '"+val+"%'";
			Statement pst = conn.createStatement();

            ResultSet rs = pst.executeQuery(sql);
            while (rs.next()) {
                
                String country = rs.getString("country");

                out.print(country+"/");

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
