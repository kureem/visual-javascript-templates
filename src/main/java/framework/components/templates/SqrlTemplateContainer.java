package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Object;

public class SqrlTemplateContainer  extends HTMLTemplateContainer{

	public SqrlTemplateContainer(String name, String template) {
		super(name, template);
	}
	
	public String compile(String html, Object ctx) {
		String rendered = html;
		Object Sqrl = (Object) window.$get("Sqrl");
		if (Sqrl != null) {
			rendered = (String) invokeFunction(Sqrl, "render", html, ctx);
		} 
		
		return rendered;
	}
	

}
