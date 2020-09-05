/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
var templates;
(function (templates) {
    class DoTTemplateContainer extends HTMLTemplateContainer {
        constructor(name, template) {
            super(name, template);
        }
        compile(html, ctx) {
            let rendered = html;
            let mustache = window["doT"];
            if (mustache != null) {
                let templ = HTMLTemplateContainer.invokeFunction(mustache, "template", html);
                rendered = templ.call(templ, ctx);
            }
            return rendered;
        }
    }
    templates.DoTTemplateContainer = DoTTemplateContainer;
    DoTTemplateContainer["__class"] = "framework.components.templates.DoTTemplateContainer";
    DoTTemplateContainer["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
})(templates || (templates = {}));
(function (templates) {
    class EJSTemplateContainer extends HTMLTemplateContainer {
        constructor(name, template) {
            super(name, template);
        }
        compile(html, ctx) {
            let rendered = html;
            let mustache = window["ejs"];
            if (mustache != null) {
                rendered = HTMLTemplateContainer.invokeFunction(mustache, "render", html, ctx);
            }
            return rendered;
        }
    }
    templates.EJSTemplateContainer = EJSTemplateContainer;
    EJSTemplateContainer["__class"] = "framework.components.templates.EJSTemplateContainer";
    EJSTemplateContainer["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
})(templates || (templates = {}));
(function (templates) {
    class MustacheTemplateContainer extends HTMLTemplateContainer {
        constructor(name, template) {
            super(name, template);
        }
        compile(html, ctx) {
            let rendered = html;
            let mustache = window["Mustache"];
            if (mustache != null) {
                rendered = HTMLTemplateContainer.invokeFunction(mustache, "render", html, ctx);
            }
            return rendered;
        }
    }
    templates.MustacheTemplateContainer = MustacheTemplateContainer;
    MustacheTemplateContainer["__class"] = "framework.components.templates.MustacheTemplateContainer";
    MustacheTemplateContainer["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
})(templates || (templates = {}));
(function (templates) {
    class NunjucksTemplateContainer extends HTMLTemplateContainer {
        constructor(name, template) {
            super(name, template);
        }
        /**
         *
         * @param {string} html
         * @param {Object} ctx
         * @return {string}
         */
        compile(html, ctx) {
            let rendered = html;
            let nunjucks = window["nunjucks"];
            if (nunjucks != null) {
                rendered = HTMLTemplateContainer.invokeFunction(nunjucks, "renderString", html, ctx);
            }
            return rendered;
        }
    }
    templates.NunjucksTemplateContainer = NunjucksTemplateContainer;
    NunjucksTemplateContainer["__class"] = "framework.components.templates.NunjucksTemplateContainer";
    NunjucksTemplateContainer["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
})(templates || (templates = {}));
