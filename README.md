
<!--#echo json="package.json" key="name" underline="=" -->
now-yyyymmdd-hhmmss
===================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Return current date as string in format `yyyyMMdd-HHmmss`.
<!--/#echo -->



API
---

This module exports one function which holds another function:

### nowFmt()

<!--#echo json="package.json" key="description" -->
Return current date as string in format `yyyyMMdd-HHmmss`.
<!--/#echo -->


### nowFmt.custom(opt)

Where `opt` is a mandatory options object which holds these mandatory keys:

* `sep`: String that should be put between date and time,
  instead of the hyphen-minus.





<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
