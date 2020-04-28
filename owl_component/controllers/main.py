# -*- coding: utf-8 -*-
from odoo import http


class OwlController(http.Controller):

    @http.route('/owl_component', type='http', auth="public", csrf=False)
    def owl_demo(self, **post):
        return http.request.render("owl_component.template_demo")
