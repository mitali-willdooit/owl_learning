# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class OwlController(http.Controller):

    @http.route('/owl_component', type='http', auth="public", csrf=False)
    def owl_demo(self, **post):
        return http.request.render("owl_component.template_demo")

    @http.route('/get_partner_data', type='json', auth="public", csrf=False)
    def get_partner(self, **post):
        # return request.env['res.partner'].search([]).mapped('name')
        return request.env['res.partner'].search_read([], ['id', 'company_type', 'name'], limit=5)

