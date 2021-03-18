import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

//Tomcat 10 or later: change imports from "javax.x" to "jakarta.x"

//Reference: https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaServlets.html

public class Session extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html;");
			try{
				int count;
				PrintWriter out = response.getWriter();
				HttpSession session = request.getSession();

				session.setMaxInactiveInterval(10);
				if(session.getAttribute("count") != null){
					count = (int)session.getAttribute("count");
				}
				else{
					count = 0;
				}
				count++;
				session.setAttribute("count", count);
				out.println("Session ID: "+session.getId()+"<br>");
				out.println("Count: "+count);
			} 
			catch(Exception e){
				System.out.println(e);
			}

		}
}
