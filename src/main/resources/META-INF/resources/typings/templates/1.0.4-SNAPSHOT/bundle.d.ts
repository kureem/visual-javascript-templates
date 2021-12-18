declare class DoTTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    compile(html: string, ctx: Object): string;
}
declare class EJSTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    compile(html: string, ctx: Object): string;
}
declare class JSRenderTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    compile(html: string, ctx: Object): string;
}
declare class MustacheTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    compile(html: string, ctx: Object): string;
}
declare class NunjucksTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    /**
     *
     * @param {string} html
     * @param {Object} ctx
     * @return {string}
     */
    compile(html: string, ctx: Object): string;
}
declare class SqrlTemplateContainer extends HTMLTemplateContainer {
    constructor(name: string, template: string);
    compile(html: string, ctx: Object): string;
}
