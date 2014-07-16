#pragma strict

var windSound:AudioSource;

function Start () {
  transform.position = Vector3(Random.value*10 , 0, Random.value*10);
  windSound.Play();
}

function Update () {

}
