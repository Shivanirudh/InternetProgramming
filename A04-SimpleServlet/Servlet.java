import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class Servlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			response.setContentType("text/html;charset=UTF-8");

			PrintWriter out = response.getWriter();

			try{
				String id= request.getParameter("id").trim();
                String name = request.getParameter("name").trim();
                String designation = request.getParameter("designation").trim();
                String dept = request.getParameter("dept").trim();
                String salary = request.getParameter("salary").trim();
                String phone = request.getParameter("phone").trim();
                String address = request.getParameter("address").trim();
                String dob = request.getParameter("dob").trim();
                
				
				out.println("<!DOCTYPE html>");
				out.println("<html>");
				out.println("<head><title>Details Obtained</title></head>");
				out.println("<body style='background-color: black; color:white'><h1 style='text-align: center;'>Employee Details</h1>");
				out.println("<table align='center' style='border: 2px solid black; font-size: 25px;'><tr><th>ID</th><td>" + id + "</td></tr><tr><th>Name</th><td>" + name + "</td></tr></table>");
				out.println("</body></html>");
			} 
			finally{
				out.close();
			}

		}
}
