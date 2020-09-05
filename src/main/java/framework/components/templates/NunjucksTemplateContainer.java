package framework.components.templates;

import static jsweet.dom.Globals.window;

import framework.components.HTMLTemplateContainer;
import jsweet.lang.Object;

public class NunjucksTemplateContainer extends HTMLTemplateContainer{

	public NunjucksTemplateContainer(String name, String template) {
		super(name, template);
	}

	@Override
	public String compile(String html, Object ctx) {
		String rendered = html;
		Object nunjucks = (Object) window.$get("nunjucks");
		if (nunjucks != null) {
			rendered = (String) invokeFunction(nunjucks, "renderString", html, ctx);
		} 
		
		return rendered;
	}
	
	
	

}
