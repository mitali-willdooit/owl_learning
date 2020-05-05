odoo.define('owl_component.owl_extract_component', function (require) {
    "use strict";

    require('web.dom_ready');
    if (!$('.my_owl_extract_component').length) {
        return Promise.reject("DOM doesn't contain '.my_owl_extract_component'");
    }

    const rpc = require('web.rpc');

    const { Component, hooks } = owl;
    const { xml } = owl.tags;
    const { whenReady } = owl.utils;

    const TASK_TEMPLATE = xml /* xml */`
        <div>
            <input type="checkbox" t-att-checked="props.partner.company_type == 'company'"/>
            <span><t t-esc="props.partner.name"/></span>
        </div>`;

    class Partner extends Component {
        static template = TASK_TEMPLATE;
        static props = ["partner"];
    }


    const APP_TEMPLATE = xml /* xml */`
        <div>
            <t t-foreach="partners" t-as="partner" t-key="partner.id">
                <Partner partner="partner"/>
            </t>
        </div>`;

    class PartnerExtractComponent extends Component {

        async willStart() {
            this.partnersdata = await this.getPartners();
        }

        async getPartners () {
            const partners = await rpc.query({route: "/get_partner_data"});
            return partners;
        }
        get partners ()  {
            return this.partnersdata;
        }

        static components = { Partner };
        static template = APP_TEMPLATE;

    }

    function setup() {
        const PartnerExtractComponentDemo = new PartnerExtractComponent();
        PartnerExtractComponentDemo.mount($('.my_owl_extract_component')[0]);
    }


    whenReady(setup);
});