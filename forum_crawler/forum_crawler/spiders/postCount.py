# -*- coding: utf-8 -*-
import scrapy


class PostcountSpider(scrapy.Spider):
    name = 'postCount'
    allowed_domains = ['http://mboard.pcaarrd.dost.gov.ph/forum/']
    start_urls = ['http://mboard.pcaarrd.dost.gov.ph/forum/']

    def parse(self, response):
        for subcat in response.css('div.main-item'):
            forum = {
                    #'forum_link': subcat.css('a::attr(href)').extract_first(),
                    'sub_category': subcat.css('span::text').extract_first(),
                    #'no_topics': int(subcat.css('strong::text').extract()[0].replace(',', '')),
                    'no_posts': int(subcat.css('strong::text').extract()[1].replace(',', ''))
                    
            }
            
            yield forum
