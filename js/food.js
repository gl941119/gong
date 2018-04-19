


;
(function(){
	function Food(option){
		option = option || {};
		this.width = option.width||20;
		this.height=option.height||20;
		this.bgColor=option.bgColor||"blue";
		this.x = option.x ||0;
		this.y = option.y ||0;
	}
	Food.prototype ={
		render:function(target){
			var div = document.createElement("div");
			target.appendChild(div);

			div.style.width = this.width+"px";
			div.style.height = this.height+"px";
			div.style.backgroundColor = this.bgColor;
			this.x = parseInt(Math.random()*target.offsetWidth/this.width);
			this.y = parseInt(Math.random()*target.offsetHeight/this.height);
			div.style.top = this.x*this.width+"px";
			div.style.left = this.y*this.height+"px";
			div.style.position = "absulute";
		}
	} 
})();