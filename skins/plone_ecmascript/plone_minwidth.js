/* 
Plone sizing fix for broke IE min-width.
This script will make sure things float correctly with the
tableless layout, even in broken IE. All other browsers ignore
this script.
By Geir B�kholt - Plone Solutions http://www.plonesolutions.com
*/



/*@cc_on
@if (@_win32 && @_jscript_version>4)



var rulersCreated = 0
    
function fixwidth() {
    var el;
    el=document.getElementById('visual-portal-wrapper');
    if (!rulersCreated){
        ruler = document.createElement('div');
        ruler.style.width="58em";
        ruler.style.position="absolute";
        ruler.style.top="-10px"
        ruler.style.visibility="hidden";
        document.body.insertBefore(ruler, document.body.firstChild)
        
        ruler2 = document.createElement('div');
        ruler2.style.position="relative";
        ruler2.style.height="1px"
        ruler2.style.visibility="hidden";
        document.body.insertBefore(ruler2, document.body.firstChild)       
        
        rulersCreated=1
    }
    if (ruler2.offsetWidth < ruler.offsetWidth){
        el.style.width="58em"
    }else{
        el.style.width=ruler2.offsetWidth+'px'
    }
    //alert(""+ ruler2.offsetWidth + ":" + ruler.offsetWidth) //debugging info
}

window.attachEvent('onload', fixwidth);
window.attachEvent('onresize', fixwidth);




@end @*/