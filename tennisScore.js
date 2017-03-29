
var gamePointA = 0;
var setPointA = 0;
var counterA = 0;

var deuceCounterA = 0;
var deuceCounterB = 0;

var gamePointB = 0;
var setPointB = 0;
var counterB = 0;

//===============New Game Function =========================
function newGameBegin()
	{
		document.getElementById("gamePointForADisplay")
		.innerHTML = 0;
		
		document.getElementById("gamePointForBDisplay")
		.innerHTML = 0;
			
		deuceCounterA = 0;
		deuceCounterB = 0;
		counterA = 0;
		counterB = 0;
		gamePointA = 0;
		gamePointB = 0;		
	}
	
//========Display Function for A ================================

function display15ForPlayerA()
	{
	document.getElementById("gamePointForADisplay").
	innerHTML = 15;
	}
	
function display30ForPlayerA()
	{
	document.getElementById("gamePointForADisplay").
	innerHTML = 30;
	}

function display40ForPlayerA()
	{
	document.getElementById("gamePointForADisplay").
	innerHTML = 40;
	}

function displayADForPlayerA()
	{
	document.getElementById("gamePointForADisplay").
	innerHTML = "ADVANTAGE";
	}
	
//========Display Function for B ================================

function display15ForPlayerB()
	{
	document.getElementById("gamePointForBDisplay").
	innerHTML = 15;
	}
	
function display30ForPlayerB()
	{
	document.getElementById("gamePointForBDisplay").
	innerHTML = 30;
	}

function display40ForPlayerB()
	{
	document.getElementById("gamePointForBDisplay").
	innerHTML = 40;
	}

function displayADForPlayerB()
	{
	document.getElementById("gamePointForBDisplay").
	innerHTML = "ADVANTAGE";
	}
//========================================

//==========Section for player A==========
function gamePointForA()
{
	counterA = counterA + 1;
	
	if ((deuceCounterA==0)&&(counterA==1))
		{
		display15ForPlayerA();	
		}
		
	else if ((deuceCounterA==0)&&(counterA==2))
		{
		display30ForPlayerA();
		}
		
	else if ((deuceCounterA==0)&&(counterA==3))
		{
		display40ForPlayerA();
		deuceCounterA = 1;
		}
	
	else if ((deuceCounterA==1)&&(counterA==4)&&(counterB<3))
		{
		setPointA++;
		document.getElementById("set1PointForADisplay").
		innerHTML = setPointA;
		newGameBegin();
		}
		
	else if((deuceCounterA==1)&&(counterA>=4)&&((counterA-counterB)==1))			
		{
			displayADForPlayerA();
		}
		
	else if((deuceCounterA==1)&&(counterA>=4)&&((counterA-counterB)==2))
		{
		setPointA++;
		document.getElementById("set1PointForADisplay").
		innerHTML = setPointA;
		newGameBegin();			
		}
}

//==========Section for player B==========
function gamePointForB()
	{

	counterB = counterB + 1;

	if ((deuceCounterB==0)&&(counterB==1))
		{
		display15ForPlayerB();	
		}
		
	else if ((deuceCounterB==0)&&(counterB==2))
		{
		display30ForPlayerB();
		}
		
	else if ((deuceCounterB==0)&&(counterB==3))
		{
		display40ForPlayerB();
		deuceCounterB = 1;
		}
		
	else if ((deuceCounterB==1)&&(counterB==4))
		{
		setPointB++;
		document.getElementById("set1PointForBDisplay").
		innerHTML = setPointB;
		newGameBegin();
		}
		
	else if((deuceCounterB==1)&&(counterB>=4)&&((counterB-counterA)==1))
		{
			displayADForPlayerB();
		}
		
	else if((deuceCounterB==1)&&(counterB>=4)&&((counterB-counterA)==2))
		{
		setPointB++;
		document.getElementById("set1PointForBDisplay").
		innerHTML = setPointB;
		newGameBegin();			
		}
	}
