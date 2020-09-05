declare namespace templates {
    class MustacheTemplateContainer extends HTMLTemplateContainer {
        constructor(name: string, template: string);
        compile(html: string, ctx: Object): string;
    }
}
declare namespace templates {
    class NunjucksTemplateContainer extends HTMLTemplateContainer {
        constructor(name: string, template: string);
        /**
         *
         * @param {string} html
         * @param {Object} ctx
         * @return {string}
         */
        compile(html: string, ctx: Object): string;
    }
}
