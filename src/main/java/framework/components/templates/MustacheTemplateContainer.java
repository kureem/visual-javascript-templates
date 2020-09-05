package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Object;

public class MustacheTemplateContainer extends HTMLTemplateContainer{

	public MustacheTemplateContainer(String name, String template) {
		super(name, template);
	}
	
	
	public String compile(String html, Object ctx) {
		String rendered = html;
		Object mustache = (Object) window.$get("Mustache");
		if (mustache != null) {
			rendered = (String) invokeFunction(mustache, "render", html, ctx);
		} 
		
		return rendered;
	}
	
	

}
