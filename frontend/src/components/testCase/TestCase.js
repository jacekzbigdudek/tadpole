

const TestCase = () => {
  <div className="TestCase">
    <Pre-conditions>
      <Web driver actions> Monadic combinators?
    <Post-conditions>

  </div>
};

export default TestCase;


/* 
About our schemas:
I would add pre- and post-conditions to test cases.


/*
 	"Test_case": {
            "type": "object",
	    "Properties": {
                "uuid": "string",
		"title": "string",
		"steps": {
		    "type": "array",
		    "items": {"$ref": "#/definitions/Step/"},
		    "default": []
		},
		"pass_cond": "string"
	    }
	},
*/

/*
	"Step": {
            "type": "object",
	    "Properties": {
		"uuid": "string",
		"title": "string",
		"action": "string",
		"parameter": {
                    "type": "array",
		    "items": {"type": "string"},
		    "default": []
		},
		"pass_cond": "string"
	    }
*/

/*
test suite:
  uuid,
  name,
  description,
  keywords
  The meat, for now, will consist of an array of test cases. 
  * But I want to bring up the possibility of formulating test suites that have a more complex program flow
   than just sequences of test cases being run.


test case:
  uuid, 
  description, 
  keywords
  array of pre-conditions
  array of test-steps
  array of post-conditions
  test result: pass or fail or error conditions.

test step:
  uuid? 
  name?
  description?
  keywords?
    None of these seem appropriate at this atomic level.
    Test steps will be self-describing based on the web driver actions that comprise them.
  
  Selenium web driver action & action arguments
*/
  
