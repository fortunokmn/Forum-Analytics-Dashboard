# -*- coding: utf-8 -*-
import scrapy


class Toppost1Spider(scrapy.Spider):
    name = 'topPost1'

    start_urls = ['http://mboard.pcaarrd.dost.gov.ph/forum/']

    def parse(self, response):
        urls = response.css('h3.hn > a::attr(href)').extract()
        for url in urls:
        	url = response.urljoin(url)
        	yield scrapy.Request(url=url, callback=self.parse_details)

    def parse_details(self, response):

        for subcat in response.css('div.main-item'):
            post = {
                    'sub_category': response.css('span.crumblast::text').extract_first(),
                    'title': subcat.css('h3.hn > a::text').extract_first(),
                    'views' : subcat.css('li.info-views > strong::text').extract_first()
                    
            }

            yield post

        #follow pagination link
        pageNum = len(response.css('p.paging > a::attr(href)').extract())-1
        if pageNum != 0:
            next_page_url = response.css('p.paging > a::attr(href)').extract()[pageNum]
            if next_page_url:
                next_page_url = response.urljoin(next_page_url)
                yield scrapy.Request(url=next_page_url, callback=self.parse_details)
