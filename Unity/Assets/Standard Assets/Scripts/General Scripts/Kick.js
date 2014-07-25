#pragma strict

var vert : float;
var strength : float;
var startPos : Vector3;
var direct : Vector3;
var glass : GlassGUIscript;
var correct : soundCor;

var kickType : int;

private var gone : boolean = false;
private var startRot : Quaternion;

function Start () {
	kickType = 5;
	startPos = transform.position;
	startRot = transform.rotation;
}

function Update () {

	if(transform.position.y<-5||(rigidbody.velocity.x>-1 && gone)){
		glass.setState(4);
	}
	
}

function OnTriggerEnter(collision : Collider) {
	if(collision.tag =="Player"&&glass.state==1){
		switch (kickType) {
			case 1:
				leftKick();
				break;
			case 2:
				rightKick();
				break;
			case 3:
				forKick();
				break;
			case 4:
				backKick();
				break;
			case 5:
				goodKick();
				break;
		}
		glass.state=2;
	}
		
}

function leftKick(){
	direct = Vector3(-.7,1.2,.3);
	rigidbody.AddForce(direct*strength);
	correct.sideSound(.3,0);
	glass.showImage = glass.arrows[0];
}

function rightKick(){
	direct = Vector3(-.6,.8,-.6);
	rigidbody.AddForce(direct*strength);
	correct.sideSound(-.6,-1);
	glass.showImage = glass.arrows[1];
}

function forKick(){
	direct = Vector3(-.4,1.7,0);
	rigidbody.AddForce(direct*strength);
	correct.footForward(1);
	glass.showImage = glass.arrows[2];
}

function backKick(){
	direct = Vector3(-1.0,.6,0);
	rigidbody.AddForce(direct*strength);
	correct.footForward(-1);
	glass.showImage = glass.arrows[3];
}
function goodKick(){
	direct = Vector3(-1.0,1.2,0);
	rigidbody.AddForce(direct*strength);
	correct.goodKick();
	glass.showImage = glass.arrows[4];
}

function reset(){
	transform.position = startPos;
	rigidbody.velocity = Vector3.zero;
	transform.rotation = startRot;
	gone = false;
	kickType = 5;	
}
	

