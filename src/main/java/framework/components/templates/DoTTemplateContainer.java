package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class DoTTemplateContainer extends HTMLTemplateContainer{

	public DoTTemplateContainer(String name, String template) {
		super(name, template);
	}
	
	
	public String compile(String html, Object ctx) {
		String rendered = html;
		
		Object doT = (Object) window.$get("doT");
		if (doT != null) {
			Function templ = (Function) invokeFunction(doT, "template", html);
			rendered =  (String)templ.call(templ, ctx);
		} 
		
		return rendered;
	}

}
