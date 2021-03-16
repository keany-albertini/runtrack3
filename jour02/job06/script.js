
window.onload= function(){
    document.addEventListener('keydown', keylog);
    let record=[];
    let konami=[38,38,40,40,37,39,37,39];
    main=document.getElementsByTagName("main");
    body=document.getElementsByTagName("body");
    header=document.getElementsByTagName("header");
    footer=document.getElementsByTagName("footer");
    const length=konami.length - 1;
    function keylog(e){
        if(konami.includes(e.keyCode)){
            record.push(e.keyCode);
            record.forEach(function(value,key){
                console.log("key = " + key);
                if(record[key]!==konami[key]){
                    console.log("delete array");
                    record=[];
                }
                else if(key==length){
                    body[0].style.padding="0";
                    body[0].style.margin="0";
                    main[0].style.height="100vh";
                    main[0].style.display="flex";
                    main[0].style.flexDirection="column";
                    main[0].style.justifyContent="space-between";
                    main[0].style.alignItems="center";
                    main[0].style.backgroundColor="#E0ECEC";
                    header[0].style.width="100%";
                    footer[0].style.width="100%";
                    footer[0].style.textAlign="center";
                    footer[0].style.backgroundColor="#275FA0";
                    footer[0].style.color="white";
                    record=[];
                }
            })
            console.log("record = " + record);
        }
        else record=[];
    }
}