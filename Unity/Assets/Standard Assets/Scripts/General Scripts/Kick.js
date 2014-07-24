#pragma strict

var vert : float;
var strength : float;
var startPos : Vector3;
var direct : Vector3;
var glass : GlassGUIscript;
private var gone : boolean = false;
private var startRot : Quaternion;

function Start () {
	startPos = transform.position;
	startRot = transform.rotation;
}

function Update () {

	if(transform.position.y<-5||(rigidbody.velocity.x>-1 && gone)){
		glass.setState(4);
	}
	if(Input.GetKey("1")&&!gone){
		leftKick();
		gone=true;
	}
	if(Input.GetKey("2")&&!gone){
		rightKick();
		gone=true;
	}
	if(Input.GetKey("3")&&!gone){
		forKick();
		gone=true;
	}
	if(Input.GetKey("4")&&!gone){
		backKick();
		gone=true;
	}
	if(Input.GetKey("5")&&!gone){
		goodKick();
		gone=true;
	}
	
}

function leftKick(){
	direct = Vector3(-.7,1.2,.3);
	rigidbody.AddForce(direct*strength);
}

function rightKick(){
	direct = Vector3(-.6,.8,-.6);
	rigidbody.AddForce(direct*strength);
}

function forKick(){
	direct = Vector3(-.4,1.7,0);
	rigidbody.AddForce(direct*strength);
}

function backKick(){
	direct = Vector3(-1.0,.6,0);
	rigidbody.AddForce(direct*strength);
}
function goodKick(){
	direct = Vector3(-1.0,1.2,0);
	rigidbody.AddForce(direct*strength);
}

function reset(){
	transform.position = startPos;
	rigidbody.velocity = Vector3.zero;
	transform.rotation = startRot;
	gone = false;
}
	

