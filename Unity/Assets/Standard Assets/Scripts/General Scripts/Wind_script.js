#pragma strict

var windSound:AudioSource;

var player:GameObject;

public static var windx:float;

public static var windy:float;

function Start () {
	windx = Random.value*10-5;
	windy = Random.value*10-5;
  	transform.localPosition = Vector3(windx, 0, windy);
  	transform.localRotation = Quaternion.identity;
  	windSound.Play();
}

function Update () {
	transform.localRotation = Quaternion.identity;
}
