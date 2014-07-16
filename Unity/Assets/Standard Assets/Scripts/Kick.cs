using UnityEngine;
using System.Collections;

public class Kick : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider col){
		if(col.tag=="Player"){
			Vector3 direct = col.transform.forward;
			direct.y = 1f;
			rigidbody.AddForce(direct*700);
			print (direct);
		}

	}
}
