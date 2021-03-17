import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.*;
import javax.servlet.http.*;

//Tomcat 10 or later: change imports from "javax.x" to "jakarta.x"

//Reference: https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaServlets.html

public class Session extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html;");
			try{
				PrintWriter out = response.getWriter();
				HttpSession session = request.getSession(true);

				String uname= request.getParameter("username");
				String alive_id = session.getId();
				
				out.println("<!DOCTYPE html>");
				out.println("<html>");
				out.println("<head><title>Details Obtained</title></head>");
				out.println("<body style='background-color: azure;'><h1 style='text-align: center;'>User Details</h1>");
				out.println("<table align='center' style='border: 2px solid black; font-size: 25px;'><tr><th>Name</th><td>" + uname + "</td></tr><tr><th>Email</th><td>" + email + "</td></tr></table>");
				out.println("</body></html>");
			} 
			finally{
				out.close();
			}

		}
}
