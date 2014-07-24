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
	startPos = transform.position;
	startRot = transform.rotation;
}

function Update () {

	if(transform.position.y<-5||(rigidbody.velocity.x>-1 && gone)){
		glass.setState(4);
	}
	if(Input.GetKey("1")&&!gone){
		kickType = 1;
		// leftKick();
		gone=true;
	}
	if(Input.GetKey("2")&&!gone){
		kickType = 2;
		// rightKick();
		gone=true;
	}
	if(Input.GetKey("3")&&!gone){
		kickType = 3;
		// forKick();
		gone=true;
	}
	if(Input.GetKey("4")&&!gone){
		kickType = 4;
		// backKick();
		gone=true;
	}
	if(Input.GetKey("5")&&!gone){
		kickType = 5;
		// goodKick();
		gone=true;
	}
}

function OnTriggerEnter(collision : Collider) {
	if(collision.tag =="Player"){
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
	}
		
}

function leftKick(){
	direct = Vector3(-.7,1.2,.3);
	rigidbody.AddForce(direct*strength);
	correct.sideSound(.3,0);
}

function rightKick(){
	direct = Vector3(-.6,.8,-.6);
	rigidbody.AddForce(direct*strength);
	correct.sideSound(-.6,-1);
}

function forKick(){
	direct = Vector3(-.4,1.7,0);
	rigidbody.AddForce(direct*strength);
	correct.footForward(1);
}

function backKick(){
	direct = Vector3(-1.0,.6,0);
	rigidbody.AddForce(direct*strength);
	correct.footForward(-1);
}
function goodKick(){
	direct = Vector3(-1.0,1.2,0);
	rigidbody.AddForce(direct*strength);
	correct.goodKick();
}

function reset(){
	transform.position = startPos;
	rigidbody.velocity = Vector3.zero;
	transform.rotation = startRot;
	gone = false;	
}
	

