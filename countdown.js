//设置全局变量
 
var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=786;
window.onload=function () {
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");

	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
    render(context);
}
function  render(cxt) {
	var hours=12;
	var minutes=34;
	var seconds=56;


	renderDigit(0, 0, parseInt(hours/10), cxt);
}
function renderDigit(x,y,num,cxt)
{
	cxt.fillStyle="blue";
	for(var i=0;i<digit[num].length;i++)
	{
		for(var j=0;j<digit[num][i].length;j++)
		{
			if(digit[num][i][j]==1)
			{
				cxt.beginPath();
				cxt.arc();
				cxt.closePath();
				cxt.fill();
			}
		}

	}
}
