#pragma strict

var leftRight : AudioSource;
var forBack : AudioSource;
var rightOn : AudioSource;
private var forwarding : boolean = false;
private var startPos: Vector3;
private var dopplerS : Vector3;
private var dopplerE : Vector3;
private var percent : float = .1;
private var secondary : float = 0;

function Start () {
	startPos = transform.localPosition;
}

function Update () {
	if(forwarding){
		transform.localPosition = Vector3.Lerp(dopplerS,dopplerE,percent);
		percent += Time.deltaTime;
	}
	if(percent>=1)
		forwarding=false;
	if(secondary!=0){
		if(!audio.isPlaying){
			footForward(secondary);
			secondary =0;
		}
	}

}

function sideSound(magn : float, placement : float){
	transform.localPosition = startPos;
	if(magn<0){
		transform.Translate(Vector3(0,0,-1));
	}
	else if(magn>0){
		transform.Translate(Vector3(0,0,1));
	}
	leftRight.volume = Mathf.Abs(magn);
	leftRight.Play();
	secondary = placement;
}

function footForward(magn : float){
	percent =0;
	transform.localPosition = startPos;
	if(magn>0){
		dopplerS = startPos + Vector3(0,0,5);
		dopplerE = startPos;
		transform.localPosition=dopplerS;
	}
	else if(magn<0){
		dopplerE = startPos + Vector3(0,0,-5);
		dopplerS = startPos;
		transform.localPosition = dopplerS;
	}
	forBack.volume=1;
	forBack.Play();	
	forwarding=true;
}
function goodKick(){
	rightOn.Play();
}