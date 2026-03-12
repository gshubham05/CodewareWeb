export async function pingGoogle(){

    const sitemap="https://www.codewareit.in/sitemap.xml"
    
    await fetch(`https://www.google.com/ping?sitemap=${sitemap}`)
    
    }