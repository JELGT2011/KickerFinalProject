#pragma strict

var vert : float;
var strength : float;
var startPos : Vector3;
var direct : Vector3;

function Start () {
	startPos = transform.position;
}

function Update () {
	if(transform.position.y<-5){
		transform.position = startPos;
		rigidbody.velocity = Vector3.zero;
	}
}

function OnTriggerEnter( col : Collider ){
	if(col.tag=="Player"){
		direct = col.transform.forward;
		direct = direct * strength;
		direct.y = vert*strength;
		rigidbody.AddForce(direct);
	}
}