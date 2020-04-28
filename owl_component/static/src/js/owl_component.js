odoo.define('owl_component.owl_component', function (require) {
    "use strict";

    require('web.dom_ready');
    if (!$('.my_owl_component').length) {
        return Promise.reject("DOM doesn't contain '.my_owl_component'");
    }

    const { Component, hooks } = owl;
    const { xml } = owl.tags;
    const { whenReady } = owl.utils;

    class OwlDemo extends Component {
         static template = xml`<div>Mitali</div>`;
    }

    function setup() {
        const OwlDemoInstance = new OwlDemo();
        OwlDemoInstance.mount($('.my_owl_component')[0]);
    }

    whenReady(setup);

    return OwlDemo;
});
