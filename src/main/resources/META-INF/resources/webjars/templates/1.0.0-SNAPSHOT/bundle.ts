/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
class DoTTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let doT : Object = <Object>window["doT"];
        if(doT != null) {
            let templ : Function = <Function>HTMLTemplateContainer.invokeFunction(doT, "template", html);
            rendered = <string>templ.call(templ, ctx);
        }
        return rendered;
    }
}
DoTTemplateContainer["__class"] = "framework.components.templates.DoTTemplateContainer";
DoTTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class EJSTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let ejs : Object = <Object>window["ejs"];
        if(ejs != null) {
            rendered = <string>HTMLTemplateContainer.invokeFunction(ejs, "render", html, ctx);
        }
        return rendered;
    }
}
EJSTemplateContainer["__class"] = "framework.components.templates.EJSTemplateContainer";
EJSTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class JSRenderTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let jsrender : Object = <Object>window["jsrender"];
        if(jsrender != null) {
            let templ : Object = <Object>HTMLTemplateContainer.invokeFunction(jsrender, "templates", html);
            rendered = <string>HTMLTemplateContainer.invokeFunction(templ, "render", ctx);
        }
        return rendered;
    }
}
JSRenderTemplateContainer["__class"] = "framework.components.templates.JSRenderTemplateContainer";
JSRenderTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class MustacheTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let mustache : Object = <Object>window["Mustache"];
        if(mustache != null) {
            rendered = <string>HTMLTemplateContainer.invokeFunction(mustache, "render", html, ctx);
        }
        return rendered;
    }
}
MustacheTemplateContainer["__class"] = "framework.components.templates.MustacheTemplateContainer";
MustacheTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class NunjucksTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    /**
     * 
     * @param {string} html
     * @param {Object} ctx
     * @return {string}
     */
    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let nunjucks : Object = <Object>window["nunjucks"];
        if(nunjucks != null) {
            rendered = <string>HTMLTemplateContainer.invokeFunction(nunjucks, "renderString", html, ctx);
        }
        return rendered;
    }
}
NunjucksTemplateContainer["__class"] = "framework.components.templates.NunjucksTemplateContainer";
NunjucksTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class SqrlTemplateContainer extends HTMLTemplateContainer {
    public constructor(name : string, template : string) {
        super(name, template);
    }

    public compile(html : string, ctx : Object) : string {
        let rendered : string = html;
        let Sqrl : Object = <Object>window["Sqrl"];
        if(Sqrl != null) {
            rendered = <string>HTMLTemplateContainer.invokeFunction(Sqrl, "render", html, ctx);
        }
        return rendered;
    }
}
SqrlTemplateContainer["__class"] = "framework.components.templates.SqrlTemplateContainer";
SqrlTemplateContainer["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];




