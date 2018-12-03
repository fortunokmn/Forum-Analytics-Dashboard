# -*- coding: utf-8 -*-
import scrapy

from forum_crawler.items import ForumStatItem

class StatSpider(scrapy.Spider):
    name = 'stat'
    allowed_domains = ['http://mboard.pcaarrd.dost.gov.ph/forum/']
    start_urls = ['http://mboard.pcaarrd.dost.gov.ph/forum/']

    def parse(self, response):
        item = ForumStatItem()
        
        item['users']=response.xpath("//*[@class='st-users']/span/strong/text()").extract()[0]
        item['topics']=response.xpath("//*[@class='st-activity']/span/strong/text()").extract()[0]
        item['posts']=response.xpath("//*[@class='st-activity']/span/strong/text()").extract()[1]
        item['online_users']=int(response.xpath("//*[@class='gen-content']/h3/span/strong/text()").extract()[1])+int(response.xpath("//*[@class='gen-content']/h3/span/strong/text()").extract()[0])
        
        return item
