# -*- coding: utf-8 -*-
import scrapy


class ActiveSpider(scrapy.Spider):
    name = 'active'
    allowed_domains = ['http://mboard.pcaarrd.dost.gov.ph/forum/']
    start_urls = ['http://mboard.pcaarrd.dost.gov.ph/forum/search.php?action=show_recent']

    def parse(self, response):
        for active in response.css('div.main-item'):
            item = {
                    'topic': active.css('a::text').extract_first(),
                    'link': active.css('a::attr(href)').extract_first()                    
            }
            
            yield item
