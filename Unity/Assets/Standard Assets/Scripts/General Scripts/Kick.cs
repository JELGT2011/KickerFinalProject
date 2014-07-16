using UnityEngine;
using System.Collections;

public class Kick : MonoBehaviour {

	public float vert;
	public float strength;

	private Vector3 startPos;
	// Use this for initialization
	void Start () {
		startPos = transform.position;
	}
	
	// Update is called once per frame
	void Update () {
		if(transform.position.y<-5){
			transform.position = startPos;
			rigidbody.velocity = Vector3.zero;
		}
	}

	void OnTriggerEnter(Collider col){
		if(col.tag=="Player"){
			Vector3 direct = col.transform.forward;
			direct = direct * strength;
			direct.y = vert*strength;
			rigidbody.AddForce(direct);
			print (direct);
		}

	}
}
