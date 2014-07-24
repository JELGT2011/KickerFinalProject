#pragma strict

var leftRight : AudioSource;
var forBack : AudioSource;
var rightOn : AudioSource;
private var forwarding : boolean = false;
private var startPos: Vector3;
private var dopplerS : Vector3;
private var dopplerE : Vector3;
private var percent : float = .1;

function Start () {
	startPos = transform.position;
}

function Update () {
	if(forwarding){
		transform.position = Vector3.Lerp(dopplerS,dopplerE,percent);
		percent += .1;
	}
	//if(transform.position ==startPos)
		//forwarding=false;

}

function sideSound(magn : float){
	transform.position = startPos;
	if(magn<0){
		transform.Translate(Vector3(0,0,-1));
	}
	else if(magn>0){
		transform.Translate(Vector3(0,0,1));
	}
	leftRight.volume = Mathf.Abs(magn);
	leftRight.Play();
}

function footForward(magn : float){
	transform.position = startPos;
	if(magn<1.2){
		dopplerS = startPos + Vector3(5,0,0);
		dopplerE = startPos;
		transform.position=dopplerS;
	}
	else if(magn>1.2){
		dopplerE = startPos + Vector3(-5,0,0);
		dopplerS = startPos;
		transform.position = dopplerS;
	}
	forBack.volume=1;
	forBack.Play();	
	forwarding=true;
}