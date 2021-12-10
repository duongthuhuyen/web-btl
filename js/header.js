function re_com(id, a, b){
    if(document.querySelector('#'+id).value==="" || document.querySelector('#'+id).value.length<6){
        document.querySelector('#'+id).style.backgroundColor = "#ffeaea";
        document.querySelector('#'+id).style.borderColor = "#ef0000";
        document.querySelectorAll(".goi_y")[a].style.display = "block";
        document.querySelectorAll(".goi_y")[b].style.display = "block";
    }else{
        document.querySelector('#'+id).style.backgroundColor = "#ffffff";
        document.querySelector('#'+id).style.borderColor = "#aaaaaa";
        document.querySelectorAll(".goi_y")[a].style.display = "none";
        document.querySelectorAll(".goi_y")[b].style.display = "none";
    }
}

document.querySelector("#dangky_").onclick = function (){
    document.querySelector(".login-nct").style.display = "none";
    document.querySelector(".register-nct").style.display = "block";
};

document.querySelector("div.p_rg_").onclick = function(){
    document.querySelector("div.register-nct").style.display = 'block';
}
document.querySelector(".light_rg").onclick = function(){
    document.querySelector("div.register-nct").style.display = 'none';
}
document.querySelector(".close_rg").onclick = function(){
    document.querySelector("div.register-nct").style.display = 'none';
}

document.querySelector("#dangnhap_").onclick = function(){
    document.querySelector(".register-nct").style.display = "none";
    document.querySelector(".login-nct").style.display = "block";
    
}

document.querySelector("div.p_lg").onclick = function(){
    document.querySelector("div.login-nct").style.display = 'block';
}
document.querySelector(".light_").onclick = function(){
    document.querySelector("div.login-nct").style.display = 'none';
}
document.querySelector(".close_").onclick = function(){
    document.querySelector("div.login-nct").style.display = 'none';
}
