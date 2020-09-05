package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Object;

public class EJSTemplateContainer extends HTMLTemplateContainer{

	public EJSTemplateContainer(String name, String template) {
		super(name, template);
	}
	
	
	public String compile(String html, Object ctx) {
		String rendered = html;
		Object ejs = (Object) window.$get("ejs");
		if (ejs != null) {
			rendered = (String) invokeFunction(ejs, "render", html, ctx);
		} 
		 
		return rendered;
	}

}
