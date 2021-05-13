package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Object;

public class JSRenderTemplateContainer extends HTMLTemplateContainer{

	public JSRenderTemplateContainer(String name, String template) {
		super(name, template);
	}
	
	public String compile(String html, Object ctx) {
		String rendered = html;
		Object jsrender = (Object) window.$get("jsrender");
		if (jsrender != null) {
			Object templ = (Object) invokeFunction(jsrender, "templates", html);
			rendered = (String) invokeFunction(templ, "render", ctx);
		} 
		
		return rendered;
	}

}
