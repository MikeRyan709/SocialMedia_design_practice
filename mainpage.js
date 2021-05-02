function main() {
    const messageCol=document.getElementById("messageColumn");
    const btn=document.getElementById("btn"); 
    const con=document.getElementById("content"); 
    const id = document.getElementById("id");
    document.getElementById("logout").onclick = function () {
        location.href = "LoginPage.html";
    }
    btn.onclick=function(){  
        if(messageCol.value.trim()==""){
                    alert("Please type a message before hitting send!"); 
        return;
    }
        const messageDiv=document.createElement("div"); 
            messageDiv.setAttribute("id", "post-box");
        const messageCon = document.createElement("div");
            messageCon.setAttribute("id","message");
        const profileImg = document.createElement("img");
            profileImg.setAttribute("id", "profile-pic");
            profileImg.src = "discord-avatar-512.png";
        const username = document.createElement("div");
            username.setAttribute("id", "username" );
            username.textContent = "#Username";
        
        let posts_string = localStorage.getItem("posts");
        if(posts_string == null){
            current_posts = [];
        }else{
            current_posts = JSON.parse(posts_string);
        }
        current_posts.push(messageCol.value);
        localStorage.setItem("posts", JSON.stringify(current_posts));
        
        messageDiv.appendChild(messageCon);
        messageCon.innerHTML=messageCol.value;    
        messageDiv.appendChild(username);
        con.appendChild(messageDiv);
        messageDiv.appendChild(profileImg);
        messageCol.value="";
    }
        
    x =localStorage.getItem('posts');
        if (x != null) {
            posts_string = JSON.parse(x);
            var current_posts_array = posts_string;
            var current_posts_arrayLength = current_posts_array.length;
        
        for (var i = 0; i < current_posts_arrayLength; i++) {
        
            console.log(current_posts_array[i]);
        const messageDiv=document.createElement("div"); 
            messageDiv.setAttribute("id", "post-box");   
        const messageCon = document.createElement("div");
            messageCon.setAttribute("id","message");    
        const profileImg = document.createElement("img");
            profileImg.setAttribute("id", "profile-pic");
            profileImg.src = "discord-avatar-512.png";
        const username = document.createElement("div");
            username.setAttribute("id", "username" );
            username.textContent = "Username";
        
        messageDiv.appendChild(messageCon);
        messageCon.innerHTML=current_posts_array[i];   
        messageDiv.appendChild(username);
        con.appendChild(messageDiv);
        messageDiv.appendChild(profileImg);
        messageCol.value="";
        }

    }
}
window.onload = main;