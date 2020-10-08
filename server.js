const Express = require("express");
var http = require("http");
var https = require("https");
const WebSocket = require("ws");
const app = Express();
app.get("/specialurlshahaha-" + process.env.passwd, (req, res) => {
  res.send(
    `<a href="//pyrite-checker-nose.glitch.me/rlke-` +
      process.env.passwd +
      `">Simple Canvas Roguelike</a><br>\n<a href="//pyrite-checker-nose.glitch.me/plat-` +
      process.env.passwd +
      `">Simple Canvas Platformer</a><br>\n<a href="//pyrite-checker-nose.glitch.me/agus-` +
      process.env.passwd +
      `">HTML5 Among Us Clone</a><br>`
  );
  res.end();
});
app.get("/plat-" + process.env.passwd, (req, res) => {
  res.send(
    `<!DOCTYPE html>\n<html>\n  <head>\n    <title>\n      Simple Canvas Platformer\n    </title>\n    <script>\n    parsemap=e=>{\n      if (e[0]=="w") {\n        return ["yellow",e[1],e[2]]\n      } else if (e[0]=="e") {\n        return ["red",e[1],e[2]]\n      } else if (e[0]==" ") {\n        return ["blue",e[1],e[2]]\n      } else if (e[0]=="l") {\n        return ["purple",e[1],e[2]]\n      } else if (e[0]=="#") {\n        return ["notarealcolor",e[1],e[2]]\n      }\n    }\n    setXY=()=>{\n      x=1;\n      y=1;\n      g=mapparse();\n      for(i=0;i<g.length;i++){\n        if(g[i][0]=="notarealcolor"){\n          x=g[i][1];\n          y=g[i][2];\n        }\n      }\n    }\n    mapparse=()=>{\n      p=[];\n      r=[];\n      extrax=0;\n      extray=0;\n      for(i=0;i<map[level].length;i++){\n        r.push(map[level][i].split(""));\n      }\n      q=rotate(r);\n      q[0].length>q.length&&q[0].length-q.length>0&&(extrax=q[0].length-q.length);\n      q[0].length<q.length&&q.length-q[0].length>0&&(extray=q.length-q[0].length);\n      a=1;\n      while(a>0){\n        p=[];\n        for(i=0;i<q.length;i++){\n          for(j=0;j<q[i].length;j++){\n            a=q[i][j];\n            p.push(parsemap([a,/*map[level].length-1-*/i-extrax/*/2*/,(q.length-1-j)-extray/**2*/]));\n          }\n        }\n        for(i=0;i<p.length;i++){\n          if(p[i][1]<0){\n            extrax--;\n            a=2;\n            break;\n          }\n          if(p[i][2]<0){\n            extray--;\n            a=2;\n            break;\n          }\n        }\n        a--;\n      }\n      /*dx=0\n      dy=0\n      for(i=0;i<p.length;i++){\n          if(p[i][1]>dx||dx==0){dx=p[i][1]}\n          if(p[i][2]>dy||dy==0){dy=p[i][2]}\n      }\n      rx=0;\n      ry=0;\n      for(i=0;i<p.length;i++){\n          rx++;\n          if(rx>dx){\n              rx=0;\n              ry++;\n          }\n          p[i][1]=rx;\n          p[i][2]=ry;\n      }*/\n      return p;\n    }\n    /*rotate=matrix=>{\n      origMatrix = matrix.slice();\n      for(i=0; i < matrix.length; i++) {\n          var row = matrix[i].map(function(x, j) {\n              var k = (matrix.length - 1) - j;\n              return origMatrix[k][i];\n          });\n          matrix[i] = row;\n      }\n      return matrix;\n    };*/\n    function rotate(matrix) {\n      let result = [];\n      for(let i = 0; i < matrix[0].length; i++) {\n          let row = matrix.map(e => e[i]).reverse();\n          result.push(row);\n      }\n      return result;\n    };\n      window.onload=()=>{\n        level=0;\n        map=\n        [\n          [\n            "wwww",\n            "w  w",\n            "w# e",\n            "wwww"\n          ],\n          [\n            "wwwwwwww",\n            "w      e",\n            "w# w   w",\n            "wwwllwww"\n          ],\n          [\n            "wwwwwwwwwwww",\n            "w          e",\n            "w# w       w",\n            "wwwllwwwwwww"\n          ],\n          [\n            "wwwwwwwwwwwwwwwww",\n            "w               e",\n            "w# w        w   w",\n            "wwwllwwwlwwwllwww"\n          ],\n          [\n            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",\n            "w                                           e",\n            "w# w        w                               w",\n            "wwwllwwwlwwwllwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"\n          ],\n          [\n            "wwwwwwwwwwwwwwwww",\n            "w               e",\n            "w# w        w   w",\n            "wwwllwwwlwwwllwww"\n          ],\n          [\n            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",\n            "w                                   w",\n            "w w w  w  w w   ww  w ww    w www w w",\n            "w  w  w w w w   w w w w w   w  w  w w",\n            "w  w  w w w w   w w w w w   w  w  w w",\n            "w  w  w w w w   w w w w w   w  w    w",\n            "w  w   w   w    ww  w ww    w  w  w w",\n            "w#                                  e",\n            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"\n          ],\n          [\n            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",\n            "w#                                  w",\n            "w w w  w  w w   ww  w ww    w www w w",\n            "w  w  w w w w   w w w w w   w  w  w w",\n            "w  w  w w w w   w w w w w   w  w  w w",\n            "w  w  w w w w   w w w w w   w  w    w",\n            "w  w   w   w    ww  w ww    w  w  w w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   w",\n            "w                                   e",\n            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"\n          ]\n        ]\n        can = document.querySelector("#canvas");\n        ctx=can.getContext("2d");\n        ctx.fillText("A Simple Canvas Platformer",190,180);\n        ctx.fillText("By: Charles Wolfe",210,220);\n        ctx.imageSmoothingQuality="high";\n        endxa=[];\n        endx=0;\n        g=mapparse();\n        for(i=0;i<g.length;i++){\n          if(g[i][1]>endx||endx==0){\n            endx=g[i][1];\n          }\n        }\n        endxa.push(endx);\n        setTimeout(()=>{\n          z=16;\n          crect(0,0,512,512);\n          keysdown=[];\n          setXY()\n          render();\n          setInterval(()=>{\n            if(!platform(y+1)){\n              y+=0.5\n            }\n            if(y>map[level].length){\n              setXY();\n            }\n            g=mapparse();\n            for(i=0;i<g.length;i++){\n              if(g[i][0]=="purple"&&g[i][1]==x&&g[i][2]==y){\n                setXY();\n              }\n            }\n            if(keysdown.includes("up")&&platform(y+1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y-1&&g[i][0]!="yellow"){\n                  y-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("left")){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x-1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("right")){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x+1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x+=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("w")&&platform(y+1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y-1&&g[i][0]!="yellow"){\n                  y-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("a")){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x-1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("d")){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x+1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x+=1;\n                  break;\n                }\n              }\n            }\n            if(platform(y+1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][0]=="red"&&g[i][1]==x&&g[i][2]==y){\n                  if(map.hasOwnProperty(level+1)){\n                    level+=1;\n                    setXY();\n                    g=mapparse();\n                    for(i=0;i<g.length;i++){\n                      if(g[i][1]>endx||endx==0){\n                        endx=g[i][1];\n                      }\n                    }\n                    endxa.push(endx)\n                  }else{\n                    alert("You win!");\n                    keysdown=[];\n                    level=0;\n                    setXY();\n                  }\n                  break;\n                }\n              }\n            }\n            render();\n          },100);\n          document.onkeydown=e=>{\n            f=e.key.toLowerCase().replace(/arrow/g,"");\n            if(!keysdown.includes(f))\n              keysdown.push(f)\n          }\n          document.onkeyup=e=>{\n            keysdown.splice(keysdown.indexOf(e.key.toLowerCase().replace(/arrow/g,"")),1)\n          }\n        },5120);\n      }\n      setColor=c=>{\n        ctx.fillStyle=c;\n      }\n      frect=(x,y,w,h)=>{\n        ctx.fillRect(x,y,w,h);\n      }\n      srect=(x,y,w,h)=>{\n        ctx.strokeRect(x,y,w,h);\n      }\n      crect=(x,y,w,h)=>{\n        /*c=ctx.fillStyle;\n        setColor("blue");\n        frect(x,y,w,h);\n        setColor(c);*/\n        ctx.clearRect(x,y,w,h)\n      }\n      render=()=>{\n        crect(0,0,512,512);\n        g=mapparse();\n        for(i=0;i<g.length;i++){\n          jk=[endxa[level]*z>512&&x*z>256,g[i][1]*z>=x-256&&g[i][1]<=x+256,map[level].length*z>512&&y*z>256,g[i][2]*z>=y-256&&g[i][2]<=y+256]\n          color=g[i][0];\n          x1=0;\n          y1=0;\n          if(jk[0]){\n            if(jk[1]){\n              x1=(g[i][1]-(x-16))*z;\n            }\n          } else {\n            x1=g[i][1]*z;\n          }\n          if(jk[2]){\n            if(jk[3]){\n              y1=(g[i][2]-(y-16))*z;\n            }\n          } else {\n            y1=g[i][2]*z;\n          }\n          setColor(color);\n          if(color=="notarealcolor"){\n            setColor("blue");\n          }\n          frect(x1,y1,z,z);\n        }\n        if(jk[2]){\n          if(jk[0]){\n            setColor("green");\n            frect(256,256,z,z);\n          } else {\n            setColor("green");\n            frect(x*z,256,z,z);\n          }\n        }else{\n          if(jk[0]){\n            setColor("green");\n            frect(256,y*z,z,z);\n          } else {\n            setColor("green");\n            frect(x*z,y*z,z,z);\n          }\n        }\n      }\n      platform=y2=>{\n        g=mapparse();\n        b=!1;\n        kl=!1;\n        for(i=0;i<g.length;i++){\n          if(g[i][1]==x&&g[i][2]==y&&g[i][0]!="yellow"){\n            kl=!0;\n          }\n          if(g[i][1]==x&&g[i][2]==y2&&g[i][0]=="yellow"){\n            b=!0;\n          }\n          if(b&&kl){\n            return b;\n          }\n        }\n        return !1;\n      }\n    </script>\n  </head>\n  <body style="margin:0px;padding:0px">\n    <canvas id="canvas" width=512 height=512>\n      Sorry, canvas isn"t supported in this browser. You must use a modern browser, such as, Chrome, Chromium, Opera, Firefox, etc. just to name a few.\n    </canvas>\n  </body>\n</html>`
  );
  res.end();
});
app.get("/rlke-" + process.env.passwd, (req, res) => {
  res.send(
    `<!DOCTYPE html>\n<html>\n  <head>\n    <title>\n      Simple Canvas Roguelike\n    </title>\n    <script>\n      dmgmtp=2.5;\n      dmgmtpinc=0.25;\n      mobshealth=[];\n      urhealth=100;\n      urexp=0;\n      parsemap=e=>{\n        if (e[0]=="w") {\n          return ["yellow",e[1],e[2]]\n        } else if (e[0]=="e") {\n          return ["red",e[1],e[2]]\n        } else if (e[0]==" ") {\n          return ["blue",e[1],e[2]]\n        } else if (e[0]=="m") {\n          return ["notarealcolor2",e[1],e[2]]\n        } else if (e[0]=="#") {\n          return ["notarealcolor",e[1],e[2]]\n        } else if (e[0]=="c") {\n          return ["orange",e[1],e[2]]\n        }\n      }\n      setXY=()=>{\n        chestsgottenx=[]\n        chestsgotteny=[]\n        urhealth=100;\n        x=1;\n        y=1;\n        mobshealth=[]\n        g=mapparse();\n        oldx=0;\n        oldy=0;\n        maxx=0;\n        maxy=0;\n        for(i=0;i<g.length;i++){\n          if(g[i][1]>maxx||maxx==0){\n            maxx=g[i][1]\n          }\n          if(g[i][2]>maxy||maxy==0){\n            maxy=g[i][2]\n          }\n        }\n        for(i=0;i<maxx+1;i++){\n          b=[]\n          for(j=0;j<maxy+1;j++){\n            b.push(0);\n          }\n          mobshealth.push(b)\n        }\n        for(i=0;i<g.length;i++){\n          oldx=g[i][1];\n          oldy=g[i][2]\n          if(g[i][0]=="notarealcolor"){\n            x=g[i][1];\n            y=g[i][2];\n          }\n          if(g[i][0]=="notarealcolor2"){\n            mobshealth[g[i][1]][g[i][2]]=5+(Math.round(Math.random()*5)*(map.length/level));\n          } else {\n            mobshealth[g[i][1]][g[i][2]]=0;\n          }\n        }\n      }\n      mapparse=()=>{\n        p=[];\n        r=[];\n        extrax=0;\n        extray=0;\n        for(i=0;i<map[level].length;i++){\n          r.push(map[level][i].split(""));\n        }\n        q=rotate(r);\n        q[0].length>q.length&&q[0].length-q.length>0&&(extrax=q[0].length-q.length);\n        q[0].length<q.length&&q.length-q[0].length>0&&(extray=q.length-q[0].length);\n        a=1;\n        while(a>0){\n          p=[];\n          for(i=0;i<q.length;i++){\n            for(j=0;j<q[i].length;j++){\n              a=q[i][j];\n              p.push(parsemap([a,/*map[level].length-1-*/i-extrax/*/2*/,(q.length-1-j)-extray/**2*/]));\n            }\n          }\n          for(i=0;i<p.length;i++){\n            if(p[i][1]<0){\n              extrax--;\n              a=2;\n              break;\n            }\n            if(p[i][2]<0){\n              extray--;\n              a=2;\n              break;\n            }\n          }\n          a--;\n        }\n        return p;\n      }\n      function rotate(matrix) {\n        let result = [];\n        for(let i = 0; i < matrix[0].length; i++) {\n            let row = matrix.map(e => e[i]).reverse();\n            result.push(row);\n        }\n        return result;\n      };\n      window.onload=()=>{\n        level=0;\n        map=\n        [\n          [\n            "wwww",\n            "w  w",\n            "w# e",\n            "wwww"\n          ],\n          [\n            "wwwwww",\n            "w m mw",\n            "wm m w",\n            "w c  w",\n            "w# m e",\n            "wwwwww",\n          ],\n          [\n            "wwwwew",\n            "w m mw",\n            "wm m w",\n            "w c mw",\n            "w# m w",\n            "wwwwww",\n          ]\n        ]\n        can = document.querySelector("#canvas");\n        ctx=can.getContext("2d");\n        ctx.fillText("A Simple Canvas Roguelike",190,180);\n        ctx.fillText("By: Charles Wolfe",210,220);\n        ctx.imageSmoothingQuality="high";\n        endxa=[];\n        endx=0;\n        g=mapparse();\n        for(i=0;i<g.length;i++){\n          if(g[i][1]>endx||endx==0){\n            endx=g[i][1];\n          }\n        }\n        endxa.push(endx);\n        setTimeout(()=>{\n          z=16;\n          crect(0,0,512,512);\n          keysdown=[];\n          setXY()\n          render();\n          setInterval(()=>{\n            document.querySelector('#hp').innerHTML=urhealth;\n            document.querySelector('#xp').innerHTML=urexp;\n            if(y>map[level].length){\n              setXY();\n            }\n            if(keysdown.includes("s")&&mob(x,y+1)){\n              mobshealth[x][y+1]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("w")&&mob(x,y-1)){\n              mobshealth[x][y-1]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("up")&&mob(x,y-1)){\n              mobshealth[x][y-1]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("down")&&mob(x,y+1)){\n              mobshealth[x][y+1]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("d")&&mob(x+1,y)){\n              mobshealth[x+1][y]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("right")&&mob(x+1,y)){\n              mobshealth[x+1][y]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("a")&&mob(x-1,y)){\n              mobshealth[x-1][y]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("left")&&mob(x-1,y)){\n              mobshealth[x-1][y]-=Math.floor(Math.random()*5)*Math.floor(Math.random()*dmgmtp)\n              urhealth-=Math.floor(Math.random()*5)\n              urexp++;\n            }\n            if(keysdown.includes("up")&&!mob(x,y-1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y-1&&g[i][0]!="yellow"){\n                  y-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("down")&&!mob(x,y+1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y+1&&g[i][0]!="yellow"){\n                  y+=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("left")&&!mob(x-1,y)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x-1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("right")&&!mob(x+1,y)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x+1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x+=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("w")&&!mob(x,y-1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y-1&&g[i][0]!="yellow"){\n                  y-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("s")&&!mob(x,y+1)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x&&g[i][2]==y+1&&g[i][0]!="yellow"){\n                  y+=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("a")&&!mob(x-1,y)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x-1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x-=1;\n                  break;\n                }\n              }\n            }\n            if(keysdown.includes("d")&&!mob(x+1,y)){\n              g=mapparse();\n              for(i=0;i<g.length;i++){\n                if(g[i][1]==x+1&&g[i][2]==y&&g[i][0]!="yellow"){\n                  x+=1;\n                  break;\n                }\n              }\n            }\n            g=mapparse();\n            for(i=0;i<g.length;i++){\n              if(g[i][0]=="red"&&g[i][1]==x&&g[i][2]==y){\n                if(map.hasOwnProperty(level+1)){\n                  level+=1;\n                  setXY();\n                  g=mapparse();\n                  for(i=0;i<g.length;i++){\n                    if(g[i][1]>endx||endx==0){\n                      endx=g[i][1];\n                    }\n                  }\n                  endxa.push(endx)\n                }else{\n                  alert("You win!");\n                  keysdown=[];\n                  level=0;\n                  dmgmtp=2.5;\n                  dmgmtpinc=0.25;\n                  mobshealth=[];\n                  urhealth=100;\n                  urexp=0;\n                  setXY();\n                }\n                break;\n              }\n              if(urhealth<=0){\n                level=0;\n                dmgmtp=2.5;\n                dmgmtpinc=0.25;\n                mobshealth=[];\n                urhealth=100;\n                urexp=0;\n                setXY();\n              }\n              if(g[i][0]=="orange"&&g[i][1]==x&&g[i][2]==y){\n                dmgmtp+=dmgmtpinc;\n                dmgmtpinc*=2;\n                chestsgottenx.push(x)\n                chestsgotteny.push(y)\n              }\n            }\n            render();\n          },100);\n          document.onkeydown=e=>{\n            f=e.key.toLowerCase().replace(/arrow/g,"");\n            if(!keysdown.includes(f))\n              keysdown.push(f)\n          }\n          document.onkeyup=e=>{\n            keysdown.splice(keysdown.indexOf(e.key.toLowerCase().replace(/arrow/g,"")),1)\n          }\n        },5120);\n      }\n      setColor=c=>{\n        ctx.fillStyle=c;\n      }\n      frect=(x,y,w,h)=>{\n        ctx.fillRect(x,y,w,h);\n      }\n      srect=(x,y,w,h)=>{\n        ctx.strokeRect(x,y,w,h);\n      }\n      crect=(x,y,w,h)=>{\n        /*c=ctx.fillStyle;\n        setColor("blue");\n        frect(x,y,w,h);\n        setColor(c);*/\n        ctx.clearRect(x,y,w,h)\n      }\n      render=()=>{\n        crect(0,0,512,512);\n        g=mapparse();\n        for(i=0;i<g.length;i++){\n          jk=[endxa[level]*z>512&&x*z>256,g[i][1]*z>=x-256&&g[i][1]<=x+256,map[level].length*z>512&&y*z>256,g[i][2]*z>=y-256&&g[i][2]<=y+256]\n          color=g[i][0];\n          x1=0;\n          y1=0;\n          if(jk[0]){\n            if(jk[1]){\n              x1=(g[i][1]-(x-16))*z;\n            }\n          } else {\n            x1=g[i][1]*z;\n          }\n          if(jk[2]){\n            if(jk[3]){\n              y1=(g[i][2]-(y-16))*z;\n            }\n          } else {\n            y1=g[i][2]*z;\n          }\n          r=3\n          if(x1/z>x-r&&x1/z<x+r&&y1/z>y-r&&y1/z<y+r){\n            setColor(color);\n            if(color=="notarealcolor"){\n              setColor("blue");\n            }\n            if(color=='notarealcolor2'&&mob(g[i][1],g[i][2])){\n              setColor("purple");\n            } else if(color=='orange'&&!chestsgottenx.includes(g[i][1])&&!chestsgotteny.includes(g[i][2])){\n              setColor('orange')\n            } else if(color=='notarealcolor2'||color=="orange"){\n              setColor('blue')\n            }\n          } else {\n            setColor('#afafaf')\n          }\n          frect(x1,y1,z,z);\n        }\n        if(jk[2]){\n          if(jk[0]){\n            setColor("green");\n            frect(256,256,z,z);\n          } else {\n            setColor("green");\n            frect(x*z,256,z,z);\n          }\n        }else{\n          if(jk[0]){\n            setColor("green");\n            frect(256,y*z,z,z);\n          } else {\n            setColor("green");\n            frect(x*z,y*z,z,z);\n          }\n        }\n      }\n      mob=(x,y)=>{\n        return mobshealth[x][y]>0;\n      }\n    </script>\n  </head>\n  <body style="margin:0px;padding:0px">\n    <canvas id="canvas" width=512 height=512>\n      Sorry, canvas isn"t supported in this browser. You must use a modern browser, such as, Chrome, Chromium, Opera, Firefox, etc. just to name a few.\n    </canvas><br>\n    <span>Your Health: </span><span id=hp>100</span><span>HP</span><br>\n    <span>Your Experience: </span><span id=xp style="text-align:center">0</span><span>EXP</span><br>\n    <span style="font-size:20px;font-weight:bold">SHOP</span><br>\n    <button onclick="if(urexp>=10){dmgmtp+=dmgmtpinc;dmgmtpinc*=2;urexp-=10}">Better Weapon</button>\n  </body>\n</html>`
  );
  res.end();
});
app.get("/agus-" + process.env.passwd, (req, res) => {
  res.send(
    `<!DOCTYPE html>\n<html>\n  <head>\n    <title>\n      HTML5 Among Us\n    </title>\n    <script>\n      window.onload=()=>{\n        x=4;\n        z=4;\n        map="                              N                              N  ##########################  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  #gggggggggggggggggggggggg#  N  ##########################  N                              N                              ";\n        y=4;\n        deads=[]\n        canvas = document.querySelector('canvas');\n        context = canvas.getContext('2d');\n        context.imageSmoothingQuality="high"\n        url = 'wss://pyrite-checker-nose.glitch.me/ws'\n        cls=[]\n        connection = new WebSocket(url)\n        j=0;\n        trg=true;\n        id=0;\n        poses=[];\n        connection.onopen = () => {\n        }\n        \n        document.onkeypress=e=>{\n          key=e.key.toLowerCase().replace('arrow','');\n          maps=map.split('N');\n          for(tre=0;tre<maps.length;tre++){\n            mapp=maps[tre];\n            maph=mapp.split('');\n            for(j=0;j<maph.length;j++){\n              mapg=maph[j];\n              if(mapg!='g'){\n                               if(key=='w'){\n                                 //up\n                                 if(j==x&&tre==y-1)return;\n                               }\n                               if(key=='s'){\n                                 //down\n                                 if(j==x&&tre==y+1)return;\n                               }\n                               if(key=='a'){\n                                 //left\n                                 if(j==x-1&&tre==y)return;\n                               }\n                               if(key=='d'){\n                                 //right\n                                 if(j==x+1&&tre==y)return;\n                               }\n              }\n            }\n          }\n          if(key=='w'){\n            //up\n            y--;\n          }\n          if(key=='s'){\n            //down\n            y++;\n          }\n          if(key=='a'){\n            //left\n            x--;\n          }\n          if(key=='d'){\n            //right\n            x++;\n          }\n          if(key=='k'){\n            //kill\n            poses.forEach(e=>{\n              if(e.p==x+','+y&&impostor==id&&e.e!=id){\n                               connection.send('death:'+e.e)\n              }\n            });\n          }\n        }\n        setInterval(()=>{\n          dx=3;\n          dy=3;\n          context.fillStyle='white';\n          context.fillRect(0,0,canvas.width,canvas.height);\n          for(tre=0;tre<poses.length;tre++){\n            context.fillStyle=clrs[poses[tre].e];\n            xy=poses[tre].p.split(',');\n            context.fillRect(xy[0]*z,xy[1]*z,z,z);\n          }\n          gtr=map.split('N');\n          gpr=[];\n          gtr.forEach(e=>{\n            gpr.push(e.split(''));\n          });\n          /*for(tre=0;tre<gpr[0].length;tre++){\n            for(j=0;j<gpr.length;j++){\n              gpr=raycast(x,y,tre,j,gpr,'a');\n            }\n          }*/\n          gpr=gpr.map(e=>{\n            return e.join('');\n          });\n          for(tre=0;tre<gpr.length;tre++){\n            mapp=gpr[tre];\n            maph=mapp.split('');\n            for(j=0;j<maph.length;j++){\n              mapg=maph[j];\n              xz=j*z;\n              yz=tre*z;\n              if (j<x-dx||j>x+dx||tre<y-dy||tre>y+dy) {\n                               context.fillStyle="#dedede";\n              } else if(mapg=='#') {\n                               context.fillStyle="#666666";\n              } else if(mapg=='w') {\n                               context.fillStyle="#333333";\n              } else if(mapg=='g') {\n                               context.fillStyle="#000000";\n                               for(r=0;r<poses.length;r++){\n                                 xy=poses[r].p.split(',');\n                                 if(xy[0]==j&&xy[1]==tre){\n                                   context.fillStyle=clrs[poses[r].e];\n                                   context.fillRect(xy[0]*z,xy[1]*z,z,z);\n                                 }\n                               }\n              } else {\n                               if(Math.random()<0.001){\n                                 context.fillStyle="#ffffff";\n                               }else{\n                                 context.fillStyle="#444444";\n                               }\n              }\n              context.fillRect(xz,yz,z,z)\n            }\n          }\n          for(u=0;u<deads.length;u++){\n            context.fillStyle="yellow";\n            xy=deads[u].split(',');\n            j=xy[0];\n            tre=xy[1]\n            !(j<x-dx||j>x+dx||tre<y-dy||tre>y+dy)&&(context.fillRect(xy[0]*z,xy[1]*z,z,z));\n            \n          }\n        },100)\n        /*raycast=(x1,y1,x2,y2,map,repment)=>{\n          //y1+=1;\n          //console.log(x2,y2,x2,y2)\n          slope=((y1-y2)/(x1-x2));\n          mapb=map;\n          x3=x1;\n          y3=(slope*(x3-x1))+y1;\n          a=false;\n          yrt=(x3<=x2&&y3<=y2)\n          ybt=(x3>=x2&&y3>=y2)\n          if(yrt){\n            while((x3<=x2&&y3<=y2)){\n              if(a){\n                               mapb[Math.floor(y3)][x3]=repment;\n                               Math.ceil(y3)!=y3&&(mapb[x3][Math.ceil(y3)]=repment);\n              } else {\n                               if(mapb[Math.floor(y3)][x3]!='g'&&mapb[Math.floor(y3)][x3]!=' '){\n                                 a=true;\n                               }\n              }\n              x3++;\n              y3=(slope*(x3-x1))+y1;\n            }\n          } else if(ybt) {\n            while((x3>=x2&&y3>=y2&&y3&&x3>0&&y3>0&&x3<=14&&y3<=14)){\n              if(a){\n                               mapb[Math.floor(y3)][x3]=repment;\n                               Math.ceil(y3)!=y3&&(mapb[x3][Math.ceil(y3)]=repment);\n              } else {\n                               if(mapb[Math.floor(y3)][x3]!='g'&&mapb[Math.floor(y3)][x3]!=' '){\n                                 a=true;\n                               }\n              }\n              x3--;\n              y3=y1-(slope*(x3-x1));\n            }\n          }\n          return mapb;\n        }*/\n        \n        g=setInterval(()=>{},10000);\n        connection.onmessage = (e) => {\n          if(e.data.startsWith('imp:')){\n            impostor=e.data.split('imp:')[1];\n            if(trg){\n              if(impostor==id){\n                               alert("Impostor!");\n              } else {\n                               alert("Innocent!");\n              }\n              trg=false;\n            }\n          }\n          if(e.data=='stg'){\n            clearInterval(g);\n            g=setInterval(()=>{\n              connection.send('pos:'+x+','+y);\n            },100);\n          }\n          if(e.data.startsWith('pos:')){\n            poss=e.data.split('pos:')[1];\n            pos=poss.split(';');\n            gt=0\n            o=()=>{\n              if(gt==clrs.length){\n                               poses=[];\n              }\n              for(X=0;X<poses.length;X++){\n                               if(poses[X].e==pos[1]){\n                                 poses.splice(X,1);\n                               }\n              }\n              for(tre=0;tre<clrs.length;tre++){\n                               poses.push({p:pos[0],e:pos[1]});\n              }\n            }\n            gr=x=>{\n              if(poses[x]&&x==poses[x].p&&gt<clrs.length){\n                               gt++;\n              }\n              if (gt<clrs.length) {\n                               setTimeout(o,0);\n              } else {\n                               setTimeout(gr,0,x+1);\n              }\n            };\n            gr(0);\n          }\n          if(e.data.startsWith('clr:')){\n            clr=e.data.split('clr:')[1];\n            clrs=clr.split(',');\n            cls=[];\n            for(tre=0;tre<clrs.length;tre++){\n              cls.push(clrs[tre]);\n            }\n          }\n          if(e.data.startsWith('id:')){\n            id=e.data.split('id:')[1];\nconsole.log(id)\n          }\n          if(e.data.startsWith('chat:')){\n            document.querySelector('#chat2').innerHTML+='<br>'+e.data.split('chat:')[1];\n          }\n          if(e.data=='votes'){\n            document.querySelectorAll('[disabled]').forEach(e=>{e.disabled=true})\n          }\n          if(e.data=='rep'){\n            document.querySelectorAll('[disabled]').forEach(e=>{e.disabled=false})\n          }\n          if(e.data.startsWith('ips:')){\n            can=document.querySelector('#players');\n            ctx=can.getContext('2d');\n            ctx.fillStyle='white';\n            ctx.fillRect(0,0,can.width,can.height);\n            g=e.data.split('ips:')[1];\n            d=g.split(',');\n            ey=10;\n            for(tre=0;tre<d.length;tre++){\n              ctx.fillStyle=cls[tre];\n              ctx.fillText(d[tre],30,ey);\n              ey+=10;\n            }\n          }\n          if(e.data=='death:'+id){\n            document.documentElement.innerHTML='<title>HTML5 Among Us</title><span style="color:red">You died!</span>';\n            setTimeout(()=>{connection.close()},1000);\n          } else if(e.data.startsWith('death:')){\n            dead=e.data.split('death:')[1];\n            poses.forEach(e=>{\n              if(e.e==dead&&!deads.includes(e.p)){\n                               deads.push(e.p);\n              }\n            });\n          }\n          if(e.data=='win'){\n            document.querySelector('html').innerHTML='<title>HTML5 Among Us</title><span style="color:green">You won!</span>';\n            setTimeout(()=>{connection.close()},1000);\n          }\n          tre=0;\n        }\n      }\n    </script>\n  </head>\n  <body>\n    <canvas width=512 height=512>\n      Sorry, your browser doesn't support canvas... Maybe try a modern browser?\n    </canvas><br>\n    <canvas id=players width=512 height=64></canvas><br>\n    Voting:<br>\n    <button disabled onclick="connection.send('vote:3')">Vote 3 Out</button><button disabled onclick="connection.send('vote:2')">Vote 2 Out</button><button disabled onclick="connection.send('vote:1')">Vote 1 Out</button><button disabled onclick="connection.send('vote:0')">Vote 0 Out</button><button disabled onclick="connection.send('vote:s')">Skip</button><br>\n    Chat:<br>\n    <textarea id=chat></textarea><br>\n    <div id=chat2>Chat:</div><br>\n    <button disabled onclick="connection.send('chat:'+document.querySelector('#chat').value)">Send!</button><br>\n    <button onclick="connection.send('rep');">I found a dead body!</button>\n  </body>\n</html>`
  );
  res.end();
});
var id = [];
var tre = false;
var wss = new WebSocket.Server({ server: app, path: "/ws" });
var imp = 0;
app.get("/start-" + process.env.passwd, (req, res) => {
  res.end("The game has been started!");
  imp = Math.floor(Math.random() * wss.clients.length);
  wss.clients.forEach(client => {
    console.log(client.id);
    client.send("imp:" + imp);
    client.send("stg");
    console.log(client.id);
  });
});
wss.on("connection", (ws, req) => {
  if (wss.clients.size > 4) {
    ws.terminate();
    return;
  }
  ws.id = id.length;
  console.log(ws.id);
  ws.dead = false;
  var clrs = [
    "cyan",
    "magenta",
    "green",
    "red",
    "purple",
    "pink",
    "blue",
    "orange"
  ];
  id.push(ws.id);
  ws.send("id:" + ws.id);
  var clr = clrs[0];
  for (let tre = 1; tre < wss.clients.length; tre++) {
    clr += ",";
    clr += clrs[tre];
  }
  console.log(clr);
  wss.clients.forEach(client => {
    client.send("clr:" + clr);
  });
  wss.clients.forEach(client => {
    client.send("ips:" + id.join(","));
  });
  var vz = 0;
  var vo = 0;
  var ve = 0;
  var vt = 0;
  var vs = 0;
  var vf = 0;
  var vi = 0;
  var vx = 0;
  var vv = 0;
  ws.on("message", data => {
    if (tre) {
      tre = false;
      if (wss.clients.size == 1) {
        ws.send("win");
      }
    }
    if (data.startsWith("vote:") && !ws.vote) {
      ws.vote = true;
      if (data == "vote:3") {
        ve++;
        console.log("3");
      }
      if (data == "vote:2") {
        vt++;
        console.log("2");
      }
      if (data == "vote:1") {
        vo++;
        console.log("1");
      }
      if (data == "vote:0") {
        vz++;
        console.log("0");
      }
      if (data == "vote:3") {
        vf++;
      }
      if (data == "vote:5") {
        vi++;
      }
      if (data == "vote:6") {
        vx++;
      }
      if (data == "vote:7") {
        vv++;
      }
      console.log(vs);
      console.log(wss.clients.size);
      if (vs == wss.clients.size) {
        if (vz > vo && vz > vt && vz > ve) {
          wss.clients.forEach(client => {
            client.send("death:0");
          });
          wss.clients.forEach(client => {
            if (imp == 0) {
              wss.clients.forEach(client => {
                if (client.id != imp) {
                  client.send("win");
                }
              });
            }
            if (client.id == 0) {
              client.terminate();
            }
          });
        } else if (ve > vo && ve > vt && ve > vz) {
          wss.clients.forEach(client => {
            client.send("death:3");
          });
          wss.clients.forEach(client => {
            if (imp == 3) {
              wss.clients.forEach(client => {
                if (client.id != imp) {
                  client.send("win");
                }
              });
            }
            if (client.id == 3) {
              client.terminate();
            }
          });
        } else if (vo > vz && vo > vt && vo > ve) {
          wss.clients.forEach(client => {
            client.send("death:1");
          });
          wss.clients.forEach(client => {
            if (imp == 1) {
              wss.clients.forEach(client => {
                if (client.id != imp) {
                  client.send("win");
                }
              });
            }
            if (client.id == 1) {
              client.terminate();
            }
          });
        } else if (vt > vo && vz > vz && vz > ve) {
          wss.clients.forEach(client => {
            client.send("death:2");
          });
          wss.clients.forEach(client => {
            if (imp == 2) {
              wss.clients.forEach(client => {
                if (client.id != imp) {
                  client.send("win");
                }
              });
            }
            if (client.id == 2) {
              client.terminate();
            }
          });
        }
        wss.clients.forEach(client => {
          client.send("votes");
        });
      }
    }
    if (data == "death:" + imp && ws.id != imp) {
      wss.clients.forEach(client => {
        if (client.id != imp) {
          client.send("win");
        }
      });
    }
    if (data.startsWith("death:")) {
      const g = false;
      wss.clients.forEach(client => {
        if (client.id == data.replace("death:", "") && !client.dead) {
          g = true;
        }
      });
      if (g) {
        wss.clients.forEach(client => {
          client.send(data);
          if (client.id == data.replace("death:", "") && !client.dead) {
            client.dead = true;
            client.terminate();
          }
        });
      }
      tre = true;
    }
    if (data.startsWith("pos:")) {
      wss.clients.forEach(client => {
        client.send(data + ";" + ws.id);
      });
    }
    if (data.startsWith("chat:")) {
      wss.clients.forEach(client => {
        client.send("chat:" + ws.id + ": " + data.replace("chat:", ""));
      });
    }
    if (data == "rep") {
      wss.clients.forEach(client => {
        client.vote = false;
        client.send(data);
      });
    }
  });
  ws.on("close", () => {
    id.splice(ws.id, 1);
    clr = "";
    clr += clrs[0];
    for (let tre = 1; tre < wss.clients.size; tre++) {
      clr += ",";
      clr += clrs[tre];
    }
    wss.clients.forEach(client => {
      client.send("clr:" + clr);
      if (client.id > ws.id) {
        client.id--;
        client.send("id:" + client.id);
      }
      client.send("ips:" + id.join(","));
      if (imp > ws.id) imp--;
      client.send("imp:" + imp);
    });
    for (tre = 0; tre < id.length; tre++) {
      if (id[tre] > ws.id) {
        id[tre]--;
      }
    }
  });
});
app.listen(process.env.PORT);
