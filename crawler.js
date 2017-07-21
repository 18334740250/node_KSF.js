//抓取网页的小爬虫
var http =require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';

function filterChapters(html){
	var $=cheerio.load(html);
	
	var chapters=$('.chapter');
	
	var courseData=[];
	
	chapters.each(function(item){
		var chapter=$(this);
		
		var chapterTitle=chapter.find('strong').text();
		
		var videos=chapter.find('.video').children('li');
		
		var chapterData={
			chapterTitle:chapterTitle,	
			videos:[]
		}
		
		videos.each(function(item){
			var video=$(this).find('.J-media-item');
			var videoTitle=video.text();
			var id=video.attr('href').split('video/')[1];
			
			chapterData.videos.push({
				title:videoTitle,
				id:id				
			})
			
		})
		courseData.push(chapterData);
	})
	return courseData;
}


function printcourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle=item.chapterTitle;
		console.log(chapterTitle+'\n');
		item.videos.forEach(function (item){
			var title=item.title;
			var id=item.id;
			console.log('['+id+']'+title+'\n');
			
		})
		
	})
	
	
	
}

http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
	var courseData=filterChapters(html);
	printcourseInfo(courseData);
	})
		}).on('error',function(){
	console.log('获取代码失败');
});
/*
  第1章 前言
                            
                                
                                    
                                        带你了解为什么要学习 Nodejs。
                                    
                                
                            
                        

[6687]
                                    
                                    1-1 Node.js基础-前言 
                                                                            (01:20)
                                                                        
                                                                        开始学习
                                                                        
                                

[6688]
                                    
                                    1-2 为什么学习Nodejs 
                                                                            (05:43)
                                                                        
                                                                        开始学习
                                                                        
                                


                            
                            第2章 安装 Nodejs
                            
                                
                                    
                                        学习在 windows、Linux 及 Mac 系统下安装 Nodejs。
                                    
                                
                            
                        

[6689]
                                    
                                    2-1 Node.js基础-课程简介 
                                                                            (01:19)
                                                                        
                                                                        开始学习
                                                                        
                                

[6690]
                                    
                                    2-2 Nodejs版本常识 
                                                                            (01:02)
                                                                        
                                                                        开始学习
                                                                        
                                

[6691]
                                    
                                    2-3 Windows下安装Nodejs 
                                                                            (04:43)
                                                                        
                                                                        开始学习
                                                                        
                                

[6692]
                                    
                                    2-4 Linux下安装Nodejs 
                                                                            (06:24)
                                                                        
                                                                        开始学习
                                                                        
                                

[6693]
                                    
                                    2-5 Mac下安装Nodejs 
                                                                            (03:55)
                                                                        
                                                                        开始学习
                                                                        
                                


                            
                            第3章 等不及了来尝鲜
                            
                                
                                    
                                        先来配一个Nodejs服务。
                                    
                                
                            
                        

[6694]
                                    
                                    3-1 Node.js基础-起一个web服务器 
                                                                            (05:14)
                                                                        
                                                                        开始学习
                                                                        
                                

[6695]
                                    
                                    3-2 Node.js基础-命令行中体验 
                                                                            (02:47)
                                                                        
                                                                        开始学习
                                                                        
                                


                            
                            第4章 模块与包管理工具
                            
                                
                                    
                                        学习 Nodejs 模块及管理工具。
                                    
                                
                            
                        

[6697]
                                    
                                    4-1 Node.js 的模块 与 Commonjs 规范 
                                                                            (03:44)
                                                                        
                                                                        开始学习
                                                                        
                                

[6700]
                                    
                                    4-2 模块的分类 
                                                                            (00:45)
                                                                        
                                                                        开始学习
                                                                        
                                

[6701]
                                    
                                    4-3 简单的Nodejs模块 
                                                                            (09:23)
                                                                        
                                                                        开始学习
                                                                        
                                


                            
                            第5章 横扫 Nodejs API
                            
                                
                                    
                                        Nodejs API任你学习。
                                    
                                
                            
                        

[6705]
                                    
                                    5-1 Node.js-不要陷入版本选择的深渊 
                                                                            (02:32)
                                                                        
                                                                        开始学习
                                                                        
                                

[6710]
                                    
                                    5-2 URL网址解析的好帮手 
                                                                            (10:30)
                                                                        
                                                                        开始学习
                                                                        
                                

[6711]
                                    
                                    5-3 QueryString参数处理小利器 
                                                                            (06:40)
                                                                        
                                                                        开始学习
                                                                        
                                

[6712]
                                    
                                    5-4 HTTP知识先填坑 
                                                                            (09:43)
                                                                        
                                                                        开始学习
                                                                        
                                

[6713]
                                    
                                    5-5 HTTP知识填坑之“以慕课网为例分析” 
                                                                            (10:13)
                                                                        
                                                                        开始学习
                                                                        
                                

[7557]
                                    
                                    5-6 HTTP 事件回调进阶 
                                                                            (17:51)
                                                                        
                                                                        开始学习
                                                                        
                                

[7558]
                                    
                                    5-7 HTTP 源码解读之先了解作用域、上下文 
                                                                            (20:50)
                                                                        
                                                                        开始学习
                                                                        
                                

[7963]
                                    
                                    5-8 HTTP 源码解读 
                                                                            (22:08)
                                                                        
                                                                        开始学习
                                                                        
                                

[7964]
                                    
                                    5-9 HTTP 性能测试 
                                                                            (09:15)
                                                                        
                                                                        开始学习
                                                                        
                                

[7965]
                                    
                                    5-10 HTTP 小爬虫 
                                                                            (17:33)
                                                                        
                                                                        开始学习
                                                                        
                                

[8525]
                                    
                                    5-11 事件模块小插曲 
                                                                            (15:15)
                                                                        
                                                                        开始学习
                                                                        
                                

[8837]
                                    
                                    5-12 Node.js：request方法 
                                                                            (17:56)
                                                                        
                                                                        开始学习
*/
