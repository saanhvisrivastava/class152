AFRAME.registerComponent('moveboxonclick',{

    schema:{
        moveX:{type:'number',default:1}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveX=this.data.moveX+0.01
        })
       
         var pos=this.el.getAttribute('position');
         pos.X=this.data.moveX
         this.el.setAttribute('position',{x:pos.X,y:pos.Y,z:pos.Z})

    }
})