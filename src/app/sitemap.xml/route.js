export async function GET() {

    const baseUrl="https://www.codewareit.in"
    
    const xml=`<?xml version="1.0" encoding="UTF-8"?>
    
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    </sitemap>
    
    <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    </sitemap>
    
    <sitemap>
    <loc>${baseUrl}/sitemap-students.xml</loc>
    </sitemap>
    
    <sitemap>
    <loc>${baseUrl}/sitemap-interns.xml</loc>
    </sitemap>
    
    </sitemapindex>`
    
    return new Response(xml,{
    headers:{"Content-Type":"application/xml"}
    })
    
    }