    function initServerData(serverIp,serverPort){
        fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
        .then(response => response.json())
        .then(data => handleServerStatus(data));
  
        function handleServerStatus(data){
            if(data.status=='error'){
                console.log(data.error);
                return false;
            }
            const motd = document.getElementById("motd");
            motd.innerHTML = data.motd;

            const playerCounter = document.getElementById("player-count");
            playerCounter.innerHTML = data.players.now;
        } 
    }

    initServerData("minecraft.samson.org.au","25565");